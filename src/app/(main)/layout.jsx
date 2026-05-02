import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Exampl from '@/components/Exampl';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <Exampl />
            <Hero />
            {children}
            <Footer />
        </div>
    );
};

export default layout;