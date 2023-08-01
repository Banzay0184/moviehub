import React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import svgHome from '../../img/home-4-svgrepo-com.svg'
import svgCatalog from '../../img/file-alt-svgrepo-com.svg'
import svgSave from '../../img/save-svgrepo-com.svg'

function Menu(props) {
    const activeLink = 'menu-active';
    const normalLink = '';
    return (
        <div className='menu'>
            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/">
                <img src={svgHome} alt=""/>
                Home
            </NavLink>
            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/Catalog">
                <img src={svgCatalog} alt=""/>
                Catalog
            </NavLink>
            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/Save">
                <img src={svgSave} alt=""/>
                Save
            </NavLink>
        </div>
    );
}

export default Menu;