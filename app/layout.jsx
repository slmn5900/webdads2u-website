<<<<<<< HEAD
// // 'use client';
// // import React from 'react';
// // import { LayoutProvider } from '../layout/context/layoutcontext';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import Footer from '../components/Footer';
// // import Header from '../components/Header';
// // import '../style/home/home.scss';

// // export default function RootLayout({ children }) {
// //     return (
// //         <html lang="en" suppressHydrationWarning>
// //             <head>
// //                 <title>Web Development Company In Chennai</title>
// //                 <meta name="viewport" content="width=device-width, initial-scale=1" />
// //                 <meta
// //                     name="description"
// //                     content="Experienced and trusted Web Development company in Chennai with over 10 years in crafting static and dynamic websites for startups to large enterprises."
// //                 />
// //                 <link rel="icon" href="/webdads/images/favicon.ico" type="image/x-icon" sizes="any" />

// //             </head>
// //             <body>
// //                 <LayoutProvider>
// //                     <Header />
// //                     {children}
// //                     <Footer />
// //                 </LayoutProvider>
// //             </body>
// //         </html>
// //     );
// // }

// 'use client';
// import React from 'react';
// import { LayoutProvider } from '../layout/context/layoutcontext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// // import IconBreadcrumbs from '../components/IconBreadcrumbs'; // Import your breadcrumbs
// import '../style/home/home.scss';
// // import NextBreadcrumb from '../components/NextBreadcrumb';
// import CommonBreadcrumbs from '../components/CommonBreadcrumbs';

// export default function RootLayout({ children }) {
//     return (
//         <html lang="en" suppressHydrationWarning>
//             {/* <head>
//                 <title>Web Development Company In Chennai</title>
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <meta name="description" content="Experienced and trusted Web Development company in Chennai with over 10 years in crafting static and dynamic websites for startups to large enterprises." />
//                 <link rel="icon" href="/webdads/images/favicon.ico" type="image/x-icon" sizes="any" />
//             </head> */}
//             <body>
//                 <LayoutProvider>

//                     <Header />
//                     {/* Add Breadcrumbs here */}
//                     {/* <IconBreadcrumbs /> */}
//                     {/* <Breadcrumbs /> */}
//                     {/* <NextBreadcrumb
//                         homeElement={'Home'}
//                         separator={<span> | </span>}
//                         activeClasses="text-amber-500"
//                         containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
//                         listClasses="hover:underline mx-2 font-bold"
//                         capitalizeLinks
//                     /> */}
//                     {/* <CommonBreadcrumbs /> */}
//                     {/* <div style={{ marginTop: '83px' }}>{children}</div> */}
//                     <div>{children}</div>
//                     <Footer />
//                 </LayoutProvider>
//             </body>
//         </html>
//     );
// }

'use client';
import React from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { usePathname } from 'next/navigation';
import '../style/home/home.scss';
=======
'use client'; // only for App Router; remove if you're using _app.js

import React from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext'; // Make sure this is a named export
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'; // Make sure Footer uses `export default`
import Header from '../components/Header'; // Make sure Header uses `export default`
import { usePathname } from 'next/navigation';
import '../style/home/home.scss';
import { MenuProvider } from '../layout/context/menucontext';
import SocialMedia from "../components/common/SocialMedia.jsx"
>>>>>>> a0d19cc (Initial commit)

export default function RootLayout({ children }) {
    const pathname = usePathname();

<<<<<<< HEAD
    // Define the paths where you want to hide header/footer
    const omitHeaderFooterPaths = ['/login', '/register', '/new', "/brochure-design-page", "/social-media-design-page", "/logo-design-page"];
=======
    const omitHeaderFooterPaths = [
        '/login',
        '/register',
        '/web-development-company',
        '/brochure-design-page',
        '/poster-design-company',
        '/logo-design-company',
        '/digital-marketing-company',
        '/seo',
        '/corporate-website',
        '/flyer-design-page',
        '/app-development',
        '/crm-page',
        '/wordpress-page',
        '/react-page',
        '/eccomerce-react-page',
        '/eccomerce-wordpress-page',
        '/shopify-page',
        '/ui-ux-page',
        '/openkart-page',
        '/letter-head-page',
        '/business-card-page',
        '/web-design'
    ];
>>>>>>> a0d19cc (Initial commit)

    const omitHeaderFooter = omitHeaderFooterPaths.includes(pathname);

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
<<<<<<< HEAD
                <LayoutProvider>
                    {!omitHeaderFooter && <Header />}
                    <div>{children}</div>
                    {!omitHeaderFooter && <Footer />}
                </LayoutProvider>
=======
                <MenuProvider>
                    <LayoutProvider>
                        {!omitHeaderFooter && <Header />}
                        <main>{children}</main>
                        {!omitHeaderFooter && <SocialMedia />}
                        {!omitHeaderFooter && <Footer />}
                    </LayoutProvider>
                </MenuProvider>
>>>>>>> a0d19cc (Initial commit)
            </body>
        </html>
    );
}
