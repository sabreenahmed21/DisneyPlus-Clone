import React from "react";
import { useEffect } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.svg";
import tv from "../images/series-icon.svg";
import movie from "../images/movie-icon.svg";
import "../StyledComponents/Login.css";
import { auth, googleProvider } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "./Slices/UserSlice";
import { setUserLoginDetails, setSignOutState } from "./Slices/UserSlice";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector((state) => state.user.photo);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const logInwithgoogle = () => {
    if (!userName) {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          setUser(result.user);
          console.log(result);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      signOut(auth).then(() => {
        dispatch(setSignOutState());
        navigate("/");
      });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, []);

  return (
    <Navbar  className="nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="img" className="nav_logo" />
        </Navbar.Brand>

        {!userName ? (
          <button onClick={logInwithgoogle} className="butn">
            Login
          </button>
        ) : (
          <>
                <Nav className="me-auto navbar-nav">
                  <Nav.Link href="/home" className="nav-link">
                    <FontAwesomeIcon icon={faHouse} className="nav_icon" />
                    <span>HOME</span>
                  </Nav.Link>
                  <Nav.Link href="/search" className="nav-link">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="nav_icon"
                    />
                    <span>SEARCH</span>
                  </Nav.Link>
                  <Nav.Link href="/movie" className="nav-link">
                    <img src={movie} alt="img" className="nav_img" />
                    <span>MOVIES</span>
                  </Nav.Link>
                  <Nav.Link href="/series" className="nav-link">
                    <img src={tv} alt="img" className="nav_img" />
                    <span>SERIES</span>
                  </Nav.Link>
                  <Nav.Link href="/watchlist" className="nav-link">
                    <FontAwesomeIcon icon={faPlus} className="nav_icon" />
                    <span>WATCHLIST</span>
                  </Nav.Link>
                </Nav>
              <div id="img_sign">
                <img src={userPhoto} alt={userName} id="img_mail" />
                <div id="btn_signout">
                  <button onClick={logInwithgoogle} className="butn">
                    sign out
                  </button>
                </div>
              </div>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
