// import React from 'react'
// import Flyer from './Flyer'

// export const metadata = {
//   title: 'Flyer Design Company | Custom Flyers for Business & Events',
//   description: 'Get creative and print-ready flyers from our professional flyer design company. Ideal for business, events, and marketing promotions.',
//   keywords:
//     'flyer design company,custom flyer design,professional flyer design services,business flyer design,brochure and flyer design'
// };

// export const Page = () => {
//   return (
//     <>
//       <Flyer />
//     </>
//   )
// }

import React from 'react';
import Flyer from './Flyer';
export const metadata = {
    title: 'Flyer Design Company | Custom Flyers for Business & Events',
    description: 'Get creative and print-ready flyers from our professional flyer design company. Ideal for business, events, and marketing promotions.',
    keywords: 'flyer design company,custom flyer design,professional flyer design services,business flyer design,brochure and flyer design'
};

export default function Page() {
    return <Flyer />;
}
