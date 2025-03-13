
import React from 'react'
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
const page = () => {
  const images = [
    { alt: 'securitaz', name: 'securitaz', url: '/webdads/images/ecommerce/racepro.jpg' },
    { alt: 'rmp', name: 'rmp', url: '/webdads/images/ecommerce/sunkissed.jpg' },
    { alt: 'raj-vision', name: 'raj-vision', url: '/webdads/images/ecommerce/atgomart.jpg' },
    

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

export default page
