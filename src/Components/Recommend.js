import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../StyledComponents/Recommend.css'
import { useSelector } from "react-redux";
import { selectRecommend } from "./Slices/MovieSlice";


function Recommend() {
  const moviess = useSelector(selectRecommend);
  return (
    <Container>
      <div className='main-content'>
      <h4>Recommended for You</h4>
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

export default Recommend