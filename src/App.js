import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/friendsList';
import AddFriends from './components/addFriend';
import Logout from './components/Logout'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <h2>FRIENDS DATABASE</h2>
              <Link className='links' to='/login'>LOGIN.</Link>
              <Link className='links' to='/friends'>FRIENDLIST.</Link>
              <Link className='links' to='/friends/add'>ADDFRIEND.</Link>
              <Link className='links' to='/logout'>LOGOUT</Link>
          </nav>
        </header>
        <Switch>
          <PrivateRoute exact path='/friends/add' component={AddFriends}/>
          <PrivateRoute exact path='/friends' component={FriendsList}/>
          <PrivateRoute path='/logout' component={Logout}/>
          <Route exact path='/login'>
            <Redirect to='/'/>
          </Route>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
