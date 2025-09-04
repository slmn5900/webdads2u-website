// import React from 'react'
// import BusinessCard from './BusinessCard'

// export const metadata = {
//     title: 'Web Development Company | Webdads2u',
//     description: 'Looking for a professional web development company? We build fast, responsive, SEO-friendly websites tailored to your business needs. Get a free quote today',
//     keywords: 'app development company,mobile app development company,custom app development,android app development services,ios app development company'
// };

// export const Page = () => {
//     return (
//         <>
//             <BusinessCard />
//         </>
//     )
// }

import React from 'react';
import BusinessCard from './BusinessCard';
export const metadata = {
    title: 'Web Development Company | Webdads2u',
    description: 'Looking for a professional web development company? We build fast, responsive, SEO-friendly websites tailored to your business needs. Get a free quote today',
    keywords: 'app development company,mobile app development company,custom app development,android app development services,ios app development company'
};

export default function Page() {
    return <BusinessCard />;
}
