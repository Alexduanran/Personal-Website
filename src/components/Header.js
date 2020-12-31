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

    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
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
                <ul className={css.navbar}>
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