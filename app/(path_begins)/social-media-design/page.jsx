<<<<<<< HEAD
import React from 'react';
import SocialmediaDesign from './SocialmediaDesign';
export const metadata = {
    title: 'Social Media Design Company In Chennai',
    description: 'Welcome to our premier Social Media Design Services Company. We specialize in crafting captivating visuals and strategies that elevate your online presence.',
    keyword: 'social media design company in chennai,social media design company,best social media marketing agency'
};
const page = () => {
    return (
        <>
            <SocialmediaDesign />
        </>
    );
};

export default page;
=======
// import React from 'react';
// import SocialmediaDesign from './SocialmediaDesign';
// export const metadata = {
//     title: 'Social Media Design Company In Chennai',
//     description: 'Welcome to our premier Social Media Design Services Company. We specialize in crafting captivating visuals and strategies that elevate your online presence.',
//     keyword: 'social media design company in chennai,social media design company,best social media marketing agency'
// };
// const Page = () => {
//     return <SocialmediaDesign />;
// };

// export default Page;

// app/social-media-design/page.js (or page.tsx if using TS)
import React from 'react';
import SocialmediaDesign from './SocialmediaDesign';

// ✅ Metadata for SEO (App Router)
export const metadata = {
    title: 'Social Media Design Company In Chennai',
    description: 'Welcome to our premier Social Media Design Services Company. We specialize in crafting captivating visuals and strategies that elevate your online presence.',
    keywords: 'social media design company in chennai, social media design company, best social media marketing agency'
};

const Page = () => {
    return <SocialmediaDesign />;
};

// ✅ Give the component a displayName to fix eslint warnings
Page.displayName = 'SocialMediaDesignPage';

export default Page;
>>>>>>> a0d19cc (Initial commit)
