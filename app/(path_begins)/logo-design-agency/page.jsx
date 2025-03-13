"use client"
import React from 'react'
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
const page = () => {
  const images = [
    { alt: 'adsfit', name: 'adsfit', url: '/webdads/images/logo/adsfit.webp' },
    { alt: 'bsquar', name: 'bsquar', url: '/webdads/images/logo/bsquar.webp' },
    { alt: 'magmee', name: 'magmee', url: '/webdads/images/logo/magmee.webp' },
    { alt: 'globel', name: 'globel', url: '/webdads/images/logo/globel.webp' },
    { alt: 'rmp', name: 'rmp', url: '/webdads/images/logo/rmp.jpg' },
    { alt: 'securitaz', name: 'securitaz', url: '/webdads/images/logo/securitaz.jpg' },

    { alt: 'skp', name: 'skp', url: '/webdads/images/logo/skp.jpg' },
    { alt: 'studio87', name: 'studio87', url: '/webdads/images/logo/studio87.jpg' },
    { alt: 'arcman', name: 'arcman', url: '/webdads/images/logo/arcman.jpg' },
    { alt: 'bhava', name: 'bhava', url: '/webdads/images/logo/bhava.jpg' },
    { alt: 'boopathi', name: 'boopathi', url: '/webdads/images/logo/boopathi.jpg' },
    { alt: 'coin-products', name: 'coin-products', url: '/webdads/images/logo/coin-products.jpg' },


    { alt: 'computer-garage', name: 'computer-garage', url: '/webdads/images/logo/computer-garage.jpg' },
    { alt: 'cool-tech-solution', name: 'cool-tech-solution', url: '/webdads/images/logo/cool-tech-solution.jpg' },
    { alt: 'drudent-store', name: 'drudent-store', url: '/webdads/images/logo/drudent-store.jpg' },
    { alt: 'ds-solution', name: 'ds-solution', url: '/webdads/images/logo/ds-solution.jpg' },
    { alt: 'high-look', name: 'high-look', url: '/webdads/images/logo/high-look.jpg' },
    { alt: 'integra', name: 'integra', url: '/webdads/images/logo/integra.jpg' },

    { alt: 'lalit', name: 'lalit', url: '/webdads/images/logo/lalit.jpg' },
    { alt: 'mart', name: 'mart', url: '/webdads/images/logo/mart.jpg' },
    { alt: 'monarch-info-solution', name: 'monarch-info-solution', url: '/webdads/images/logo/monarch-info-solution.jpg' },
    { alt: 'nivas', name: 'nivas', url: '/webdads/images/logo/nivas.jpg' },
    { alt: 'oilsep', name: 'oilsep', url: '/webdads/images/logo/oilsep.jpg' },
    { alt: 'oyc-fresh', name: 'oyc-fresh', url: '/webdads/images/logo/oyc-fresh.jpg' },


    { alt: 'peacock-crest', name: 'bpeacock-crestumas', url: '/webdads/images/logo/peacock-crest.jpg' },
    { alt: 'Pharma', name: 'Pharma', url: '/webdads/images/logo/Pharma.jpg' },
    { alt: 'relife', name: 'relife', url: '/webdads/images/logo/relife.jpg' },
    { alt: 'rmp', name: 'rmp', url: '/webdads/images/logo/rmp.jpg' },
    { alt: 'sash', name: 'sash', url: '/webdads/images/logo/sash.jpg' },
    { alt: 'smart-cuckings', name: 'smart-cuckings', url: '/webdads/images/logo/smart-cuckings.jpg' },

    { alt: 'smhe', name: 'smhe', url: '/webdads/images/logo/smhe.jpg' },
    { alt: 'studio87', name: 'studio87', url: '/webdads/images/logo/studio87.jpg' },
    { alt: 'ticket-fusion', name: 'ticket-fusion', url: '/webdads/images/logo/ticket-fusion.jpg' },
    
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


export default page
