import React, { useState, useEffect } from 'react';
import css from './Main.module.css';
import { Link } from 'react-scroll';
import Collapse from 'react-bootstrap/Collapse';
import { useMediaQuery } from 'react-responsive';
import About from './About';
import Publications from './Publications';
import Research from './Research';
import Projects from './Projects';

function Main(props) {
    const [aboutActive, setAboutActive] = useState(false);
    const [publicationsActive, setPublicationsActive] = useState(false);
    const [researchActive, setResearchActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    // var num_research = 0;
    // var num_publication = 0;
    // var research_top = 0;
    // var project_top = 0;

    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })

    // useEffect(() => {
    //     if (props.data.research) {
    //         num_research = props.data.research.length;
    //         num_publication = props.data.publications.length;
    //         research_top = 341 + 35 * num_publication;
    //         project_top = 369 + 35 * num_research;
    //     }
    // }, [props?.data?.research])

    return (
        <div>
            {isDesktopOrLaptop && 
                <div className={css.main} style={{'margin-top': window.innerHeight}}>
                    <span className={css.about}>
                        <Link 
                            className={aboutActive ? css.activeMain : css.inactive}
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}
                            onSetActive={()=>setAboutActive(true)}
                            onSetInactive={()=>setAboutActive(false)}>
                            About
                        </Link>
                    </span>
                    <About data={props.data.about}/>

                    <span className={css.publications}>
                        <Link
                            className={publicationsActive ? css.activeMain : css.inactive}
                            to='publications'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}
                            onSetActive={()=>setPublicationsActive(true)}
                            onSetInactive={()=>setPublicationsActive(false)}>
                            Publications
                        </Link>
                        <Collapse in={publicationsActive}>
                            <div className={css.publicationList}>
                                {
                                    props.data.publications ?
                                    props.data.publications.map(d => (
                                        <div>
                                            <Link className={css.subheader}
                                                activeClass={css.activeSub}
                                                to={d.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-window.innerHeight*0.21}
                                                duration={500}>
                                                {d.conference}
                                            </Link>
                                        </div>
                                    ))
                                    :
                                    <div/>
                                }
                            </div>
                        </Collapse>
                    </span>
                    <Publications data={props.data.publications}/>

                    <span className={css.research} style={{top: publicationsActive ? 416 : 306}}>
                        <Link 
                            className={researchActive ? css.activeMain : css.inactive}
                            to='research'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}
                            onSetActive={()=>setResearchActive(true)}
                            onSetInactive={()=>setResearchActive(false)}>
                            Research
                        </Link>
                        <Collapse in={researchActive}>
                            <div className={css.researchList}>
                                {
                                    props.data.research ?
                                    props.data.research.map(d => (
                                        <div>
                                            <Link className={css.subheader}
                                                activeClass={css.activeSub}
                                                to={d.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-window.innerHeight*0.22}
                                                duration={500}>
                                                {d.title}
                                            </Link>
                                        </div>
                                    ))
                                    :
                                    <div/>
                                }
                            </div>
                        </Collapse>
                    </span>
                    <Research data={props.data.research}/>

                    <span className={css.projects} style={{top: researchActive ? 474 : 369}}>
                        <Link 
                            className={projectsActive ? css.activeMain : css.inactive}
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.22}
                            duration={500}
                            onSetActive={()=>setProjectsActive(true)}
                            onSetInactive={()=>setProjectsActive(false)}>
                            Projects
                        </Link>
                        <Collapse in={projectsActive}>
                            <div className={css.projectsList}>
                                {
                                    props.data.projects ?
                                    props.data.projects.map(d => (
                                        <div>
                                            <Link className={css.subheader}
                                                activeClass={css.activeSub}
                                                to={d.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-window.innerHeight*0.21}
                                                duration={500}>
                                                {d.title}
                                            </Link>
                                        </div>
                                    ))
                                    :
                                    <div/>
                                }
                            </div>
                        </Collapse>
                    </span>
                    <Projects data={props.data.projects}/>
                </div>
            }
            { isMobile && 
                <div className={css.main} style={{'margin-top': window.innerHeight}}>
                    <span className={css.about}>
                        <Link 
                            className={aboutActive ? css.activeMain : css.inactive}
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}
                            onSetActive={()=>setAboutActive(true)}
                            onSetInactive={()=>setAboutActive(false)}>
                            About
                        </Link>
                    </span>
                    <About data={props.data.about}/>

                    <span className={css.publications}>
                        <Link
                            className={publicationsActive ? css.activeMain : css.inactive}
                            to='publications'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.22}
                            duration={500}
                            onSetActive={()=>setPublicationsActive(true)}
                            onSetInactive={()=>setPublicationsActive(false)}>
                            Publications
                        </Link>
                    </span>
                    <Publications data={props.data.publications}/>

                    <span className={css.research}>
                        <Link 
                            className={researchActive ? css.activeMain : css.inactive}
                            to='research'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.24}
                            duration={500}
                            onSetActive={()=>setResearchActive(true)}
                            onSetInactive={()=>setResearchActive(false)}>
                            Research
                        </Link>
                    </span>
                    <Research data={props.data.research}/>

                    <span className={css.projects}>
                        <Link 
                            className={projectsActive ? css.activeMain : css.inactive}
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.28}
                            duration={500}
                            onSetActive={()=>setProjectsActive(true)}
                            onSetInactive={()=>setProjectsActive(false)}>
                            Projects
                        </Link>
                    </span>
                    <Projects data={props.data.projects}/>
                </div>
            }
        </div>
    );
}

export default Main;