import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/friendsList';
import AddFriends from './components/addFriend';
import Logout from './components/Logout'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/friends/add'>
            <AddFriends/>
          </Route>
          <Route exact path='/friends'>
            <FriendsList/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
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
