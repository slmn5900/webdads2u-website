   // import React from 'react';
// import dynamic from 'next/dynamic';
// const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });
// export const metadata = {
//     title: 'Best Web Design Company In Chennai',
//     description: 'Creating stunning online experiences, our web design company blends creativity with technical expertise to bring your vision to life. Reach us today!'
// };
// const page = () => {
//     return (
//         <div>
//             <UnderConstructions />
//         </div>
//     );
// };

// export default page;

// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
import React from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script'; // <-- Import Script from next/script

const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });

export const metadata = {
    title: '6 Reasons Why a Logo is Important',
    description: 'Explore 6 reasons why a logo is important is essential for your brand. Learn how a strong logo builds identity, trust, recognition, and sets you apart in the market.',
    keyword: '6 reasons why a logo is important'
};

const Page = () => {
    return (
        <div>
            {/* Your structured data script */}
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org/',
                        '@type': 'Article',
                        mainEntityOfPage: {
                            '@type': 'WebPage',
                            '@id': 'https://webdads2u.com/6-reasons-why-a-logo-is-important/'
                        },
                        headline: '6 Reasons Why a Logo is Important',
                        description:
                            'A logo is a visual symbol that conveys a brand or company’s identity. The brand’s identity and values are conveyed in a simple and memorable way, making it easy for people to recognize and remember it. Branding, setting a business apart from its competitors, and building customer loyalty are all aided by logos.',
                        image: {
                            '@type': 'ImageObject',
                            url: '',
                            width: '',
                            height: ''
                        },
                        author: {
                            '@type': 'Person',
                            name: 'Webdads2u Private Limited'
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Webdads2u Private Limited',
                            logo: {
                                '@type': 'ImageObject',
                                url: '',
                                width: '',
                                height: ''
                            }
                        },
                        datePublished: ''
                    })
                }}
            />

            <UnderConstructions />
        </div>
    );
};

export default Page;
