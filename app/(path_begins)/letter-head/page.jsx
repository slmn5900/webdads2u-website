import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

export const metadata = {
    alternates: {
        canonical: 'https://webdads2u.com/letter-head'
    },
    title: 'Letterhead Design Service In Chennai',
    description: 'Webdads2u is a reputed designing company offering letterhead designing service in chennai. Our can-do attitude and digital expertise help us deliver strong solutions.',
    keyword: 'letterhead design service in chennai,letterhead design service ,letterhead design, custom letterhead, business letterhead, letterhead creator'
};
const page = () => {
    const images = [
        { alt: 'Letterhead Design Service In Chennai', name: 'Nivas Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756797404/webdads2u/letter-head/nivas-letter-head.avif' },
        { alt: 'juniya-letter-head', name: 'Juniya Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796278/webdads2u/letter-head/juniya-letter-head.png' },
        { alt: 'raj-vision-electronics-letter-head', name: 'Raj Vision Electronics Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796277/webdads2u/letter-head/raj-vision-electronics-letter-head.jpg' },
        { alt: 'skp-letter-head', name: 'SKP Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796276/webdads2u/letter-head/skp-letter-head.jpg' },
        { alt: 'audioscape-letter-head', name: 'Audioscape Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796275/webdads2u/letter-head/audioscape-letter-head.jpg' },
        { alt: 'ayn-letter-head', name: 'AYN Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796249/webdads2u/letter-head/ayn-letter-head.jpg' },
        { alt: 'jk-construction-letter-head', name: 'JK Construction Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796247/webdads2u/letter-head/jk-construction-letter-head.jpg' },
        { alt: 'arcmen-letter-head', name: 'Arcmen Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796247/webdads2u/letter-head/arcmen-letter-head.jpg' },
        { alt: 'aarthi-homes-letter-head', name: 'Aarthi Homes Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796241/webdads2u/letter-head/aarthi-homes-letter-head.jpg' },
        { alt: 'sash-letter-head', name: 'Sash Letter Head', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796230/webdads2u/letter-head/sash-letter-head.jpg' }
    ];

    const datas = {
        heading1: 'Crafting Professional Impressions Premier Letterhead Design Company',
        paragraph1: 'Elevate your correspondence with bespoke letterhead designs. Make a lasting impression with every interaction. Let’s design your identity!',
        heading2: 'Behold our stunning Letter Head Design portfolio!',
        paragraph2: 'Crafting professional letterheads that leave lasting impressions.'
    };
    return <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />;
};

export default page;
