import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    title: 'PHP Development Company In Chennai',
    description: 'A php development company with a reputation for custom solutions. We offer php development that is reliable and scalable, from web apps to robust websites.',
    keyword:
        'php development company in chennai,php development,php development company,php web development company in chennai,php web developers in chennai,php web development services in chennai,php web development service provider in chennai,php web development experts in chennai'
};
const page = () => {
    const images = [
        { alt: 'php development company 1', name: 'Now Kart', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757591481/webdads2u/php-development-company/php-development-company-1.png' },
        { alt: 'Saiyathra', name: 'Saiyathra', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757591472/webdads2u/php-development-company/Saiyathra-php.png' }
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

export default page;
