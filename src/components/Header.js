import React, { useState, useEffect, useRef } from 'react';
import css from './Header.module.css';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-scroll';
 
function Header() {

    const [vantaEffect, setVantaEffect] = useState(0);
    const [height, setHeight] = useState(0);
    const myRef = useRef(null);

    useEffect(() => {
        setHeight(window.innerHeight);
        window.addEventListener('scroll', handleScroll);
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: myRef.current,
                THREE: THREE,
                shininess: 40
            }))
        };
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (vantaEffect) vantaEffect.destroy();
        }
    }, [vantaEffect])

    const handleScroll = () => {
        let scrollTop = window.scrollY,
            minHeight = 0.15 * window.innerHeight,
            logoHeight = Math.max(minHeight, window.innerHeight - scrollTop);
        setHeight(logoHeight);
    }
    
    return (
        <div>
            <div ref={myRef} className={css.container} style={{height: height}}>
                <div className={css.name} 
                    style={{fontSize: height * 0.09 + 35,
                        marginLeft: -window.innerWidth * (1 - height / window.innerHeight) * 0.9,
                        marginTop: height * 0.26,
                        textAlign: 'center'
                        }}>
                    Anran Du
                </div>
                <ul className={css.navbar} style={{marginTop: (- 1 / window.innerHeight * 15000) * (1 - height / window.innerHeight)}}>
                    <li>
                        <Link
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='publications'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}>
                            Publications
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='research'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}>
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={-window.innerHeight*0.21}
                            duration={500}>
                            Projects
                        </Link>
                    </li>
                </ul>
                <div className={css.downarrow} key={'arrow'} style={{opacity: (height/window.innerHeight)**10,
                                                                    pointerEvents: height === window.innerHeight ? '' : 'none'}}>
                    <Link
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-window.innerHeight*0.21}
                        duration={500}
                        style={{cursor: 'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </Link>
                </div>
                <div className={css.buttonGroup}>
                    <IconButton aria-label='email' href='mailto: duab@bc.edu' style={{ color: 'white' }}>
                        <EmailIcon style={{ fontSize: 35 }} />
                    </IconButton>
                    <IconButton aria-label='linkedin' href='https://www.linkedin.com/in/anran-du-047188168/' target="_blank" style={{ color: 'white' }}>
                        <LinkedInIcon style={{ fontSize: 35 }} />
                    </IconButton>
                    <IconButton aria-label='github' href='https://github.com/Alexduanran' target="_blank" style={{ color: 'white' }}>
                        <GitHubIcon style={{ fontSize: 35 }} />
                    </IconButton>
                </div>
            </div>
            &nbsp;
        </div>
    );
}

export default Header;