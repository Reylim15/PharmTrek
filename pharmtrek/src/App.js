import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import StaffHome from './components/pages/StaffHome';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/staffhome" exact={true} component={StaffHome} />
      </Router>
    </div>
  );
}

export default App;
