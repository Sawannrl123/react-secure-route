import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Home, Login, About } from './pages';
import { PrivateRoute, ProtectedRoute, PublicRoute } from '../src';

const isLoggedIn = true;

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Home} exact isAuthenticated={isLoggedIn} redirect="/login" path="/" />
        <ProtectedRoute component={Login} restricted={isLoggedIn} exact redirect="/" path="/login" />
        <PublicRoute component={About} path="/about" exact />
      </Switch>
    </Router>
  );
}

export default App;