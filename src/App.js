import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navibar from './Component/Navibar';
import Tengah from './Component/Tengah';
import About from './Component/About';
import Special from './Component/Special';

function App() {
  return (
    <div>
      <Navibar/>
      <Tengah/>
      <About/>
      <Special/>
    </div>
  );
}

export default App;
