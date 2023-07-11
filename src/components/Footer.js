import React from 'react';
import '../styles/Style.css';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <a style={{textDecoration:"none", color:"gray"}} href="#">
                    <h1 style={{ fontWeight: "700", fontSize: "30px" }}>sid<span style={{ color: "red" }}>.</span>dev</h1>
                </a>
                <div>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/siddharth-rupwate' className='social'><LinkedIn style={{ fontSize: "35px", color: "white" }} /></a><a href='https://github.com/sidrupwate' className='social'><GitHub style={{ fontSize: "35px", color: "white" }} /></a>
                </div>
            </div>
        </>
    );
};

export default Footer;
