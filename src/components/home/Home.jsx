import React from 'react';
import Menu from "../menu/Menu";
import './style.css'
import "swiper/css";
import 'swiper/css/pagination';
import Carousel from "../carousel/Carousel";

function Home(props) {
    return (
        <div className=''>
            <Menu/>
            <div className="container">
                <h1 className='texts'>Selected for you</h1>
                <Carousel/>
                <h1 className='texts'>Now Popular</h1>
                <Carousel/>
            </div>
        </div>
    );
}

export default Home;