import React, { Component, Fragment } from 'react';
import { Input, Row, Button } from 'react-materialize';
import EditForm from './EditForm';

class TeaForm extends Component {

  createTea = (event) => {
    event.preventDefault();
    console.log('attempt to create tea on form submit');

    //console.log(this.name, this.image, this.desc, this.type, this.instructions);

    const tea = {
      name: this.name.input.defaultValue,
      image: this.image.input.defaultValue,
      desc: this.desc.input.defaultValue,
      type: this.type._id,
      instructions: this.instructions.input.defaultValue,
    };
    console.log(tea);
    this.props.addTea(tea);
    event.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
      <div className='container'>
        <h2> Create A New Tea </h2>
      <Row>
        <form onSubmit={this.createTea}>
        <Input s={6}
          name='name'
          ref={input => (this.name = input)}
          label='Name'
          type='text'
        />
        <Input s={6}
          name='image'
          ref={input => (this.image = input)}
          label='Image'
          type='text'
        />
        <Input s={12}
          name='desc'
          ref={input => (this.desc = input)}
          type='textarea'
          label='Description'
        />
        <Input s={12}
          name='type'
          ref={input => (this.type = input)}
          type='select'
          label='Tea Benefit'>
                <option value='focus'> Focus </option>
                <option value='energy'> Energy </option>
                <option value='rest'> Rest </option>
                <option value='other'> Other </option>
        </Input>
        <Input s={12}
          name='instructions'
          ref={input => (this.instructions = input)}
          type='textarea'
          label='Instructions'
        />
        <Button type='submit' waves='light'> Submit </Button>
        </form>
      </Row>
      <EditForm />
      </div>
    </Fragment>

    );
  }
}

export default TeaForm;
