import React, {useState, useEffect} from 'react';
import './Slider.css';


const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageSrc: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const {ImageSrc} = sliderProperty;

    const [count, setCount] = useState(0);


    const [animationCls, setAnimationCls] = useState('displayBlock fade');


    const NextClick = () => {

        setAnimationCls(() => ('displayNone'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock')
        }, 800);

        if (count <= props.ImageData.length - 1) {
            setCount(count + 1);
        }

        if (count === props.ImageData.length - 1) {
            setCount(0);
        }

    };

    useEffect(() => {

        setSliderProperty((previous) => ({
            ...previous,
            ImageSrc: props.ImageData[count].ImageSrc
        }));

    }, [count]);


    useEffect(() => {

        const interval = setInterval(() => {

            NextClick();

        }, props.SlideInterValTime);

        return () => clearInterval(interval);

    }, [count]);


    return (
        <>
            <div className='slideshow-container '>
                <div className='app__welcome'>
                    <h1 className='h__figtree'>WELCOME <span>TO TAHITI</span></h1>
                    <p className='p__figtree'>Your vacation starts here</p>
                </div>
                <div className={animationCls}>
                    <img src={ImageSrc} className='imageStyle' alt="Img"/>
                </div>

            </div>
        </>

    );
};

export default ImageSliderAuto;