import React, { Component, Fragment } from 'react';
import { Input, Row, Button } from 'react-materialize';
import TeaForm from './TeaForm';
import EditForm from './EditForm';

class Teas extends Component {

  handleChange = (event) => {
    const updatedTea = {
      ...this.props.tea,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    console.log(updatedTea);
    this.props.updateTea(this.props.index, updatedTea);
  };

  render() {

    // const { name, image, desc, type, instructions } = this.props.details;

    return (
      <Fragment>
        <form>
          <h2> {this.props.tea.name} </h2>

          <Input type='text' name='name' onChange={this.handleChange} value={this.props.tea.name} />
          <Input type='text' name='image' onChange={this.handleChange} value={this.props.tea.image} />
          <Input type='text' name='desc' onChange={this.handleChange} value={this.props.tea.desc} />
          <Input type='select' name='type' onChange={this.handleChange} value={this.props.tea.type}>
            <option value='focus'> Focus </option>
            <option value='energy'> Energy </option>
            <option value='rest'> Rest </option>
            <option value='immunity'> Immunity </option>
          </Input>
          <Input type='text' name='instructions' onChange={this.handleChange} value={this.props.tea.instructions} />
        </form>
        <a onClick={() => this.props.deleteTea(this.props.index)}className="btn-floating btn-large waves-effect waves-light red">
          <i className="material-icons">
            delete_forever
          </i>
        </a>
      </Fragment>
    );
  }
}

export default Teas;
