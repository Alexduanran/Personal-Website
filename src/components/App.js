import React from 'react';
import css from './App.module.css';
import Header from './Header';
import About from './About';
import Projects from './Projects'

function App() {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.main}>
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
