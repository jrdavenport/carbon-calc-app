import React from 'react';
import './App.css';
import Admin from './pages/admin'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            Homepage content here
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
