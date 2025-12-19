import React from 'react';
import Header from './components/header/Header';
import { Home, About, Experience, Projects, Contact } from './components/sections';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
