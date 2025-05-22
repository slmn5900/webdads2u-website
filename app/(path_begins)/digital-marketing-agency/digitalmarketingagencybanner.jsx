import React from 'react';

function Digitalmarketingagencybanner() {
    return (
        <section className="digitalmarketingagencybanner-main">
            <div className="container">
                <div className="row digitalmarketingagencybanner">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <h1>10X</h1>
                        <h2>Your Marketing Campaign Results</h2>
                        <p>With Webdads2u Algorithmic Marketing Cloud</p>
                        <div className="d-none d-sm-block">
                            <a href="/contact-us">
                                <button className="button-one">SCHEDULE A DEMO</button>
                            </a>
                            <a href="/contact-us">
                                <button className="button-two">CHECK WEBDADS2U PROMISE</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center">
                        <img
                            src="webdads/images/digital-marketing-agency/banner-design.png"
                            alt="Digital Marketing Agency In Chennai
"
                            loading="lazy"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Digitalmarketingagencybanner;
