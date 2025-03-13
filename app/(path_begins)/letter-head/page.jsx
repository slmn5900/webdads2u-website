
import React from 'react'
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
const page = () => {
  const images = [
    { alt: 'Juniya', name: 'Juniya', url: '/webdads/images/letterhead/Juniya.webp' },
    { alt: 'Raj-vision-electronics', name: 'Raj-vision-electronics', url: '/webdads/images/letterhead/Raj-vision-electronics.webp' },
    
    { alt: 'Audioscape', name: 'Audioscape', url: '/webdads/images/letterhead/Audioscape.webp' },
    { alt: 'AYN-letter-head', name: 'AYN-letter-head', url: '/webdads/images/letterhead/AYN-letter-head.webp' },
    { alt: 'Jk-onstruction', name: 'Jk-onstruction', url: '/webdads/images/letterhead/Jk-onstruction.webp' },
    { alt: 'SKP-1', name: 'SKP-1', url: '/webdads/images/letterhead/SKP-1.webp' },

    
    
  ];

const datas = {
    heading1: 'Crafting Professional Impressions Premier Letterhead Design Company',
    paragraph1: 'Elevate your correspondence with bespoke letterhead designs. Make a lasting impression with every interaction. Let’s design your identity!',
    heading2: 'Behold our stunning Letter Head Design portfolio!',
    paragraph2: 'Crafting professional letterheads that leave lasting impressions.'
};
return (
    <>
        <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
    </>
);
};

export default page
