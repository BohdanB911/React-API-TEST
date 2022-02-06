import Header from '../Header/Header';
import ItemList from '../Item-list/Item-list';
import PersonDetails from '../Person-details/Person-details';
import PlanetDetails from '../Planet-details/Planet-details';
import RandomPlanet from '../Random-planet/RandomPlanet';
import StarshipDetails from '../Starship-details/Starship-details'


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <RandomPlanet/>

      {/* <div className="row mb2">
          <div className="col-md-6">
              <ItemList/>
          </div>
          <div className="col-md-6">
              <PersonDetails/>
          </div>
      </div> */}
      
    </div>
  );
}

export default App;
