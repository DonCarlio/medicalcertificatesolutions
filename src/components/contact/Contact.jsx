import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';
import {BsTelephone} from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_60evz2c', 'template_ilt0yzl', form.current, '-nGnaiFzKGKmJq9Wo')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>royalcollegeofficialuk@gmail.com</h5>
            <a href="mailto:royalcollegeofficialuk@gmail.com" target='__blank'>Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1(424)261-6933</h5>
            <a href="https://wa.me/+14242616933" target='__blank'>Send A Message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>+1(213)347-4194</h5>
            <a href="https://t.me/+12133474194" target='__blank'>Send A Message</a>
          </article>
        </div>
        <div className='contact__second'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email Address' required />
            <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
          <article className="contact__option">
            <BsTelephone className='contact__option-icon' />
            <h4>Call Offline</h4>
            <h5>+44 7451270827</h5>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
