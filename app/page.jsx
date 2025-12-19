import './home.scss';
import '../style/home/landing_page.scss';
import dynamic from 'next/dynamic';
import Herosection from '../components/Herosection';
import CaseStudy from '../components/CaseStudy';
import WebDesigningSection from '../components/WebDesigningSection';
import IndustriesServe from '../components/IndustriesServe';
import TabSection from '../components/TabSection';
import WebsitePerformance from '../components/WebsitePerformance';
import Script from 'next/script';
import { schemaGraph } from './utils/schemaGraph';
const LogoSlider = dynamic(() => import('../components/LogoSlider'));
const LatestBlog = dynamic(() => import('../components/LatestBlog'));

export const metadata = {
    title: 'Web Development & Web Design Company in Chennai | Webdads2u',
    description: 'Build a scalable, high-performing website with Webdads2u – the leading web development and design agency in Chennai.'
};

const LandingPage = () => {
    return (
        <div>
            <Script id="schema-graph" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

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
