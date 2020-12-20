import React from 'react';
import css from './Publications.module.css'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


function Publications(props) {

    return (
        <div id='publications' style={{marginBottom: '5%'}}>
            <div id='Conferences'>
                {
                    props.data ? 
                    props.data.map(d => (
                        <div id={d.id}>
                            <h3>{d.title}</h3>
                            <div><strong>Anran Du</strong>{d.authors}</div>
                            &nbsp;
                            <div>{d.conference_}</div>
                            <Button variant="contained" href={d.paper} target="_blank" style={{marginTop: '15px'}}>
                                Paper
                            </Button>
                            &nbsp; &nbsp; &nbsp;
                            <Button variant="contained" href={d.video} target="_blank" style={{marginTop: '15px'}}>
                                Video
                            </Button>
                        </div>
                    ))
                    :
                    <div />
                }
            </div>
        </div>
    );
}

export default Publications;