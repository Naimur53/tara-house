import { Container, Grid } from '@mui/material';
import React from 'react';
import icon1 from '../../../media/icons/i-1.svg'
import icon2 from '../../../media/icons/i-2.svg'
import icon3 from '../../../media/icons/i-3.svg'
import icon4 from '../../../media/icons/i-4.svg'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AirIcon from '@mui/icons-material/Air';
const DroneUse = () => {
    return (
        <div data-aos="fade-up" className='mt-24 mb-32'>
            <Container>
                <div className='text-center flex items-center flex-col my-20'>
                    <h1 className='text-5xl font-poppins text-gray-700 mb-3'>
                        Jacket Use Cutting Edge Technologies &
                        Products To Get The Best Results
                    </h1>
                    <h6 className='text-xl w-1/2 text-gray-500'> If you want some thing uniq or customize by your own we are here for you. </h6>
                </div>
                {/* img description area */}
                <Grid container spacing={2} >
                    <Grid item xs={12} md={3} >
                        <div className='text-right mb-10'>
                            <div >
                                <h6 className='inline-block mr-3'>AERIAL PHOTOGRAPHY </h6>
                                <AcUnitIcon></AcUnitIcon>
                            </div>
                            <div >
                                <em  >Tara  is a Spanish apparel retailer based in Arteixo, A Coruña, Galicia, Spain. The company specialises in fast fashion, and their products include clothing, accessories, shoes, swimwear, beauty, and perfumes.</em>
                            </div>
                        </div>
                        <div className='text-right'>
                            <div >
                                <h6 className='inline-block mr-3'>RESOLUTION</h6>
                                <AccessibilityIcon />
                            </div>
                            <div >
                                <em className='font-italic'> voluptatum provident quos eligendi quaerat aperiam obcaecati cupiditate excepturi tempore consequatur adipisci molestiae, nam porro corporis fugiat quasi enim, repudiandae similique dignissimos qui. Quaerat quibusdam sit facilis iusto.
                                </em>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className='flex justify-center'>
                        <img src="https://i.ibb.co/XpTHYYy/printed-dress-4.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='  mb-10'>
                            <div >
                                <AddShoppingCartIcon />
                                <h6 className='inline-block ml-3'>Easy to Buy </h6>
                            </div>
                            <div >
                                <em  >
                                    Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery
                                </em>
                            </div>
                        </div>
                        <div className=' '>
                            <div >
                                <AirIcon />
                                <h6 className='inline-block ml-3'>Custom design  </h6>
                            </div>
                            <div >
                                <em>This is the most complete starter guide to selling on online marketplaces. Learn which platforms are best for your products, and how to use them</em>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Container>


        </div>
    );
};

export default DroneUse;