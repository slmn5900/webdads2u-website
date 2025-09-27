import React from 'react';
import Description from '../../../components/Description';

function Brandidentity() {
    return (
        <section className="brandidentity-banner">
            <div className="container">
                <div className="row brandidentity">
                    <div className="col-sm-12 text-center">
                        <h1>
                            Leading <span className="SliderimagebrandingdesignStreaming-span">brand identity</span> company in Chennai
                        </h1>

                        <Description Des="Webdads2u is one of the top Branding Company in Chennai, India. Branding and design are crucial factors that distinguish your company. It represents your values and influences how your company is perceived. We are experts in creating unique designs that make you stand out from your competitors. We create brands that exemplify trust and reliability. Therefore, you can count on us for the best graphic design services that grab your audience’s attention and stay in their memory." />
                        {/* <p >
                            
                        </p> */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row brandidentity-card">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503294/webdads2u/branding-design/icons/creativity.png" className="img-fluid" alt="Creative Ideas" />
                            <div className="card-body">
                                <h1>Creative Ideas</h1>
                                <p className="card-text">Build the design with innovative ideas for customer interactions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503293/webdads2u/branding-design/icons/customize-layout.png" className="img-fluid" alt="Customize Layout" />
                            <div className="card-body">
                                <h1>Customize Layout</h1>
                                <p className="card-text">Create the perfect layouts for understanding the products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503292/webdads2u/branding-design/icons/attract-customer.png" className="img-fluid" alt="Attract Customers" />
                            <div className="card-body">
                                <h1>Attract Customers</h1>
                                <p className="card-text">Attract the customers to engage the business by making a successful brochure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brandidentity;
