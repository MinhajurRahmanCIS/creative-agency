import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <Box>
            <Container>
                <Navbar/>
                <Outlet />
            </Container>
            <Footer/>
        </Box>
    );
};

export default Main;