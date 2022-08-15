import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box style={{ backgroundColor: '#000', color: "#fff", marginTop: '30px' }}
        >
            <Container sx={{ pb: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3'>Tara House</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <List>
                            <ListItem><Link to='/about'>About Tara House</Link></ListItem>
                            <ListItem><Link to='/login'>Sign up to see details</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>

                    </Grid>
                </Grid>
                <Box sx={{ display: { xs: 'block', md: 'flex' }, borderTop: '1px solid gray', mt: 3, py: 2 }}>
                    <small style={{ margin: 'auto' }}>Copyright &#169; 2022 Tara House</small>
                    <List sx={{ display: { xs: 'block', md: 'flex' }, width: '80%' }}>
                        <ListItem><Link to='/Privacy'>Privacy Policy</Link></ListItem>
                        <ListItem><Link to='/Term'> Terms of Use</Link></ListItem>


                    </List>
                </Box>

            </Container >
        </Box >
    );
};

export default Footer;