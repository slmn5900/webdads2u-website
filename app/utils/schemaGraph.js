import { organizationSchema, localBusinessSchema, websiteSchema, webPageSchema, faqSchema } from './Schema';

export const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema, websiteSchema, webPageSchema, faqSchema]
};
