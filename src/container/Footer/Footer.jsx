import React from 'react';
import './Footer.css';
import {images} from "../../constans";
import dataIslands from '../../constans/dataIslands'
import FooterIslands from "./FooterIslands";


const Footer = () => {
    return (
        <div className='app__footer'>
            <div className='app__footer-informationAndLogo'>
                <img className='app__footer-logo' src={images.logo} alt="logo"/>
                <div className='app__footer-information_islands'>
                    <div className='app__footer-information-menu'>
                        <h1 className='h__figtree'>ISLANDS</h1>
                        <div className='app__footer-information-menu'>
                            {dataIslands.islands.map((element, index) => (
                                <FooterIslands key={element + index} title={element.title}/>
                            ))}
                        </div>
                    </div>
                    <div className='app__footer-information-menu'>
                        <h1 className='h__figtree'>PACKAGES</h1>
                        <div className='app__footer-information-menu'>
                            {dataIslands.packeges.map((element, index) => (
                                <FooterIslands key={element + index} title={element.offer}/>
                            ))}
                        </div>
                    </div>
                    <div className='app__footer-information-menu'>
                        <h1 className='h__figtree'>TAHITI</h1>
                        <div className='app__footer-information-menu'>
                            {dataIslands.tahiti.map((title, index) => (
                                <FooterIslands key={title + index} title={title.title}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='app__footer-socialMedia'>
                    <img src={images.facebook} alt="FC"/>
                    <img src={images.pinterest} alt="PR"/>
                    <img src={images.twitter} alt="TW"/>
                    <img src={images.instagram} alt="INST"/>
                    <img src={images.youtube} alt="YT"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;