import React from 'react';
import './style.css'
import {NavLink, useParams} from "react-router-dom";
import {Date} from "../../date";
import backSvg from '../../img/arrow-up-bold-svgrepo-com.svg'


function MovieDescr(props) {
    const {id} = useParams();
    const date = Date[id];


    function handleAdd(id, title, img, genres, date, star) {
        const games = JSON.parse(localStorage.getItem('games')) || []
        const data = {id, title, img, genres, date, star}
        const newGames = games.length > 0 ? games.filter(item => item.id !== id) : []
        newGames.push(data)
        localStorage.setItem('games', JSON.stringify(newGames))
    }

    return (
        <div>
            <NavLink className='back' to="/">
                <img alt={date.id} className='backsvg' src={backSvg}/>
            </NavLink>
            <iframe title={date.id} src={date.video}>

            </iframe>
            <div className='container'>
                <div className='game-descr'>
                    <h1 className='game-descr-text'>{date.title}</h1>
                    <button onClick={() => handleAdd(date.id, date.title, date.img, date.genres, date.date, date.star)}
                            className="download">
                        Save
                    </button>
                    <div className="game-descr-box">
                        <h1>INFO</h1>
                        <p><span>Release Date: </span>{date.date}</p>
                        <p><span>Genres: </span>{date.genres}</p>
                        <h1 className='des-tit'>DESCRIPTION:</h1>
                        <p>{date.descr}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDescr;