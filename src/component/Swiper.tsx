import styled from 'styled-components';
import Constants from '../lib/Constants';
// react swiper 핵심
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
SwiperCore.use([Pagination, Autoplay]);

interface ItemProps {
    name: string
    price: number
}
interface SwiperProps {
    slidesPerView?: number
    spaceBetween?: number
    pagination?: boolean
    centeredSlides?: boolean
    autoPlayDelay?: number
    listArr: ItemProps[];
}
export default (props: SwiperProps) => {
    return (
        <StyledSwiper
        slidesPerView={props.slidesPerView || 1.5}
            spaceBetween={props.spaceBetween || 10}
            pagination={{clickable: props.pagination || true}}
            centeredSlides={props.centeredSlides || true}
            autoplay={props.autoPlayDelay ? {delay: props.autoPlayDelay} : undefined}
            >
            {props.listArr.map((item, idx) => (
                <SwiperSlide key={item.name}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

const StyledSwiper = styled(Swiper)`
margin: 0 auto;
    position: relative;
    width: 250px;
    height: 250px;
    overflow: hidden;
    background-color: green;
    & .swiper-slide{
        background-color: yellow;
        padding: 10px;
        & div{
            margin: auto;
            background-color: red;
            color: white;
        }
    }
    & .swiper-pagination-bullet{
        background-color: gray;
    }
    & .swiper-pagination-bullet-active{
        background-color: red;
    }
`
