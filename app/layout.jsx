"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material';
import theme from '../Theme/theme.jsx';
import { LayoutProvider } from '../layout/context/layoutcontext.jsx';
import { MenuProvider } from '../layout/context/menucontext';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SocialMedia from '../components/common/SocialMedia.jsx';
import ScrollToTop from '../components/common/ScrollToTop.jsx';
import { usePathname } from 'next/navigation';

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

export default function RootLayout({ children }) {
  const pathname = usePathname() || '/';
  const omitHeaderFooter = omitHeaderFooterPaths.includes(pathname);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`https://www.webdads2u.com${pathname}`} />
        <meta name="yandex-verification" content="e1060a1c688bb5d9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMJN6N87');`,
          }}
        />
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
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMJN6N87"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider theme={theme}>
          <MenuProvider>
            <LayoutProvider>
              {!omitHeaderFooter && <Header />}
              <main>{children}</main>
              {!omitHeaderFooter && <SocialMedia />}
              {!omitHeaderFooter && <Footer />}
              <ScrollToTop />
            </LayoutProvider>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
