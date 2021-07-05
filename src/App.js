import React from 'react';
import './assets/css/App.css';

// Componentes
import Header from './components/header';
import Slider from './components/slider';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Router from './components/router';

function App() {
  let btnString = "Ir al blog";

  return (
    <div className="App">
      <Header />

      <Slider title="Martin Navarro" btnString={btnString}/>

      <div className="center">
        <Router />

        <Sidebar />

        <div className="clearfix"></div>
      </div>
      
      <Footer />

    </div>
  );
}

export default App;
