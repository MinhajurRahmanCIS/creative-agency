import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Box, Grid } from '@mui/material';
import Feedback from '../../components/Feedback/Feedback';

const Feedbacks = () => {
    const feedbacks = [
        {
            name: "Nash Patrik",
            address: "CEO, Manpol", 
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            img: "https://www.fairviewer.org/wp-content/uploads/2017/12/1Q02011.jpg",
        },
        {
            name: "Miriam Barron",
            address: "CEO, Manpol", 
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            img: "https://i0.wp.com/dranchalsclasses.org/wp-content/uploads/2019/04/t20-5.jpg",
        },
        {
            name: "Bria Malone",
            address: "CEO, Manpol", 
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            img: "https://img.freepik.com/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg",
        },
    ];
    return (
        <Box>
            <SectionTitle title="Clients" colored="Feedback" />
            <Grid container spacing={2}>
                {
                    feedbacks.map((feedback, i) =>
                        <Grid key={i} item xs={12} sm={6} md={4}>
                            <Feedback
                                feedback={feedback}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default Feedbacks;