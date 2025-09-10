// import React from 'react'
// import Seo from './Seo'

// export const metadata = {
//   title: 'SEO Company for Business Growth | International SEO Company',
//   description: 'Our SEO company helps businesses grow online with tailored strategies, improved keyword rankings, and higher-quality website traffic.',
//   keywords:
//     'seo company,seo services,seo agency,ecommerce seo company,link building services'
// };

// export const Page = () => {
//   return (
//     <>
//       <Seo />
//     </>
//   )
// }

import React from 'react';
import Seo from './Seo';

export const metadata = {
    title: 'SEO Company for Business Growth | International SEO Company',
    description: 'Our SEO company helps businesses grow online with tailored strategies, improved keyword rankings, and higher-quality website traffic.',
    keywords: 'seo company,seo services,seo agency,ecommerce seo company,link building services'
};

export default function Page() {
    return <Seo />;
}
