import React from 'react';
import Card from 'react-bootstrap/Card';

function BrandIdentityIncludes() {
    return (
        <section className="BrandIdentityIncludes-main">
            <div className="container">
                <div className="row BrandIdentityIncludes">
                    <div className="col-sm-12 col-lg-6">
                        <h1>What Does</h1>
                        <h1>
                            <span className="BrandIdentityIncludes-span">brand identity</span> includes
                        </h1>
                        <p>Сorporate identity elements can further maximize the impact of the marketing activities.</p>
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503240/webdads2u/branding-design/branding-services.png" alt="branding services" className="img-fluid" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-6  BrandIdentityIncludes-card-colum">
                        <div className="d-flex flex-column flex-sm-row text-center BrandIdentityIncludes-card">
                            <div className="col-xs-12 col-lg-6 mt-5" style={{ marginRight: '25px' }}>
                                <Card>
                                    <Card.Body>
                                        <div>
                                            {' '}
                                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503287/webdads2u/branding-design/icons/typography.png" alt="Professional-typography" className="img-fluid" />
                                        </div>
                                        <Card.Title>Professional typography</Card.Title>
                                        <Card.Text>Fonts are powerful because they make your messages readable, recognizable, and persuasive. Our designers help you pick a font that will work with your logo and color scheme.</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <div>
                                            {' '}
                                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503287/webdads2u/branding-design/icons/on-brand-supporting.png" alt="on-brand-supporting" className="img-fluid" />
                                        </div>
                                        <Card.Title>On-brand supporting Graphics</Card.Title>
                                        <Card.Text>It is a variety of graphic elements which convey a business’ visual language. These can be images, icons, buttons, motion graphics, data visualization, or design assets.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-xs-12 col-lg-6 ">
                                <Card>
                                    <Card.Body>
                                        <div>
                                            {' '}
                                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503287/webdads2u/branding-design/icons/colour-palette.png" alt="colour-palette" className="img-fluid" />
                                        </div>
                                        <Card.Title>Colour Palette</Card.Title>
                                        <Card.Text>
                                            Colors convey emotions. Our designers help you to select one to three primary colors and a few additional colors for your business. They will also help you to pick eye-catching color combinations.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <div>
                                            {' '}
                                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503287/webdads2u/branding-design/icons/system.png" alt="system" className="img-fluid" />
                                        </div>
                                        <Card.Title>Design System</Card.Title>
                                        <Card.Text>When all elements have been chosen or created you need a system to bring them together. It makes text and graphic messages clear for customers.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BrandIdentityIncludes;
