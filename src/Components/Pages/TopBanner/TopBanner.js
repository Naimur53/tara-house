import { Container, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './TopBanner.css'
import { NavLink } from 'react-router-dom';
import fottage from '../../../media/pexels-marian-croitoru-5607784.mp4'

const TopBanner = () => {
    return (
        <div className='relative filter    mb-5'>
            <div className='banner-container h-screen'>
                <video autoPlay muted loop>
                    <source src={fottage} type="video/mp4" />
                </video>
            </div>
            <div className='absolute inset-0' style={{ background: 'rgba(0,0,0,.5)' }}>
                <div className='h-full  flex justify-center items-center '>
                    <div>
                        <Box className='text-center flex flex-col items-center'>
                            <h1 className='text-4xl font-mono text-white'>Get Your<span className='transparent-style font-bold'> Customize</span> design</h1>
                            <div className='w-full md:w-1/2 text-gray-300 text-lg'>
                                <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending</p>
                            </div>
                            <Button component={NavLink} to='/explore' sx={{ my: 3 }} color='warning' variant='contained'>Explore</Button>
                        </Box>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TopBanner;