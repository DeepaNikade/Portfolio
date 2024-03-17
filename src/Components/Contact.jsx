import React,{useEffect} from 'react';
import deepa from '../assets/deepa.jpg';
import git from '../assets/github.svg';
import linkdin from '../assets/linkedin.svg';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className='conatctcontainer'>
      <div className="maincontact" data-aos="fade-up">

      
      <div className="leftcontact">
<img src={deepa} alt="" />
      </div>
      <div className="rightcontact">

        <h1>Contact Me</h1>
        <p>You can contact me at the places mentioned below. I will try to get back to you as fast as I can.</p>
        <div className="conatacticons">
        <a href="https://github.com/DeepaNikade"><img src={git} alt="" /></a>
            <a href="https://www.linkedin.com/in/deepa-nikade/"><img src={linkdin} alt="" /></a>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Contact