import React from 'react';
import slack from '../../../assets/logos/slack.png';
import google from '../../../assets/logos/google.png';
import uber from '../../../assets/logos/uber.png';
import netflix from '../../../assets/logos/netflix.png';
import airbnb from '../../../assets/logos/airbnb.png';
import { styled } from '@mui/material';
import { Box } from '@mui/system';

const brands = [
    slack,
    google,
    uber,
    netflix,
    airbnb
]

const Brands = () => {
    const BrandWrapper = styled(Box)(({theme})=> ({
        marginBottom: "4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > img" : {
            height: "60px",
        },
        [theme.breakpoints.down('md')] : {
           flexDirection: "column",
           gap: 2,
           marginBottom: "1rem",
        }
    }))
    return (
        <BrandWrapper>
        {
            brands.map((brand, i) => <img key={i} src={brand} alt="brand"/>)
        }
        </BrandWrapper>
    );
};

export default Brands;