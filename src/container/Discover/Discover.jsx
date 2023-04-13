import React from 'react';
import offers from "../../constans/data";
import './Discover.css';
import CardItem from "./CardItem/CardItem";

const Discover = () => {
    return (
        <div className='app__discover-background' id='discover'>
            <div className='app__discover'>
                <div className='app__discover-header'>
                    <h1 className='h__figtree'>DISCOVER <span style={{fontWeight: '300'}}>TAHITI</span></h1>
                    <p className='p__figtree'>Just pick your destination. Our travel experts will take care of the
                        rest.</p>
                </div>
                <div className='app__discover-offers_container'>
                    <div className='app__discover-offers'>
                        {offers.map((offers, index) => (
                            <CardItem key={offers.title + index} imgUrl={offers.imgUrl} title={offers.title}
                                      text={offers.text} price={offers.price} img={offers.img}/>
                        ))}
                    </div>
                </div>

                <div className='app__discover-explore'>
                    <div className='app__discover-explore_title'>
                        <h1 style={{color: '#333333'}} className='p__figtree'>Discover all Tahiti has to offer.</h1>
                    </div>
                    <div className='app__buttonAndInput'>
                        <input className='app__discover-explore_input'/>
                        <button className='app__discover-explore_button'>EXPLORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;