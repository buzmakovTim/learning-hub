import React from 'react';
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
        
        {/* Footer */}
        <Footer />

        {/* 
        
        
        
        
        Redirect to main page probably
        
        
        
        */}

      </header>
    </div>
  );
}

export default App;
