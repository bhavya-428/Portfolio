import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="reveal"><Hero /></div>
        <div className="reveal"><About /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Achievements /></div>
        <div className="reveal"><Blog /></div>
        <div className="reveal"><Contact /></div>
      </main>


      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bhavya. Built with React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
