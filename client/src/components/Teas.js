import React, { Component } from 'react';

class Teas extends Component {

  render() {
    return (
      <div className="section">
        <div className="divider"></div>
        <h3> {this.props.details.name}</h3>
      </div>
    );
  }
}

export default Teas;
