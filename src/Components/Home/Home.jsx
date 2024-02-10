import React from 'react';
import "././Home.css"
import { FiDownload } from "react-icons/fi";
const Home = () => {
    return (
        <div className='container'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <h3 className='h3TopLeft'>SaulDesign</h3>
                </div>
                <div className="topbarRight">
                    <ul className="TopbarRightUl" >
                        <li className='TopbarRightElements'><button> Home</button></li>
                        <li className='TopbarRightElements'><button> About Me</button></li>
                        <li className='TopbarRightElements'><button> Contact</button></li>
                    </ul>
                </div>
            </div>
            <div className="mainHome" id='Home'>

                <div className="mainLeft">
                    <img src="Vector187.png" alt="" />
                    <p>CREATIVE UI <br /><span>DESIGNER</span></p>
                </div>

                <div className='mainRight'>
                    <div className='mianAdamak'>
                    </div>
                </div>

            </div>
            <div className="buttonBax">
                <button className='HireMe'>Hire me</button>

                <button className='Download'>Download CV 
                <FiDownload className='downloadIcon'/>
                </button>
            </div>
            <div className="borderElement">

            <img src="Frame7.png"  />
            </div>
        </div>
    );
};

export default Home;