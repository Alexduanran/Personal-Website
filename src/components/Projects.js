import React from 'react';
import css from './Projects.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

import savetrees1 from '../media/savetrees1.png';
import savetrees2 from '../media/savetrees2.png';
import savetrees3 from '../media/savetrees3.png';
import savetrees4 from '../media/savetrees4.png';
import savetrees5 from '../media/savetrees5.png';

import atm1 from '../media/atm1.png';
import atm2 from '../media/atm2.png';
import atm3 from '../media/atm3.png';


import dijkstra1 from '../media/dijkstra1.png';
import dijkstra2 from '../media/dijkstra2.png';

import eagle1 from '../media/eagle1.png';
import eagle2 from '../media/eagle2.png';
import eagle3 from '../media/eagle3.png';

function Projects() {

    return (
        <div id='projects'>
            <div id='savetreesteam'>
                <div>
                    <h1>The SavesTrees Team</h1>
                </div>
                <div className={css.row}>
                    <div className={css.colSix}>
                        <h3>Spring 2020</h3>
                        <p>
                            Created a proof-of-concept website keeping track of paper usage on college campuses to encourage students 
                            and professors to be more environmentally friendly using React.js, React Router, and Google Firestore.
                        </p>
                        <Button variant="contained" href='https://bcwebcourse.github.io/creative-project-the-savetrees-team/' target="_blank">
                            Website
                        </Button>
                        <IconButton aria-label='github' href='https://github.com/bcwebcourse/creative-project-the-savetrees-team' target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </div>
                    <div className={css.colOne}></div>
                    <div className={css.colFive}>
                        <Carousel  showThumbs={false} showStatus={false}>
                            <img src={savetrees1} style={{objectFit: 'cover'}}/>
                            <img src={savetrees2} style={{objectFit: 'cover'}}/>
                            <img src={savetrees3} style={{objectFit: 'cover'}}/>
                            <img src={savetrees4} style={{objectFit: 'cover'}}/>
                            <img src={savetrees5} style={{objectFit: 'cover'}}/>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div id='atm'>
                <div>
                    <h1>ATM</h1>
                </div>
                <div className={css.row}>
                    <div className={css.colSix}>
                        <h3>Spring 2020</h3>
                        <p>
                        Developed a web page predicting stock trend based on deep learning using Python, React.js front-end, vis.js, and Flask back- end.
                        </p>
                        <IconButton aria-label='github' href='https://github.com/Alexduanran/Group-8---ATM' target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </div>
                    <div className={css.colOne}></div>
                    <div className={css.colFive}>
                        <Carousel  showThumbs={false} showStatus={false}>
                            <img src={atm1} style={{objectFit: 'cover'}}/>
                            <img src={atm2} style={{objectFit: 'cover'}}/>
                            <img src={atm3} style={{objectFit: 'cover'}}/>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div id='dijkstrasarena'>
                <div>
                    <h1>Dijkstra's Arena</h1>
                </div>
                <div className={css.row}>
                    <div className={css.colSix}>
                        <h3>Fall 2019</h3>
                        <p>
                        Worked on a web-based game designed to educate students on Dijkstra’s shortest path algorithm using JavaScript and React.js.
                        </p>
                        <p>
                        Implemented visualization for traversed paths and debugged the adaptation of Dijkstra’s algorithm.
                        </p>
                        <Button variant="contained" href='http://dijkstras-arena.herokuapp.com/' target="_blank">
                            Website
                        </Button>
                        <IconButton aria-label='github' href='https://github.com/rogerwangcs/Dijkstras-Arena' target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </div>
                    <div className={css.colOne}></div>
                    <div className={css.colFive}>
                        <Carousel  showThumbs={false} showStatus={false}>
                            <img src={dijkstra1} style={{objectFit: 'cover'}}/>
                            <img src={dijkstra2} style={{objectFit: 'cover'}}/>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div id='eagleexchange'>
                <div>
                    <h1>Eagle Exchange</h1>
                </div>
                <div className={css.row}>
                    <div className={css.colSix}>
                        <h3>Fall 2018</h3>
                        <p>
                        Designed an iOS app serving as a platform for online goods exchange among students at Boston College using Swift and Google Firestore.
                        </p>
                        <IconButton aria-label='github' href='https://github.com/Alexduanran/Eagle-Exchange' target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </div>
                    <div className={css.colOne}></div>
                    <div className={css.colFive}>
                        <Carousel  showThumbs={false} showStatus={false}>
                            <img src={eagle1} style={{objectFit: 'cover'}}/>
                            <img src={eagle2} style={{objectFit: 'cover'}}/>
                            <img src={eagle3} style={{objectFit: 'cover'}}/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;