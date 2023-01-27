import React from 'react';
import './Carousel.css'
import vehicle from '../../img/vehicles.png';
import person from '../../img/person.png';
import movies from '../../img/movies.png';
import planet from '../../img/planet.png';
import spicies from '../../img/spicies.png';
import starship from '../../img/starship.png';
import { CarouselItem } from '../CarouselItem/carouselItem';

function Carousel() {
  return (
  <div className="carousel">
    <div>
      <button className="left-carousel-btn">&#5129;</button>
    </div>
    <div className='scene'>
      <CarouselItem src={vehicle} category="vehicles"/>
      <CarouselItem src={person} category="person"/>
      <CarouselItem src={movies} category="movies"/>
      <CarouselItem src={planet} category="planet"/>
      <CarouselItem src={spicies} category="spicies"/>
      <CarouselItem src={starship} category="starship"/>
    </div>
    <div>
      <button className="right-carousel-btn">&#5129;</button>
    </div>
  </div>
  );
}

export default Carousel;