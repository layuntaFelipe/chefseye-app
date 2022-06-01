import React from 'react';
import '../panelStyle.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import InfoBox from './InfoBox';

function Slider() {
  const slides = [1,2,3,4,5,6,7,8];

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div id='main-slider-container'>
        <div id="slider">
            {slides.map((slide,index)=>{
                    return(
                        <InfoBox/>
                    );
                })}
        </div>
        <MdChevronLeft className="slider-icon left" onClick={slideLeft} />
        <MdChevronRight className="slider-icon right" onClick={slideRight} />
    </div>
  )
}

export default Slider