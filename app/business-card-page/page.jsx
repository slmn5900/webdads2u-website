import BusinessCard from './BusinessCard';
export const metadata = {
    alternates: {
        canonical: 'https://webdads2u.com/business-card-page'
    },
    title: 'Web Development Company | Webdads2u',
    description: 'Looking for a professional web development company? We build fast, responsive, SEO-friendly websites tailored to your business needs. Get a free quote today',
    keywords: 'app development company,mobile app development company,custom app development,android app development services,ios app development company'
};

export default function Page() {
    return <BusinessCard />;
}
