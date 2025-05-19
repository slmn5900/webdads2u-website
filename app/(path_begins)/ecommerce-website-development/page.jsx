import React from 'react';
import dynamic from 'next/dynamic';
import './ecommerce.scss';
export const metadata = {
    title: 'Ecommerce Website Development Company In Chennai',
    description: 'Discover unparalleled ecommerce website at our platform. Elevate your online business with cutting-edge solutions and seamless e-commerce Website.'
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
