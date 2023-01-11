import React from 'react';
import { GiCash } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import { TfiPrinter } from 'react-icons/tfi';
import { MdLocalShipping } from 'react-icons/md';
import { GiStack } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';

import './Qualities.css';


const Qualities = () => {
  return (
    <section id='#Qualities'>
      <h5>Why You Should Choose Us</h5>
      <h2>Our Qualities</h2>

      <div className="container quality__container">
          <div className="quality__cards">
            <article className="quality__card">
              <GiCash className='quality__icon'/>
              <h5>Affordable Prices</h5>
              <small>We are constantly working to offer our clients the widest possible variety of services at the cheapest possible costs.</small>
            </article>
            <article className="quality__card">
              <MdSupportAgent className='quality__icon'/>
              <h5>Friendly Customer Support</h5>
              <small>We employ a personnel of highly skilled, professional, and exceptional individuals, who are at your service 24/7.</small>
            </article>
            <article className="quality__card">
              <TfiPrinter className='quality__icon'/>
              <h5>Best Quality Printers</h5>
              <small>We have the best hardware, including printers of the best quality, designed to print rapidly, effectively, and reliably.</small>
            </article>
            <article className="quality__card">
              <MdLocalShipping className='quality__icon'/>
              <h5>Fast and Discreet Shipping</h5>
              <small>Professional packaging, shipping and transportation of all our documents and products in the safest and most discreet manner.</small>
            </article>
            <article className="quality__card">
              <GiStack className='quality__icon'/>
              <h5>1000+ Samples</h5>
              <small>We have gathered more than a thousand samples from different sources, and we are more than ready to share with you.</small>
            </article>
            <article className="quality__card">
              <GrTechnology className='quality__icon'/>
              <h5>Advanced Technology</h5>
              <small>We are up to date with the most recent technology in the traveling documents industry.</small>
            </article>
          </div>
      </div>
    </section>
  )
}

export default Qualities
