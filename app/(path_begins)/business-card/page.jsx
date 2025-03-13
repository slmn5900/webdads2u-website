"use client"
import React from 'react'
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
const page = () => {
  const images = [
    { alt: 'Juniya', name: 'Juniya', url: '/webdads/images/businesscard/Juniya-1.jpg' },
    { alt: 'Kanavuillam', name: 'Kanavu-illam', url: '/webdads/images/businesscard/Kanavu-illam.jpg' },
    { alt: 'a cacia designer', name: 'a-cacia-designer', url: '/webdads/images/businesscard/a-cacia-designer.jpg' },
    { alt: 'arcmen', name: 'arcmen', url: '/webdads/images/businesscard/arcmen.jpg' },
    { alt: 'arthi-homes', name: 'arthi-homes', url: '/webdads/images/businesscard/arthi-homes.jpg' },
    { alt: 'Audioscape', name: 'Audioscape', url: '/webdads/images/businesscard/Audioscape.jpg' },

    { alt: 'chennai-commercials', name: 'chennai-commercials', url: '/webdads/images/businesscard/chennai-commercials.jpg' },
    { alt: 'Skp', name: 'Skp', url: '/webdads/images/businesscard/Skp.jpg' },
    { alt: 'dhinapile', name: 'dhinapile', url: '/webdads/images/businesscard/dhinapile.jpg' },
    { alt: 'gopikrishnan', name: 'gopikrishnan', url: '/webdads/images/businesscard/gopikrishnan.jpg' },
    { alt: 'integra', name: 'integra-1', url: '/webdads/images/businesscard/integra-1.jpg' },
    { alt: 'Jk-Construction', name: 'Jk-Construction', url: '/webdads/images/businesscard/Jk-Construction.jpg' },


    { alt: 'karthik', name: 'karthik', url: '/webdads/images/businesscard/karthik.jpg' },
    { alt: 'kb-nivash', name: 'nivash', url: '/webdads/images/businesscard/nivash.jpg' },
    { alt: 'oys-fresh', name: 'oys-fresh', url: '/webdads/images/businesscard/oys-fresh.jpg' },
    { alt: 'prapthi', name: 'prapthi', url: '/webdads/images/businesscard/prapthi.jpg' },
    { alt: 'relife', name: 'relife', url: '/webdads/images/businesscard/relife.jpg' },
    { alt: 'rps', name: 'rps', url: '/webdads/images/businesscard/rps.jpg' },

    { alt: 'sash', name: 'sash', url: '/webdads/images/businesscard/sash.jpg' },
    
    
  ];

const datas = {
    heading1: 'Make Your Mark is the leading business card designing company.',
    paragraph1: 'Elevate your networking with striking business cards. Crafted to leave a lasting impression. Let’s design your success!',
    heading2: 'Behold our stunning Business Card portfolio!',
    paragraph2: 'A stylish black and white business card for a fashion boutique, conveying elegance and sophistication.'
};
return (
    <>
        <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
    </>
);
};

export default page
