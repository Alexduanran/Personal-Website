import React from 'react';
import css from './About.module.css';

function About(props) {
    return (
        <div id='about' style={{marginBottom: '5%'}}>
            {
                props.data ?
                <div className={css.container}>
                    <img src={props.data.photo} alt='Profile Photo' className={css.photo}></img>
                    <p className={css.intro}> <strong>Hey guys!</strong> {props.data.description}</p>
                </div>
                :
                <div/>
            }
        </div>
    );
}

export default About;