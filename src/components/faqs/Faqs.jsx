import React from 'react';
import './Faqs.css';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviewData = [
  {
    name: 'Is the certificate authentic?',
    review: "Since we are getting your certificate ate directly from the database your certificate is exactly the same as that of other candidates who sat for the exam."
  },
  {
    name: 'How legit is this process?',
    review: "The process is very legit because we are working directly with the database manager and examiners for the various exam bodies"
  },
  {
    name: 'Will I run into any trouble later?',
    review: "You have nothing to worry about when working with us as all the work is authentic and verifiable online by any body who need to check."
  },
  {
    name: 'How do I know the work is legit? ',
    review: "We have more than 100 clients who have worked with our company and a 99.9% success rate. So you have nothing to worry about."
  },
]

const Faqs = () => {
  return (
    <section id='testimonials'>
      <h5>What People Often Ask</h5>
      <h2>Frequently Asked Questions</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        reviewData.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Faqs
