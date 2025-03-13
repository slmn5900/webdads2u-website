
import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';


const page = () => {
    const images = [
        { alt: 'securitaz', name: 'securitaz', url: '/webdads/images/wordpress/securitaz.webp' },
        { alt: 'rmp', name: 'rmp', url: '/webdads/images/wordpress/rmp.webp' },
        { alt: 'raj-vision', name: 'raj-vision', url: '/webdads/images/wordpress/raj-vision.webp' },
        { alt: 'atgomart', name: 'atgomart', url: '/webdads/images/wordpress/atgomart.webp' },
        { alt: 'arcmen', name: 'arcmen', url: '/webdads/images/wordpress/arcmen.webp' },
        { alt: 'vamp-innovation', name: 'vamp-innovation', url: '/webdads/images/wordpress/vamp-innovation.webp' },

        { alt: 'relife', name: 'relife', url: '/webdads/images/wordpress/relife.webp' },
        { alt: 'home-for-children', name: 'home-for-children', url: '/webdads/images/wordpress/home-for-children.webp' },
        { alt: 'global', name: 'global', url: '/webdads/images/wordpress/global.webp' },
        { alt: 'pride-rmx', name: 'pride-rmx', url: '/webdads/images/wordpress/pride-rmx.webp' },
        { alt: 'i-clicks', name: 'i-clicks', url: '/webdads/images/wordpress/i-clicks.webp' },
        { alt: 'chennai-water-proofing', name: 'chennai-water-proofing', url: '/webdads/images/wordpress/chennai-water-proofing.webp' },


        { alt: 'rm-groups', name: 'rm-groups', url: '/webdads/images/wordpress/rm-groups.webp' },
        { alt: 'kb-homes', name: 'kb-homes', url: '/webdads/images/wordpress/kb-homes.webp' },
        { alt: 'lalit', name: 'lalit', url: '/webdads/images/wordpress/lalit.webp' },
        { alt: 'mi', name: 'mi', url: '/webdads/images/wordpress/mi.webp' },
        { alt: 'most', name: 'most', url: '/webdads/images/wordpress/most.webp' },
        { alt: 'needle', name: 'needle', url: '/webdads/images/wordpress/needle.webp' },

        { alt: 'nowkart', name: 'nowkart', url: '/webdads/images/wordpress/nowkart.webp' },
        { alt: 'samatvam', name: 'samatvam', url: '/webdads/images/wordpress/samatvam.webp' },
        { alt: 'sash', name: 'sash', url: '/webdads/images/wordpress/sash.webp' },
        { alt: 'sportseve', name: 'sportseve', url: '/webdads/images/wordpress/sportseve.webp' },
        { alt: 'vtree', name: 'vtree', url: '/webdads/images/wordpress/vtree.webp' },
        { alt: 'primium-plots', name: 'primium-plots', url: '/webdads/images/wordpress/primium-plots.webp' },
    

        { alt: 'bumas', name: 'bumas', url: '/webdads/images/wordpress/bumas.webp' },
        { alt: 'trining-workshop', name: 'trining-workshop', url: '/webdads/images/wordpress/trining-workshop.webp' },
        { alt: 'cme', name: 'cme', url: '/webdads/images/wordpress/cme.webp' },
        { alt: 'murugappa-homes', name: 'murugappa-homes', url: '/webdads/images/wordpress/murugappa-homes.webp' },
        { alt: 'our-values', name: 'our-values', url: '/webdads/images/wordpress/our-values.webp' },
        { alt: 'instasc', name: 'instasc', url: '/webdads/images/wordpress/instasc.webp' },

        { alt: 'hagiaa', name: 'hagiaa', url: '/webdads/images/wordpress/hagiaa.webp' },
        { alt: 'hagiaas', name: 'hagiaas', url: '/webdads/images/wordpress/hagiaas.webp' },
        { alt: 'eat-health', name: 'eat-health', url: '/webdads/images/wordpress/eat-health.webp' },
        { alt: 'tnllhd', name: 'tnllhd', url: '/webdads/images/wordpress/tnllhd.webp' },
        { alt: 'amazing-entatiner', name: 'amazing-entatiner', url: '/webdads/images/wordpress/amazing-entatiner.webp' },
        { alt: 'aquafloplast', name: 'aquafloplast', url: '/webdads/images/wordpress/aquafloplast.webp' },

        { alt: 'cedent', name: 'cedent', url: '/webdads/images/wordpress/cedent.webp' },
        { alt: 'century-hotels', name: 'century-hotels', url: '/webdads/images/wordpress/century-hotels.webp' },
        { alt: 'cool-tech', name: 'cool-tech', url: '/webdads/images/wordpress/cool-tech.webp' },
        { alt: 'electro', name: 'electro', url: '/webdads/images/wordpress/electro.webp' },
        { alt: 'ethix', name: 'ethix', url: '/webdads/images/wordpress/ethix.webp' },
        { alt: 'exposting', name: 'exposting', url: '/webdads/images/wordpress/exposting.webp' },

        { alt: 'gahier', name: 'gahier', url: '/webdads/images/wordpress/gahier.webp' },
        { alt: 'integra', name: 'integra', url: '/webdads/images/wordpress/integra.webp' },
        { alt: 'st', name: 'st', url: '/webdads/images/wordpress/st.webp' },
        { alt: 'student', name: 'student', url: '/webdads/images/wordpress/student.webp' },
        { alt: 'tech', name: 'tech', url: '/webdads/images/wordpress/tech.webp' },
        { alt: 'vtrees', name: 'vtrees', url: '/webdads/images/wordpress/vtrees.webp' },

        { alt: 'ssrs', name: 'ssrs', url: '/webdads/images/wordpress/ssr.webp' },
        { alt: 'sts', name: 'sts', url: '/webdads/images/wordpress/sts.webp' },

    
    
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
