<<<<<<< HEAD

import React from 'react'

import Woocommerce from './Woocommerce'
export const metadata = {
  title: 'Best WooCommerce Development Company In Chennai',
  description: "Webdads is a Professional Woocommerce Development Company in Chennai. Our Services are WordPress, Website, and E-Commerce Website Development.",
 
};
const page = () => {
  return (
   <Woocommerce/>
  )
}

export default page
=======
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
>>>>>>> 6010d3c (Add new features and updates)
