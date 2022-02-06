import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import '../Random-planet/RandomPlanet.css';



export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
       planet:{}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) =>{
       this.setState({planet})
    }

    updatePlanet () {
        const id = Math.floor(Math.random()*20);
          this.swapiService.getPlanet(id)
          .then(this.onPlanetLoaded)
    };

   render() {
       const {planet: {id,name,population,rotationPeriod,diameter}} = this.state;

    return(
        <div className="random-planet">
          <div className="img-planet-wrap">
              <img 
              className="planet-img"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt="" 
              />
          </div>
           <div className='random-planet_info'>
               <h4>{name}</h4>
               <ul className="planet-info_list">
                    <li className="planet-info_list-item">
                       <span className="">Population </span>
                       <span>{population}</span>
                    </li>
                    <li className="planet-info_list-item">
                       <span className="">Rotation Period </span>
                       <span>{rotationPeriod}</span>
                    </li>
                    <li className="planet-info_list-item">
                       <span className="">Diameter </span>
                       <span>{diameter}</span>
                    </li>
               </ul>
           </div>
        </div>
    )
   } 
}
    



