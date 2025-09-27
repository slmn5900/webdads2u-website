'use client';
import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
import { Box } from '@mui/material';

function Customwebsite() {
    return (
        <Box className="customwebsite-main" sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 0, md: 0 } }}>
            <div className="container">
                <div className="row justify-content-center text-center customwebsite">
                    <div className="col-sm-12 col-md-12 col-lg-10">
                        <Title color={'#0A1F5F'} title={'Custom Website Development Services'} />
                        {/* <h2>Custom Website Development Services</h2> */}
                        <Box textAlign={{ xs: 'start', md: 'justify' }}>
                            <Description
                                Des={
                                    'Webdads2u Pvt. Ltd. is a comprehensive Custom Website Development agency consisting of top-tier web designers worldwide. Our web design services are ideal for crafting a new website from the ground up or revitalizing your existing digital presence.'
                                }
                            />
                        </Box>
                        {/* <p>Webdads2u Pvt. Ltd. is a comprehensive Custom Website Development agency consisting of top-tier web designers worldwide. Our web design services are ideal for crafting a new website from the ground up or revitalizing your existing digital presence.</p> */}
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Customwebsite;
