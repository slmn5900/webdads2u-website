import './home.scss';
import '../style/home/landing_page.scss';
import dynamic from 'next/dynamic';
import Herosection from "../components/Herosection";
import CaseStudy from "../components/CaseStudy";
import WebDesigningSection from "../components/WebDesigningSection";
import IndustriesServe from "../components/IndustriesServe";
import TabSection from "../components/TabSection";
import WebsitePerformance from "../components/WebsitePerformance";
import Script from 'next/script';

const LogoSlider = dynamic(() => import("../components/LogoSlider"));
const LatestBlog = dynamic(() => import("../components/LatestBlog"));

export const metadata = {
  title: "Web Development & Web Design Company in Chennai | Webdads2u",
  description:
    "Build a scalable, high-performing website with Webdads2u – the leading web development and design agency in Chennai.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.webdads2u.com/#organization",
  "name": "Webdads2u Pvt Ltd",
  "url": "https://www.webdads2u.com/",
  "logo": "https://res.cloudinary.com/dbpv95wd8/image/upload/v1765197314/webdads2u/webdads2u-christmas-logo.png",
  "image": "https://res.cloudinary.com/dbpv95wd8/image/upload/v1765197314/webdads2u/webdads2u-christmas-logo.png",
  "email": "info@webdads2u.com",
  "telephone": "+91 88256 07550",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No: S19, Subham Complex 2nd Floor, North Park Street, Ambattur O.T",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600053",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 88256 07550",
    "contactType": "customer support",
    "email": "info@webdads2u.com",
    "url": "https://www.webdads2u.com/contact-us"
  },
  "sameAs": [
    "https://www.facebook.com/Webdads2u",
    "https://www.instagram.com/webdads2u/",
    "https://www.linkedin.com/company/webdads2u-private-limited/",
    "https://x.com/webdads2u"
  ]
};

const LandingPage = () => {
  return (
    <div>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Herosection />
      <CaseStudy />
      <TabSection />
      <WebsitePerformance />
      <WebDesigningSection />
      <IndustriesServe />
      <LogoSlider />
      <LatestBlog />
    </div>
  );
};

export default LandingPage;
