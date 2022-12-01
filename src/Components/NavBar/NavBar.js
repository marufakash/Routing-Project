import React from "react";
import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/desktop'>Desktop</NavLink>
            <NavLink to='/laptop'>Laptop</NavLink>
            <NavLink to='/watch'>Smart Watch</NavLink>
            <NavLink to='/earbuds'>Earbuds</NavLink>
            <NavLink to='/monitor'>Monitor</NavLink>
            <NavLink to='/tablet'>Tablet</NavLink>
            <NavLink to='/office'>Office Equipment</NavLink>
            <NavLink to='/camera'>Camera</NavLink>
            <NavLink to='/keyboard'>KeyBoard</NavLink>
            <NavLink to='/mouse'>Mouse</NavLink>
            <NavLink to='/headphone'>Headphone</NavLink>
            <NavLink to='/pendrive'>Pen Drive</NavLink>
        </nav>
    )
}

export default NavBar;