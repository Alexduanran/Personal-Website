import React from 'react';
import css from './About.module.css'
import profile_photo from '../media/profile_photo.JPG'

function About() {
    return (
        <div >
            <div className={css.row}>
                <div className={css.colOne}></div>
                <div className={css.colFive}>
                    <img src={profile_photo} alt='Profile Photo' width='300px'></img>
                </div>
                <div className={css.colFive}>
                    <p> Hey guys! My name is Anran, but I also go by Alex. I am a student at Boston College, Class of 2021, majoring in Computer Science.</p>
                </div>
                <div className={css.colOne}></div>
            </div>
        </div>
    );
}

export default About;