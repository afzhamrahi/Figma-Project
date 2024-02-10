import React from 'react';
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <div className='container'>
            <div className="AbouteMeWrapper">
                <div className='abouteMeLeft' id='AboutMe'>
                    <img src="vector141.png" className='Vector141' />
                    <img src="lightbulb.png" className='lightbulb' />
                    <p className='Aboute'>Aboute <span className='Me'>Me</span></p>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... <span>Read more </span> </p>
                    <img src="vector186.png" className='vector186' />
                </div>
                <div className='abouteMeRight'>
                    <div className='mainAboute'>
                        <img src="Group2350.png" className='Group2350'/>
                        <img src="Group62.png" className='Group62' />
                        <img src="Ellipse3.png" className='Ellipse3' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;