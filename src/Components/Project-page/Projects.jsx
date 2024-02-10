import React from 'react';
import "./Projects.css"
import Prods from './Prod/prods';
const Projects = () => {
    return (
        <div className='recentWorksContainer'>
            <div className='recentWorksTop'>
                <div className="recentWorksLeft">
                    <div className='recentWorksElement'>
                        <p>My recent <span>works</span></p>
                        <div className='recentWorksButtons'>
                            <button className="recentWorksBtn colorBlue">All</button>
                            <button className="recentWorksBtn">UI</button>
                            <button className="recentWorksBtn">UX</button>
                            <button className="recentWorksBtn">Web Design</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recentWorksBotton" st>
                <Prods/>
            </div>
        </div>
    );
};

export default Projects;