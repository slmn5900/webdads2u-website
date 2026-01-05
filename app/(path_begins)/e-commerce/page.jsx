import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';

export const metadata = {
    alternates: {
        canonical: 'https://webdads2u.com/e-commerce'
    },
    title: 'E-Commerce website development & design company in chennai',
    description: 'WebDads2U, an ecommerce web design & development agency in Chennai, crafts custom eCommerce websites that are fast, secure, sales-driven and built to boost your sales',
    keyword:
        'best ecommerce website development company in chennai,best ecommerce website development company,ecommerce website development,ecommerce website development company in chennai, ecommerce website development cost in chennai, ecommerce web development service in chennai, ecommerce website development companies in chennai'
};

const page = () => {
    const images = [
        { alt: 'sunkissed e commerce', name: 'sunkissed e commerce', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757591219/webdads2u/e-commerce/sunkissed-e-commerce.png' },
        { alt: 'racepro e commerce', name: 'RMP', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757591200/webdads2u/e-commerce/racepro-e-commerce.png' },
        { alt: 'atgomart e commerce', name: 'Raj Vision', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757591207/webdads2u/e-commerce/atgomart-e-commerce.png' }
    ];

    const datas = {
        heading1: 'Unleash Ecommerce Excellence Premier Ecommerce Website Development Company',
        paragraph1: 'Empowering businesses with bespoke ecommerce solutions. Elevate your online store with our expert development prowess. Let’s grow your digital footprint!',
        heading2: 'Behold our stunning Ecommerce portfolio!',
        paragraph2: ' Creating a feature-rich online store for a home decor brand, with product filtering and wishlist functionalities.'
    };
    return (
        <>
            <LoadMoreImageContainer images={images} heading1={datas.heading1} paragraph1={datas.paragraph1} heading2={datas.heading2} paragraph2={datas.paragraph2} />
        </>
    );
};

export default page;
