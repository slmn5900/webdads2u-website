'use client';
import React from 'react';
import './brochure.scss';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

const page = () => {
    const images = [
        { alt: 'green-yeard', name: 'Green Yeard', url: '/webdads/images/brochure/green-yeard.png' },
        { alt: 'srt', name: 'SRT', url: '/webdads/images/brochure/srt.png' },
        { alt: 'aadhil-enterprises', name: 'Aadhil Enterprises', url: '/webdads/images/brochure/aadhil-enterprises.png' },
        { alt: 'puvan', name: 'Puvan', url: '/webdads/images/brochure/puvan.png' },
        { alt: 'avayan-flowtech', name: 'Avayan Flowtech', url: '/webdads/images/brochure/avayan-flowtech.png' },
        { alt: 'high-look', name: 'High Look', url: '/webdads/images/brochure/high-look.png' },
        { alt: 'nuvotech', name: 'Nuvotech', url: '/webdads/images/brochure/nuvotech.png' },
        { alt: 'vse', name: 'VSE', url: '/webdads/images/brochure/vse.png' },
        { alt: 'vse_series', name: 'VSE Series', url: '/webdads/images/brochure/vse_series.png' },
        { alt: 'tapco', name: 'Tapco', url: '/webdads/images/brochure/tapco.png' },
        { alt: 'Spice-sawarri', name: 'Spice Sawarri', url: '/webdads/images/brochure/Spice-sawarri.png' },
        { alt: 'vse-regulation', name: 'VSE Regulation', url: '/webdads/images/brochure/vse-regulation.png' },
        { alt: 'pride-rmx', name: 'Pride RMX', url: '/webdads/images/brochure/pride-rmx.png' },
        { alt: 'nutural-oil', name: 'Nutural Oil', url: '/webdads/images/brochure/nutural-oil.png' },
        { alt: 'd-princes', name: 'D Princes', url: '/webdads/images/brochure/d-princes.png' },
        { alt: 'oilsep', name: 'Oilsep', url: '/webdads/images/brochure/oilsep.png' },
        { alt: 'world-landing', name: 'World Landing', url: '/webdads/images/brochure/world-landing.png' }
    ];

    const datas = {
        heading1: 'Unlock your creativity with your trusted brochure design company.',
        paragraph1: 'Captivate audiences with stunning brochures. Elevate your brand with our expertly crafted designs. Let’s tell your story in style!',
        heading2: 'Behold our stunning Brochure Design portfolio!',
        paragraph2: 'We believe in designing brochures with a purpose. Each element is carefully crafted to convey your message clearly and engage your audience.'
    };
    return (
        <>
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
        </>
    );
};

export default page;
