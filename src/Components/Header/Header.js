import React from 'react';
import style from './header.module.css';
import logo from '../images/logo.png';
import { FaGift, FaUserAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={style.header}>
            <div className={style.img}>
                <img src={logo} alt="logo" onClick={() => navigate('/')} />
            </div>
            <div className={style.search}>
                <input type="text" name="search" id="search" />
            </div>
            <div className={style.same}>
                <div className={style.icon}>
                    <FaGift />
                </div>                
                <div>
                    <h4>Offers</h4>
                    <h6>Latest offers</h6>
                </div>
            </div>
            <div className={style.same}>
                <div className={style.icon}>
                    <AiFillThunderbolt />
                </div>
                <div>
                    <h4>Deals</h4>
                    <h6>Special deals</h6>
                </div>
            </div>
            <div className={style.same}>
                <div className={style.icon}>
                    <FaUserAlt />
                </div>
                <div>
                    <h4>Account</h4>
                    <h6><a href="">Register</a> or <a href="">Login</a></h6>
                </div>
            </div>
            <div className={style.same}>
                <button>PC Builder</button>
            </div>
        </div>
    )
}

export default Header;