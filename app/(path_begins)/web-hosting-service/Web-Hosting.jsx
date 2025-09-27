import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function Webhosting() {
    return (
        <section className="webhosting-main">
            <div className="container">
                <div className="row webhosting">
                    <div className="col-sm-12-col-md-6 col-lg-6 align-self-center">
                        <Title title={'Web Hosting Services Company in Chennai'} />
                        {/* <h2>Web Hosting Services Company in Chennai</h2> */}
                        <Description
                            Des="Acknowledging the critical need for our clients to access the latest technologies to maintain their competitive edge, we are dedicated to providing maximum hardware and utility support, ensuring that our customers’
                            websites remain operational 24/7, 365 days a year. Our primary focus lies in offering competitively priced private-label solutions to both our clients and resellers, with an emphasis on web hosting. From website production
                            and maintenance to user experience design and search engine optimization, our web hosting services are designed to optimize performance and visibility for our clients’ online presence.
                        "
                        />
                        {/* <p>
                            Acknowledging the critical need for our clients to access the latest technologies to maintain their competitive edge, we are dedicated to providing maximum hardware and utility support, ensuring that our customers’
                            websites remain operational 24/7, 365 days a year. Our primary focus lies in offering competitively priced private-label solutions to both our clients and resellers, with an emphasis on web hosting. From website production
                            and maintenance to user experience design and search engine optimization, our web hosting services are designed to optimize performance and visibility for our clients’ online presence.
                        </p> */}
                    </div>
                    <div className="col-sm-12-col-md-6 col-lg-6">
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757418338/webdads2u/web-hosting-service/web-hosting-services-company.png" alt="web hosting services company" loading="lazy" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Webhosting;
