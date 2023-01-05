import React, {useState} from 'react';
import './Samples.css';
import imageArray from './data';
import Modal from './Modal';

const Samples = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (image, index) => {
    setClickedImg(image);
    setCurrentIndex(index);
  }

  const viewNext = () => {
    const arrLength = imageArray.length;
    if(currentIndex + 1 >= arrLength) {
      setCurrentIndex(0);
      const newUrl = imageArray[0];
      setClickedImg(newUrl);
      return;
    };
    const newIndex = currentIndex + 1;
    const newUrl = imageArray.filter((image) => {
      return imageArray.indexOf(image) === newIndex;
    });
    const newImage = newUrl[0];
    setClickedImg(newImage);
    setCurrentIndex(newIndex);
  }

  const viewPrev = () => {
    const arrLength = imageArray.length;
    if(currentIndex === 0) {
      setCurrentIndex(arrLength-1);
      const newUrl = imageArray[arrLength-1];
      setClickedImg(newUrl);
      return;
    };
    const newIndex = currentIndex - 1;
    const newUrl = imageArray.filter((image) => {
      return imageArray.indexOf(image) === newIndex;
    });
    const newImage = newUrl[0];
    setClickedImg(newImage);
    setCurrentIndex(newIndex);
  }
  return (
    <section id='#Samples'>
      <h5>What We Do</h5>
      <h2>Our Samples</h2>
      <div className='container samples__container'>
        <div className='samples__images'>
          {imageArray.map((image, index) => (
            <div key={index} className='samples__image'>
              <img src={image} alt="sample" onClick={() => handleClick(image, index)} />
            </div>
          ))}
          {clickedImg && <Modal clickedImg={clickedImg} viewNext={viewNext} viewPrev={viewPrev} setClickedImg={setClickedImg} />}
        </div>
      </div>
      
    </section>
  )
}

export default Samples