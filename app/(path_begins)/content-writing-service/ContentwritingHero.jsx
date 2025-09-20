import React from 'react';
import Slider from '../../../components/common/Slider-image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SocialMedia from '../../../components/common/SocialMedia';
import ContentFaq from './ContentFaq';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import IStudioTechSection from './Components/IStudioTechSection';
import ContentMarketingServices from './Components/ContentMarketingServices';
import BrochureFaq from '../../../components/ui/BrochureFaq';
const ContentwritingHero = () => {
    return (
        <>
            <Banner />
            <ClientLogoSlider />
            <section className="content-marketing">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} lg={6}>
                            <div>
                                <h3>Content Marketing Company in Chennai</h3>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <p>
                                    To enhance your website’s visibility, it’s crucial that your content is optimized for search engine indexing. As the premier provider of Content Writing Services in Chennai, India, we specialize in crafting
                                    SEO-friendly content that aligns with user search queries, ensuring maximum visibility and engagement.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="content-marketing py-5">
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div>
                                <h2>The Sharpest Marketing Tool You Will Ever Own- Content!</h2>
                                <p>
                                    Digital SEO, the leading provider of digital marketing services in Chennai, wields the power of top-quality, SEO-friendly content crafted by seasoned professional content writers. Our commitment to your brand
                                    transcends mere campaigns; it’s a dedication to content marketing excellence. With over 8 years of expertise, we strategically navigate the realm of content marketing across Chennai, Coimbatore, and Tirunelveli in
                                    Tamil Nadu. From these strategic hubs, we employ our content marketing prowess to outmaneuver competitors globally. Specializing in Internet Marketing, our dominance lies in delivering unparalleled Content Writing
                                    Services tailored to your brand’s success.
                                </p>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500095/webdads2u/content-writing-service/the-sharpest-marketing-tool.png" alt="the sharpest marketing tool" className="socialbanner" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="the-benifit mt-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2 style={{ color: '#fff' }}>The Benefits Of Content Marketing</h2>
                        </div>
                        <Col md={6} lg={4} xs={6}>
                            <div className="benifitbox">
                                <img alt="website traffic" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500172/webdads2u/content-writing-service/icons/website-traffic.png"></img>
                                <h3>Website Traffic</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={6}>
                            <div className="benifitbox">
                                <img alt="client engagement" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500167/webdads2u/content-writing-service/icons/client-engagement.png"></img>
                                <h3>Client Engagement</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={6}>
                            <div className="benifitbox">
                                <img alt="leads conversions" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500163/webdads2u/content-writing-service/icons/leads-conversions.png"></img>
                                <h3>Leads & Conversions</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={6}>
                            <div className="benifitbox">
                                <img alt="media visibilty" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500159/webdads2u/content-writing-service/icons/media-visibilty.png"></img>
                                <h3>Media Visibilty</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={6}>
                            <div className="benifitbox">
                                <img alt="competitive advantage" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500156/webdads2u/content-writing-service/icons/competitive-advantage.png"></img>
                                <h3>Competitive Advantage</h3>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={6}>
                            <div className="benifitbox">
                                <img alt="brand awareness" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500152/webdads2u/content-writing-service/icons/brand-awareness.png"></img>
                                <h3>Brand Awareness</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section style={{ background: '#ECFCF9E6' }} className="istudiotech pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Content Marketing With IStudio Technologies Chennai</h2>
                        </div>
                        <Col md={6} lg={3}>
                            <div className="istudiobox">
                                <h3>Design and catchiness</h3>
                                <p>
                                    Engaging and captivating content is the key to grabbing and retaining readers&apos; attention. At our Content Writing Services, we specialize in crafting content that&apos;s not only catchy and interesting but also
                                    strategically designed to captivate your audience.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="istudiobox1">
                                <h3>Infographics</h3>
                                <p>
                                    Harnessing the power of graphics to convey information is a prevalent trend in today&apos;s marketing landscape. At iStudio Technologies Chennai, we leverage this strategy creatively and effectively to assist you
                                    in achieving your marketing objectives.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="istudiobox">
                                <h3>Additional methods </h3>
                                <p>
                                    At our top-tier Content Writing Services, we don&apos;t just stop at written content; we harness the potential of videos and similar methods to amplify your content reach. As the foremost content marketing company
                                    in Chennai
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="istudiobox1">
                                <h3>Call to action</h3>
                                <p>
                                    In every piece of content we craft, including our renowned Content Writing Services, we strategically place this crucial inclusion to entice potential buyers. It&apos;s one of our primary goals, strategically
                                    positioned within the content to attract and engage your target audience.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <IStudioTechSection />
            {/* <section className="contentwrit pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Our Content Marketing Services in Chennai - Scripting Success, Building Brands </h2>
                        </div>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <h3>Content Strategy Strategically Right</h3>
                                <p>At our Content Writing Services, we tailor a bespoke content strategy exclusively for your business, designed to resonate with your audience and achieve your objectives effectively.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <h3>Creating Content Creating Magic</h3>
                                <p>
                                    At our Content Writing Services, we specialize in crafting custom content strategies tailored specifically to your business needs. Whether it&apos;s understanding your audience or achieving your goals, we ensure
                                    every aspect of our strategy aligns perfectly with your objectives.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <h3>Developing Content Developing Success</h3>
                                <p>
                                    As part of our comprehensive Content Writing Services, we create a meticulous content calendar that aligns seamlessly with your content strategy. From there, we initiate the development of your content, scripting
                                    the path to your success.
                                </p>
                            </div>
                        </Col>

                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <h3>Optimizing Content Optimizing Victory</h3>
                                <p>
                                    In our Content Writing Services, we seamlessly integrate SEO into your content creation process. This ensures that your content is automatically optimized to satisfy both search engines and users, enhancing its
                                    visibility and effectiveness.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <h3>Promoting Content Promoting You </h3>
                                <p>
                                    With our expansive network, we promote your content across all platforms as part of our Content Writing Services. This strategic approach elevates your brand&apos;s visibility, making it one of the most recognized
                                    names in its industry.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <h3>Reporting Content Reporting Performance</h3>
                                <p>At our Content Writing Services, our professional and experienced in-house team works diligently to craft captivating content that works like magic.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <ContentMarketingServices />

            <section className="py-5">
                <Container>
                    <Row>
                        <div className="text-center erp-dev">
                            <h2>What Do We Do? We Ink Your Fame!</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="process d-flex">
                                <div>
                                    <img alt="we deliver recognition" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500148/webdads2u/content-writing-service/icons/we-deliver-recognition.png" loading="lazy" width={62} />
                                </div>
                                <div className="process-auto">
                                    <h2>We Deliver Recognition</h2>
                                    <p>Get recognised, get popular! We are dedicated to delivering recognition to you through our content marketing strategies!</p>
                                </div>
                            </div>
                            <div className="process d-flex">
                                <div>
                                    <img alt="we bring traffic" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500144/webdads2u/content-writing-service/icons/we-bring-traffic.png" loading="lazy" width={62} />
                                </div>
                                <div className="process-auto">
                                    <h2>We Bring Traffic </h2>
                                    <p>Get the website traffic you&apos;ve always wanted and can&apos;t seem to stop! Watch the number of visitors to your site grow tremendously.</p>
                                </div>
                            </div>
                            <div className="process d-flex">
                                <div>
                                    <img alt="we get you leads" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500140/webdads2u/content-writing-service/icons/we-get-you-leads.png" loading="lazy" width={62} />
                                </div>
                                <div className="process-auto">
                                    <h2>We Get You Leads</h2>
                                    <p>Maximize your leads by using content marketing techniques, tactics, and strategies that are comprehensive and comprehensive.</p>
                                </div>
                            </div>
                            <div className="process d-flex">
                                <div>
                                    <img alt="we offer conversions" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500137/webdads2u/content-writing-service/icons/we-offer-conversions.png" loading="lazy" width={62} />
                                </div>
                                <div className="process-auto">
                                    <h2>We Offer Conversions</h2>
                                    <p>Obtain the highest conversion rates from top-notch leads and see your business rise to new heights as we create your fame with words.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img alt="content marketing company in chennai" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757500093/webdads2u/content-writing-service/content-marketing-company-in-chennai.png" className="w-100" loading="lazy" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="revelution">
                <Container>
                    <Row>
                        <div>
                            <h2>Revolutionising With Panatopic Spectrum Of Content Services</h2>
                            <p>
                                Search engines crawl your website for content to retrieve the information users seek when entering search keywords. Thus, optimizing your website content is crucial for optimal engine indexing, a service we provide in
                                our Content Writing Services.
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <ContentFaq /> */}
            {/* <SocialMedia /> */}
            <BrochureFaq />
        </>
    );
};

export default ContentwritingHero;
