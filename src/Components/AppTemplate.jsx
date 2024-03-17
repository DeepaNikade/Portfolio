import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import './Template.css';

const AppTemplate = () => {
  return (
    <div className='mainContainer'>
        <div className="navbarpart">
          <div className="navbarlogo">Deepa.N()</div>
          <div className="navbaritems">
            <div>
                <Link to="/"><button>Home</button></Link>
            </div>
            <div>
                <Link to="/education"><button>Education & Certificates</button></Link>
            </div>
            <div>
                <Link to="/experience"><button>Experience</button></Link>
            </div>
            <div>
                <Link to="/project"><button>Projects</button></Link>
            </div>
            <div>
                <Link to="/contact"><button>Contact</button></Link>
            </div>
          </div>
        
        </div>
        <div className="mainpart">

        </div>
        <Outlet/>

    </div>
  )
}

export default AppTemplate