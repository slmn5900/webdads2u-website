// import React from 'react'
// import Corporate from './Corporate'

// export const metadata = {
//   title: 'Custom Corporate Website Development Company | Webdads2u',
//   description: 'Stand out online with custom corporate website development Company . We build mobile-optimized, conversion-ready websites for growing businesses',
//   keywords:
//     'corporate website development,enterprise website development,custom corporate website design,corporate web design services'
// };

// export const Page = () => {
//   return (
//     <>
//       <Corporate />
//     </>
//   )
// }

import React from 'react';
import Corporate from './Corporate';
export const metadata = {
    title: 'Custom Corporate Website Development Company | Webdads2u',
    description: 'Stand out online with custom corporate website development Company . We build mobile-optimized, conversion-ready websites for growing businesses',
    keywords: 'corporate website development,enterprise website development,custom corporate website design,corporate web design services'
};

export default function Page() {
    return <Corporate />;
}
