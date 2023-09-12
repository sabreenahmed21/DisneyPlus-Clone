/* eslint-disable default-case */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import Viewers from "./Viewers";
import Recommend from "./Recommend";
import NewDesny from "./NewDesny";
import Originals from "./Originals";
import Trending from "./Trending";
import "../StyledComponents/Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "./Slices/MovieSlice";
import { selectUserName } from "./Slices/UserSlice";
import { collection,  getDocs } from "firebase/firestore";
import db from "../Firebase";
import Footer from "./Footer";

export function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviecollection = collection(db, "movies");
        const snap = await getDocs(moviecollection);

        const movieData = {
          recommend: [],
          new: [],
          original: [],
          trending: [],
        };

        snap.forEach((doc) => {
          const movie = { id: doc.id, ...doc.data() };

          switch (movie.type) {
            case "recommend":
              movieData.recommend.push(movie);
              break;
            case "new":
              movieData.new.push(movie);
              break;
            case "original":
              movieData.original.push(movie);
              break;
            case "trending":
              movieData.trending.push(movie);
              break;
          }
        });

        dispatch(setMovies(movieData));
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    if (userName) {
      fetchData();
    }
  }, [userName, dispatch]);

  return (
    <main>
      <Container>
        <HomeSlider />
        <Viewers />
        <Recommend />
        <NewDesny />
        <Originals />
        <Trending />
      </Container>
      <Footer/>
    </main>
  );
}
export default Home;
/* 
//*Another Way Using onsnapshot
//useEffect(() => {
   // let recommends = [];
  // let newDisneys = [];
  // let originals = [];
  // let trending = [];
  //   const moviecollection = collection(db, "movies");
  //   onSnapshot(moviecollection, (snap) => {
  //     snap.forEach((doc) => {
  //       switch (doc.data().type) {
  //         case "recommend":
  //           recommends = [...recommends, { id: doc.id, ...doc.data() }];
  //           break;
  //         case "new":
  //           newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
  //           console.log(newDisneys);
  //           break;
  //         case "original":
  //           originals = [...originals, { id: doc.id, ...doc.data() }];
  //           break;
  //         case "trending":
  //           trending = [...trending, { id: doc.id, ...doc.data() }];
  //           break;
  //       }
  //       dispatch(
  //         setMovies({
  //           recommend: recommends,
  //           new: newDisneys,
  //           original: originals,
  //           trending: trending,
  //         })
  //       );
  //     });
  //   }, (error) => {
  //     console.error("Error fetching data from Firestore:", error)
  //   });
  // }, [userName  ]);
*/