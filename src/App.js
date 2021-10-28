import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import createProducto from './components/createProducto';
import listProducto from './components/listProducto';
import listMarca from './components/listMarca';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router,Route}from 'react-router-dom';

function App() {
  return (
    
    <Router>

      <Navbar/>

      <div>
        <Route path="/" exact component={listProducto}/>
        <Route path="/editar/:id" component={createProducto}/>
        <Route path="/crear" component={createProducto}/>
        <Route path="/marca" component={listMarca}/>
      </div>

      
    </Router>
  );
}

export default App;
