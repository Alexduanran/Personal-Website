import React from 'react';
import css from './Publications.module.css'
import { Link } from 'react-scroll';

function Publications() {
    return (
        <div id='publications'>
            <div id='conferences'>
                <a href='https://mobicom20posters.hotcrp.com/doc/mobicom20posters-final89.pdf?cap=089afLXmYaQ9qbI' target='blank'>Poster: CarML: Distributed Machine Learning in Vehicular Clouds</a>
                <div>Anran Du, Yicheng Shen, and Lewis Tseng</div>
                <div>MobiCom 2020: The 26th Annual International Conference on Mobile Computing and Networking, September 2020</div>
            </div>
        </div>
    );
}

export default Publications;