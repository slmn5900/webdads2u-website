import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

export const metadata = {
    alternates: {
        canonical: 'https://webdads2u.com/logo-design-agency'
    },
    title: 'Logo Design Agency In Chennai',
    description: 'Our logo design agency can turn your brand around. Our logos, which range from timeless to modern, leave a lasting impression.',
    keyword: 'logo design agency in chennai,logo design agency,logo designing company in chennai, logo design company chennai, best logo designer in chennai'
};
const page = () => {
    const images = [
        { alt: 'Logo Design Agency In Chennai', name: 'Adsfit', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912228/webdads2u/logo-design-agency/adsfit.jpg' },
        { alt: 'b-square', name: 'Bsquar', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912227/webdads2u/logo-design-agency/b-square.png' },
        { alt: 'magmee', name: 'Magmee', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912226/webdads2u/logo-design-agency/magmee.png' },
        { alt: 'global enterprises', name: 'Globel', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912225/webdads2u/logo-design-agency/global-enterprises.jpg' },
        { alt: 'rmp logo', name: 'RMP', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912224/webdads2u/logo-design-agency/rmp-logo.jpg' },
        { alt: 'securitaz', name: 'Securitaz', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912221/webdads2u/logo-design-agency/securitaz.jpg' },
        { alt: 'skp logo', name: 'SKP', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912223/webdads2u/logo-design-agency/skp-logo.jpg' },
        { alt: 'studio87 logo', name: 'Studio87', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912219/webdads2u/logo-design-agency/studio87-logo.png' },
        { alt: 'arcman logo', name: 'Arcman', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912208/webdads2u/logo-design-agency/arcman-logo.jpg' },
        { alt: 'bhava', name: 'Bhava', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912209/webdads2u/logo-design-agency/bhava.jpg' },
        { alt: 'boopathi logo', name: 'Boopathi', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912210/webdads2u/logo-design-agency/boopathi-logo.jpg' },
        { alt: 'coin products', name: 'Coin Products', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912211/webdads2u/logo-design-agency/coin-products.jpg' },
        { alt: 'computer garage', name: 'Computer Garage', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912212/webdads2u/logo-design-agency/computer-garage.jpg' },
        { alt: 'cool tech solution', name: 'Cool Tech Solution', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912213/webdads2u/logo-design-agency/cool-tech-solution.jpg' },
        { alt: 'drudent store', name: 'Drudent Store', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912214/webdads2u/logo-design-agency/drudent-store.jpg' },
        { alt: 'ds solution', name: 'DS Solution', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912215/webdads2u/logo-design-agency/ds-solution.jpg' },
        { alt: 'high look', name: 'High Look', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912216/webdads2u/logo-design-agency/high-look.jpg' },
        { alt: 'integra logo', name: 'Integra', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912216/webdads2u/logo-design-agency/integra-logo.jpg' },
        { alt: 'lalit logo', name: 'Lalit', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912218/webdads2u/logo-design-agency/lalit-logo.jpg' },
        { alt: 'mart logo', name: 'Mart', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912217/webdads2u/logo-design-agency/mart-logo.jpg' },
        { alt: 'monarch info solution', name: 'Monarch Info Solution', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912237/webdads2u/logo-design-agency/monarch-info-solution.jpg' },
        { alt: 'nivas', name: 'Nivas', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912238/webdads2u/logo-design-agency/nivas.jpg' },
        { alt: 'oilsep logo', name: 'Oilsep', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912207/webdads2u/logo-design-agency/oilsep-logo.jpg' },
        { alt: 'oyc fresh logo', name: 'OYC Fresh', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912207/webdads2u/logo-design-agency/oyc-fresh-logo.jpg' },
        { alt: 'peacock crest', name: 'Peacock Crest', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912231/webdads2u/logo-design-agency/peacock-crest.jpg' },
        { alt: 'pharma', name: 'Pharma', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912232/webdads2u/logo-design-agency/pharma.jpg' },
        { alt: 'relife', name: 'Relife', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912216/webdads2u/logo-design-agency/high-look.jpg' }, // ⚠️ not in list, needs confirm
        { alt: 'sash', name: 'Sash', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912233/webdads2u/logo-design-agency/sash.jpg' },
        { alt: 'smart cuckings', name: 'Smart Cuckings', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912234/webdads2u/logo-design-agency/smart-cuckings.jpg' },
        { alt: 'smhe', name: 'SMHE', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912220/webdads2u/logo-design-agency/smhe.jpg' },
        { alt: 'studio87 logo', name: 'Studio87', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912219/webdads2u/logo-design-agency/studio87-logo.png' },
        { alt: 'ticket fusion', name: 'Ticket Fusion', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912235/webdads2u/logo-design-agency/ticket-fusion.jpg' },
        { alt: 'zercorp', name: 'Zercorp', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912236/webdads2u/logo-design-agency/zercorp.jpg' },
        { alt: 'rajvision', name: 'Rajvision', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912222/webdads2u/logo-design-agency/rajvision.jpg' },
        { alt: 'racepro', name: 'Racepro', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912230/webdads2u/logo-design-agency/racepro.jpg' },
        { alt: 'aamw logo', name: 'AAMW', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912208/webdads2u/logo-design-agency/aamw-logo.jpg' },
        { alt: 'nowkart logo', name: 'Nowkart', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757912207/webdads2u/logo-design-agency/nowkart-logo.jpg' }
    ];

    const datas = {
        heading1: 'Crafting Identity Premier Logo Design Company for Your Brand',
        paragraph1: 'Enhance your brand with captivating logos that make a lasting impact. Expertly designed to reflect your unique identity. Let’s bring your vision to life!',
        heading2: 'Behold our stunning Logo portfolio!',
        paragraph2: 'A playful and colorful logo for a children’s educational platform, capturing the spirit of learning and fun.'
    };
    return <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />;
};

export default page;
