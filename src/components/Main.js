import React from 'react';
import css from './Main.module.css';
import { Link } from 'react-scroll';
import About from './About';
import Publications from './Publications';
import Research from './Research';
import Projects from './Projects';

function Main(props) {

function handleSetInactive() {
    var elem = document.getElementsByClassName('publications');
    elem.classList.add(css.inactive)
}

    return (
        <div className={css.main} style={{'margin-top': window.innerHeight}}>
            <span className={css.about}>
                <Link
                    activeClass={css.active}
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-props.height-40}
                    duration={500}>
                    About
                </Link>
            </span>
            <About />
            <span className={css.publications}>
                <Link
                    activeClass={css.active}
                    to='publications'
                    spy={true}
                    smooth={true}
                    offset={-props.height}
                    duration={500}
                    handleSetInactive={handleSetInactive}>
                    Publications
                </Link>
            </span>
            <Publications />
            <span className={css.research}>
                <Link
                    activeClass={css.active}
                    to='research'
                    spy={true}
                    smooth={true}
                    offset={-props.height}
                    duration={500}
                    handleSetInactive={handleSetInactive}>
                    Research
                </Link>
            </span>
            <Research />
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