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
                <Link style={{backgroundColor: 'white'}}
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
                <Link style={{backgroundColor: 'white'}}
                    activeClass={css.active}
                    to='publications'
                    spy={true}
                    smooth={true}
                    offset={-props.height}
                    duration={500}
                    handleSetInactive={handleSetInactive}>
                    Publications
                </Link>
                <div className={css.publicationList}>
                    <div className={css.conferences}>
                        <Link style={{fontSize:'12pt', marginTop: '8pt'}}
                            activeClass={css.active}
                            to='conferences'
                            spy={true}
                            smooth={true}
                            offset={-props.height}
                            duration={500}>
                            Conferences
                        </Link>
                    </div>
                </div>
            </span>
            <Publications />
            <span className={css.research}>
                <Link style={{backgroundColor: 'white'}}
                    activeClass={css.active}
                    to='research'
                    spy={true}
                    smooth={true}
                    offset={-props.height}
                    duration={500}
                    handleSetInactive={handleSetInactive}>
                    Research
                </Link>
                <div className={css.researchList}>
                    <div className={css.carml}>
                        <Link style={{fontSize:'12pt', marginTop: '8pt'}}
                            activeClass={css.active}
                            to='carml'
                            spy={true}
                            smooth={true}
                            offset={-props.height}
                            duration={500}>
                            CarML
                        </Link>
                    </div>
                </div>
            </span>
            <Research />
            <span className={css.projects}>
                <Link style={{backgroundColor: 'white'}}
                    activeClass={css.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-props.height}
                    duration={500}>
                    Projects
                </Link>
                <div className={css.projectsList}>
                    <div className={css.savetrees}>
                        <Link style={{fontSize:'12pt', marginTop: '8pt'}}
                            activeClass={css.active}
                            to='savetreesteam'
                            spy={true}
                            smooth={true}
                            offset={-props.height}
                            duration={500}>
                            The SaveTrees Team
                        </Link>
                    </div>
                    <div className={css.atm}>
                        <Link style={{fontSize:'12pt', marginTop: '8pt'}}
                            activeClass={css.active}
                            to='atm'
                            spy={true}
                            smooth={true}
                            offset={-props.height}
                            duration={500}>
                            ATM
                        </Link>
                    </div>
                    <div className={css.dijkstra}>
                        <Link style={{fontSize:'12pt', marginTop: '8pt'}}
                            activeClass={css.active}
                            to='dijkstrasarena'
                            spy={true}
                            smooth={true}
                            offset={-props.height}
                            duration={500}>
                            Dijkstra's Arena
                        </Link>
                    </div>
                    <div className={css.eagle}>
                        <Link style={{fontSize:'12pt', marginTop: '8pt'}}
                            activeClass={css.active}
                            to='eagleexchange'
                            spy={true}
                            smooth={true}
                            offset={-props.height}
                            duration={500}>
                            Eagle Exchange
                        </Link>
                    </div>
                </div>
            </span>
            <Projects />
        </div>
    );
}

export default Main;