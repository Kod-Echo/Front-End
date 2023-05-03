import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Autoplay, Navigation, Pagination } from 'swiper';

export default class Carrosel2 extends React.Component {
    render() {
        return (

            <Grid>
                <Swiper slidesPerView={4} autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={5}
                    centeredSlides={true}
                    className="mySwiper">
                    <SwiperSlide className='slide-item'>
                        <img src="src/assets/img/22.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                        <img src="src/assets/img/22.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                        <img src="src/assets/img/22.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                        <img src="src/assets/img/22.png" alt="" />
                    </SwiperSlide></Swiper>
            </Grid>
        )
    }
}