import React from 'react';
import css from './About.module.css';
import Media from 'react-bootstrap/Media';

function About() {
    return (
        <div id='about' style={{marginBottom: '5%'}}>
            <div className={css.container}>
                <img src={'./media/profile_photo.jpg'} alt='Profile Photo' className={css.photo}></img>
                <p className={css.intro}> <strong>Hey guys!</strong> My name is Anran, but I also go by Alex. I am a student at Boston College, Class of 2021, majoring in Computer Science.</p>
            </div>
        </div>
    );
}

export default About;