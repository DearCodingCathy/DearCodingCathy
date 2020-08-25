import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
      <About />
      <Services />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
