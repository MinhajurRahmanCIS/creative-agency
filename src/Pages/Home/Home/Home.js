import React from 'react';
import Brand from '../Brand/Brand';
import Brands from '../Brands/Brands';
import Services from '../Services/Services';
import OurWorks from '../OurWorks/OurWorks';

const Home = () => {
    return (
        <div>
            <Brand/>
            <Brands/>
            <Services/>
            <OurWorks/>
        </div>
    );
};

export default Home;