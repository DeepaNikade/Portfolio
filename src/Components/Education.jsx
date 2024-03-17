import React from 'react';
import "./Education.css"
import hat from '../assets/hat.png';
import sgu from '../assets/sgu.png';
import geekster from '../assets/geekster.png';
import aiml from '../assets/aiml.jpg';
import datascience from '../assets/datascience.jpg';
import sdlc from '../assets/sdlc.jpg';
import gitcertificate from '../assets/gitcertificate.png';
import leardership from '../assets/leadership.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='educationcontainer'>
            <div className="education" data-aos="fade-up">
                <div className="eduleft" data-aos="fade-right">
                    <img src={hat} alt="" />
                </div>
                <div className="eduright">
                    <h1>Education</h1>
                    <p>Basic Qualification and Certifications</p>
                    <p className='degreeinfo'>"Explore my educational journey, including foundational qualifications and certifications obtained along the way."</p>
                </div>
            </div>

            <div className="educationdegree" data-aos="fade-up">
                <div className="dgreeheading">
                    <h1>Degree Received</h1>
                </div>
                <div className="maindegree">
                    <div className="degreeleft" data-aos="fade-right">
                        <div className='degreeimage'>
                            <img src={sgu} alt="" />
                        </div>
                    </div>
                    <div className="degreeright" data-aos="fade-left">
                        <div className="rightupperdegree">
                            <h1>Sanjay Ghodawat University (2019-2023) </h1>
                            <p>Bachelors in Computer Science and Engineering</p>
                        </div>
                        <div className="rightlowedegree">
                            <ul>
                                <li>Successfully completed Bachelor of Technology (B.Tech) in Computer Science Engineering</li>
                                <li>Demonstrated proficiency in core subjects including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Computer Networks.</li>
                                <li>Explored specialized areas such as Machine Learning, Artificial Intelligence, Software Engineering, and Data Science gaining practical knowledge and skills.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="maindegree">
                    <div className="degreeleft" data-aos="fade-right">
                        <div className='degreeimage'>
                            <img src={geekster} alt="" />
                        </div>
                    </div>
                    <div className="degreeright" data-aos="fade-left">
                        <div className="rightupperdegree">
                            <h1>Geekster </h1>
                            <p>FullStack development Course</p>
                        </div>
                        <div className="rightlowedegree">
                            <ul>
                                <li> Geekster offers a comprehensive curriculum covering both front-end and back-end development, providing a well-rounded education in full-stack development.</li>
                                <li> hands-on projects throughout the course, allowing to apply theoretical knowledge to real-world scenarios.</li>
                                <li> I embark on an exciting journey of continuous learning, honing my skills, and staying updated with the latest technologies and industry trends to become a proficient developer.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="certificates" data-aos="fade-up">
                <div className="certficateheading">
                    <h1>Certificates</h1>
                </div>
                <div className="certificateImages">
                 <div className="allcertifacte" data-aos="fade-up">
                    <img src={aiml} alt="" />
                    <img src={datascience} alt="" />
                    <img src={gitcertificate} alt="" />
                    <img src={sdlc} alt="" />
                    <img src={leardership} alt="" />
                 </div>

                </div>
            </div>
        </div>
    )
}

export default Education