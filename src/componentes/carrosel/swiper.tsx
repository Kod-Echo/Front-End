import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import React from 'react';
import { Grid } from '@material-ui/core';

export default class Carrosel extends React.Component {
    render() {
        return (

            <Grid>
                <Swiper modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={{ clickable: true }} className='swiper-container' >
                    <SwiperSlide className='slide-item'>
                        <img src="src/assets/img/ecobagHome.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                        <img src="src/assets/img/ecobagHome.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                    <img src="src/assets/img/ecobagHome.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                    <img src="src/assets/img/ecobagHome.png" alt="" />
                    </SwiperSlide></Swiper>
            </Grid>
        )
    }
}