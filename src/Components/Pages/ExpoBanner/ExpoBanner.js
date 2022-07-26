import { Container } from '@mui/material';
import React from 'react';
import './ExpoBanner.css'
import { Typewriter, } from 'react-simple-typewriter'

const ExpoBanner = () => {
    return (
        <div className='expo-wrapper relative'>
            <Container sx={{ display: 'flex ' }} className='h-full items-center z-10 relative'>
                <div className='pt-10 ' >
                    <h2 className='text-white text-4xl font-poppins '><span className='mr-4'>We Have World</span>
                        <span className=' '>
                            <Typewriter
                                className='text-red-50'
                                words={['Best Cloth', 'Best shoe']}
                                loop
                                cursor
                                cursorStyle='_'
                            />
                        </span>
                    </h2>
                    <h4 className='text-white text-lg mt-5  font-poppins'>We provide the most iconic and qualified drone and  more than 1 year Guarantee and warranty. Checkout our best drone below then believe.
                    </h4>


                </div>
            </Container>

        </div>
    );
};

export default ExpoBanner;