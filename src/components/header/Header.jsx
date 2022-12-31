import React, { useState, useEffect } from 'react';
import imageSlider from './imageSlide';
import './Header.css';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentSlide === 3) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide+1)
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);
  const bgImageStyle = {
    backgroundImage: `linear-gradient(45deg, rgba(217, 225, 233, 0.323), rgba(15, 00, 80, 0.9)), url(${imageSlider[currentSlide].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
  }
  const goToNext = (currentSlide) => {
    setCurrentSlide(currentSlide);
  }
  return (
    <div style={bgImageStyle} className='container header__container'>
      <div className='div'>
        <h2>{imageSlider[currentSlide].title}</h2>
        <a href="/contact" className='btn btn-primary'>Let's Talk</a>
        <div className='carousel'>
          {
            imageSlider.map((imageSlider, currentSlide) => (
              <span key={currentSlide} onClick={() => {goToNext(currentSlide)}} className={currentSlide ? 'active' : undefined}></span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header
