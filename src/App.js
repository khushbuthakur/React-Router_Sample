// For reference watch : https://youtu.be/XRfD8xIOroA 

import React, {Component} from 'react';
import './App.css';
// everything needs to be under BrowserRouter tag
import {BrowserRouter} from 'react-router-dom';
import {Route, Link, NavLink, Redirect , Prompt} from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import User from './components/User';

class App extends Component {
  state = {
    loggedIn: false
  }

  buttonClicked = () => {
    this.setState((prevState, props) => {
      return {
        loggedIn: !prevState.loggedIn
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/*using links*/}
          <nav>
            <ul>
              <li>
                {/*navlink is used to provide stylings to active link*/}
                <NavLink
                  to='/'
                  exact
                  activeStyle={{
                  color: 'red',
                  textDecoration: 'underline'
                }}>Home</NavLink>
              </li>
              <li>
                <NavLink
                  to='/about/'
                  activeStyle={{
                   color: 'red',
                  textDecoration: 'underline'
                }}>About</NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  activeStyle={{
                  color: 'red',
                  textDecoration: 'underline'
                }}>Contact</NavLink>
              </li>
              <li>
                {/*passing props*/}
                <NavLink
                  to='/user/Joey'
                  activeStyle={{
                  color: 'red',
                  textDecoration: 'underline'
                }}>
                  Joey
                </NavLink>
              </li>
              <li>
                <Link to='/user/Chandler'>
                  
                  Chandler
                </Link>
              </li>
            </ul>
          </nav>

          <button type="button" onClick={this.buttonClicked}>{this.state.loggedIn
              ? 'Log Out'
              : 'Log In'}</button>

              
          {/*rendering inside route tag*/}
          {/*strict will render about page only when route is /about/ and wont load any thing when route is /about*/}
          <Route
            path="/about/"
            exact strict
            render={() => {
            return (
              <h1>In about page</h1>
            );
          }}/>
         
          {/*just like alert with some conditions*/}
          <Prompt when = {!this.state.loggedIn}
          message = {(location) =>{
            return location.pathname.startsWith("/user") ? 'Are you sure ?' : true
          }}/>
          
          
           {/*rendering component*/}
          {/*both works component and render*/}
          <Route path="/" exact component={Home}/>
          <Route path="/contact" render={Contact}/> {/*passing props*/}

          {/*without redirection to home page*/}
          {/*<Route path="/user/:userName" render={User}/>*/}

          {/*passing parameters and redirecting to home page if user is not logged in*/}
          <Route
            path="/user/:userName"
            render={(props) => (this.state.loggedIn
            ? (<User userObject={props}/>)
            : (<Redirect to="/"/>))}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
