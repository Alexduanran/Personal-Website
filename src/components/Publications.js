import React from 'react';
import css from './Publications.module.css'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


function Publications() {

    return (
        <div id='publications' style={{marginBottom: '30px'}}>
            <div id='conferences'>
                <div>
                    <h3>Poster: CarML: Distributed Machine Learning in Vehicular Clouds</h3>
                    <div>Anran Du, Yicheng Shen, and Lewis Tseng</div>
                    &nbsp;
                    <div>MobiCom 2020: The 26th Annual International Conference on Mobile Computing and Networking, September 2020</div>
                    <Button variant="contained" href='https://mobicom20posters.hotcrp.com/doc/mobicom20posters-final89.pdf?cap=089afLXmYaQ9qbI' target="_blank" style={{marginTop: '15px'}}>
                            Paper
                    </Button>
                    
                </div>
            </div>
        </div>
    );
}

export default Publications;