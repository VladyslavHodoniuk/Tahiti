import React from 'react';
import './Book.css';
const Book = () => {
    return (
        <div className='app__book-background'>
            <div className='app__book'>
                <div className='app__book-item'>
                    <h1 className='h__figtree'>Unique vacations, tailored to your desires</h1>
                    <p className='p__figtree'>Our travel experts will take care of everything. Whether choosing from our
                        packaged vacations or customizing your own, extraordinary service and exceptional value are just
                        a call or click away.</p>
                    <button className='app__book-button'>BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Book;