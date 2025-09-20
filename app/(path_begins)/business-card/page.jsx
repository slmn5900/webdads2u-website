import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    title: 'Visiting And Business Card Designing Company In Chennai',
    description: 'Stand out with our visiting and business card designing company in chennai. From sleek and professional to creative and bold,',
    keyword:
        'visiting and business card designing company in chennai,visiting card designing,business card designing company,visiting card chennai,business card designing in chennai, business card designs in anna nagar chennai, visiting card design in chennai, visiting card designer in chennai, chennai business card designer'
};
const page = () => {
    // const images = [
    //     { alt: 'Visiting And Business Card Designing Company In Chennai', name: 'Juniya', url: '/webdads/images/businesscard/Juniya-1.jpg' },
    //     { alt: 'kanavuillam', name: 'Kanavu Illam', url: '/webdads/images/businesscard/Kanavu-illam.jpg' },
    //     { alt: 'a-cacia-designer', name: 'A Cacia Designer', url: '/webdads/images/businesscard/a-cacia-designer.jpg' },
    //     { alt: 'arcmen', name: 'Arcmen', url: '/webdads/images/businesscard/arcmen.jpg' },
    //     { alt: 'arthi-homes', name: 'Arthi Homes', url: '/webdads/images/businesscard/arthi-homes.jpg' },
    //     { alt: 'Audioscape', name: 'Audioscape', url: '/webdads/images/businesscard/Audioscape.jpg' },
    //     { alt: 'chennai-commercials', name: 'Chennai Commercials', url: '/webdads/images/businesscard/chennai-commercials.jpg' },
    //     { alt: 'Skp', name: 'SKP', url: '/webdads/images/businesscard/Skp.jpg' },
    //     { alt: 'dhinapile', name: 'Dhinapile', url: '/webdads/images/businesscard/dhinapile.jpg' },
    //     { alt: 'gopikrishnan', name: 'Gopikrishnan', url: '/webdads/images/businesscard/gopikrishnan.jpg' },
    //     { alt: 'integra', name: 'Integra', url: '/webdads/images/businesscard/integra-1.jpg' },
    //     { alt: 'Jk-Construction', name: 'JK Construction', url: '/webdads/images/businesscard/Jk-Construction.jpg' },
    //     { alt: 'karthik', name: 'Karthik', url: '/webdads/images/businesscard/karthik.jpg' },
    //     { alt: 'kb-nivash', name: 'Nivash', url: '/webdads/images/businesscard/nivash.jpg' },
    //     { alt: 'oys-fresh', name: 'OYS Fresh', url: '/webdads/images/businesscard/oys-fresh.jpg' },
    //     { alt: 'prapthi', name: 'Prapthi', url: '/webdads/images/businesscard/prapthi.jpg' },
    //     { alt: 'relife', name: 'Relife', url: '/webdads/images/businesscard/relife.jpg' },
    //     { alt: 'rps', name: 'RPS', url: '/webdads/images/businesscard/rps.jpg' },
    //     { alt: 'sash', name: 'SASH', url: '/webdads/images/businesscard/sash.jpg' }
    // ];
    const images = [
        { alt: 'Visiting And Business Card Designing Company In Chennai', name: 'Juniya', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917304/webdads2u/business-card/juniya-card.jpg' },
        { alt: 'kanavuillam', name: 'Kanavu Illam', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917302/webdads2u/business-card/kanavu-illam-card.jpg' },
        { alt: 'a-cacia-designer', name: 'A Cacia Designer', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917308/webdads2u/business-card/a-cacia-designer-card.jpg' },
        { alt: 'arcmen', name: 'Arcmen', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917260/webdads2u/business-card/arcmen-card.jpg' },
        { alt: 'arthi-homes', name: 'Arthi Homes', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917257/webdads2u/business-card/arthi-homes-card.jpg' },
        { alt: 'Audioscape', name: 'Audioscape', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917298/webdads2u/business-card/audioscape-card.jpg' },
        { alt: 'chennai-commercials', name: 'Chennai Commercials', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917262/webdads2u/business-card/chennai-commercials-card.jpg' },
        { alt: 'Skp', name: 'SKP', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917297/webdads2u/business-card/skp-card.jpg' },
        { alt: 'dhinapile', name: 'Dhinapile', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917265/webdads2u/business-card/dhinapile-card.jpg' },
        { alt: 'gopikrishnan', name: 'Gopikrishnan', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917268/webdads2u/business-card/gopikrishnan-card.jpg' },
        { alt: 'integra', name: 'Integra', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917271/webdads2u/business-card/integra-card.jpg' },
        { alt: 'Jk-Construction', name: 'JK Construction', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917290/webdads2u/business-card/jk-construction-card.jpg' },
        { alt: 'karthik', name: 'Karthik', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917273/webdads2u/business-card/karthik-card.jpg' },
        { alt: 'kb-nivash', name: 'Nivash', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917277/webdads2u/business-card/nivash-card.jpg' },
        { alt: 'oys-fresh', name: 'OYS Fresh', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917279/webdads2u/business-card/oys-fresh-card.jpg' },
        { alt: 'prapthi', name: 'Prapthi', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917282/webdads2u/business-card/prapthi-card.jpg' },
        { alt: 'relife', name: 'Relife', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917285/webdads2u/business-card/relife-card.jpg' },
        { alt: 'rps', name: 'RPS', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917288/webdads2u/business-card/rps-card.jpg' },
        { alt: 'sash', name: 'SASH', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917310/webdads2u/business-card/sash-card.jpg' },
        { alt: 'global-enterprises', name: 'Global Enterprises', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917293/webdads2u/business-card/global-enterprises-card.jpg' },
        { alt: 'amezers', name: 'Amezers', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757917256/webdads2u/business-card/amezers-card.jpg' }
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
