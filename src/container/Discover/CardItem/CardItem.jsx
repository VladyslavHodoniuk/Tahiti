import React from 'react';
import './CardItem.css';


const CardItem = ({imgUrl, title, text, price, img}) => {
    return (
        <div className='app__cardItem'>
            <div className='app__cardItem-image'>
                <img src={imgUrl} alt="Img"/>
            </div>
            <div className='app__cardItem_container'>
                <h1 style={{color: '#3DBE98'}} className='app__CardItem p__figtree'>{title}</h1>
                <p className='p__figtree'>{text}</p>
            </div>
                <button className='app__cardItem-button'>
                    <div className='app__cardItem-button_item'>
                    <span style={{color:'#FFFFFFB2'}} className='p__figtree'>FROM</span>
                    <span className='app__cardItem-price'>{price}</span>
                    </div>
                    <div className='app__cardItem-button_arrow'>
                    <img src={img} alt=""/>
                    </div>
                </button>

        </div>
    );
};

export default CardItem;