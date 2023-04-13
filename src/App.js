import React from "react";

import './App.css';
import {Discover, Experience, Why, Book, Footer} from './container';
import Navbar from "./components/Navbar/Navbar";
import ImageSliderAuto from "./components/Slider/Slider";
import {ImageData} from './components/Slider/JsonData.json'

function App() {

    return (
        <div>
            <Navbar/>
            <ImageSliderAuto ImageData={ImageData} SlideInterValTime={15000}/>
            <Discover/>
            <Experience/>
            <Why/>
            <Book/>
            <Footer/>
        </div>
);
}

export default App;
