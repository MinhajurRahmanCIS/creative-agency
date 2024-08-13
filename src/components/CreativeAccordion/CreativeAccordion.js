import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CustomExpandIcon = () => {
    return (
        <div>
        <div className='expandMoreIcon'>
            <AddIcon />
        </div>
        <div className='removeExpandIcon'>
            <RemoveIcon />
        </div>
    </div>
    )
};

const CreativeAccordion = ({faq}) => {
    const {title, description} = faq;
    return (
        <Accordion sx={{
            boxShadow: "none",
            border: "1px solid #E5EAF4",
            p: 2,
            "& .Mui-expanded":{
                    "& .expandMoreIcon":{
                        display: "none"
                    },
                    "& .removeExpandIcon":{
                        display: "block",
                        "& svg":{
                            color: "primary.green"
                        }
                    }
                },
        }}>
            <AccordionSummary sx={{
                "& .removeExpandIcon":{
                    display: "none"
                },
                "& p": {
                    color: "primary.main",
                    fontWeight: "bold",
                },
                "& .Mui-expanded": {
                    "& p": {
                        color: "primary.green",
                    },
                }
            }}
                expandIcon={<CustomExpandIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{
                    color: "5A7184"
                }}>
                   {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CreativeAccordion;