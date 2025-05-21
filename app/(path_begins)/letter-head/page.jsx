import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

export const metadata = {
    title: 'Letterhead Design Service In Chennai',
    description: 'Webdads2u is a reputed designing company offering letterhead designing service in chennai. Our can-do attitude and digital expertise help us deliver strong solutions.',
    keyword: 'letterhead design service in chennai,letterhead design service ,letterhead design, custom letterhead, business letterhead, letterhead creator'
};
const page = () => {
    const images = [
        { alt: 'Letterhead Design Service In Chennai', name: 'Juniya', url: '/webdads/images/letterhead/Juniya.webp' },
        { alt: 'raj-vision-electronics', name: 'Raj Vision Electronics', url: '/webdads/images/letterhead/Raj-vision-electronics.webp' },
        { alt: 'audioscape', name: 'Audioscape', url: '/webdads/images/letterhead/Audioscape.webp' },
        { alt: 'ayn-letter-head', name: 'AYN letter head', url: '/webdads/images/letterhead/AYN-letter-head.webp' },
        { alt: 'jk-construction', name: 'Jk Construction', url: '/webdads/images/letterhead/Jk-onstruction.webp' },
        { alt: 'SKP-1', name: 'SKP-1', url: '/webdads/images/letterhead/SKP-1.webp' }
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

export default page;
