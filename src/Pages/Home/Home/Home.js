import React from 'react';
import Brand from '../Brand/Brand';
import Brands from '../Brands/Brands';
import Services from '../Services/Services';
import OurWorks from '../OurWorks/OurWorks';
import Feedbacks from '../Feedbacks/Feedbacks';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Brand/>
            <Brands/>
            <Services/>
            <OurWorks/>
            <Feedbacks/>
            <FAQ/>
        </div>
    );
};

export default Home;