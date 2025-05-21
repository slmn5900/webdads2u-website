import React from 'react';
import { Metadata } from 'next';
import About from './About';
export const metadata = {
    title: 'Web Design Company In Chennai | Best Website Designers In Chennai',
    description: 'Top web design company in chennai: expert in creating stunning, responsive websites. Affordable rates, custom solutions.',
    keywords: 'web design company in chennai,best website designers in chennai,web design company,website designers'
};

const page = () => {
    return (
        <>
            <About></About>
        </>
    );
};

export default page;
