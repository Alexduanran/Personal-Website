import React from 'react';
import css from './About.module.css';

function About(props) {
    return (
        <div id='about' style={{marginBottom: '5%'}}>
            {
                props.data ?
                <div className={css.container}>
                    <img src={props.data.photo} alt='Profile Photo' className={css.photo}></img>
                    <p className={css.intro}> <strong>Hey guys!</strong> My name is Anran, but I also go by Alex. I am a student at Boston College, Class of 2021, majoring in Computer Science.</p>
                </div>
                :
                <div/>
            }
        </div>
    );
}

export default About;