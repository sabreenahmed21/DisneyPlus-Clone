import React from 'react'
import { Container } from 'react-bootstrap'
import '../StyledComponents/Viewer.css'
import disney from '../images/viewers-disney.png'
import marvel from '../images/viewers-marvel.png'
import nation from '../images/viewers-national.png'
import pixar from '../images/viewers-pixar.png'
import starwars from '../images/viewers-starwars.png'
import vDisney from '../videos/1564674844-disney.mp4'
import vmarvel from '../videos/1564676115-marvel.mp4'
import vpixar from '../videos/1564676714-pixar.mp4'
import vstarwars from '../videos/1608229455-star-wars.mp4'
import vnation from '../videos/1564676296-national-geographic.mp4'


function Viewers() {
  return (
    <>
    <Container >
      <div className='main-content_view'>
        <div className='box'>
          <img src={disney} alt='img' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={vDisney} type="video/mp4" />
          </video>
        </div>
        <div className='box'>
          <img src={marvel} alt='' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={vmarvel} type="video/mp4" />
          </video>
        </div>
        <div className='box'>
          <img src={nation} alt='' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={vnation} type="video/mp4" />
          </video>
        </div>
        <div className='box'>
          <img src={pixar} alt='' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={vpixar} type="video/mp4" />
          </video>
        </div>
        <div  className='box'>
          <img src={starwars} alt='' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={vstarwars} type="video/mp4" />
          </video>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Viewers
