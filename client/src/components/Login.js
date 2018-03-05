import React, { Fragment } from 'react';
import Header from './Header';

const Login = (props) => (
<Fragment>
    <Header />
    <div className='container'>
    <h2> Log In </h2>
    <p> Sign in to view your profile with saved teas. </p>

     <button
      className='github waves-effect waves-purple btn'

      // onClick={() => props.authenticate('Github')}
    >
      Log In With GitHub
    </button>

    <button
      className='twitter waves-effect waves-teal  btn'

      // onClick={() => props.authenticate('Twitter')}
    >
      Log In With Twitter
    </button>
    </div>
  </Fragment>
);

export default Login;
