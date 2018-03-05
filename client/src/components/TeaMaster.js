import React, { Component, Fragment } from 'react';
import Header from './Header';
import TeaForm from './TeaForm';
import EditForm from './EditForm';

class TeaMaster extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h2> Edit and Delete </h2>
        <EditForm />
        <TeaForm />
      </Fragment>
    );
  }
};

export default TeaMaster;
