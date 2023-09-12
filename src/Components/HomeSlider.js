import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import badag from "../images/slider-badag.jpg";
import badging from "../images/slider-badging.jpg";
import scale from "../images/slider-scale.jpg";
import scales from "../images/slider-scales.jpg";
import "../StyledComponents/HomeSlider.css";

function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slick-slider">
      <div className="slider_img">
        <Link>
          <img src={badag} alt="img" />
        </Link>
      </div>
      <div className="slider_img">
        <Link>
          <img src={badging} alt="img" />
        </Link>
      </div>
      <div className="slider_img">
        <Link>
          <img src={scale} alt="img" />
        </Link>
      </div>
      <div className="slider_img">
        <Link>
          <img src={scales} alt="img" />
        </Link>
      </div>
    </Slider>
  );
}

export default HomeSlider;
