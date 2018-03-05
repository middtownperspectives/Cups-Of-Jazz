import React, { Component } from 'react';

class Teas extends Component {

  render() {

    const { name, image, desc, type, instructions } = this.props.details;

    return (
      <div className="section">
        <div className="divider"></div>
        <h2> {name} </h2>
        <h4>{type}</h4>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Teas;
