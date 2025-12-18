'use client';

import Header from '../components/Header.jsx';
import { usePathname } from 'next/navigation';

const omitHeaderPaths = [
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
];

export default function HeaderWrapper() {
    const pathname = usePathname();
    if (omitHeaderPaths.includes(pathname)) return null;

    return (
        <>
            <Header />
        </>
    );
}
