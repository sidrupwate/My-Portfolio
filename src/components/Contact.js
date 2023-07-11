import React from 'react';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import '../styles/Style.css';

const ContactComponent = () => {
    return (
        <>
            <div id='contact' className='contact dark-mode'>
                <h4 style={{color:"blue", fontWeight:"800"}}>CONTACT</h4>
                <div>
                    <Email />
                    <a className='contactdetail' href="mailto:siddharthrupwate@gmail.com">siddharthrupwate@gmail.com</a>
                </div>
                <div>
                    <Phone />
                    <a className='contactdetail' href="tel:+918652503057">+91 8652503057</a>
                </div>
                <div>
                    <LocationOn />
                    <span className='contactdetail'>Kalyan, Mumbai</span>
                </div>
            </div>
        </>
    );
};

export default ContactComponent;
