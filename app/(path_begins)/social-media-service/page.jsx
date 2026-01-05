import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    alternates: {
        canonical: 'https://webdads2u.com/social-media-service'
    },
    title: 'Best Social Media Marketing Company In Chennai',
    description: 'Our social media marketing company in chennai can help elevate your brand. Promote involvement and development. To receive a personalized strategy.',
    keyword: 'best social media marketing company in chennai,best social media marketing company,leading social media marketing agency in chennai,leading social media marketing agency'
};
const page = () => {
    const images = [
        { alt: 'Best Social Media Marketing Company In Chennai', name: 'Social Media 1', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919982/webdads2u/social-media-service/social-media-1.jpg' },
        { alt: 'social-media-2', name: 'spiceswarmi', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919979/webdads2u/social-media-service/social-media-2.jpg' },
        { alt: 'social-media-3', name: 'Cool Tech', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919975/webdads2u/social-media-service/social-media-3.jpg' },
        { alt: 'social-media-4', name: 'SRR', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919971/webdads2u/social-media-service/social-media-4.jpg' },
        { alt: 'social-media-5', name: 'Smart Duckling', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919968/webdads2u/social-media-service/social-media-5.jpg' },
        { alt: 'social-media-6', name: 'Smart Duckling', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919965/webdads2u/social-media-service/social-media-6.jpg' },
        { alt: 'social-media-7', name: 'atgo mart', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919965/webdads2u/social-media-service/social-media-7.jpg' },
        { alt: 'social-media-8', name: 'Adsfit', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919965/webdads2u/social-media-service/social-media-8.jpg' },
        { alt: 'social-media-9', name: 'Smart Duckling', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919894/webdads2u/social-media-service/social-media-9.jpg' },
        { alt: 'social-media-10', name: 'Diamond', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919954/webdads2u/social-media-service/social-media-10.jpg' },
        { alt: 'social-media-11', name: 'Global Enterprises', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919950/webdads2u/social-media-service/social-media-11.jpg' },
        { alt: 'social-media-12', name: 'Lalith Food', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919948/webdads2u/social-media-service/social-media-12.jpg' },
        { alt: 'social-media-13', name: 'Adsfit', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919929/webdads2u/social-media-service/social-media-13.jpg' },
        { alt: 'social-media-14', name: 'Team Water', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919926/webdads2u/social-media-service/social-media-14.jpg' },
        { alt: 'social-media-15', name: 'Aquafloplast', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919924/webdads2u/social-media-service/social-media-15.jpg' },
        { alt: 'social-media-16', name: 'Raj vision', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919919/webdads2u/social-media-service/social-media-16.jpg' },
        { alt: 'social-media-17', name: 'Atgo Mart', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919916/webdads2u/social-media-service/social-media-17.jpg' },
        { alt: 'social-media-18', name: 'Smart ducklings', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919914/webdads2u/social-media-service/social-media-18.jpg' },
        { alt: 'social-media-19', name: 'Smart ducklings9', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919909/webdads2u/social-media-service/social-media-19.jpg' },
        { alt: 'social-media-20', name: 'Webdads', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919906/webdads2u/social-media-service/social-media-20.jpg' },
        { alt: 'social-media-21', name: 'Ulavar Natural Oil', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919904/webdads2u/social-media-service/social-media-21.jpg' },
        { alt: 'social-media-22', name: 'spiceswarmi', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919900/webdads2u/social-media-service/social-media-22.jpg' },
        { alt: 'social-media-23', name: 'Royce', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919896/webdads2u/social-media-service/social-media-23.jpg' }
    ];

    const datas = {
        heading1: 'Ignite Your Brand Premier Social Media Marketing Company',
        paragraph1: 'Drive engagement and growth with our expert social media strategies. Elevate your brand’s presence online. Let’s make your story trend',
        heading2: 'We are proud of our graphic design portfolio below.',
        paragraph2: 'Display the top Branding, Logo design, Web Design, and Video Production initiatives. If you have interest in these and want us to work on your next project, please reach out to us.'
    };
    return (
        <>
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
        </>
    );
};

export default page;
