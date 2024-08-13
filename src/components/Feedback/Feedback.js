import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Feedback = ({ feedback }) => {
    const { img, name, address, message } = feedback;
    return (
        <Card sx={{
            mx: "auto",
            boxShadow: "none",
            border: "1px solid #BFBFBF"
        }}>
            <Box sx={{
                display: "flex",
                justifyItems: "start",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "20px",
            }}
            >
                <Avatar
                    alt={name}
                    src={img}
                    sx={{ width: 64, height: 64 }}
                />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "5px",
                }}>
                <Typography gutterBottom variant="h5" sx={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 0,
                }}
                    component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h5" sx={{
                    fontSize: 16
                }}
                    component="div">
                    {address}
                </Typography>
                </Box>
            </Box>

            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{
                    fontSize: 16
                }}>
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Feedback;