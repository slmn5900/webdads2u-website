'use client';
import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function Customwebsite() {
    return (
        <section className="customwebsite-main">
            <div className="container">
                <div className="row justify-content-center text-center customwebsite">
                    <div className="col-sm-12 col-md-12 col-lg-10">
                        <Title color={"#0A1F5F"} title={'Custom Website Development Services'} />
                        {/* <h2>Custom Website Development Services</h2> */}
                        <Description
                            Des={
                                'Webdads2u Pvt. Ltd. is a comprehensive Custom Website Development agency consisting of top-tier web designers worldwide. Our web design services are ideal for crafting a new website from the ground up or revitalizing your existing digital presence.'
                            }
                        />
                        {/* <p>Webdads2u Pvt. Ltd. is a comprehensive Custom Website Development agency consisting of top-tier web designers worldwide. Our web design services are ideal for crafting a new website from the ground up or revitalizing your existing digital presence.</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Customwebsite;
