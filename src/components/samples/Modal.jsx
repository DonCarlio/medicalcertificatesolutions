import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import './Samples.css';

const Modal = ({ clickedImg, setClickedImg, viewNext, viewPrev}) => {
  const handleClick = e => e.target.classList.contains('dismiss') && setClickedImg(null);
  
  return (
    <>
      <div className='overlay dismiss' onClick={handleClick} />
        <FaArrowAltCircleLeft onClick={viewPrev} className='arrow left' />
        <div className='modal-div'>
          <img src={clickedImg} alt='clicked sample' className='modal-img' />
          <IoIosCloseCircle className='dismiss close' onClick={handleClick} />
        </div>
        
        {/* <span className='dismiss close' onClick={handleClick}>x</span> */}
        <FaArrowAltCircleRight onClick={viewNext} className='arrow right' />
    </>
    // </div>
  )
}

export default Modal