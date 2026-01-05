import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    alternates: {
        canonical: 'https://webdads2u.com/flyer-design-work'
    },
    title: 'Flyers Designing Services In Chennai',
    description: 'Webdads2u is one of the few digital media firms offering flyers designing services in chennai. We thus help in all aspects of branding right from online to offline branding.',
    keyword: 'flyers designing services in chennai,flyers designing services,flyer design company, flyers maker, flyer design company in chennai, flyer for business, professional flyer design, business flyer design, flyer design, digital flyer'
};
const page = () => {
    const images = [
        { alt: 'Flyers Designing Services In Chennai', name: 'Global Enterprises', url: '/webdads/images/flyerdesign/global-enterprises.webp' },
        { alt: 'juniyaa', name: 'Juniyaa', url: '/webdads/images/flyerdesign/JUniyaa.webp' },
        { alt: 'magmee', name: 'Magmee', url: '/webdads/images/flyerdesign/Magmee.webp' },
        { alt: 'skp', name: 'SKP', url: '/webdads/images/flyerdesign/Skp.webp' },
        { alt: 'diamond', name: 'Diamond', url: '/webdads/images/flyerdesign/Diamon-d.webp' },
        { alt: 'ayn-fLyer', name: 'AYN Flyer', url: '/webdads/images/flyerdesign/AYN-FLyer.webp' }
    ];

    const datas = {
        heading1: 'Fly High with Creative Designs Premier Flyer Design Services',
        paragraph1: 'Captivate your audience with captivating flyer designs. Elevate your message with our expertly crafted creations. Let’s make your ideas soar!',
        heading2: 'Behold our stunning Flyer Design portfolio!',
        paragraph2: 'Fly high with our eye-catching flyer designs. Your message, beautifully delivered.'
    };

    return <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />;
};
export default page;
