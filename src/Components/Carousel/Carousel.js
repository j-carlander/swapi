import './Carousel.css'
import vehicle from '../../img/vehicles.png';
import person from '../../img/person.png';
import movies from '../../img/movies.png';
import planet from '../../img/planet.png';
import spicies from '../../img/spicies.png';
import starship from '../../img/starship.png';

function Carousel() {
  return (
    
    <div className="scene">
      <div className="carousel">
        <div>
          <button className="left-carousel-btn">&#5129;
</button>
        </div>
        <figure className="vehicles-img">
          <img src={vehicle} alt="" />
        </figure>
        <figure className='person-img'>
          <img src={person} alt="" />
        </figure>
        <figure className='movies-img'>
          <img src={movies} alt="" />
        </figure>
        <figure className='planet-img'>
          <img src={planet} alt="" />
        </figure>
        <figure className='spicies-img'>
          <img src={spicies} alt="" />
        </figure>
        <figure className='starship-img'>
          <img src={starship} alt="" />
        </figure>
        <div>
          <button className="right-carousel-btn">&#5129;
</button>
        </div>
      </div>
    </div>

  );
}

export default Carousel;