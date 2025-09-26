import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
import { Box } from '@mui/material';

function Developmentcompanyinchennai() {
    return (
        <Box className="developmentcompanyinchennai-main" sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 3, md: 4 } }}>
            <div className="container">
                <div className="row justify-content-center developmentcompanyinchennai">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <Title fontxs={'21px'} title={'PHP Web Development company in Chennai'} />
                        {/* <h1>PHP Web Development company in Chennai</h1> */}
                        {/* <p>
                            Embark on a journey of dynamic web solutions with PHP Web Development company in Chennai. Elevate your online presence with our expert services at PHP Development Company in Chennai. Harness the power of PHP to create
                            robust, scalable, and innovative websites that resonate with your audience. We can make your vision come to life in the digital realm.
                        </p> */}
                        <Box sx={{ textAlign: { xs: 'start', md: 'center' } }}>
                            <Description
                                Des={
                                    ' Embark on a journey of dynamic web solutions with PHP Web Development company in Chennai. Elevate your online presence with our expert services at PHP Development Company in Chennai. Harness the power of PHP to create robust, scalable, and innovative websites that resonate with your audience. We can make your vision come to life in the digital realm.'
                                }
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Developmentcompanyinchennai;
