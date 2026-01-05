import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    alternates: {
        canonical: 'https://webdads2u.com/react'
    },
    title: 'React js Development Company in Chennai | React js Consultants',
    description: 'Boost your digital presence with WebDads2U, leading React JS development services in Chennai for high performing, interactive & dynamic web solutions.',
    keyword: 'react js development company chennai,react js development company,react js development,react js development company in chennai,react js developers in chennai,react js development services in chennai'
};
const page = () => {
    const images = [
        { alt: 'best indiakart', name: 'best indiakart', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757591700/webdads2u/react/best-indiakart.png' },
        { alt: 'Saiyathra', name: 'Saiyathra', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757591708/webdads2u/react/Saiyathra.png' }
    ];

    const datas = {
        heading1: 'Leading React development company harnesses React power',
        paragraph1: 'Boosting your digital aspirations with cutting-edge PHP solutions. Elevate your web presence with our expert PHP development services. Let’s build brilliance together!',
        heading2: 'Behold our stunning React portfolio',
        paragraph2: 'Built a real-time chat application for a startup, enabling seamless communication among users with advanced features.'
    };
    return (
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
    );
};

export default page;
