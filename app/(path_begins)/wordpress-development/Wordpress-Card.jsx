import React from 'react';

function WordpressCard() {
    return (
        <section className="WordpressCard-main">
            <div className="container">
                <div className="row WordpressCard">
                    <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                        <div className="card p-2">
                            <div>
                                <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className="img-fluid" loading="lazy" />
                            </div>
                            <div className="card-title">
                                <h1>Theme Utilization</h1>
                            </div>
                            <div className="card-body">
                                <p>We use advanced features built-in to help users set up, manage their website easier without technical skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                        <div className="card p-2" style={{ boxShadow: 'none' }}>
                            <div>
                                <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className="img-fluid" loading="lazy" />
                            </div>
                            <div className="card-title">
                                <h1>Flexible and easy to customize</h1>
                            </div>
                            <div className="card-body">
                                <p>We build tools, widgets for important features for each website that allows a user to update and customize later.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                        <div className="card p-2">
                            <div>
                                <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className="img-fluid" loading="lazy" />
                            </div>
                            <div className="card-title">
                                <h1>Extensions & Plugins</h1>
                            </div>
                            <div className="card-body">
                                <p>Using top-rated extensions and customize the extension to meet requirements from different projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WordpressCard;
