import React, {useState} from 'react';

import {HiMenu} from "react-icons/hi";
import {HiX} from "react-icons/hi";
import './Navbar.css';
import images from '../../constans/images';


const Navbar = () => {

    const [isActive, setIsActive] = useState(true);
    const handleClick = event => {

        setIsActive(current => !current);
    };
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt=""/>
            </div>
            <ul className='app__navbar-links'>
                <li><a href="#discover">DISCOVER</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#travel">TRAVEL GUIDES</a></li>
                <li><a href="#about">ABOUT</a></li>
            </ul>


            <div className='app__navbar-smallscreen'>
                    <HiMenu className={isActive ? 'app__HiMenu' : 'app__HiBtn-hidden'} fontSize={30} onClick={() => {
                        handleClick();
                        setToggleMenu(true);
                    }}/>
                {toggleMenu && (
                    <div className='app__navbar-smallscreen-overlay slide-bottom'>
                        <HiX fontSize={30} className='overlay__close' onClick={() => {
                                handleClick(false);
                                setToggleMenu(false);
                        }}/>
                        <div className='app__navbar-smallscreen-links_center'>
                            <ul className='app__navbar-smallscreen-links'>
                                <li className=''><a href="#discover">DISCOVER</a></li>
                                <li className=''><a href="#experience">EXPERIENCE</a></li>
                                <li className=''><a href="#travel">TRAVEL GUIDES</a></li>
                                <li className=''><a href="#about">ABOUT</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;