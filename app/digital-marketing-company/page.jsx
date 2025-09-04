// import React from 'react'
// import DigitalMarketing from './DegitalMarketing'

// export const metadata = {
//   title: 'Digital Marketing Company | Strategic Online Marketing Services',
//   description: 'We deliver result-driven digital marketing services including SEO, PPC, social media marketing, and content strategies for brand visibility',
//   keywords:
//     'digital marketing company,digital marketing services,online marketing company,internet marketing services'
// };

// export const Page = () => {
//   return (
//     <>
//       <DigitalMarketing />
//     </>
//   )
// }

import React from 'react';
import DigitalMarketing from './DegitalMarketing';

export const metadata = {
    title: 'Digital Marketing Company | Strategic Online Marketing Services',
    description: 'We deliver result-driven digital marketing services including SEO, PPC, social media marketing, and content strategies for brand visibility',
    keywords: 'digital marketing company,digital marketing services,online marketing company,internet marketing services'
};

export default function Page() {
    return <DigitalMarketing />;
}
