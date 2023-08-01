import React, {useState} from 'react';
import Menu from "../menu/Menu";
import {Date} from "../../date";
import MovieList from "../movielist/MovieList";
import './style.css'
import searchSvg from '../../img/search-alt-svgrepo-com.svg'


function Catalog(props) {
    const [search, setSearch] = useState('')
    return (
        <div>
            <Menu/>
            <div className="container">
                <h1 className='text'>Catalog</h1>
                <form action="">
                    <img src={searchSvg} alt=""/>
                    <input onChange={(e) => setSearch(e.target.value)} type="search"/>
                </form>
                <div className="">
                    {Date.filter((movie) => {
                        return search.toLocaleLowerCase() === '' ? movie : movie.title.toUpperCase().includes(search)
                    }).map((movie, index) => {
                        return <MovieList
                            key={index}
                            title={movie.title}
                            img={movie.img}
                            reviews={movie.reviews}
                            index={index}
                            star={movie.star}
                            genres={movie.genres}
                            date={movie.date}

                        />

                    })}
                </div>
            </div>
        </div>
    );
}

export default Catalog;