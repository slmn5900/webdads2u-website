import { Box } from '@mui/material';
import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function BenefitsofReactjs() {
    return (
        <Box className="benefitsofReactjs-main" sx={{ py: { xs: 3, md: 6 } }}>
            <div className="container">
                <div className="row benefitsofReactjs">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        {/* <h1>Benefits of Reactjs</h1> */}
                        <Box sx={{ mb: 4 }}>
                            <Title title={'Benefits of Reactjs'} />
                            <Description Des={'Avail the sheer benefits for your application'} />
                        </Box>
                        {/* <p>Avail the sheer benefits for your application</p> */}
                    </div>
                </div>
                <div className="row benefitsofReactjs-card text-center">
                    <div className="col-sm-12 col-md-6 col-lg-3 card-st">
                        <div className="card-img">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/web-portal-designing.png" alt="web-portal-designing" loading="lazy" className="img-fluid" />
                        </div>
                        <div className="card">
                            <h1>Quick Delivering</h1>
                            <p>
                                Utilize React js for accelerated project timelines. With its component-based architecture and virtual DOM, achieve swift development cycles, ensuring the timely delivery of high-quality applications. Streamline your
                                development process with React.js.
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 card-st">
                        <div className="card-img">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/web-portal-designing.png" alt="web-portal-designing" loading="lazy" className="img-fluid" />
                        </div>
                        <div className="card">
                            <h1>Easy Debugging</h1>
                            <p>
                                Simplify the troubleshooting process with React js. Its developer-friendly tools, combined with a unidirectional data flow, streamline debugging, making it easier to identify and resolve issues promptly for a smoother
                                development experience.
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 card-st">
                        <div className="card-img">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393329/webdads2u/react-js-development/icons/portal-maintenance.png" alt="web-portal-designing" loading="lazy" className="img-fluid" />
                        </div>
                        <div className="card">
                            <h1>Agile Implementation</h1>
                            <p>Embrace development agility with React js. Its modular and component-based structure allows seamless adjustments, making it adaptable to changing project requirements for a responsive development process.</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 card-st">
                        <div className="card-img">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393329/webdads2u/react-js-development/icons/portal-maintenance.png" alt="web-portal-designing" loading="lazy" className="img-fluid" />
                        </div>
                        <div className="card">
                            <h1>Stable Codes</h1>
                            <p>
                                Build robust applications with React js. Declarative syntax, reusable components, and a unidirectional data flow contribute to creating stable and reliable codebases, ensuring the development of secure and resilient
                                software solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default BenefitsofReactjs;
