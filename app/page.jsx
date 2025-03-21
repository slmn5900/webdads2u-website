
import React, { Suspense } from 'react';
// import '../style/home/home.scss';
import { Metadata } from 'next';
export const metadata = {
  title: 'Web Development Company In Chennai',
  description: "Webdads2u is a top web development company in Chennai, offering comprehensive services including custom website design, development, and maintenance. They deliver high-performance, responsive websites tailored to your business needs, enhancing your online presence and functionality."
};
// Lazy load the components
const Herosection = React.lazy(() => import('../components/Herosection'));
const Formsection = React.lazy(() => import('../components/Formsection'));
const ServicesSection = React.lazy(() => import('../components/ServicesSection'));
const LoadMoreImage = React.lazy(() => import('../components/LoadMoreImage'));
const Project = React.lazy(() => import('../components/Project'));
const DigitalMargeting = React.lazy(() => import('../components/DigitalMargeting'));
const Application = React.lazy(() => import('../components/Application'));
const BrandingServices = React.lazy(() => import('../components/BrandingServices'));
const Counter = React.lazy(() => import('../components/Counter'));
const Industries = React.lazy(() => import('../components/Industries'));
const CaseStudy = React.lazy(() => import('../components/CaseStudy'));
const FAQ = React.lazy(() => import('../components/FAQ'));
const CardCantainer = React.lazy(() => import('../components/CardContainer'));
const CustomTabPanel = React.lazy(() => import('../components/CustomTabPanel'));
import '../style/home/landing_page.scss'; // Import your CSS file
const LandingPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Herosection />
                <Formsection />
                <ServicesSection />
                <LoadMoreImage />
                <Project />
                <DigitalMargeting />
                <Application />
                <BrandingServices />
                <Counter />
                <Industries />
                <CaseStudy />
                <CustomTabPanel/>
                <FAQ />
                <CardCantainer />
            </Suspense>
        </div>
    );
};

export default LandingPage;
