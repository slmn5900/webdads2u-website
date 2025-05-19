
import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';


const page = () => {
    const images = [
        { alt: 'securitaz', name: 'Securitaz', url: '/webdads/images/wordpress/securitaz.webp' },
        { alt: 'rmp', name: 'RMP', url: '/webdads/images/wordpress/rmp.webp' },
        { alt: 'raj-vision', name: 'Raj Vision', url: '/webdads/images/wordpress/raj-vision.webp' },
        { alt: 'atgomart', name: 'Atgomart', url: '/webdads/images/wordpress/atgomart.webp' },
        { alt: 'arcmen', name: 'Arcmen', url: '/webdads/images/wordpress/arcmen.webp' },
        { alt: 'vamp-innovation', name: 'Vamp Innovation', url: '/webdads/images/wordpress/vamp-innovation.webp' },

        { alt: 'relife', name: 'Relife', url: '/webdads/images/wordpress/relife.webp' },
        { alt: 'home-for-children', name: 'Home For Children', url: '/webdads/images/wordpress/home-for-children.webp' },
        { alt: 'global', name: 'Global', url: '/webdads/images/wordpress/global.webp' },
        { alt: 'pride-rmx', name: 'Pride RMX', url: '/webdads/images/wordpress/pride-rmx.webp' },
        { alt: 'i-clicks', name: 'I Clicks', url: '/webdads/images/wordpress/i-clicks.webp' },
        { alt: 'chennai-water-proofing', name: 'Chennai Water Proofing', url: '/webdads/images/wordpress/chennai-water-proofing.webp' },


        { alt: 'rm-groups', name: 'RM Groups', url: '/webdads/images/wordpress/rm-groups.webp' },
        { alt: 'kb-homes', name: 'KB Homes', url: '/webdads/images/wordpress/kb-homes.webp' },
        { alt: 'lalit', name: 'Lalit', url: '/webdads/images/wordpress/lalit.webp' },
        { alt: 'mi', name: 'MI', url: '/webdads/images/wordpress/mi.webp' },
        { alt: 'most', name: 'MOST', url: '/webdads/images/wordpress/most.webp' },
        { alt: 'needle', name: 'Needle', url: '/webdads/images/wordpress/needle.webp' },

        { alt: 'nowkart', name: 'Nowkart', url: '/webdads/images/wordpress/nowkart.webp' },
        { alt: 'samatvam', name: 'Samatvam', url: '/webdads/images/wordpress/samatvam.webp' },
        { alt: 'sash', name: 'SASH', url: '/webdads/images/wordpress/sash.webp' },
        { alt: 'sportseve', name: 'Sportseve', url: '/webdads/images/wordpress/sportseve.webp' },
        { alt: 'vtree', name: 'Vtree', url: '/webdads/images/wordpress/vtree.webp' },
        { alt: 'primium-plots', name: 'Primium Plots', url: '/webdads/images/wordpress/primium-plots.webp' },
    

        { alt: 'bumas', name: 'Bumas', url: '/webdads/images/wordpress/bumas.webp' },
        { alt: 'trining-workshop', name: 'Trining Workshop', url: '/webdads/images/wordpress/trining-workshop.webp' },
        { alt: 'cme', name: 'CME', url: '/webdads/images/wordpress/cme.webp' },
        { alt: 'murugappa-homes', name: 'Murugappa Homes', url: '/webdads/images/wordpress/murugappa-homes.webp' },
        { alt: 'our-values', name: 'Our Values', url: '/webdads/images/wordpress/our-values.webp' },
        { alt: 'instasc', name: 'Instasc', url: '/webdads/images/wordpress/instasc.webp' },

        { alt: 'hagiaa', name: 'Hagiaa', url: '/webdads/images/wordpress/hagiaa.webp' },
        { alt: 'hagiaas', name: 'Hagiaas', url: '/webdads/images/wordpress/hagiaas.webp' },
        { alt: 'eat-health', name: 'Eat Health', url: '/webdads/images/wordpress/eat-health.webp' },
        { alt: 'tnllhd', name: 'TNLLHD', url: '/webdads/images/wordpress/tnllhd.webp' },
        { alt: 'amazing-entatiner', name: 'Amazing Entatiner', url: '/webdads/images/wordpress/amazing-entatiner.webp' },
        { alt: 'aquafloplast', name: 'Aquafloplast', url: '/webdads/images/wordpress/aquafloplast.webp' },

        { alt: 'cedent', name: 'Cedent', url: '/webdads/images/wordpress/cedent.webp' },
        { alt: 'century-hotels', name: 'Century Hotels', url: '/webdads/images/wordpress/century-hotels.webp' },
        { alt: 'cool-tech', name: 'Cool Tech', url: '/webdads/images/wordpress/cool-tech.webp' },
        { alt: 'electro', name: 'Electro', url: '/webdads/images/wordpress/electro.webp' },
        { alt: 'ethix', name: 'Ethix', url: '/webdads/images/wordpress/ethix.webp' },
        { alt: 'exposting', name: 'Exposting', url: '/webdads/images/wordpress/exposting.webp' },

        { alt: 'gahier', name: 'Gahier', url: '/webdads/images/wordpress/gahier.webp' },
        { alt: 'integra', name: 'Integra', url: '/webdads/images/wordpress/integra.webp' },
        { alt: 'st', name: 'ST', url: '/webdads/images/wordpress/st.webp' },
        { alt: 'student', name: 'Student', url: '/webdads/images/wordpress/student.webp' },
        { alt: 'tech', name: 'Tech', url: '/webdads/images/wordpress/tech.webp' },
        { alt: 'vtrees', name: 'Vtrees', url: '/webdads/images/wordpress/vtrees.webp' },

        { alt: 'ssrs', name: 'SRS', url: '/webdads/images/wordpress/ssr.webp' },
        { alt: 'sts', name: 'STS', url: '/webdads/images/wordpress/sts.webp' },

    
    
      ];

    const datas = {
        heading1: 'Elevate Your Online Presence with Expert WordPress Development Company',
        paragraph1: 'Crafting captivating websites with precision. Your trusted partner for top-tier Website solutions. Let’s shape your digital success together!',
        heading2: 'Behold our stunning wordpress portfolio!',
        paragraph2: ' Personalizing a theme for a restaurant website, integrating online reservations and menu showcases with style.'
    };
    return (
        <>
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
        </>
    );
};

export default page;
