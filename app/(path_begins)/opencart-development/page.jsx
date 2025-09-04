import React from 'react';
// import OpencartDevelopment from './OpencartDevelopment';
import dynamic from 'next/dynamic';
const OpencartDevelopment = dynamic(() => import('./OpencartDevelopment'), { ssr: false });
export const metadata = {
    title: 'OpenCart Development Company In Chennai',
    description: 'Webdads is one of the leading opencart development company in chennai . We provide the best services for Open Cart integration and development.',
    keyword: 'opencart development company in chennai,opencart development company,opencart development service'
};
const page = () => {
    return (
        <>
            <OpencartDevelopment />
        </>
    );
};

export default page;
