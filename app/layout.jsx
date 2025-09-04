'use client'; // only for App Router; remove if you're using _app.js

import React from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext'; // Make sure this is a named export
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'; // Make sure Footer uses `export default`
import Header from '../components/Header'; // Make sure Header uses `export default`
import { usePathname } from 'next/navigation';
import '../style/home/home.scss';
import { MenuProvider } from '../layout/context/menucontext';
import SocialMedia from '../components/common/SocialMedia.jsx';

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
        '/business-card-page'
        // '/web-design'
    ];

    const omitHeaderFooter = omitHeaderFooterPaths.includes(pathname);

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <MenuProvider>
                    <LayoutProvider>
                        {!omitHeaderFooter && <Header />}
                        <main>{children}</main>
                        {!omitHeaderFooter && <SocialMedia />}
                        {!omitHeaderFooter && <Footer />}
                    </LayoutProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
