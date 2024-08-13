import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import branding from '../../../assets/logos/Frame.png';

const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: "70vh",
    backgroundColor: "rgba(122, 178, 89, 0.15)",
    padding: theme.spacing(4),
    margin: "4rem 0",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}))

const Brand = () => {
    return (
        <BrandingWrapper>
            <Stack spacing={5}>
                <Typography sx={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.2"
                }}>
                    Let’s Grow Your Brand
                    <br />
                    To The
                    <br />
                    Next Level</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </Typography>
                <Button sx={{
                    width: "50%"
                }}>Hire us</Button>
            </Stack>
            <Box sx={{
                width: "50%",
                display: ["none", "none", "block"]
            }}>
                <img src={branding} alt="brandingPhoto" style={{ width: "100%" }} />
            </Box>
        </BrandingWrapper>
    );
};

export default Brand;