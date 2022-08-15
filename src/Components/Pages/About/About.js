import { Container, Grid } from '@mui/material';
import React from 'react';
import MainNav from '../../Shared/MainNav/MainNav';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <MainNav></MainNav>
            <Container>
                <div
                    className='h-auto md:h-screen background-left'
                >
                    <Grid container spacing={2} className='h-auto md:h-full'>
                        <Grid item md={6} xs={12} className='h-full flex items-center'>
                            <div>
                                <h2 className='text-4xl mt-20' >About Us</h2>
                                <p className='text-xl mt-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consectetur ipsum doloremque iure accusantium. Nobis ea facere vitae, quidem nisi, sit culpa odio vero sapiente accusamus cum. Quis, ad ipsum?
                                </p>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className='h-full flex items-center'>

                            <img src="https://media.istockphoto.com/vectors/website-information-concept-vector-id1286378180?k=20&m=1286378180&s=612x612&w=0&h=rJQDvkcuuKOvs0wgNYEXsvBwCYE2Bppzait4gbgdDa8=" alt="" />
                        </Grid>

                    </Grid>
                </div>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;