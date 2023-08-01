import React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import starSvg from '../../img/star-svgrepo-com.svg'

function Movie({title, img, genres, index, star, item}) {
    return (
        <NavLink className="movie-card" to={`/moviedescr/${index}`}>
            <img className='movie-img' src={img} alt=""/>
            <h1 className='movie-card-text'>{title}</h1>
            <p className='movie-card-title'>{genres[0]}</p>
            {star === 1 &&
            <div className='star'>
                <img src={starSvg} alt=""/>
            </div>
            }
            {star === 2 &&
            <div className='star'>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
            </div>
            }
            {star === 3 &&
            <div className='star'>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
            </div>
            }
            {star === 4 &&
            <div className='star'>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
            </div>
            }
            {star === 5 &&
            <div className='star'>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
                <img src={starSvg} alt=""/>
            </div>
            }
        </NavLink>
    );
}

export default Movie;