import React from 'react';
import "./Footer.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CallIcon from '@mui/icons-material/Call';
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='connections'>
                    <ul className='ConnectionsUl'>
                        <li>
                            <a href="#Home">
                                <span > <HomeOutlinedIcon className='icons' /></span> Home
                            </a>
                        </li>
                        <li>
                            <a href="#AboutMe">
                                <span className='icons'> <PermIdentityOutlinedIcon /></span> About me
                            </a>

                        </li>

                        <li>
                            <a href="#Contact">
                            <span className='icons'> <CallIcon /></span> Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="socialMedia">
                    <a href="#"><img src="fac.png" alt="" /></a>
                    <a href="#"><img src="ins.png" alt="" /></a>
                    <a href="#"><img src="tw.png" alt="" /></a>
                    <a href="#"><img src="you.png" alt="" /></a>
                </div>
            </div>
        </>
    );
};

export default Footer;