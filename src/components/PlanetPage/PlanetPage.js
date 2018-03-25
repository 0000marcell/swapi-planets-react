import React, { Component} from 'react'; 
import SWAPI from '../../swapi/swapi';
import PlanetView from '../PlanetView/PlanetView'
import './PlanetPage.css';

class PlanetPage extends Component { 
  constructor(props){
    super(props);
    this.swapi = new SWAPI();
    this.planetIds = [];
    this.state = {
      planetData: {
        name: null,
        population: null,
        climate: null,
        terrain: null,
        films: []
      },
      dataState: 'pending'
    } 
    this.nextPlanet = this.nextPlanet.bind(this);
  }

  async componentDidMount(){
    let planetCount = await this.swapi.getPlanetCount();
    this.planetIds = [...Array(planetCount).keys()].map(x => x + 1 );
    await this.nextPlanet();
  }

  async nextPlanet(){
    this.setState({ dataState: 'pending' });
    let id = this.planetIds[Math.floor(Math.random() * 
      this.planetIds.length)];

    this.planetIds = this.planetIds.filter(x => x !== id);
    let planetData = await this.swapi.getPlanet(id);
    this.setState({
      planetData: planetData,
      dataState: 'completed'
    });
  }

  render(){
    return (
      <div className="flex-column inline-center cross-center">
        <h1>Star Wars Planets</h1>
        <PlanetView dataState={this.state.dataState}
          data={this.state.planetData} 
          nextPlanet={this.nextPlanet}/>
      </div>
    );
  }
} 

export default PlanetPage;
