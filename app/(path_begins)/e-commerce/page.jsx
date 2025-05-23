import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    title: 'Best Ecommerce Website Development Company In Chennai',
    description: 'Boost your online store performance with our ecommerce website development expertise. Creating customized solutions for seamless shopping experiences.',
    keyword:
        'best ecommerce website development company in chennai,best ecommerce website development company,ecommerce website development,ecommerce website development company in chennai, ecommerce website development cost in chennai, ecommerce web development service in chennai, ecommerce website development companies in chennai'
};
const page = () => {
    const images = [
        { alt: 'Best Ecommerce Website Development Company In Chennai', name: 'Securitaz', url: '/webdads/images/ecommerce/racepro.jpg' },
        { alt: 'rmp', name: 'RMP', url: '/webdads/images/ecommerce/sunkissed.jpg' },
        { alt: 'raj-vision', name: 'Raj Vision', url: '/webdads/images/ecommerce/atgomart.jpg' }
    ];

    const datas = {
        heading1: 'Unleash Ecommerce Excellence Premier Ecommerce Website Development Company',
        paragraph1: 'Empowering businesses with bespoke ecommerce solutions. Elevate your online store with our expert development prowess. Let’s grow your digital footprint!',
        heading2: 'Behold our stunning Ecommerce portfolio!',
        paragraph2: ' Creating a feature-rich online store for a home decor brand, with product filtering and wishlist functionalities.'
    };
    return (
        <>
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
        </>
    );
};

export default page;
