import React, {useState} from "react";
import Menu from "../menu/Menu";
import starSvg from "../../img/star-svgrepo-com.svg";
import {NavLink} from "react-router-dom";

function Save() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('games')) || [])

    function handleRemove(id) {
        const newData = cart.filter(item => item.id !== id)
        localStorage.setItem('games', JSON.stringify(newData))
        setCart(newData)
    }

    return (
        <div>
            <Menu co={cart.length}/>
            <div className='container'>
                <h1 className='text'>My movie</h1>
                {cart.map(item => (
                    <div key={item.id} className="card-game">
                        <NavLink className="movie-list" to={`/moviedescr/${item.index}`}>
                            <div className="movie-list-box">
                                <img className='movie-list-img' src={item.img} alt=""/>
                                <div className="movie-text">
                                    <h1 className='movie-list-text'>{item.title}</h1>
                                    <p className='movie-list-title'>{item.genres}</p>
                                    <p className='movie-list-title'>{item.date}</p>
                                </div>
                            </div>
                            {item.star === 1 &&
                            <div className='star-list'>
                                <img src={starSvg} alt=""/>
                            </div>
                            }
                            {item.star === 2 &&
                            <div className='star-list'>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                            </div>
                            }
                            {item.star === 3 &&
                            <div className='star-list'>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                            </div>
                            }
                            {item.star === 4 &&
                            <div className='star-list'>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                            </div>
                            }
                            {item.star === 5 &&
                            <div className='star-list'>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                                <img src={starSvg} alt=""/>
                            </div>
                            }
                        </NavLink>
                        <button className='btnDel' onClick={() => handleRemove(item.id)}>Delete</button>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Save;