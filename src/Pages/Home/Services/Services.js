import React from 'react';
import service1 from "../../../assets/icons/service1.png"
import service2 from "../../../assets/icons/service2.png"
import service3 from "../../../assets/icons/service3.png"
import { Box, Grid } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Service from '../../../components/Service/Service';
const services = [
    {
        title: "Web & Mobile design",
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        img: service1
    },
    {
        title: "Graphic design",
        description: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
        img: service2
    },
    {
        title: "Web development",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        img: service3
    },
];


const Services = () => {
    return (
        <Box>
            <SectionTitle title="Provide awesome" colored="services" />
            <Grid container spacing={2}>
                {
                    services.map((service, i) =>
                        <Grid  key={i} item xs={12} sm={6} md={4}>
                            <Service
                                service={service}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default Services;