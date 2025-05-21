import React from 'react';
import dynamic from 'next/dynamic';
import './ecommerce.scss';
export const metadata = {
    title: 'Ecommerce Website Development Company In Chennai',
    description: 'Discover unparalleled ecommerce website at our platform. Elevate your online business with cutting-edge solutions and seamless e-commerce Website.',
    keyword:
        'ecommerce website development company in chennai,ecommerce website development,ecommerce website development company in chennai, ecommerce website development cost in chennai, ecommerce web development service in chennai, ecommerce website development companies in chennai'
};
const Herosec = dynamic(() => import('./Herosec'), { ssr: false });
const page = () => {
    return (
        <div>
            <>
                <Herosec />
            </>
        </div>
    );
};

export default page;
