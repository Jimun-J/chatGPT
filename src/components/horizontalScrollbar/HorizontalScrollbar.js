import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import './HorizontalScrollbar.css'
import one from '../../assets/0.jpg'
import two from '../../assets/1.jpg'
import three from '../../assets/2.jpg'
import four from '../../assets/3.jpg'
import five from '../../assets/4.png'
import six from '../../assets/5.jpg'
import seven from '../../assets/6.jpg'
import eight from '../../assets/7.jpg'
import nine from '../../assets/8.png'

const HorizontalScrollbar = ({ numCards }) => {
    return (
        <>
            <Swiper
                slidesPerView={numCards}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1200}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={one} alt="one" />
                </SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={two} alt="one" />
                </SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={three} alt="one" />
                </SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={four} alt="one" />
                </SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={five} alt="one" />
                </SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={six} alt="one" />
                </SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={seven} alt="one" /></SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={eight} alt="one" />
                </SwiperSlide>
                <SwiperSlide style={{ height: "260px" }}>
                    <img src={nine} alt="one" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HorizontalScrollbar