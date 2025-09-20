// import React from 'react'
// import LogoDesign from './LogoDesign'

// export const metadata = {
//   title: 'Professional Logo Design Company | Custom Brand Logos',
//   description: 'Get custom logo design services from a creative logo design company. We craft unique, brand-focused logos for startups, SMEs, and enterprises',
//   keywords:
//     'logo design company,custom logo design,professional logo design services,creative logo design agency'
// };
// export const Page = () => {
//   return (
//     <>
//       <LogoDesign />
//     </>
//   )
// }

import React from 'react';
import LogoDesign from './LogoDesign';

export const metadata = {
    title: 'Professional Logo Design Company | Custom Brand Logos',
    description: 'Get custom logo design services from a creative logo design company. We craft unique, brand-focused logos for startups, SMEs, and enterprises',
    keywords: 'logo design company,custom logo design,professional logo design services,creative logo design agency'
};

export default function Page() {
    return <LogoDesign />;
}
