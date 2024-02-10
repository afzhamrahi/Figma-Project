import React from 'react';
import "./Section.css"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Section = () => {
    return (
        <div className='sectionPage' id='Contact'>
            <img src="keyboard.png" className='keyboard' />
            <div className="section">
                <div className="sectionElements">
                    <div className="sectionLeft">
                        <p>Got a project in <br /><span>mind?</span></p>
                        <img src="felesh.png" alt="" className='felesh' />
                        <img src="Group 2372.png" alt="" className='Group2372' />
                    </div>
                    <div className="sectionRight">

                        <div className='formBox'>
                            <form action="">

                                <p className='name'>Your name</p>
                                <input type="text" placeholder='name' />

                                <p className='email'>Your email</p>
                                <input type="text" placeholder='email' />
                            </form>
                        </div>

                        <div className='textareaBox'>
                            <p>Your message</p>
                            <textarea name="" id="" cols="58" rows="19" placeholder='Message'></textarea>
                            <button>Send Message <span><SendOutlinedIcon className='sendIcon' /></span></button>
                        </div>

                    </div>
                </div>
            </div>
            <img src="mail.png" alt="" className='mail' />

        </div>
    );
};

export default Section;