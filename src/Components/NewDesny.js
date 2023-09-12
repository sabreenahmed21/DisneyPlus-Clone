import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../StyledComponents/Recommend.css'
import { useSelector } from "react-redux";
import { selectNewDisney } from "./Slices/MovieSlice";


function NewDesny() {
  const moviess = useSelector(selectNewDisney);
  return (
    <Container>
      <div className='main-content'>
      <h4>New to Disney+</h4>
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

export default NewDesny
