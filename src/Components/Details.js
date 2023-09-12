import React from "react";
import { Container } from "react-bootstrap";
import "../StyledComponents/Details.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import db from "../Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

function Details() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const movieCollectionRef = collection(db, "movies");

  useEffect(() => {
    const movieDocRef = doc(movieCollectionRef, id);
    getDoc(movieDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          setDetailData(docSnapshot.data());
        } else {
          console.log("No such document in Firebase 🔥");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  }, [id]);
  return (
    <Container>
      <div className="main_content_details">
        <div className="background">
          <img alt={detailData.title} src={detailData.backgroundImg} />
        </div>
        <div className="imgTitle">
          <img alt={detailData.title} src={detailData.titleImg} />
        </div>
        <div className="content">
          <div className="butt">
            <button className="play">
              <FontAwesomeIcon icon={faPlay} />
              <span>play</span>
            </button>
            <button className="trailer">
              <FontAwesomeIcon icon={faPlay} />
              <span>trailer</span>
            </button>
            <div className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="groups">
              <FontAwesomeIcon icon={faUsers} />
            </div>
          </div>
          <div className="subtitle">{detailData.subTitle}</div>
          <div className="description">{detailData.description}</div>
        </div>
      </div>
    </Container>
  );
}

export default Details;
