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
      <footer style={{textAlign: 'center'}}>© 2020 Anran Du</footer>
    </div>
  );
}

export default App;
