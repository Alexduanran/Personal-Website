import React from 'react';
import css from './Main.module.css';
import { Link } from 'react-scroll';
import About from './About';
import Projects from './Projects';

function Main(props) {
    return (
        <div className={css.main} style={{'margin-top': window.innerHeight}}>
            <span className={css.about}>
                <Link
                    activeClass={css.active}
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-props.height-50}
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
                    offset={-props.height}
                    duration={500}>
                    Projects
                </Link>
            </span>
            <Projects />
        </div>
    );
}

export default Main;