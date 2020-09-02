import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
