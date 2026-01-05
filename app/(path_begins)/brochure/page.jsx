import Brochure from './Brochure';
export const metadata = {
    alternates: {
        canonical: 'https://www.webdads2u.com/brochure'
    },
    title: 'Best Brochure Design Company In Chennai',
    description: `Brochure designs that catch the eye and captivate. Our designs are designed to leave a lasting impression, whether it's elegant or modern. Let your brochure be a powerful statement!`,
    keywords: 'custom website development company in chennai,custom website development company,custom website development '
};
export default function page() {
    return (
        <div>
            <Brochure />
        </div>
    );
}
