import React from 'react';

import dynamic from 'next/dynamic';
// import Woocommerce from './Woocommerce';
const Woocommerce = dynamic(() => import('./Woocommerce'), { ssr: false });
export const metadata = {
    title: 'Best WooCommerce Development Company In Chennai',
    description: 'Webdads is a Professional Woocommerce Development Company in Chennai. Our Services are WordPress, Website, and E-Commerce Website Development.'
};
const page = () => {
    return <Woocommerce />;
};

export default page;
