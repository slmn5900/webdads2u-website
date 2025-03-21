'use client';
import React from 'react';
import './brochure.scss';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

const page = () => {
    const images = [
        { alt: 'green-yeard', name: 'green-yeard', url: '/webdads/images/brochure/green-yeard.png' },
        { alt: 'srt', name: 'srt', url: '/webdads/images/brochure/srt.png' },
        { alt: 'aadhil-enterprises', name: 'aadhil-enterprises', url: '/webdads/images/brochure/aadhil-enterprises.png' },
        { alt: 'puvan', name: 'puvan', url: '/webdads/images/brochure/puvan.png' },
        { alt: 'avayan-flowtech', name: 'avayan-flowtech', url: '/webdads/images/brochure/avayan-flowtech.png' },
        { alt: 'high-look', name: 'high-look', url: '/webdads/images/brochure/high-look.png' },
        { alt: 'nuvotech', name: 'nuvotech', url: '/webdads/images/brochure/nuvotech.png' },
        { alt: 'vse', name: 'vse', url: '/webdads/images/brochure/vse.png' },
        { alt: 'vse_series', name: 'vse_series', url: '/webdads/images/brochure/vse_series.png' },
        { alt: 'tapco', name: 'tapco', url: '/webdads/images/brochure/tapco.png' },
        { alt: 'Spice-sawarri', name: 'Spice-sawarri', url: '/webdads/images/brochure/Spice-sawarri.png' },
        { alt: 'vse-regulation', name: 'vse-regulation', url: '/webdads/images/brochure/vse-regulation.png' },

        { alt: 'pride-rmx', name: 'pride-rmx', url: '/webdads/images/brochure/pride-rmx.png' },
        { alt: 'nutural-oil', name: 'nutural-oil', url: '/webdads/images/brochure/nutural-oil.png' },
        { alt: 'd-princes', name: 'd-princes', url: '/webdads/images/brochure/d-princes.png' },
        { alt: 'oilsep', name: 'oilsep', url: '/webdads/images/brochure/oilsep.png' },
        { alt: 'world-landing', name: 'world-landing', url: '/webdads/images/brochure/world-landing.png' }
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
