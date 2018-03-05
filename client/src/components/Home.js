import React, { Component, Fragment } from 'react';
import Header from './Header';

class Home extends Component {

  render() {
    return (

      <Fragment>
        <Header />
        <div className='container'>
          <h1> Home </h1>
        </div>
      </Fragment>
    );
  }
}

export default Home;
