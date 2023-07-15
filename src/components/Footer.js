import React from 'react';
import { Grid } from '@mui/material';
import '../styles/Style.css';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <a style={{ textDecoration: "none", color: "gray" }} href="#">
              <h1 style={{ fontWeight: "700", fontSize: "30px" }}>sid<span style={{ color: "red" }}>.</span>dev</h1>
            </a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="social-icons">
              <a href='https://www.linkedin.com/in/siddharth-rupwate' className='social'>
                <LinkedIn style={{ fontSize: "35px", color: "white" }} />
              </a>
              <a href='https://github.com/sidrupwate' className='social'>
                <GitHub style={{ fontSize: "35px", color: "white" }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
