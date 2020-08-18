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
      {/* <div className={css.main}>
        <span className={css.about}>
          <Link
              activeClass={css.active}
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              About
          </Link>
        </span>
        <About />
        <span className={css.projects}>
          <Link
              activeClass={css.active}
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Projects
          </Link>
        </span>
        <Projects />
      </div> */}
    </div>
  );
}

export default App;
