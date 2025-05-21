'use client';
import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    title: 'Visiting And Business Card Designing Company In Chennai',
    description: 'Stand out with our visiting and business card designing company in chennai. From sleek and professional to creative and bold,',
    keyword:
        'visiting and business card designing company in chennai,visiting card designing,business card designing company,visiting card chennai,business card designing in chennai, business card designs in anna nagar chennai, visiting card design in chennai, visiting card designer in chennai, chennai business card designer'
};
const page = () => {
    const images = [
        { alt: 'Visiting And Business Card Designing Company In Chennai', name: 'Juniya', url: '/webdads/images/businesscard/Juniya-1.jpg' },
        { alt: 'kanavuillam', name: 'Kanavu Illam', url: '/webdads/images/businesscard/Kanavu-illam.jpg' },
        { alt: 'a-cacia-designer', name: 'A Cacia Designer', url: '/webdads/images/businesscard/a-cacia-designer.jpg' },
        { alt: 'arcmen', name: 'Arcmen', url: '/webdads/images/businesscard/arcmen.jpg' },
        { alt: 'arthi-homes', name: 'Arthi Homes', url: '/webdads/images/businesscard/arthi-homes.jpg' },
        { alt: 'Audioscape', name: 'Audioscape', url: '/webdads/images/businesscard/Audioscape.jpg' },
        { alt: 'chennai-commercials', name: 'Chennai Commercials', url: '/webdads/images/businesscard/chennai-commercials.jpg' },
        { alt: 'Skp', name: 'SKP', url: '/webdads/images/businesscard/Skp.jpg' },
        { alt: 'dhinapile', name: 'Dhinapile', url: '/webdads/images/businesscard/dhinapile.jpg' },
        { alt: 'gopikrishnan', name: 'Gopikrishnan', url: '/webdads/images/businesscard/gopikrishnan.jpg' },
        { alt: 'integra', name: 'Integra', url: '/webdads/images/businesscard/integra-1.jpg' },
        { alt: 'Jk-Construction', name: 'JK Construction', url: '/webdads/images/businesscard/Jk-Construction.jpg' },
        { alt: 'karthik', name: 'Karthik', url: '/webdads/images/businesscard/karthik.jpg' },
        { alt: 'kb-nivash', name: 'Nivash', url: '/webdads/images/businesscard/nivash.jpg' },
        { alt: 'oys-fresh', name: 'OYS Fresh', url: '/webdads/images/businesscard/oys-fresh.jpg' },
        { alt: 'prapthi', name: 'Prapthi', url: '/webdads/images/businesscard/prapthi.jpg' },
        { alt: 'relife', name: 'Relife', url: '/webdads/images/businesscard/relife.jpg' },
        { alt: 'rps', name: 'RPS', url: '/webdads/images/businesscard/rps.jpg' },
        { alt: 'sash', name: 'SASH', url: '/webdads/images/businesscard/sash.jpg' }
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

export default page;
