import { Box, Grid, IconButton, Tab, Tabs } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreativeCard from '../CreativeCard/CreativeCard';
import { cardData } from './cardData';

const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ my: 5, mb: 10 }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Box>
                    <SectionTitle title="Here are some of" colored="our works" sx={{
                        textAlign: "left"
                    }} />
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2
                }}>
                    <Tabs value={value} onChange={handleChange} centered sx={{

                        "& .MuiTabs-indicator": {
                            display: "none"
                        },
                        "& .MuiTab-root.Mui-selected": {
                            color: "primary.green",
                            fontWeight: "bold"
                        },
                        "& .MuiButtonBase-root": {
                            textTransform: "capitalize"
                        }
                    }}>
                        <Tab label="All" />
                        <Tab label="Web & Mobile design" />
                        <Tab label="Graphic design" />
                        <Tab label="Web development" />
                        <Box>
                            <IconButton sx={{
                                border: `1px solid #959EAD`,
                                mr: 2
                            }}
                                onClick={() => setValue(value - 1)}
                                disabled={value === 0}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton sx={{
                                border: `1px solid #959EAD`
                            }}
                                onClick={() => setValue(value + 1)}
                                disabled={value === 3}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        </Box>
                    </Tabs>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={3} justifyContent='center'>
                    {
                        cardData[value].map(cd =>
                            <Grid item >
                                <CreativeCard
                                    key={cd.id}
                                    cd={cd}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default OurWorks;
