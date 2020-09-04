import React from 'react';
import css from './Research.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

function Research() {
    return (
        <div id='research' style={{marginBottom: '30px'}}>
            <div id='carml'>
                <div>
                    <h1>CarML</h1>
                </div>
                    <h3>May 2020 – Present</h3>
                    <p>
                    Implemented CarML, a distributed machine learning platform built on top of vehicular clouds that utilized vehicles as workers in distributed training.
                    </p>
                    <p>
                    Built a vehicular distributed training simulator using Python, Ten- sorFlow, and SUMO to test the performance and efficacy of our proposed platform running in a city environment.
                    </p>
                    <p>
                    Paper is selected to appear in ACM MobiCom 2020.
                    </p>
                    <IconButton aria-label='github' href='https://github.com/YichengShen/CarML-Simulator' target="_blank">
                        <GitHubIcon />
                    </IconButton>
                </div>
        </div>
    );
}

export default Research;