import React from 'react';
import css from './Research.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

function Research(props) {
    return (
        <div id='research' style={{marginBottom: '2%'}}>
            {
                props.data ? 
                props.data.map(d => (
                    <div id={d.id} style={{marginBottom:'3%'}}>
                        <div>
                            <h2>{d.title}</h2>
                        </div>
                        <h5>{d.time}</h5>
                        {
                            d.descriptions.map(de => (
                                <p className={css.description}>{de}</p>
                            ))
                        }
                        <IconButton aria-label='github' href={d.github} target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </div>
                ))
                :
                <div/>
            }
        </div>
    );
}

export default Research;