import React from 'react';
import { Grid, Typography } from '@mui/material';
import LoginPage from '../images/image/LoginPage.png';
import ProductPage from '../images/image/ProductPage.png';
import CheckoutPage from '../images/image/CheckoutPage.png';
import Weather from '../images/image/Weather.png';
import '../styles/Style.css';
import { GitHub } from '@mui/icons-material';

const Project = () => {
    return (
        <>
            <div id='project' className='project'>
                <div className='project-text1'>
                    <h4 style={{ color: "blue", fontWeight: "800" }}>PROJECT</h4>
                    <h3 style={{ fontWeight: "800", fontSize: "25px" }}>SHOPPING APP</h3>
                    <h3 style={{ fontWeight: "800", fontSize: "25px" }}>Every Project is a unique piece of Development</h3>
                    <p className='hero-text' style={{ fontWeight: "500", color: "gray" }}>
                        The React Shopping App is an online platform where users can browse and purchase various products from a catalog. The website will provide users with a seamless shopping experience, allowing them to add products to their cart and checkout.
                    </p>
                    <a href='https://github.com/sidrupwate/React-Final-Project' className='social'><GitHub style={{ fontSize: "35px" }} /><span style={{ fontWeight: "800", margin: "0 5px" }}>Code</span></a>
                </div>
                <div className='project-img-section'>
                    <Grid className='project-img-grid' style={{ padding: "150px" }} container spacing={0}>
                        <Grid item xs={12} sm={0} md={5}>
                            <img height={300} width={200} className='project-img' src={LoginPage} alt='Login Page' />
                        </Grid>
                        <Grid style={{ marginTop: "40px" }} item xs={12} sm={0} md={7}>
                            <img height={250} width={500} className='project-img' src={ProductPage} alt='Product Page' />
                        </Grid>
                        <Grid style={{ marginTop: "40px" }} item xs={12} sm={0} md={14}>
                            <img height={300} width={600} className='project-img' src={CheckoutPage} alt='Checkout Page' />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='project'>
                <div className='project-img-section'>
                    <Grid className='project-img-grid' style={{ padding: "0 150px" }} container spacing={0}>
                        <Grid style={{ marginTop: "40px" }} item xs={12} sm={0} md={7}>
                            <img height={320} width={500} className='project-img' src={Weather} alt='Weather' />
                        </Grid>
                    </Grid>
                </div>
                <div className='project-text'>

                    <h3 style={{ fontWeight: "800", fontSize: "25px" }}>WEATHER APP</h3>
                    <h3 style={{ fontWeight: "800", fontSize: "25px" }}>Every Project is a unique piece of Development</h3>
                    <p className='hero-text' style={{ fontWeight: "500", color: "gray" }}>

                        React Weather App, a web-based platform developed using React and API integration. Get real-time weather updates for your current location and search for cities worldwide. Experience accurate data, intuitive design, customizable preferences, forecasts.
                    </p>
                    <a href='https://github.com/sidrupwate/My-Weather-App.git' className='social'><GitHub style={{ fontSize: "35px" }} /><span style={{ fontWeight: "800", margin: "0 5px" }}>Code</span></a>
                </div>
            </div>
        </>
    );
}

export default Project;
