import React from 'react';
import css from './Projects.module.css'
import { Link } from 'react-scroll';

function Projects() {
    return (
        <div>
            <a className={css.title}>
                <Link
                    activeClass={css.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Projects
                </Link>
            </a>
                <div className={css.projects} id='projects'>

                </div>
        </div>
    );
}

export default Projects;