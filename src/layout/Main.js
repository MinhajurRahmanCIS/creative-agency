import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <Box>
            <Container>
                <Navbar/>
                <Outlet />
            </Container>
        </Box>
    );
};

export default Main;