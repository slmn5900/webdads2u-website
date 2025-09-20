'use client';
import React from 'react';
import './brochure.scss';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

const Brochure = () => {
    // const images = [
    //     { alt: 'green-yeard', name: 'Green Yeard', url: '/webdads/images/brochure/green-yeard.png' },
    //     { alt: 'srt', name: 'SRT', url: '/webdads/images/brochure/srt.png' },
    //     { alt: 'aadhil-enterprises', name: 'Aadhil Enterprises', url: '/webdads/images/brochure/aadhil-enterprises.png' },
    //     { alt: 'puvan', name: 'Puvan', url: '/webdads/images/brochure/puvan.png' },
    //     { alt: 'avayan-flowtech', name: 'Avayan Flowtech', url: '/webdads/images/brochure/avayan-flowtech.png' },
    //     { alt: 'high-look', name: 'High Look', url: '/webdads/images/brochure/high-look.png' },
    //     { alt: 'nuvotech', name: 'Nuvotech', url: '/webdads/images/brochure/nuvotech.png' },
    //     { alt: 'vse', name: 'VSE', url: '/webdads/images/brochure/vse.png' },
    //     { alt: 'vse_series', name: 'VSE Series', url: '/webdads/images/brochure/vse_series.png' },
    //     { alt: 'tapco', name: 'Tapco', url: '/webdads/images/brochure/tapco.png' },
    //     { alt: 'Spice-sawarri', name: 'Spice Sawarri', url: '/webdads/images/brochure/Spice-sawarri.png' },
    //     { alt: 'vse-regulation', name: 'VSE Regulation', url: '/webdads/images/brochure/vse-regulation.png' },
    //     { alt: 'pride-rmx', name: 'Pride RMX', url: '/webdads/images/brochure/pride-rmx.png' },
    //     { alt: 'nutural-oil', name: 'Nutural Oil', url: '/webdads/images/brochure/nutural-oil.png' },
    //     { alt: 'd-princes', name: 'D Princes', url: '/webdads/images/brochure/d-princes.png' },
    //     { alt: 'oilsep', name: 'Oilsep', url: '/webdads/images/brochure/oilsep.png' },
    //     { alt: 'world-landing', name: 'World Landing', url: '/webdads/images/brochure/world-landing.png' }
    // ];

    const images = [
        { alt: 'green-yeard', name: 'Green Yeard', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915638/webdads2u/brochure/green-yeard.jpg' },
        { alt: 'srt', name: 'SRT', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915644/webdads2u/brochure/srt.jpg' },
        { alt: 'aadhil-enterprises', name: 'Aadhil Enterprises', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915646/webdads2u/brochure/aadhil-enterprises.jpg' },
        { alt: 'puvan', name: 'Puvan', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915636/webdads2u/brochure/puvan-brochure-1.jpg' },
        { alt: 'avayan-flowtech', name: 'Avayan Flowtech', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915634/webdads2u/brochure/avayan-flowtech.jpg' },
        { alt: 'high-look', name: 'High Look', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915634/webdads2u/brochure/high-look.jpg' },
        { alt: 'nuvotech', name: 'Nuvotech', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915662/webdads2u/brochure/nuvotech.jpg' },
        { alt: 'vse', name: 'VSE', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915652/webdads2u/brochure/vse.jpg' },
        { alt: 'vse_series', name: 'VSE Series', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915658/webdads2u/brochure/vse-brochure-1.jpg' },
        { alt: 'tapco', name: 'Tapco', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915660/webdads2u/brochure/tappo-brochure.jpg' },
        { alt: 'Spice-sawarri', name: 'Spice Sawarri', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915650/webdads2u/brochure/spice-sawarri.jpg' },
        { alt: 'vse-regulation', name: 'VSE Regulation', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915658/webdads2u/brochure/vse-brochure-1.jpg' }, // ✅ reused same as VSE brochure 1
        { alt: 'pride-rmx', name: 'Pride RMX', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915656/webdads2u/brochure/pride-rmx.jpg' },
        { alt: 'nutural-oil', name: 'Nutural Oil', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915648/webdads2u/brochure/nutural-oil.jpg' },
        { alt: 'd-princes', name: 'D Princes', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915654/webdads2u/brochure/d-princes.jpg' },
        { alt: 'oilsep', name: 'Oilsep', url: '/webdads/images/brochure/oilsep.png' }, // ⚠️ Cloudinary link not found in your list
        { alt: 'world-landing', name: 'World Landing', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757915640/webdads2u/brochure/world-landing.jpg' }
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

export default Brochure;
