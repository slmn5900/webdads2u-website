// import React from 'react'
// import PosterDesign from './PosterDesign'

// export const metadata = {
//   title: 'Creative Poster Design Company | Webdads2u',
//   description: 'Professional poster design company offering custom event, business, and promotional posters. Eye-catching, print-ready designs to boost your brand',
//   keywords:
//     'poster design company,custom poster design,creative poster design services,business poster design'
// };

// export const Page = () => {
//   return (
//     <>
//       <PosterDesign />
//     </>
//   )
// }

import React from 'react';
import PosterDesign from './PosterDesign';

export const metadata = {
    title: 'Creative Poster Design Company | Webdads2u',
    description: 'Professional poster design company offering custom event, business, and promotional posters. Eye-catching, print-ready designs to boost your brand',
    keywords: 'poster design company,custom poster design,creative poster design services,business poster design'
};

export default function Page() {
    return <PosterDesign />;
}
