import React from 'react';
import css from './About.module.css'
import { Link } from 'react-scroll';

function About() {
    return (
        <div>
            <a className={css.title}>
                <Link
                    activeClass={css.active}
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    About
                </Link>
            </a>
            <div>
                <div className={css.about} id='about'>

                </div>
            </div>
        </div>
    );
}

export default About;