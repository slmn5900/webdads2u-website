import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
import { Box } from '@mui/material';

function Phpframeworks() {
    return (
        <section className="phpframeworks-main">
            <div className="container">
                <div className="row phpframeworks">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        {/* <h1>Php Frameworks</h1> */}
                        <Title title={'Php Frameworks'} />
                        {/* <p className="p-0 m-0">
                            As a premier PHP Web Development company in Chennai, we leverage a variety of powerful PHP frameworks to build robust and scalable web applications. From the flexibility of Laravel to the efficiency of Symphony and the
                            simplicity of Code Igniter, our expertise in these frameworks ensures that we deliver high-quality, tailored solutions that meet your specific requirements.
                        </p> */}
                        <Box textAlign={{ xs: 'left', md: 'center' }}>
                            <Description
                                Des={
                                    ' As a premier PHP Web Development company in Chennai, we leverage a variety of powerful PHP frameworks to build robust and scalable web applications. From the flexibility of Laravel to the efficiency of Symphony and the simplicity of Code Igniter, our expertise in these frameworks ensures that we deliver high-quality, tailored solutions that meet your specific requirements.'
                                }
                            />{' '}
                            <br />
                            {/* <p>Whether you need a dynamic website, a custom CMS, or an e-commerce platform, our proficiency in PHP frameworks enables us to create innovative and feature-rich applications that drive your business forward.</p> */}
                            <Description
                                Des={'Whether you need a dynamic website, a custom CMS, or an e-commerce platform, our proficiency in PHP frameworks enables us to create innovative and feature-rich applications that drive your business forward.'}
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Phpframeworks;
