import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import experience from '../assets/experience.png';
import "./Experience.css";


const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);
  
  return (
    <div className='experiencecontainer' >
    <div className="experience" data-aos="fade-up">
      <div className="exleft">
        <img src={experience} alt="" />

      </div>
      <div className="exright">
      <h1>Experience</h1>
                    <p>Internships--</p>
                    <p className='degreeinfo'>"Gaining valuable hands-on experience and practical insights."</p>
      </div>
    </div>
     
    </div>
  )
}

export default Experience