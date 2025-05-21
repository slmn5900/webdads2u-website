import React from 'react';

import dynamic from 'next/dynamic';
// import Woocommerce from './Woocommerce';
const Woocommerce = dynamic(() => import('./Woocommerce'), { ssr: false });
export const metadata = {
    title: 'Best WooCommerce Development Company In Chennai',
    description: 'Webdads is a Professional Woocommerce Development Company in Chennai. Our Services are WordPress, Website, and E-Commerce Website Development.',
    keyword:
        'best woocommerce development company in chennai ,woocommerce development company in chennai, wordpress development company in chennai, best wordpress development company in chennai, woocommerce developers in chennai, wordpress developer in chennai, ecommerce website design chennai, '
};
const page = () => {
    return <Woocommerce />;
};

export default page;
