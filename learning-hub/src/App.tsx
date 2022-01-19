import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import { Body } from './Components/Body/Body';
import { Footer } from './Components/Footer/Footer';
import ScrollToTop from './Components/scrollToTop/ScrollToTop';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ScrollToTop />
        {/* Header component */}
        <Header />

        {/* Body */}
        <Body />
        
        {/* Footer */}
        <Footer />

      </header>
    </div>
  );
}

export default App;
