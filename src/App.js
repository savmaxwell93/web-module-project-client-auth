import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>LOGIN</h2>
    </div>
  )
}

const FriendsList = () => {
  return (
    <div>
      <h2>FRIENDS LIST</h2>
    </div>
  )
}

const AddFriends = () => {
  return (
    <div>
      <h2>ADD FRIEND</h2>
    </div>
  )
}

const Logout = () => {
  return (
    <div></div>
  )
}

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
