
import React from 'react'
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
const page = () => {
  const images = [
    { alt: 'global-enterprises', name: 'global-enterprises', url: '/webdads/images/flyerdesign/global-enterprises.webp' },
    { alt: 'JUniyaa', name: 'JUniyaa', url: '/webdads/images/flyerdesign/JUniyaa.webp' },
    { alt: 'Magmee', name: 'Magmee', url: '/webdads/images/flyerdesign/Magmee.webp' },
    { alt: 'Skp', name: 'Skp', url: '/webdads/images/flyerdesign/Skp.webp' },
    { alt: 'Diamon-d', name: 'Diamon-d', url: '/webdads/images/flyerdesign/Diamon-d.webp' },
    { alt: 'AYN-FLyer', name: 'AYN-FLyer', url: '/webdads/images/flyerdesign/AYN-FLyer.webp' },

  ];

const datas = {
    heading1: 'Fly High with Creative Designs Premier Flyer Design Services',
    paragraph1: 'Captivate your audience with captivating flyer designs. Elevate your message with our expertly crafted creations. Let’s make your ideas soar!',
    heading2: 'Behold our stunning Flyer Design portfolio!',
    paragraph2: 'Fly high with our eye-catching flyer designs. Your message, beautifully delivered.'
};
return (
    <>
        <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
    </>
);
};
export default page
