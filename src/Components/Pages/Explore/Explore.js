import { Container, Grid, Button, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import ExpoBanner from '../ExpoBanner/ExpoBanner';
import SearchIcon from '@mui/icons-material/Search';
const Explore = props => {
    const [layout, setLayout] = useState(3);
    const [drones, setDrones] = useState([]);
    const [display, setDisplay] = useState([]);


    const handleClick = () => {
        if (4 === layout) {
            setLayout(3);
        }
        else {
            setLayout(4);
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('https://enigmatic-headland-64217.herokuapp.com/drones')
            .then(result => {
                setDrones(result.data.slice(10, 100))
                setDisplay(result.data.slice(10, 100))
            })
    }, []);
    const handleChange = ({ target: { value } }) => {
        console.log(value)
        console.log(display);
        const items = drones.filter(single => single.name.toLowerCase().includes(value.toLowerCase()))
        setDisplay(items)
    }
    return (
        <>
            <ExpoBanner></ExpoBanner>
            <Container className='pb-5'>
                <div className='flex justify-between items-center'>
                    <Button className='hover:border-gray-400 hover:text-gray-500' sx={{ my: 4, color: 'black', borderColor: 'black' }} variant='outlined' onClick={handleClick}> change layout {layout === 3 ? <Grid4x4Icon /> : <Grid3x3Icon />}</Button>
                    <div className='w-1/2 relative'>

                        <input type="text" placeholder='Search by product Name' className=' bg-gray-100 p-2 rounded-md w-full border inline-block border-gray-900' onChange={handleChange} />
                        <div className='inset-0 absolute pointer-events-none flex justify-end items-center'>
                            <div className='px-4'>
                                <SearchIcon></SearchIcon>
                            </div>

                        </div>
                    </div>
                </div>
                <Grid container spacing={2} >
                    {
                        drones.length ? display.length ? display.map(drone => <ServiceCard key={drone._id} home data={drone} layout={layout}></ServiceCard>) : <Grid item xs={12} >
                            <div className='p-5 flex justify-center'>
                                <h2 className='text-center text-xl'>No items found!</h2>
                            </div>
                        </Grid> : [...Array(6).keys()].map(num => <Grid key={num} item xs={12} md={layout}>
                            <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%' }} height={300} />
                            <Skeleton sx={{ width: '80%' }} height={35} animation="wave" />
                            <Skeleton sx={{ width: '85%' }} height={35} animation="wave" />
                            <Skeleton sx={{ width: '25%' }} height={50} animation="wave" />
                        </Grid>)
                    }
                </Grid>
            </Container >
        </>
    );
};

export default Explore;