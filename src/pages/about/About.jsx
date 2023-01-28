import React, { useContext } from 'react';
import Faqs from '../../components/faqs/Faqs';
import MenuContext from '../../hooks/MenuContext';
import logo from '../../assets/favicon.png';
import './About.css';

const About = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <>
      {!showMenu
        ? (<section>
              <h5>Find Out More</h5>
              <h2>About Us</h2>
              <img src={logo} alt="buy medical certificates logo" className='about__logo' />
            <div className='container'>
              <h1 className='center'>Buy MRCP/MRCPCH/MRCS/MRCOG/MRCEM/MRCGP Certificates Online</h1>
              <p className='paved'>
                The Medical certificate solutions Team is made up of 33 highly connected, experienced, and fully dedicated professionals from all over the world with the sole purpose of providing you with the best and most quality assistance possible as far as online medical diplomas and certificates go. We are your one stop solution to all your Royal College Exam woes or issues such as:
                <ul> 
                  <li>Obtaining an authentic certificate without seating the exam.</li>
                  <li>Score upgrading and modification for past exam sessions be it recent or more ancient sessions.</li>
                  <li>Leaked questions and answers prior to the exam date.</li>
                  <li>We help in registration and also provide online courses to build and mold candidates for the exam.</li>
                  <li>We provide assistance from the MRCP, MRCPCH , MRCS, MRCOG, MRCEM, MRCPSYCH, M.ortho, MRCGP. We also provide authentic language certificates like OET with or without exams and it’s leaked questions too.</li>
                </ul>
              </p>

              <p className='paved'>WE ARE HIGHLY CONNECTED AND ISSUE REAL AND VALID DOCUMENTS(CERTIFICATES). THE DOCUMENTS WE ISSUE ARE ALL 100% AUTHENTIC AND LEGIT. IN ORDER TO MAKE SURE OUR CLIENTS DON’T GET CAUGHT OR HAVE ANY COMPLICATIONS WHILE USING THE DOCUMENTS, WE HAVE DIRECT CONNECTIONS WITH THE (ROYAL COLLEGE, BRITISH COUNCIL, CAMBRIDGE UNIVERSITY, IMMIGRATION OFFICES AND TOP GOVERNMENT OFFICIALS THAT WE WORK WITH AROUND THE GLOBE.</p>

              <p className='paved'>ALL THE DOCUMENTS WE ISSUE ARE VERIFIABLE. THAT IS, YOU CAN VERIFY  YOUR CERTIFICATE ONLINE OR AT THE INSTITUTION FOR CONFIRMATION BEFORE USE. REGARDING PASSPORTS AND THE OTHER DOCUMENTS, WE GIVE YOU A LINK FOR VERIFICATION OR YOU GO DIRECTLY TO THE IMMIGRATION OFFICE AND PICKUP YOUR PASSPORT OR VISA.</p>

              <p className='paved'>LAST YEAR (2022), WE MANAGED TO REGISTER AND ISSUE OVER 600 THOUSAND CANDIDATES JUST FOR MRCP, MAKING IT THE HIGHEST NUMBER WE HAVE EVER RECORDED IN A CALENDER YEAR. THIS MAKES US TO UNDERSTAND THAT, MRCP IS THE MOST POPULAR MEDICAL EXAM. WE WORK DIRECTLY WITH THE DATABASE MANAGERS OF THE ROYAL COLLEGE OF PHYSICIANS AND ALL CANDIDATES ARE REGISTERED WHERE THEY ARE LOCATED.</p>

              <p className='paved'>WE ALSO GIVE DISCOUNT TO CLIENTS. THAT IS, FOR CLIENTS ORDERING MORE THAN ONE DOCUMENT AND FOR CLIENTS WORKING WITH US FOR THE SECOND TIME. WE HARDLY CHARGE OUR CONTACTS SO, YOU CAN CONTACT US ANY TIME TO EITHER DIRECT A FRIEND OR RELATIVE TO WORK WITH US AND BY SENDING US YOUR INFORMATION MAKING US TO UNDERSTAND YOU’VE WORKED WITH US BEFORE.</p>

              <p className='paved'>SO, IF YOU FIND OUR SERVICES PERFECT FOR YOU THEN, CONTACT ASAP AND OUR CUSTOMER SERVICE WILL GET BACK TO YOU WITH MORE INFORMATION ON HOW THE PROCESS WORKS.</p>

              <Faqs />

              <h1 className='center'>Buy IELTS certificate online | Registered IELTS certificate Online</h1>

              <p className='paved'>Buy IELTS certificate online, Buy TOEFL certificate online, Buy GRE Certificate Online, Buy GMAT Certificate Online, Buy CAE certificate online, IELTS Certificate online, Registered IELTS certificate online, IELTS certificate without exam, Buy original IELTS certificate, Buy CAE certificate online, Buy TOEFL certificate online, Buy IELTS certificate online, IELTS Certificate online, Registered IELTS certificate online, Buy GRE Certificate Online, Buy GMAT Certificate Online, Buy original IELTS certificate, IELTS certificate without exam.</p>

              <h1 className='center'>Buy MRCP Certificate online | MRCP Without Exam</h1>

              <p className='paved'>MRCP Certificate online, Buy MRCS certificate online, Registered MRCP certificate online, Buy MRCOG Certificate Online, Buy PLAB Certificate Online, Buy original MRCP certificate, MRCP certificate without exam, Buy original MRCP certificate, Buy CAE certificate online, MRCP certificate without exam, Buy MRCP certificate online, Buy MRCS certificate online, Buy MRCOG Certificate Online, Buy PLAB Certificate Online, Buy CAE certificate online, MRCP Certificate online, Buy MRCS certificate online, Buy MRCP certificate online, Registered MRCP certificate online.</p>
              </div>
        </section>)
        : undefined
      }
    </>
  )
}

export default About