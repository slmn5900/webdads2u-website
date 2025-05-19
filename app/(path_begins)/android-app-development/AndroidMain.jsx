'use client';
import React from 'react';
import './android-app-development.css';

// Dynamically import components that should only be rendered on the client side
import dynamic from 'next/dynamic';

// Import Android-related services dynamically without SSR
const AndroidAppDevelopmentServices = dynamic(() => import('./Android-App-Development-Services'), { ssr: false });

const AndroidAppServices = dynamic(() => import('./Android-App-Services'), { ssr: false });

const AndroidApplicationDevelopmentServices = dynamic(() => import('./Android-Application-Development-Services'), { ssr: false });

const Webdads2uTechnologies = dynamic(() => import('./Webdads2u-Technologies'), { ssr: false });

const TypesofCustomAndroid = dynamic(() => import('./Types-of-Custom-Android'), { ssr: false });

const AndroidApp = dynamic(() => import('./Android-App'), { ssr: false });

const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false });

const Slider = dynamic(() => import('../../../components/common/Slider-image'), { ssr: false });

const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

export const metadata = {
    title: 'Web Development Companies In Chennai',
    description: 'Unlock your online potential with our tailored web development services. We design, innovate, and deliver websites that redefine excellence.'
};

const AndroidMain = () => {
    return (
        <div>
            <section className="android-app-development-banner-image">
                <div className="container">
                    <div className="row align-items-center android-app-development">
                        <div className="col-7 col-sm-6 col-md-6 col-xs-6">
                            <h1>Android App Development</h1>
                            <p>Learn Android app development to create innovative mobile applications for the Android platform, catering to diverse user needs and preferences.</p>
                            <button type="button" className="d-none d-sm-block">
                                Contact us
                            </button>
                        </div>
                        <div className="col-5 col-sm-6 col-md-6 col-xs-6">
                            <img src="webdads/images/android-app-development/Mobile.png" alt="android-app-development" className="img-fluid" loading="lazy" />
                            <div className="element-app">
                                <img src="webdads/images/android-app-development/Bodium.png" alt="Bodium" loading="lazy" className="img-fluid android-app-gallery-slider-banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Slider />
            <div>
                <AndroidAppDevelopmentServices />
                <AndroidAppServices />
                <AndroidApplicationDevelopmentServices />
                <Webdads2uTechnologies />
<<<<<<< HEAD
                <SocialMedia />
                <TypesofCustomAndroid />
                <AndroidApp />
                <FrequentlyAskedQuestions />
=======
                {/* <SocialMedia /> */}
                <TypesofCustomAndroid />
                <AndroidApp />
                <FrequentlyAskedQuestions />
                <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
            </div>
        </div>
    );
};

export default AndroidMain;
