'use client';
import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

export const metadata = {
    title: 'Logo Design Agency In Chennai',
    description: 'Our logo design agency can turn your brand around. Our logos, which range from timeless to modern, leave a lasting impression.',
    keyword: 'logo design agency in chennai,logo design agency,logo designing company in chennai, logo design company chennai, best logo designer in chennai'
};
const page = () => {
    const images = [
        { alt: 'Logo Design Agency In Chennai ', name: 'Adsfit', url: '/webdads/images/logo/adsfit.webp' },
        { alt: 'bsquar', name: 'Bsquar', url: '/webdads/images/logo/bsquar.webp' },
        { alt: 'magmee', name: 'Magmee', url: '/webdads/images/logo/magmee.webp' },
        { alt: 'globel', name: 'Globel', url: '/webdads/images/logo/globel.webp' },
        { alt: 'rmp', name: 'RMP', url: '/webdads/images/logo/rmp.jpg' },
        { alt: 'securitaz', name: 'Securitaz', url: '/webdads/images/logo/securitaz.jpg' },
        { alt: 'skp', name: 'SKP', url: '/webdads/images/logo/skp.jpg' },
        { alt: 'studio87', name: 'Studio87', url: '/webdads/images/logo/studio87.jpg' },
        { alt: 'arcman', name: 'Arcman', url: '/webdads/images/logo/arcman.jpg' },
        { alt: 'bhava', name: 'Bhava', url: '/webdads/images/logo/bhava.jpg' },
        { alt: 'boopathi', name: 'Boopathi', url: '/webdads/images/logo/boopathi.jpg' },
        { alt: 'coin-products', name: 'Coin Products', url: '/webdads/images/logo/coin-products.jpg' },
        { alt: 'computer-garage', name: 'Computer Garage', url: '/webdads/images/logo/computer-garage.jpg' },
        { alt: 'cool-tech-solution', name: 'Cool Tech Solution', url: '/webdads/images/logo/cool-tech-solution.jpg' },
        { alt: 'drudent-store', name: 'Drudent Store', url: '/webdads/images/logo/drudent-store.jpg' },
        { alt: 'ds-solution', name: 'DS Solution', url: '/webdads/images/logo/ds-solution.jpg' },
        { alt: 'high-look', name: 'High Look', url: '/webdads/images/logo/high-look.jpg' },
        { alt: 'integra', name: 'Integra', url: '/webdads/images/logo/integra.jpg' },
        { alt: 'lalit', name: 'Lalit', url: '/webdads/images/logo/lalit.jpg' },
        { alt: 'mart', name: 'Mart', url: '/webdads/images/logo/mart.jpg' },
        { alt: 'monarch-info-solution', name: 'Monarch Info Solution', url: '/webdads/images/logo/monarch-info-solution.jpg' },
        { alt: 'nivas', name: 'Nivas', url: '/webdads/images/logo/nivas.jpg' },
        { alt: 'oilsep', name: 'Oilsep', url: '/webdads/images/logo/oilsep.jpg' },
        { alt: 'oyc-fresh', name: 'OYC Fresh', url: '/webdads/images/logo/oyc-fresh.jpg' },
        { alt: 'peacock-crest', name: 'Bpeacock Crestumas', url: '/webdads/images/logo/peacock-crest.jpg' },
        { alt: 'Pharma', name: 'Pharma', url: '/webdads/images/logo/Pharma.jpg' },
        { alt: 'relife', name: 'Relife', url: '/webdads/images/logo/relife.jpg' },
        { alt: 'rmp', name: 'RMP', url: '/webdads/images/logo/rmp.jpg' },
        { alt: 'sash', name: 'Sash', url: '/webdads/images/logo/sash.jpg' },
        { alt: 'smart-cuckings', name: 'Smart Cuckings', url: '/webdads/images/logo/smart-cuckings.jpg' },
        { alt: 'smhe', name: 'SMHE', url: '/webdads/images/logo/smhe.jpg' },
        { alt: 'studio87', name: 'Studio87', url: '/webdads/images/logo/studio87.jpg' },
        { alt: 'ticket-fusion', name: 'Ticket Fusion', url: '/webdads/images/logo/ticket-fusion.jpg' }
    ];

    const datas = {
        heading1: 'Crafting Identity Premier Logo Design Company for Your Brand',
        paragraph1: 'Enhance your brand with captivating logos that make a lasting impact. Expertly designed to reflect your unique identity. Let’s bring your vision to life!',
        heading2: 'Behold our stunning Logo portfolio!',
        paragraph2: 'A playful and colorful logo for a children’s educational platform, capturing the spirit of learning and fun.'
    };
    return (
        <>
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
        </>
    );
};

export default page;
