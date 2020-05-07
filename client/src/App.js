import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Friend } from './components/Friend';
import { AddFriend } from './components/AddFriend';
import { AllFriends } from './components/AllFriends';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { deleteAuthToken } from './utils/cookiesUtil';

function App() {
  const handleLogout = e => {
    e.preventDefault();
    deleteAuthToken();
    window.location.href = "/";
  };
  return (
    <Router>
      <header>
        <p>Friends</p>
        <nav>
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/friends/add" className="nav-button">Add Friend</Link>
          <button className="nav-button" onClick={handleLogout}>Log Out</button>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={AllFriends} />
        <PrivateRoute path="/friends/add" component={AddFriend} />
        <PrivateRoute path="/friend/:friendId" component={Friend} />
      </Switch>
    </Router>
  );
}

export default App;
