import './home.scss';
import '../style/home/landing_page.scss';

import Herosection from "../components/Herosection";
import CaseStudy from "../components/CaseStudy";
import WebDesigningSection from "../components/WebDesigningSection";
const LogoSlider = dynamic(() => import("../components/LogoSlider"), {
    ssr: false,
});
import IndustriesServe from "../components/IndustriesServe";
import TabSection from "../components/TabSection";
const LatestBlog = dynamic(() => import("../components/LatestBlog"), {
    ssr: false,
});
import WebsitePerformance from "../components/WebsitePerformance";
import dynamic from 'next/dynamic';

const LandingPage = () => {
    return (
        <div>
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
