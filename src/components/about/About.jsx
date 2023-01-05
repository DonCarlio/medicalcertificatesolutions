import React from 'react';
import abPic from '../../assets/IMG_0616.JPG';
import './About.css';

const About = () => {
  return (
    <section id='#About'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={abPic} alt="my pic" />
          </div>
        </div>
        <div className="about__content">
          <p>
          Founded in 1998 and now you are able to shop for real DIY Diploma on line at the bottom charges from us. We are rated #no1 valid real and pretend diploma/diploma carrier company from 1998 to 2022.

We’re right here to store your time and money with our enhance valid files solution for your comfy journey.

We can offer all kinds of university diplomas or degrees, even many real certificates sample with you for viewing earlier than the order, and so many other files.

We are available 24 hours 7 days for stay customer support. You can get what you need faux documents, university diplomas, university diplomas, real professional transcripts, or levels at a very affordable value.
          </p>
          <a href="/about" className='btn btn-primary'>More About Us</a>
        </div>
      </div>
    </section>
  )
}

export default About
