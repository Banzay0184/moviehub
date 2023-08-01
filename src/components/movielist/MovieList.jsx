import React from 'react';
import starSvg from "../../img/star-svgrepo-com.svg";
import {NavLink} from "react-router-dom";
import './style.css'

function MovieList({index, img, title, genres, date, star}) {
    return (
        <div>
            <NavLink className="movie-list" to={`/moviedescr/${index}`}>
                <div className="movie-list-box">
                    <img className='movie-list-img' src={img} alt=""/>
                    <div className="movie-text">
                        <h1 className='movie-list-text'>{title}</h1>
                        <p className='movie-list-title'>{genres}</p>
                        <p className='movie-list-title'>{date}</p>
                    </div>
                </div>
                {star === 1 &&
                <div className='star-list'>
                    <img src={starSvg} alt=""/>
                </div>
                }
                {star === 2 &&
                <div className='star-list'>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                </div>
                }
                {star === 3 &&
                <div className='star-list'>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                </div>
                }
                {star === 4 &&
                <div className='star-list'>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                </div>
                }
                {star === 5 &&
                <div className='star-list'>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                    <img src={starSvg} alt=""/>
                </div>
                }
            </NavLink>
        </div>
    );
}

export default MovieList;