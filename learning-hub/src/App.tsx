import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header/Header';
import { Body } from './Components/Body/Body';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        {/* Header component */}
        <Header />

        {/* Body */}
        <Body />
        
        {/* Side Bar component */}

        {/* Footer */}
        <Footer />

      </header>
    </div>
  );
}

export default App;
