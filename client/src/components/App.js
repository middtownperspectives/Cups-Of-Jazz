import React, { Component, Fragment } from 'react';
import { Input, Row, Button } from 'react-materialize';
import Header from './Header';
import Teas from './Teas';
import initialTeas from '../initialTeas';

class App extends Component {

  state = {
    teas: {},
  };

  addTea = () => {
  };

  loadSampleTeas = () => {
    this.setState({ teas: initialTeas });
  };

  render() {
    return (
      <Fragment>
      <Header />
        <div className='container'>
          <h1> Teas </h1>
          <div className="divider"></div>
            <div className="section">
              {Object.keys(this.state.teas)
                .map(key => <Teas key={key} details={this.state.teas[key]} />)}
            </div>
        </div>
      <Button onClick={this.loadSampleTeas} className='btn-floating yellow darken-1'>
        <i className="material-icons">control_point</i></Button>
      </Fragment>
    );
  }
}

export default App;
