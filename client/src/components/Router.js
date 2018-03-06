import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Login from './Login';
import TeaForm from './TeaForm';
import Teas from './Teas';
import WrongPage from './WrongPage';
import About from './About';

// import App from './App';
// import NotFound from './NotFound';

//stateless functional component
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/teas' component={ App } />
      <Route exact path='/createtea' component={ TeaForm } />
      <Route component={ WrongPage } />
    </Switch>
  </BrowserRouter>
);

export default Router;
