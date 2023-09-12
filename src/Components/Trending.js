import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../StyledComponents/Recommend.css'
import { useSelector } from "react-redux";
import { selectTrending } from "./Slices/MovieSlice";


function Trending() {
  const moviess = useSelector(selectTrending);
  return (
    <Container>
      <div className='main-content'>
      <h4>Latest & Trending</h4>
      <div className='boxes_recommend'>
      {moviess &&
          moviess.map((movie, key) => (
        <div className='box_recommend' key={key}>
          <Link to={`/detail/` + movie.id}>
            <img src={movie.cardImg} alt={movie.title} />
          </Link>
        </div>
        ))}
      </div>
      </div>
    </Container>
  )
}

export default Trending