import * as React from 'react';
import Slider from "react-slick";
import './Carousel.css';
import PipeShot from "../../../assets/images/logo/pipe_shot.png";
import CharacterOne from "../../../assets/images/characters/1.png";
import CharacterTwo from "../../../assets/images/characters/2.png";
import CharacterThree from "../../../assets/images/characters/3.png";
import CharacterFour from "../../../assets/images/characters/4.png";
import CharacterFive from "../../../assets/images/characters/5.png";
import CharacterSix from "../../../assets/images/characters/6.png";
import CharacterSeven from "../../../assets/images/characters/7.png";
import CharacterEight from "../../../assets/images/characters/8.png";
import CharacterNine from "../../../assets/images/characters/9.png";
import CharacterTen from "../../../assets/images/characters/10.png";
import CharacterEleven from "../../../assets/images/characters/11.png";
import CharacterTwelve from "../../../assets/images/characters/12.png";

class Carousel extends React.Component {
  render(){
    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      variableWidth: true,
      arrows: false
    };
    return(
      <Slider className="bubby" {...settings}>
        <div>
          <img src={CharacterOne} />
          <p>Radio Skull</p>
        </div>
        <div>
          <img src={CharacterTwo} />
          <p></p>
        </div>
        <div>
          <img src={CharacterThree} />
          <p></p>
        </div>
        <div>
          <img src={CharacterFour} />
        </div>
        <div>
          <img src={CharacterFive} />
          <p></p>
        </div>
        <div>
          <img src={CharacterSix} />
          <p></p>
        </div>
        <div>
          <img src={CharacterSeven} />
          <p></p>
        </div>
        <div>
          <img src={CharacterEight} />
          <p></p>
        </div>
        <div>
          <img src={CharacterNine} />
          <p></p>
        </div>
        <div>
          <img src={CharacterTen} />
          <p></p>
        </div>
        <div>
          <img src={CharacterEleven} />
          <p></p>
        </div>
        <div>
          <img src={CharacterTwelve} />
          <p></p>
        </div>
      </Slider>
    );
  }
}
export default Carousel;
