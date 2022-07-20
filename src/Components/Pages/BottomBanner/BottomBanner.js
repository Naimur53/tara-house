import { Container, Grid, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomBanner = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img data-aos="fade-right" style={{ width: '100%' }} src="https://demo1.leotheme.com/leo_alaska_demo/27-home_default/faded-short-sleeves-tshirt.jpg" alt="" />

                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={6}>
                    <div>
                        <h2 className='text-5xl mb-5 tracking-wide font-poppins  text-gray-700'>
                            We are here only for you to get your dream come true
                        </h2>
                        <h3 className='mb-5 text-gray-600 font-poppins text-lg'>
                            Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending
                        </h3>
                        <Button component={NavLink} to='/explore' className='hover:border-gray-400 hover:text-gray-500' sx={{ color: 'orange', borderColor: 'orange', '&:hover': { borderColor: 'gray' } }} variant='outlined'>Let's explore more</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BottomBanner;