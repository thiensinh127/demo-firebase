import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/ResetPassword';

const App=()=> {
  return (
      <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/reset" element={<Reset/>} />
      </Routes>
    </Router>
  );
}

export default App;
