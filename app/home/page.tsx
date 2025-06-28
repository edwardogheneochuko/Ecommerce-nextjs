
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import SliderComponent from './SliderComponent'
import Categories from './Categories'
import NewArrival from './NewArrival'
import TopSellers from "./TopSellers";
 
const HomePage = () => {
  return (
    <div >
        <SliderComponent /> 
        <Categories />
        <NewArrival />
        <TopSellers />
    </div>
  )
}

export default HomePage
