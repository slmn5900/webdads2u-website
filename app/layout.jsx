"use client"
import { LayoutProvider } from '../layout/context/layoutcontext.jsx'; // Make sure this is a named export
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer.jsx'; // Make sure Footer uses `export default`
import Header from '../components/Header.jsx'; // Make sure Header uses `export default`
import { usePathname } from 'next/navigation';
import '../style/home/home.scss';
import { MenuProvider } from '../layout/context/menucontext';
import SocialMedia from '../components/common/SocialMedia.jsx';
import './home.scss';
import ScrollToTop from '../components/common/ScrollToTop.jsx';
import StickyContactIcons from '../components/common/StickyContactIcons.jsx';
import { ThemeProvider } from '@mui/material';
import theme from '../Theme/theme.jsx';
export default function RootLayout({ children }) {
    const pathname = usePathname();

    const omitHeaderFooterPaths = [
        '/login',
        '/register',
        '/flyer-design-company',
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
        '/corporate-website-development',
        '/crm-erp-development-page',
        '/web-design'
    ];

    const omitHeaderFooter = omitHeaderFooterPaths.includes(pathname);
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="apple-touch-icon" sizes="57x57" href="/logo/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/logo/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/logo/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/logo/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/logo/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/logo/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/logo/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/logo/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/logo/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/logo/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
                <link rel="manifest" href="/logo/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/logo/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <MenuProvider>
                        <LayoutProvider>
                            {!omitHeaderFooter && <Header />}
                            <main>{children}</main>
                            {!omitHeaderFooter && <SocialMedia />}
                            {!omitHeaderFooter && <Footer />}
                            <ScrollToTop />
                            <StickyContactIcons />
                        </LayoutProvider>
                    </MenuProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}




// import { usePathname } from 'next/navigation';
// import { ThemeProvider } from '@mui/material';
// import theme from '../Theme/theme.jsx';
// import { LayoutProvider } from '../layout/context/layoutcontext';
// import { MenuProvider } from '../layout/context/menucontext';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import SocialMedia from '../components/common/SocialMedia';
// import ScrollToTop from '../components/common/ScrollToTop';
// import StickyContactIcons from '../components/common/StickyContactIcons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/home/home.scss';
// import './home.scss';

// export default function RootLayout({ children }) {
//     const pathname = usePathname();
//     const omitHeaderFooterPaths = [
//         '/login',
//         '/register',
//         '/flyer-design-company',
//         '/web-development-company',
//         '/brochure-design-page',
//         '/poster-design-company',
//         '/logo-design-company',
//         '/digital-marketing-company',
//         '/seo',
//         '/corporate-website',
//         '/flyer-design-page',
//         '/app-development',
//         '/crm-page',
//         '/wordpress-page',
//         '/react-page',
//         '/eccomerce-react-page',
//         '/eccomerce-wordpress-page',
//         '/shopify-page',
//         '/ui-ux-page',
//         '/openkart-page',
//         '/letter-head-page',
//         '/business-card-page',
//         '/corporate-website-development',
//         '/crm-erp-development-page',
//         '/web-design'
//     ];
//     const omitHeaderFooter = omitHeaderFooterPaths.includes(pathname);
//     return (
//         <html lang="en" suppressHydrationWarning>
//             <head>
//                 <link rel="apple-touch-icon" sizes="57x57" href="/logo/apple-icon-57x57.png" />
//                 <link rel="apple-touch-icon" sizes="60x60" href="/logo/apple-icon-60x60.png" />
//                 <link rel="apple-touch-icon" sizes="72x72" href="/logo/apple-icon-72x72.png" />
//                 <link rel="apple-touch-icon" sizes="76x76" href="/logo/apple-icon-76x76.png" />
//                 <link rel="apple-touch-icon" sizes="114x114" href="/logo/apple-icon-114x114.png" />
//                 <link rel="apple-touch-icon" sizes="120x120" href="/logo/apple-icon-120x120.png" />
//                 <link rel="apple-touch-icon" sizes="144x144" href="/logo/apple-icon-144x144.png" />
//                 <link rel="apple-touch-icon" sizes="152x152" href="/logo/apple-icon-152x152.png" />
//                 <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-icon-180x180.png" />
//                 <link rel="icon" type="image/png" sizes="192x192" href="/logo/android-icon-192x192.png" />
//                 <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
//                 <link rel="icon" type="image/png" sizes="96x96" href="/logo/favicon-96x96.png" />
//                 <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
//                 <link rel="manifest" href="/logo/manifest.json" />
//                 <meta name="msapplication-TileColor" content="#ffffff" />
//                 <meta name="msapplication-TileImage" content="/logo/ms-icon-144x144.png" />
//                 <meta name="theme-color" content="#ffffff"></meta>
//             </head>
//             <body>
//                 <ThemeProvider theme={theme}>
//                     <MenuProvider>
//                         <LayoutProvider>
//                             {!omitHeaderFooter && <Header />}
//                             <main>{children}</main>
//                             {!omitHeaderFooter && <SocialMedia />}
//                             {!omitHeaderFooter && <Footer />}
//                             <ScrollToTop />
//                             <StickyContactIcons />
//                         </LayoutProvider>
//                     </MenuProvider>
//                 </ThemeProvider>
//             </body>
//         </html>
//     );
// }
