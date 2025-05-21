import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    title: 'React JS Development Company Chennai',
    description: 'Top-rated react js development company delivering cutting-edge web solutions. From dynamic interfaces to scalable apps.',
    keyword: 'react js development company chennai,react js development company,react js development,react js development company in chennai,react js developers in chennai,react js development services in chennai'
};
const page = () => {
    const images = [
        { alt: 'React JS Development Company Chennai', name: 'Now Kart', url: '/webdads/images/php/Now-Kart.webp' },
        { alt: 'Saiyathra', name: 'Saiyathra', url: '/webdads/images/php/Saiyathra.webp' }
    ];

    const datas = {
        heading1: 'Leading React development company harnesses React power',
        paragraph1: 'Boosting your digital aspirations with cutting-edge PHP solutions. Elevate your web presence with our expert PHP development services. Let’s build brilliance together!',
        heading2: 'Behold our stunning React portfolio',
        paragraph2: 'Built a real-time chat application for a startup, enabling seamless communication among users with advanced features.'
    };
    return (
        <>
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
        </>
    );
};

export default page;
