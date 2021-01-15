import React from 'react';
import css from './Projects.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Mousewheel, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Button from 'react-bootstrap/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';


function Projects(props) {

    SwiperCore.use([Pagination, Mousewheel, Navigation]);

    return (
        <div id='projects'>
            {
                props.data ? 
                props.data.map(d => (
                    <div id={d.id} style={{marginBottom: '5%'}}>
                        <div>
                            <h2>{d.title}</h2>
                        </div>
                        <div className={css.row}>
                            <div className={css.colSix}>
                                <h5>{d.time}</h5>
                                <p>
                                    {d.descriptions}
                                </p>
                                {
                                    d.website ?
                                    <Button variant="outline-primary" href={d.website} target="_blank">
                                        Website
                                    </Button>
                                    :
                                    <div/>
                                }
                                <IconButton aria-label='github' href={d.github} target="_blank">
                                    <GitHubIcon />
                                </IconButton>
                            </div>
                            <div className={css.colOne}></div>
                            <div className={css.colFive}>
                                <Swiper className={css.swiper}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        dynamicBullets={true}
                                        mousewheel={true}
                                        pagination={{clickable: true}}
                                        centeredSlides={true}
                                        loop={true}
                                        navigation={true}
                                        style={d.vertical === 'true' ?
                                        {minWidth: '150px', width: '12vw', minHeight: '320px'} : {}}>
                                    {
                                        d.images.map(im => (
                                            <SwiperSlide>
                                                <img src={im} className={css.image} 
                                                style={d.vertical === 'true' ?
                                                {minWidth: '150px', width: '12vw'} : {}}/>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                ))
                :
                <div />
            }
        </div>
    );
}

export default Projects;