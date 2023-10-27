import React from "react";
import "./ImageReel.css"
import Slider from "react-slick";
import Jeep_Cherokee from "./Jeep_Cherokee.jpg"
import Buick_Encore from "./Buick_Encore.jpg"
import Hyundai_Elantra from "./Hyundai_Elantra.jpg"
import Honda_Civic from "./Honda_Civic.jpg"
import BMW_328 from "./BMW_328.jpg"
import Nissan_Altima from "./Nissan_Altima.jpg"


const carImages = [
  { src: Jeep_Cherokee, alt: "Jeep Cherokee" },
  { src: Buick_Encore, alt: "Buick Encore" },
  { src: Hyundai_Elantra, alt: "Hyundai Elantra" },
  { src: Honda_Civic, alt: "Honda Civic" },
  { src: BMW_328, alt: "BMW_328" },
  {src: Nissan_Altima, alt: "Nissan"}
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function ImageReel({}) {
  shuffleArray(carImages); 

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  
  return (
    <div className="img_reel_container">
      <Slider {...settings}>         
      <div>  
           <img src={Jeep_Cherokee} alt="Jeep" />
        </div>
        <div>
          <img src={Hyundai_Elantra} alt="Hyundai" />
        </div>
        <div>
          <img src={Honda_Civic} alt="Honda" />
        </div>    
        <div>
          <img src={BMW_328} alt="BMW" />
        </div>  
        <div>
          <img src={Nissan_Altima} alt="Nissan" />
        </div>
      </Slider>

      </div>
  );
}

export default ImageReel;
