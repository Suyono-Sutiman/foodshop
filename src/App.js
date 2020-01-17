import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navibar from './Component/Navibar';
import Tengah from './Component/Tengah';
import About from './Component/About';
import Special from './Component/Special';
import Menu2 from './Component/Menu2';
import Testimony from './Component/Testimony';
import Team from './Component/Team';
import Reservation from './Component/Reservation';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Navibar/>
      <Tengah/>
      <About/>
      <Special/>
      <Menu2/>
      <Testimony/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  );
}

export default App;
