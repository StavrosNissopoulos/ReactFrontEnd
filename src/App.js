import React, { Component } from 'react';
import './App.css';
import Main from './Containers/Main/Main';
import FullAd from './Components/FullAd/FullAd'
import NewAd from './Components/NewAd/NewAd'
import { Route, Switch ,Router, Link} from 'react-router-dom';
import LoginForm from './Containers/LoginForm/LoginForm';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          {/*
            <LoginForm />
            <Main />
            <FullAd id='tria'/>

          */}
          <Switch>
         <Route path="/NewAd" name="NewAd" component={NewAd} />
         <Route path="/" exact component={Main} />
         <Route path="/login" name="LogIn" component={LoginForm} />
       </Switch>

       </BrowserRouter>
    );
  }
}

export default App;
