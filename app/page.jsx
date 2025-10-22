"use client";
import React, { Suspense, useEffect } from 'react';
import './home.scss';
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

import '../style/home/landing_page.scss';
import LoadingComponent from '../components/LoadingComponent';

const LandingPage = () => {
    useEffect(() => {
        const gtmScript = document.createElement('script');
        gtmScript.innerHTML = `
            (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WZXCJ8W3');
        `;
        document.head.appendChild(gtmScript);
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZXCJ8W3"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `;
        document.body.insertBefore(noscript, document.body.firstChild);
        return () => {
            document.head.removeChild(gtmScript);
            document.body.removeChild(noscript);
        };
    }, []);

    return (
        <div>
            <Suspense
                fallback={
                    <div>
                        <LoadingComponent />
                    </div>
                }
            >
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
