import { Container, Grid, Button, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
// // https://i.ibb.co/wpZqTRY/printed-chiffon-dress.jpg
// // https://i.ibb.co/6W4DP9w/printed-dress-2.jpg 

// fugit adipisci laborum, a eveniet cupiditate iste qui porro dolorem dolore maxime inventore. Animi deleniti, tempore voluptates quis maxime nostrum quo esse, distinctio, voluptatibus in eligendi.// Lorem ipsum 
const Services = props => {
    const [layout, setLayout] = useState(3);
    const [drones, setDrones] = useState([]);
    const handleClick = () => {
        if (4 === layout) {
            setLayout(3);
        }
        else {
            setLayout(4);
        }
    }
    useEffect(() => {
        axios.get('https://enigmatic-headland-64217.herokuapp.com/drones')
            .then(result => setDrones(result.data?.slice(10, 17)));
    }, []);
    return (
        <Container>
            <div className='text-center flex items-center flex-col mt-20'>
                <h1 className='text-5xl font-poppins text-gray-700 mb-3'>
                    We Use The Best cloth & Peripheral Devices

                </h1>
                <h6 className='text-xl w-2/3 text-gray-500'> self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending.</h6>
            </div>
            <Button className='hover:border-gray-400 hover:text-gray-500' sx={{ my: 4, color: 'black', borderColor: 'black' }} variant='outlined' onClick={handleClick}> change layout {layout === 3 ? <Grid4x4Icon /> : <Grid3x3Icon />}</Button>
            <Grid container spacing={2} >
                {
                    drones.length ? drones.map(drone => <ServiceCard key={drone._id} home data={drone} layout={layout}></ServiceCard>) : [...Array(6).keys()].map(num => <Grid key={num} item xs={12} md={layout}>
                        <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%' }} height={300} />
                        <Skeleton sx={{ width: '80%' }} height={35} animation="wave" />
                        <Skeleton sx={{ width: '85%' }} height={35} animation="wave" />
                        <Skeleton sx={{ width: '25%' }} height={50} animation="wave" />
                    </Grid>)

                }
            </Grid>
        </Container >
    );
};

export default Services;