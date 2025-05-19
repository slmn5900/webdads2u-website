// 'use client';
// import React from 'react';
// import { LayoutProvider } from '../layout/context/layoutcontext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import '../style/home/home.scss';

// export default function RootLayout({ children }) {
//     return (
//         <html lang="en" suppressHydrationWarning>
//             <head>
//                 <title>Web Development Company In Chennai</title>
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <meta
//                     name="description"
//                     content="Experienced and trusted Web Development company in Chennai with over 10 years in crafting static and dynamic websites for startups to large enterprises."
//                 />
//                 <link rel="icon" href="/webdads/images/favicon.ico" type="image/x-icon" sizes="any" />

//             </head>
//             <body>
//                 <LayoutProvider>
//                     <Header />
//                     {children}
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
<<<<<<< HEAD
import IconBreadcrumbs from '../components/IconBreadcrumbs'; // Import your breadcrumbs
=======
// import IconBreadcrumbs from '../components/IconBreadcrumbs'; // Import your breadcrumbs
>>>>>>> 6010d3c (Add new features and updates)
import '../style/home/home.scss';
// import NextBreadcrumb from '../components/NextBreadcrumb';
import CommonBreadcrumbs from '../components/CommonBreadcrumbs';


export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* <head>
                <title>Web Development Company In Chennai</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Experienced and trusted Web Development company in Chennai with over 10 years in crafting static and dynamic websites for startups to large enterprises." />
                <link rel="icon" href="/webdads/images/favicon.ico" type="image/x-icon" sizes="any" />
            </head> */}
            <body>
                <LayoutProvider>
                    <Header />
                    {/* Add Breadcrumbs here */}
                    {/* <IconBreadcrumbs /> */}
                    {/* <Breadcrumbs /> */}
                    {/* <NextBreadcrumb
                        homeElement={'Home'}
                        separator={<span> | </span>}
                        activeClasses="text-amber-500"
                        containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
                        listClasses="hover:underline mx-2 font-bold"
                        capitalizeLinks
                    /> */}
<<<<<<< HEAD
                    <CommonBreadcrumbs />
=======
                    {/* <CommonBreadcrumbs /> */}
>>>>>>> 6010d3c (Add new features and updates)
                    {children}
                    <Footer />
                </LayoutProvider>
            </body>
        </html>
    );
}
