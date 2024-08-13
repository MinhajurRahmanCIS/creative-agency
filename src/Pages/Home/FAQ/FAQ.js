import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CreativeAccordion from '../../../components/CreativeAccordion/CreativeAccordion';

const FAQ = () => {
    const faqs = [
        {
            title: "Accordion 1: Responsive Web Design",
            description: "Responsive web design ensures that websites work seamlessly across different devices, providing an optimal user experience whether viewed on a desktop, tablet, or smartphone."
        },
        {
            title: "Accordion 2: Mobile App UI/UX",
            description: "Mobile App UI/UX design focuses on creating intuitive and user-friendly interfaces for mobile applications, ensuring a seamless experience for users on the go."
        },
        {
            title: "Accordion 3: Typography",
            description: "Typography is the art of arranging text in a way that is both aesthetically pleasing and easy to read. It plays a crucial role in graphic design, branding, and web development."
        },
        {
            title: "Accordion 4: Front-End Development",
            description: "Front-end development involves creating the visual aspects of a website, including layout, design, and interactivity, using languages like HTML, CSS, and JavaScript."
        },
        {
            title: "Accordion 5: Web Security",
            description: "Web security involves protecting websites and web applications from cyber threats, ensuring data integrity, confidentiality, and availability."
        }
    ]

    return (
        <Box>
            <SectionTitle title="Frequently Asked" colored="Questions" />
            <Box>
                {
                    faqs.map((faq, i) =>
                        <CreativeAccordion
                            key={i}
                            faq={faq}
                        />)
                }
            </Box>
        </Box>
    );
};

export default FAQ;