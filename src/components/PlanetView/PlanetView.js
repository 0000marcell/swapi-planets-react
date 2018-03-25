import React, { Component} from 'react'; 
import './PlanetView.css';

class PlanetView extends Component { 
  render(){
    let dataView = (this.props.dataState !== 'pending') ?
      (
        <div>
          <div className="planet-view-name">
            <h1 data-test-name>
              {this.props.data.name}
            </h1>
          </div>
          <div className="planet-view-body">
            <h3 data-test-population>
              POPULATION: {this.props.data.population}
            </h3>
            <h3 data-test-climate>
              CLIMATE: {this.props.data.climate}
            </h3>
            <h3 data-test-terrain>
              TERRAIN: {this.props.data.terrain}
            </h3>
            <h3 data-test-films>
              FEATURES IN {this.props.data.films.length} FILMS
            </h3>
          </div>
        </div>
      ) :
      (
        <div data-test-loading 
          className="flex-row inline-center">
          <h1>loading...</h1>
        </div>
      );

    return (
      <div className="flex-column inline-center cross-center">
        <div className="planet-view">
          {dataView}
        </div>
        <button data-test-next-button
          onClick={this.props.nextPlanet}>
          NEXT
        </button>
      </div>
    );
  }
} 

export default PlanetView;
