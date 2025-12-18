import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Fqppcservice() {
    return (
        <section className='fqppcservice-main'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 fqppcservice">
                        <h1>Frequently Asked Questions</h1>
                        <p>Hundreds of reviews from our customers say so.
                            Our in-house support team is friendly & professional
                            and usually way to help you. .!</p>

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">


                        <div className='fqppcservice-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is PPC advertising?</Accordion.Header>
                                    <Accordion.Body>
                                        PPC (Pay-Per-Click) advertising is a digital marketing model where advertisers pay a fee each time their ad is clicked. It allows businesses to bid for ad placement in search engine results or on websites.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How does Google Ads work?</Accordion.Header>
                                    <Accordion.Body>
                                        Google Ads is a PPC advertising platform where businesses can create and manage ads to appear on Google’s search engine results pages, websites within the Google Display Network, and YouTube. Advertisers bid on keywords, and their ads are displayed to users based on relevancy and bid amount.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What are the benefits of PPC advertising?</Accordion.Header>
                                    <Accordion.Body>
                                        PPC advertising offers several benefits, including immediate visibility, precise targeting options, measurable results, and the ability to control budget and spending. It can drive targeted traffic to websites, increase brand awareness, and generate leads or sales.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How much does PPC advertising cost?</Accordion.Header>
                                    <Accordion.Body>
                                        The cost of PPC advertising varies depending on factors such as keyword competitiveness, industry, and campaign settings. Advertisers set a budget and pay only when their ads are clicked. Google Ads operates on a bidding system, where advertisers compete for ad placement based on bid amounts and ad quality.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How can Webdads2u help with PPC advertising?</Accordion.Header>
                                    <Accordion.Body>
                                        Webdads2u provides expert PPC services, including campaign setup, keyword research, ad creation, and ongoing optimization. We maximize ROI by targeting the right audience, improving ad relevance, and continuously refining strategies to achieve your advertising goals.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fqppcservice;
