import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../StyledComponents/Recommend.css'
import { useSelector } from "react-redux";
import { selectOriginal } from "./Slices/MovieSlice";


function Originals() {
  const movies = useSelector(selectOriginal);
  return (
    <Container>
      <div className='main-content'>
      <h4>Originals</h4>
      <div className='boxes_recommend'>
      {movies &&
          movies.map((movie, key) => (
        <div className='box_recommend'  key={key}>
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

export default Originals

