import React, { Suspense } from 'react';
// import '../style/home/home.scss';
import { Metadata } from 'next';
export const metadata = {
    title: 'Web Design Company In Chennai & Web Development Company In Chennai',
    description: 'Experienced and trusted web development company in Chennai with over 10 years in crafting static and dynamic websites for startups to large enterprises.',
    keyword:
        'web design company in chennai,web designing company in chennai,website design company in chennai,website company in chennai,top web design company in chennai,best web design company in chennai,low cost web design company in chennai,web designers company in chennai,custom web design company in chennai,web development company in chennai,web developers in chennai,website price in chennai,website designers in chennai'
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
                <CustomTabPanel />
                <FAQ />
                <CardCantainer />
            </Suspense>
        </div>
    );
};

export default LandingPage;
