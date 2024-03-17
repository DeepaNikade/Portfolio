import React, { useEffect } from 'react';
import image from '../assets/home.png';
import homelower from "../assets/homedown.png";
import git from '../assets/github.svg';
import linkdin from '../assets/linkedin.svg';
import html from '../assets/html5.svg';
import css from '../assets/css3-alt.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import nodejs from '../assets/node.svg';
import npm from '../assets/npm.svg';
import mogodb from '../assets/mogodb.png';
import mysql from '../assets/mysql.png';
import figma from '../assets/figma.png';
import java from '../assets/java.svg';
import tailwind from '../assets/tailwind.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Home.css";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className='homecontainer'>
        <div className="homeupper" data-aos="fade-up">

        <div className="homeleft">
          <h1>Hello 👋.</h1>
          <p>I'm <span style={{color:"red"}}>Deepa Nikade.</span>Enthusiastic full-stack learner  and web developer, dedicated to mastering both front-end and back-end technologies. </p>
          <div className="homeicons">
            <a href="https://github.com/DeepaNikade"><img src={git} alt="" /></a>
            <a href="https://www.linkedin.com/in/deepa-nikade/"><img src={linkdin} alt="" /></a>
          </div>
          <div className="homebutton">
            <Link to="/contact">
          <button>Contact me</button>
            </Link>
          </div>
        </div>
        <div className="homeright">
            <img src={image} alt="" />

        </div>
        </div>

        <div className="homelower">
            <div className='homelowerheading'>

            <h1>Here's what I do.</h1>
            </div>
            <div className="homelower1" >

            <div className="homelowerleft" data-aos="fade-left">
                <img src={homelower} alt="" />

            </div>
            <div className="homeloweright" data-aos="fade-right">
                <h1>Full Stack Development</h1>

                <div className="homelowerrightimages">
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={js} alt="" />
                  <img src={react} alt="" />
                  <img src={nodejs} alt="" />
                  <img src={npm} alt="" />
                  <img src={mysql} alt="" />
                  <img src={mogodb} alt="" />
                  <img src={tailwind} alt="" />
                  <img src={figma} alt="" />
                  <img src={java} alt="" />
                  
                  
                </div>
                <div className="homelowerpoints">
                    <ul>
                        <li> <span>Mastering Technologies:</span> I diligently study both front-end and back-end technologies, aiming to become proficient in a wide range of tools and frameworks.</li>
                        <li><span>Building Dynamic Solutions:</span> I apply my knowledge to develop dynamic and efficient web applications, leveraging my skills to create impactful digital experiences.</li>
                        <li><span>Continuous Growth:</span> Committed to lifelong learning, I consistently seek out new challenges and opportunities to expand my expertise, ensuring I stay at the forefront of technology trends and advancements.</li>
                    </ul>
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default Home