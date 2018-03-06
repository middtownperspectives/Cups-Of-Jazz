import React, { Component, Fragment } from 'react';
import Header from './Header';
import TeaForm from './TeaForm';
import EditForm from './EditForm';
import Teas from './Teas';

class TeaMaster extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h2> Edit and Delete </h2>
        <Teas />
        <TeaForm />
      </Fragment>
    );
  }
};

export default TeaMaster;
