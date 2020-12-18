import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/Shop/Shop.component';
import Header from './Components/header-component/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'

function App() {
  return ( 
    <div> 
      <Header />
      <Switch>
        <Route exact path='/'component= {HomePage} />
        <Route path='/shop'component= {ShopPage} />
        <Route path='/signin'component= {SignInAndSignUpPage} />
      </Switch> 
    </div>
  );
}

export default App;
