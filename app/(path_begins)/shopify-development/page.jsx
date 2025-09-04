import React from 'react';
// import ShopifyDevelopment from './ShopifyDevelopment'
import dynamic from 'next/dynamic';
const ShopifyDevelopment = dynamic(() => import('./ShopifyDevelopment'), { ssr: false });
export const metadata = {
    title: 'Best Shopify Development Agency In Chennai',
    description: 'Based in Chennai, we specialize in Shopify development services, crafting stunning online stores tailored to your business needs.',
    keyword: 'best shopify development agency in chennai,shopify development services ,shopify development company in chennai,shopify development services in chennai'
};
const page = () => {
    return (
        <div>
            <ShopifyDevelopment />
        </div>
    );
};

export default page;
