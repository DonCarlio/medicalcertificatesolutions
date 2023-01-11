import React, { useContext } from 'react';
import Faqs from '../../components/faqs/Faqs';
import MenuContext from '../../hooks/MenuContext';
import './About.css';

const About = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <>
      {!showMenu
        ? (<section>
              <h5>Find Out More</h5>
              <h2>About Us</h2>
            <div className='container'>
              <p className='paved'>Royal college exams assistance we are your one stop solution for your royal college exam help/assistance like getting the certificate without exams(authentic) score upgrading for past exam scores be it recent or past exams. We also provide leaked questions and answers prior to the exam date. We help in registration and also provide online courses to build and mold candidates for the exam. We provide assistance from the MRCP, MRCPCH , MRCS, MRCOG, MRCEM, MRCPSYCH, M.ortho, MRCGP. We also provide authentic language certificates like OET with or without exams and it’s leaked questions too.</p>

              <p className='paved'>Founded in 1998 and now you are able to shop for real DIY Diploma on line at the bottom charges from us. We are rated #no1 valid real and pretend diploma/diploma carrier company from 1998 to 2022. We’re right here to store your time and money with our enhance valid files solution for your comfy journey. We can offer all kinds of university diplomas or degrees, even many real certificates sample with you for viewing earlier than the order, and so many other files. We are available 24 hours 7 days for stay customer support. You can get what you need faux documents, university diplomas, university diplomas, real professional transcripts, or levels at a very affordable value.</p>
              </div>

            <Faqs />
        </section>)
        : undefined
      }
    </>
  )
}

export default About