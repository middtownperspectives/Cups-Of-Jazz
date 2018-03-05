import React, { Component, Fragment } from 'react';
import { Input, Row, Button } from 'react-materialize';
import Header from './Header';

class TeaForm extends Component {
  // nameRef = React.createRef();
  // imageRef = React.createRef();
  // descriptonRef = React.createRef();
  // benefitRef = React.createRef();
  // instructionsRef = React.createRef();

  createTea = (event) => {
    event.preventDefault();
    console.log('attempt to create tea on form submit');
  };

  render() {
    return (
      <Fragment>
      <Header />
      <div className='container'>
      <Row>
        <form onSubmit={this.createTea}>
        <Input s={6}
          name='name'
          ref={this.nameRef}
          label='Name'
          type='text'
        />
        <Input s={6}
          name='image'
          ref={this.imageRef}
          label='Image'
          type='text'
        />
        <Input s={12}
          name='descripton'
          ref={this.descriptonRef}
          type='textarea'
          label='Description'
        />
        <Input s={12}
          name='benefit'
          ref={this.benefitRef}
          type='select'
          label='Tea Benefit'>
                <option value='focus'> Focus </option>
                <option value='energy'> Energy </option>
                <option value='rest'> Rest </option>
                <option value='other'> Other </option>
        </Input>
        <Input s={12}
          name='instructions'
          ref={this.instructionsRef}
          type='textarea'
          label='Instructions'
        />
        <Button type='submit' waves='light'> Submit </Button>
        </form>
      </Row>
      </div>
    </Fragment>

    );
  }
}

export default TeaForm;
