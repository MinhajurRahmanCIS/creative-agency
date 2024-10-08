import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';
const CreativeCard = ({cd}) => {
    const {title, details, image} = cd;
    const theme = useTheme();
    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: "10px", minWidth: "345px" }}>
            <CardMedia
                sx={{ height: 190 }}
                image={image}
                title="green iguana"
                style={{
                    borderRadius: "10px"
                }}
            />
            <CardContent sx={{
                p: 0,
                pb: 0,
                pt: 2,
                "&:last-child": {
                    pb: 0
                },
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center"
            }}>
                <Box>
                <Typography gutterBottom variant="body" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="primary.main" fontWeight={600} fontSize={20}>
                {details}
                </Typography>
                </Box>
                <IconButton sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    height: "30px",
                    width: "30px",
                    "& svg": {
                        color: "primary.main"
                    }
                }}>
                    <AddIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default CreativeCard;