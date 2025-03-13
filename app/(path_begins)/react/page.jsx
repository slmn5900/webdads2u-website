
import React from 'react'
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
const page = () => {
  const images = [
    { alt: 'Now Kart', name: 'securitaz', url: '/webdads/images/php/Now-Kart.webp' },
    { alt: 'Saiyathra', name: 'rmp', url: '/webdads/images/php/Saiyathra.webp' },
   
  ];

const datas = {
    heading1: 'Leading PHP development company harnesses PHP power',
    paragraph1: 'Boosting your digital aspirations with cutting-edge PHP solutions. Elevate your web presence with our expert PHP development services. Let’s build brilliance together!',
    heading2: 'Behold our stunning PHP portfolio',
    paragraph2: 'Built a real-time chat application for a startup, enabling seamless communication among users with advanced features.'
};
return (
    <>
        <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
    </>
);
};

export default page
