import { useState } from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import {BsChevronUp} from 'react-icons/bs';
import {BsChevronDown} from 'react-icons/bs';

const Services = () => {
  const [details, setDetails] = useState('');
  return (
    <section id='services'>
      <h5>What We Can Do For You</h5>
      <h2>Our Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Certificate Without Exams</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Are you interested in getting any number of these certificates and/or licenses listed above without seating for the exams first? We got you covered. Just contact us by any means of your choice in the contacts page, and we will attend to you immediately.</p>
            </li>
          </ul>
        </article>

          {/* =========== END OF UI/UX ========== */}

        <article className="service">
          <div className="service__head">
            <h3>Score Modification</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <span>
                <p className={details === 'first' ? 'title' : ''}>Eligibility</p>
                <small className={details === 'first' ? 'show' : 'no-show'}>To be eligible for this service, you must have RECENTLY had an unsatisfactory result in any of the exams listed above. The Eligibility period is 12 months from the results release date.
                <BsChevronUp className='service__arrows' title='show less' onClick={() => {setDetails('');}}/></small>
              </span>
              <BsChevronDown className={details === 'first' ? 'no-show' : 'show service__arrows'} title='show more' onClick={() => {setDetails('first');}}/>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <span>
                <p className={details === 'second' ? 'title' : ''}>Explanation</p>
                <small className={details === 'second' ? 'show' : 'no-show'}>Have you met the eligibility criteria? Great! We can modify your scores, and top them up to whatever level or grade you want, by directly accessing them in the database with the help of the information you provide us. Do well to contact us and tell us what you need.
                However, if you do not meet the criteria above, we can always offer the other two services, depending on your needs. It's not too late to get that dream qualification yet. You're just a message or a phone call away!
                <BsChevronUp className='service__arrows' title='show less' onClick={() => {setDetails('');}}/></small>
              </span>
              <BsChevronDown className={details === 'second' ? 'no-show' : 'show service__arrows'} title='show more' onClick={() => {setDetails('second');}}/>
            </li>
          </ul>
        </article>

        {/* ========= END OF WEB-DEVELOPMENT ========== */}

        <article className="service">
          <div className="service__head">
            <h3>Leak Questions And Answers</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Are you already registered to seat any of the above mentioned exams in the near future? Is your exam date approaching? Contact us via any means of your choice and we will make the exact questions and their correct corresponding answers available to you before the exam, so that your chances of passing will be almost certain. The leak questions we provide are 100% guaranteed to appear on your question paper. Help us help you achieve your dream today.</p>
            </li>
          </ul>
        </article>

        {/* ========== END OF CONTENT CREATION ========== */}

      </div>
    </section>
  )
}

export default Services
