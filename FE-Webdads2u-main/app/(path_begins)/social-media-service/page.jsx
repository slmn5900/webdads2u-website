
import React from 'react'
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
const page = () => {
  const images = [
    { alt: 'adsfit', name: 'Adsfit', url: '/webdads/images/socialmedia/adsfit.jpg' },
    { alt: 'atgomart', name: 'Atgomart', url: '/webdads/images/socialmedia/atgomart.jpg' },
    { alt: 'diamend', name: 'Diamend', url: '/webdads/images/socialmedia/diamend.jpg' },
    { alt: 'atgomaquafloart', name: 'Aquaflo', url: '/webdads/images/socialmedia/aquaflo.jpg' },
    { alt: 'globel', name: 'Globel', url: '/webdads/images/socialmedia/globel.jpg' },
    { alt: 'lalit', name: 'Lalit', url: '/webdads/images/socialmedia/lalit.jpg' },

    { alt: 'rajvision', name: 'Rajvision', url: '/webdads/images/socialmedia/rajvision.jpg' },
    { alt: 'rajvision-1', name: 'Rajvision-1', url: '/webdads/images/socialmedia/rajvision-1.jpg' },
    { alt: 'round', name: 'Round', url: '/webdads/images/socialmedia/round.jpg' },
    { alt: 'team-water', name: 'Team Water', url: '/webdads/images/socialmedia/team-water.jpg' },
    { alt: 'webdads', name: 'Webdads', url: '/webdads/images/socialmedia/webdads.jpg' },
    { alt: '7', name: '', url: '/webdads/images/socialmedia/7.jpg' },
    { alt: '8', name: '', url: '/webdads/images/socialmedia/8.jpg' },
    { alt: '9', name: '', url: '/webdads/images/socialmedia/9.jpg' },
    { alt: '10', name: '', url: '/webdads/images/socialmedia/10.jpg' },
    { alt: '12', name: '', url: '/webdads/images/socialmedia/12.jpg' },
    { alt: '13', name: '', url: '/webdads/images/socialmedia/13.jpg' },
    { alt: '14', name: '', url: '/webdads/images/socialmedia/14.jpg' },

    { alt: '15', name: '', url: '/webdads/images/wordpress/15.jpg' },
    { alt: '16', name: '', url: '/webdads/images/wordpress/16.jpg' },
    { alt: '17', name: '', url: '/webdads/images/wordpress/17.jpg' },
  
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

export default page
