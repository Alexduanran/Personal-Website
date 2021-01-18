import React from 'react';
import css from './Publications.module.css'
import Button from 'react-bootstrap/Button';

function Publications(props) {

    return (
        <div id='publications' style={{marginBottom: '3%'}}>
            <div id='Conferences'>
                {
                    props.data ? 
                    props.data.map(d => (
                        <div id={d.id} style={{marginBottom: '2%'}}>
                            <h3>{d.title}</h3>
                            <div><strong>Anran Du</strong>{d.authors}</div>
                            &nbsp;
                            <div>{d.conference_}</div>
                            {
                                d.paper ?
                                <Button variant="outline-primary" href={d.paper} target="_blank" style={{marginTop: '15px'}}>
                                    Paper
                                </Button>
                                :
                                <div/>
                            }
                            &nbsp; &nbsp; &nbsp;
                            {
                                d.video ?
                                <Button variant="outline-primary" href={d.video} target="_blank" style={{marginTop: '15px'}}>
                                    Video
                                </Button>
                                :
                                <div/>
                            }
                            
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