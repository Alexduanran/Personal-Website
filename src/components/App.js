import React from 'react';
import { Link } from 'react-scroll';
import css from './App.module.css';
import Header from './Header';
import About from './About';
import Projects from './Projects'

function App() {
  return (
    <div className={css.container}>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
