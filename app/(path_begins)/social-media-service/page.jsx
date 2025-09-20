import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    title: 'Best Social Media Marketing Company In Chennai',
    description: 'Our social media marketing company in chennai can help elevate your brand. Promote involvement and development. To receive a personalized strategy.',
    keyword: 'best social media marketing company in chennai,best social media marketing company,leading social media marketing agency in chennai,leading social media marketing agency'
};
const page = () => {
    // const images = [
    //     { alt: 'Best Social Media Marketing Company In Chennai', name: 'Adsfit', url: '/webdads/images/socialmedia/adsfit.jpg' },
    //     { alt: 'atgomart', name: 'Atgomart', url: '/webdads/images/socialmedia/atgomart.jpg' },
    //     { alt: 'diamend', name: 'Diamend', url: '/webdads/images/socialmedia/diamend.jpg' },
    //     { alt: 'atgomaquafloart', name: 'Aquaflo', url: '/webdads/images/socialmedia/aquaflo.jpg' },
    //     { alt: 'globel', name: 'Globel', url: '/webdads/images/socialmedia/globel.jpg' },
    //     { alt: 'lalit', name: 'Lalit', url: '/webdads/images/socialmedia/lalit.jpg' },

    //     { alt: 'rajvision', name: 'Rajvision', url: '/webdads/images/socialmedia/rajvision.jpg' },
    //     { alt: 'rajvision-1', name: 'Rajvision-1', url: '/webdads/images/socialmedia/rajvision-1.jpg' },
    //     { alt: 'round', name: 'Round', url: '/webdads/images/socialmedia/round.jpg' },
    //     { alt: 'team-water', name: 'Team Water', url: '/webdads/images/socialmedia/team-water.jpg' },
    //     { alt: 'webdads', name: 'Webdads', url: '/webdads/images/socialmedia/webdads.jpg' },
    //     { alt: '7', name: '', url: '/webdads/images/socialmedia/7.jpg' },
    //     { alt: '8', name: '', url: '/webdads/images/socialmedia/8.jpg' },
    //     { alt: '9', name: '', url: '/webdads/images/socialmedia/9.jpg' },
    //     { alt: '10', name: '', url: '/webdads/images/socialmedia/10.jpg' },
    //     { alt: '12', name: '', url: '/webdads/images/socialmedia/12.jpg' },
    //     { alt: '13', name: '', url: '/webdads/images/socialmedia/13.jpg' },
    //     { alt: '14', name: '', url: '/webdads/images/socialmedia/14.jpg' },

    //     { alt: '15', name: '', url: '/webdads/images/wordpress/15.jpg' },
    //     { alt: '16', name: '', url: '/webdads/images/wordpress/16.jpg' },
    //     { alt: '17', name: '', url: '/webdads/images/wordpress/17.jpg' }
    // ];

    const images = [
        { alt: 'Best Social Media Marketing Company In Chennai', name: 'Social Media 1', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919982/webdads2u/social-media-service/social-media-1.jpg' },
        { alt: 'social-media-2', name: 'Social Media 2', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919979/webdads2u/social-media-service/social-media-2.jpg' },
        { alt: 'social-media-3', name: 'Social Media 3', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919975/webdads2u/social-media-service/social-media-3.jpg' },
        { alt: 'social-media-4', name: 'Social Media 4', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919971/webdads2u/social-media-service/social-media-4.jpg' },
        { alt: 'social-media-5', name: 'Social Media 5', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919968/webdads2u/social-media-service/social-media-5.jpg' },
        { alt: 'social-media-6', name: 'Social Media 6', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919965/webdads2u/social-media-service/social-media-6.jpg' },
        { alt: 'social-media-7', name: 'Social Media 7', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919965/webdads2u/social-media-service/social-media-7.jpg' },
        { alt: 'social-media-8', name: 'Social Media 8', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919965/webdads2u/social-media-service/social-media-8.jpg' },
        { alt: 'social-media-9', name: 'Social Media 9', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919894/webdads2u/social-media-service/social-media-9.jpg' },
        { alt: 'social-media-10', name: 'Social Media 10', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919954/webdads2u/social-media-service/social-media-10.jpg' },
        { alt: 'social-media-11', name: 'Social Media 11', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919950/webdads2u/social-media-service/social-media-11.jpg' },
        { alt: 'social-media-12', name: 'Social Media 12', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919948/webdads2u/social-media-service/social-media-12.jpg' },
        { alt: 'social-media-13', name: 'Social Media 13', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919929/webdads2u/social-media-service/social-media-13.jpg' },
        { alt: 'social-media-14', name: 'Social Media 14', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919926/webdads2u/social-media-service/social-media-14.jpg' },
        { alt: 'social-media-15', name: 'Social Media 15', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919924/webdads2u/social-media-service/social-media-15.jpg' },
        { alt: 'social-media-16', name: 'Social Media 16', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919919/webdads2u/social-media-service/social-media-16.jpg' },
        { alt: 'social-media-17', name: 'Social Media 17', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919916/webdads2u/social-media-service/social-media-17.jpg' },
        { alt: 'social-media-18', name: 'Social Media 18', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919914/webdads2u/social-media-service/social-media-18.jpg' },
        { alt: 'social-media-19', name: 'Social Media 19', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919909/webdads2u/social-media-service/social-media-19.jpg' },
        { alt: 'social-media-20', name: 'Social Media 20', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919906/webdads2u/social-media-service/social-media-20.jpg' },
        { alt: 'social-media-21', name: 'Social Media 21', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919904/webdads2u/social-media-service/social-media-21.jpg' },
        { alt: 'social-media-22', name: 'Social Media 22', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919900/webdads2u/social-media-service/social-media-22.jpg' },
        { alt: 'social-media-23', name: 'Social Media 23', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757919896/webdads2u/social-media-service/social-media-23.jpg' }
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
