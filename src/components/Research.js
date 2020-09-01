import React from 'react';
import css from './Research.module.css'

function Research() {
    return (
        <div id='research'>
            <div id='carml'>
                <div>
                    <h1>CarML</h1>
                </div>
                <div className={css.row}>
                    <div className={css.colSix}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Research;