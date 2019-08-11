import React from 'react';
import { BrowserRouter } from "react-router-dom";
// import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import routes from "./routes";

import './reset.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
