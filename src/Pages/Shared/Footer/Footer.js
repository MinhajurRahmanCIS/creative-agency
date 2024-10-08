import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor:"primary.main",
            mt:10,
            p: 8
        }}>
            <Container>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Typography sx={{
                        fontSize: "1.5rem",
                        color: "#fff"
                    }}>Creative Agency</Typography>
                    <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Typography sx={{
                        color: "rgba(255, 255, 255, 0.5)"
                    }}>Creative Agency</Typography>
                    <Button sx={{
                        bgcolor: "primary.green",
                        marginLeft: 2
                    }}>Get Started</Button>
                    </Box>
                </Box>
                <Divider 
                sx={{
                    mt: 3,
                    bgcolor: "rgba(255, 255, 255, 0.5)"
                }}
                />
            </Container>
        </Box>
    );
};

export default Footer;