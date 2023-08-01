import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Date} from "../../date";
import Movie from "../movie/movie";
import './style.css'

function Carousel(props) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={5}
                className="mySwiper"
            >
                {Date.map((movie, index) => {
                    return <SwiperSlide>
                        <Movie
                            key={index}
                            title={movie.title}
                            img={movie.img}
                            reviews={movie.reviews}
                            star={movie.star}
                            genres={movie.genres}
                            index={index}

                        />
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}

export default Carousel;