<<<<<<< HEAD
import React from 'react'
import { FaDotCircle } from "react-icons/fa";

function Businesseschoose() {
    return (
        <section className='businesseschoose-main'>
            <div className="container">
                <div className="row businesseschoose">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <h1>Why do Businesses choose us
                            for Mobile App Development ?</h1>
                        <div className="d-flex flex-column mb-3 businesseschoose-item">
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Serve across Industries</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> App for Different iOS</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Agile Development Process</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Flexible Engagement Models</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Dedicated App Development Teams</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Affordable Pricing</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="webdads/images/mobile-app-development/banner.png" alt="banner" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Businesseschoose
=======
import { Box, Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import GraphicLogoRight from '../../../components/ui/Graphic-Logo-Design/GraphicLogoRight';
import ImageBox from '../../../components/ui/ImageBox';
import { MenuContext } from '../../../layout/context/menucontext';
export default function Businesseschoose() {
    const { list_section } = useContext(MenuContext);
    const lists = list_section.lists;
    const title = list_section.title;
    return (
        <Container sx={{ marginBottom: { md: 4 } }}>
            <Grid2 container>
                <GraphicLogoRight content={{ title, lists }} />
                <ImageBox image={list_section?.img} />
            </Grid2>
        </Container>
    );
}
>>>>>>> a0d19cc (Initial commit)
