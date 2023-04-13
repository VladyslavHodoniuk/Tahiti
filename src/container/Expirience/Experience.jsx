import React from 'react';
import './Experience.css';

const Experience = () => {

    return (
        <div className='app__experience_background'>
            <div className='app__experience'>
                <div className='app__experience-header'>
                    <h1 className='h__figtree'>EXPERIENCE <span>TAHITI</span></h1>
                    <p className='p__figtree' style={{color: '#FFF'}}>Just pick your destination. Our travel experts
                        will take care of the rest.</p>
                </div>

                <div className='app__experience-information'>
                    <div className='app__experience-information_item'>
                    <p className='p__figtree' style={{color: '#FFF'}}>
                        The beauty, drama, and power of today’s Tahitian dance testify to its resilience in Polynesian
                        culture. In ancient times, dances were directly linked with all aspects of life. One would dance
                        for
                        joy, to welcome a visitor, to pray to a god, to challenge an enemy, and to seduce a mate.
                    </p>
                    </div>
                    <div className='app__experience-button'>
                    <button className='app__experience-button-item'>LEARN MORE</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;