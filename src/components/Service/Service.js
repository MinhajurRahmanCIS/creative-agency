import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Service = ({ service }) => {
    const { title, description, img } = service;
    return (
        <Card sx={{
            mx: "auto",
            boxShadow: "none", 
            "&:hover": {
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"
        }
        }}>
            <CardMedia
                component="img"
                image={img}
                title="green iguana"
                sx={{ 
                    height: 74,
                    width: "auto",
                    mx: "auto",
                    mt: 3
                 }}
            />
            <CardContent sx={{
                textAlign: "center"
            }}>
                <Typography gutterBottom variant="h5" sx={{
                    fontWeight: "bold",
                    fontSize: 20
                }}
                    component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    fontSize: 16
                }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;