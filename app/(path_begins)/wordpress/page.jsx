import React from 'react';
import LoadMoreImageContainer from '../../../components/common/LoadMoreImageContainer';
export const metadata = {
    title: 'WordPress Website Development Company In Chennai',
    description: 'Easily create a stunning wordpress website. Your online presence is backed by custom designs,and unmatched support from our expert team.',
    keyword: 'wordpress website development company in chennai,wordpress website development,wordpress website development company in chennai,wordpress company in chennai,wordpress development company in chennai'
};

const page = () => {
    // const images = [
    //     { alt: 'WordPress Website Development Company In Chennai', l: '/webdads/images/wordpress/securitaz.webp' },
    //     { alt: 'rmp', ebdads/images/wordpress/rmp.webp' },
    //     { alt: 'raj-vision', rl: '/webdads/images/wordpress/raj-vision.webp' },
    //     { alt: 'atgomart', : '/webdads/images/wordpress/atgomart.webp' },
    //     { alt: 'arcmen', '/webdads/images/wordpress/arcmen.webp' },
    //     { alt: 'vamp-innovation', n', url: '/webdads/images/wordpress/vamp-innovation.webp' },

    //     { alt: 'relife', '/webdads/images/wordpress/relife.webp' },
    //     { alt: 'home-for-children', ren', url: '/webdads/images/wordpress/home-for-children.webp' },
    //     { alt: 'global', '/webdads/images/wordpress/global.webp' },
    //     { alt: 'pride-rmx', l: '/webdads/images/wordpress/pride-rmx.webp' },
    //     { alt: 'i-clicks', : '/webdads/images/wordpress/i-clicks.webp' },
    //     { alt: 'chennai-water-proofing', Proofing', url: '/webdads/images/wordpress/chennai-water-proofing.webp' },

    //     { alt: 'rm-groups', l: '/webdads/images/wordpress/rm-groups.webp' },
    //     { alt: 'kb-homes', : '/webdads/images/wordpress/kb-homes.webp' },
    //     { alt: 'lalit', /webdads/images/wordpress/lalit.webp' },
    //     { alt: 'mi', bdads/images/wordpress/mi.webp' },
    //     { alt: 'most', webdads/images/wordpress/most.webp' },
    //     { alt: 'needle', '/webdads/images/wordpress/needle.webp' },

    //     { alt: 'nowkart',  '/webdads/images/wordpress/nowkart.webp' },
    //     { alt: 'samatvam', : '/webdads/images/wordpress/samatvam.webp' },
    //     { alt: 'sash', webdads/images/wordpress/sash.webp' },
    //     { alt: 'sportseve', l: '/webdads/images/wordpress/sportseve.webp' },
    //     { alt: 'vtree', /webdads/images/wordpress/vtree.webp' },
    //     { alt: 'primium-plots', , url: '/webdads/images/wordpress/primium-plots.webp' },

    //     { alt: 'bumas', /webdads/images/wordpress/bumas.webp' },
    //     { alt: 'trining-workshop', op', url: '/webdads/images/wordpress/trining-workshop.webp' },
    //     { alt: 'cme', ebdads/images/wordpress/cme.webp' },
    //     { alt: 'murugappa-homes', s', url: '/webdads/images/wordpress/murugappa-homes.webp' },
    //     { alt: 'our-values', rl: '/webdads/images/wordpress/our-values.webp' },
    //     { alt: 'instasc',  '/webdads/images/wordpress/instasc.webp' },

    //     { alt: 'hagiaa', '/webdads/images/wordpress/hagiaa.webp' },
    //     { alt: 'hagiaas',  '/webdads/images/wordpress/hagiaas.webp' },
    //     { alt: 'eat-health', rl: '/webdads/images/wordpress/eat-health.webp' },
    //     { alt: 'tnllhd', '/webdads/images/wordpress/tnllhd.webp' },
    //     { alt: 'amazing-entatiner', ner', url: '/webdads/images/wordpress/amazing-entatiner.webp' },
    //     { alt: 'aquafloplast',  url: '/webdads/images/wordpress/aquafloplast.webp' },

    //     { alt: 'cedent', '/webdads/images/wordpress/cedent.webp' },
    //     { alt: 'century-hotels', ', url: '/webdads/images/wordpress/century-hotels.webp' },
    //     { alt: 'cool-tech', l: '/webdads/images/wordpress/cool-tech.webp' },
    //     { alt: 'electro',  '/webdads/images/wordpress/electro.webp' },
    //     { alt: 'ethix', /webdads/images/wordpress/ethix.webp' },
    //     { alt: 'exposting', l: '/webdads/images/wordpress/exposting.webp' },

    //     { alt: 'gahier', '/webdads/images/wordpress/gahier.webp' },
    //     { alt: 'integra',  '/webdads/images/wordpress/integra.webp' },
    //     { alt: 'st', bdads/images/wordpress/st.webp' },
    //     { alt: 'student',  '/webdads/images/wordpress/student.webp' },
    //     { alt: 'tech', webdads/images/wordpress/tech.webp' },
    //     { alt: 'vtrees', '/webdads/images/wordpress/vtrees.webp' },

    //     { alt: 'ssrs', ebdads/images/wordpress/ssr.webp' },
    //     { alt: 'sts', ebdads/images/wordpress/sts.webp' }
    // ];

    // const images = [
    //     { alt: 'WordPress Portfolio 1', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587025/webdads2u/wordpress/wordpress-portfolio-1.png' },
    //     { alt: 'WordPress Portfolio 2', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587018/webdads2u/wordpress/wordpress-portfolio-2.png' },
    //     { alt: 'WordPress Portfolio 3', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587012/webdads2u/wordpress/wordpress-portfolio-3.png' },
    //     { alt: 'WordPress Portfolio 4', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587005/webdads2u/wordpress/wordpress-portfolio-4.png' },
    //     { alt: 'WordPress Portfolio 5', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586997/webdads2u/wordpress/wordpress-portfolio-5.png' },
    //     { alt: 'WordPress Portfolio 6', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586990/webdads2u/wordpress/wordpress-portfolio-6.png' },
    //     { alt: 'WordPress Portfolio 7', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586983/webdads2u/wordpress/wordpress-portfolio-7.png' },
    //     { alt: 'WordPress Portfolio 8', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586976/webdads2u/wordpress/wordpress-portfolio-8.png' },
    //     { alt: 'WordPress Portfolio 9', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586968/webdads2u/wordpress/wordpress-portfolio-9.png' },
    //     { alt: 'WordPress Portfolio 10',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586962/webdads2u/wordpress/wordpress-portfolio-10.png' },
    //     { alt: 'WordPress Portfolio 11',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586952/webdads2u/wordpress/wordpress-portfolio-11.png' },
    //     { alt: 'WordPress Portfolio 12',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586945/webdads2u/wordpress/wordpress-portfolio-12.png' },
    //     { alt: 'WordPress Portfolio 13',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586938/webdads2u/wordpress/wordpress-portfolio-13.png' },
    //     { alt: 'WordPress Portfolio 14',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586930/webdads2u/wordpress/wordpress-portfolio-14.png' },
    //     { alt: 'WordPress Portfolio 15',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586923/webdads2u/wordpress/wordpress-portfolio-15.png' },
    //     { alt: 'WordPress Portfolio 16',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586916/webdads2u/wordpress/wordpress-portfolio-16.png' },
    //     { alt: 'WordPress Portfolio 17',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586909/webdads2u/wordpress/wordpress-portfolio-17.png' },
    //     { alt: 'WordPress Portfolio 18',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586901/webdads2u/wordpress/wordpress-portfolio-18.png' },
    //     { alt: 'WordPress Portfolio 19',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586894/webdads2u/wordpress/wordpress-portfolio-19.png' },
    //     { alt: 'WordPress Portfolio 20',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586887/webdads2u/wordpress/wordpress-portfolio-20.png' },
    //     { alt: 'WordPress Portfolio 21',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586879/webdads2u/wordpress/wordpress-portfolio-21.png' },
    //     { alt: 'WordPress Portfolio 22',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586873/webdads2u/wordpress/wordpress-portfolio-22.png' },
    //     { alt: 'WordPress Portfolio 23',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586865/webdads2u/wordpress/wordpress-portfolio-23.png' },
    //     { alt: 'WordPress Portfolio 24',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586860/webdads2u/wordpress/wordpress-portfolio-24.png' },
    //     { alt: 'WordPress Portfolio 25',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586854/webdads2u/wordpress/wordpress-portfolio-25.png' },
    //     { alt: 'WordPress Portfolio 26',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586844/webdads2u/wordpress/wordpress-portfolio-26.png' },
    //     { alt: 'WordPress Portfolio 27',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586838/webdads2u/wordpress/wordpress-portfolio-27.png' },
    //     { alt: 'WordPress Portfolio 28',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586833/webdads2u/wordpress/wordpress-portfolio-28.png' },
    //     { alt: 'WordPress Portfolio 29',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586824/webdads2u/wordpress/wordpress-portfolio-29.png' },
    //     { alt: 'WordPress Portfolio 30',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586818/webdads2u/wordpress/wordpress-portfolio-30.png' },
    //     { alt: 'WordPress Portfolio 31',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586813/webdads2u/wordpress/wordpress-portfolio-31.png' },
    //     { alt: 'WordPress Portfolio 32',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586804/webdads2u/wordpress/wordpress-portfolio-32.png' },
    //     { alt: 'WordPress Portfolio 33',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586797/webdads2u/wordpress/wordpress-portfolio-33.png' },
    //     { alt: 'WordPress Portfolio 34',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586792/webdads2u/wordpress/wordpress-portfolio-34.png' },
    //     { alt: 'WordPress Portfolio 35',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586784/webdads2u/wordpress/wordpress-portfolio-35.png' },
    //     { alt: 'WordPress Portfolio 36',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586777/webdads2u/wordpress/wordpress-portfolio-36.png' },
    //     { alt: 'WordPress Portfolio 37',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586773/webdads2u/wordpress/wordpress-portfolio-37.png' },
    //     { alt: 'WordPress Portfolio 38',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586773/webdads2u/wordpress/wordpress-portfolio-37.png' },
    //     { alt: 'WordPress Portfolio 39',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586757/webdads2u/wordpress/wordpress-portfolio-39.png' },
    //     { alt: 'WordPress Portfolio 40',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586752/webdads2u/wordpress/wordpress-portfolio-40.png' },
    //     { alt: 'WordPress Portfolio 41',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586744/webdads2u/wordpress/wordpress-portfolio-41.png' },
    //     { alt: 'WordPress Portfolio 42',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586737/webdads2u/wordpress/wordpress-portfolio-42.png' },
    //     { alt: 'WordPress Portfolio 43',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586732/webdads2u/wordpress/wordpress-portfolio-43.png' },
    //     { alt: 'WordPress Portfolio 44',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586724/webdads2u/wordpress/wordpress-portfolio-44.png' },
    //     { alt: 'WordPress Portfolio 45',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586718/webdads2u/wordpress/wordpress-portfolio-45.png' },
    //     { alt: 'WordPress Portfolio 46',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586712/webdads2u/wordpress/wordpress-portfolio-46.png' },
    //     { alt: 'WordPress Portfolio 47',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586705/webdads2u/wordpress/wordpress-portfolio-47.png' },
    //     { alt: 'WordPress Portfolio 48',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586701/webdads2u/wordpress/wordpress-portfolio-48.png' },
    //     { alt: 'WordPress Portfolio 49',  url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586693/webdads2u/wordpress/wordpress-portfolio-49.png' }
    // ];

   const images = [
  { name: 'Securitaz', alt: 'WordPress Portfolio 1', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586844/webdads2u/wordpress/wordpress-portfolio-26.png' },
  { name: 'RMP Export', alt: 'WordPress Portfolio 2', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586865/webdads2u/wordpress/wordpress-portfolio-23.png' },
  { name: 'Raj Vision Electronics', alt: 'WordPress Portfolio 3', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586952/webdads2u/wordpress/wordpress-portfolio-11.png' },
  { name: 'Atgomart', alt: 'WordPress Portfolio 4', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586938/webdads2u/wordpress/wordpress-portfolio-13.png' },
  { name: 'Arcmeninterior', alt: 'WordPress Portfolio 5', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586930/webdads2u/wordpress/wordpress-portfolio-14.png' },
  { name: 'Vamp Innovations', alt: 'WordPress Portfolio 6', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586824/webdads2u/wordpress/wordpress-portfolio-29.png' },
  { name: 'ReLife Medical System', alt: 'WordPress Portfolio 7', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586990/webdads2u/wordpress/wordpress-portfolio-6.png' },
  { name: 'Mother Terasa', alt: 'WordPress Portfolio 8', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586818/webdads2u/wordpress/wordpress-portfolio-30.png' },
  { name: 'Globalgreen Bioseptic', alt: 'WordPress Portfolio 9', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586909/webdads2u/wordpress/wordpress-portfolio-17.png' },
  { name: 'Pride RMX', alt: 'WordPress Portfolio 10', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586945/webdads2u/wordpress/wordpress-portfolio-12.png' },
  { name: 'I Clicks Photograph', alt: 'WordPress Portfolio 11', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586983/webdads2u/wordpress/wordpress-portfolio-7.png' },
  { name: 'Chennai Water Proofing', alt: 'WordPress Portfolio 12', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586887/webdads2u/wordpress/wordpress-portfolio-20.png' },
  { name: 'RM Groups', alt: 'WordPress Portfolio 13', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586976/webdads2u/wordpress/wordpress-portfolio-8.png' },
  { name: 'KB Homes', alt: 'WordPress Portfolio 14', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586879/webdads2u/wordpress/wordpress-portfolio-21.png' },
  { name: 'Lalith Food', alt: 'WordPress Portfolio 15', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586968/webdads2u/wordpress/wordpress-portfolio-9.png' },
  { name: 'MIO', alt: 'WordPress Portfolio 16', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586962/webdads2u/wordpress/wordpress-portfolio-10.png' },
  { name: 'Most', alt: 'WordPress Portfolio 17', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586833/webdads2u/wordpress/wordpress-portfolio-28.png' },
  { name: 'Needle Arts', alt: 'WordPress Portfolio 18', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586784/webdads2u/wordpress/wordpress-portfolio-35.png' },
  { name: 'NowKart', alt: 'WordPress Portfolio 19', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586901/webdads2u/wordpress/wordpress-portfolio-18.png' },
  { name: 'Samathuvam Trust', alt: 'WordPress Portfolio 20', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758365960/webdads2u/wordpress/samatvam.png' },
  { name: 'Sash', alt: 'WordPress Portfolio 21', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586916/webdads2u/wordpress/wordpress-portfolio-16.png' },
  { name: 'Sportserv', alt: 'WordPress Portfolio 22', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586777/webdads2u/wordpress/wordpress-portfolio-36.png' },
  { name: 'Vtree', alt: 'WordPress Portfolio 23', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586804/webdads2u/wordpress/wordpress-portfolio-32.png' },
  { name: 'Royce', alt: 'WordPress Portfolio 24', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586764/webdads2u/wordpress/wordpress-portfolio-38.png' },
  { name: 'Bumaas', alt: 'WordPress Portfolio 25', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586797/webdads2u/wordpress/wordpress-portfolio-33.png' },
  { name: 'Bhava Consulting', alt: 'WordPress Portfolio 26', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586737/webdads2u/wordpress/wordpress-portfolio-42.png' },
  { name: 'Chocolate Events', alt: 'WordPress Portfolio 27', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586732/webdads2u/wordpress/wordpress-portfolio-43.png' },
  { name: 'Shree Hari Builders', alt: 'WordPress Portfolio 28', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586813/webdads2u/wordpress/wordpress-portfolio-31.png' },
  { name: 'Infiknity Sources', alt: 'WordPress Portfolio 29', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586854/webdads2u/wordpress/wordpress-portfolio-25.png' },
  { name: 'Kagira', alt: 'WordPress Portfolio 30', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586724/webdads2u/wordpress/wordpress-portfolio-44.png' },
  { name: 'Kagira', alt: 'WordPress Portfolio 31', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586773/webdads2u/wordpress/wordpress-portfolio-37.png' },
  { name: 'Electro Grizzly', alt: 'WordPress Portfolio 32', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586757/webdads2u/wordpress/wordpress-portfolio-39.png' },
  { name: 'Sranks', alt: 'WordPress Portfolio 33', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586752/webdads2u/wordpress/wordpress-portfolio-40.png' },
  { name: 'Skill Tech', alt: 'WordPress Portfolio 34', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586838/webdads2u/wordpress/wordpress-portfolio-27.png' },
  { name: 'Amazing Entertainer', alt: 'WordPress Portfolio 35', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586792/webdads2u/wordpress/wordpress-portfolio-34.png' },
  { name: 'Aquaflo Plast', alt: 'WordPress Portfolio 36', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586718/webdads2u/wordpress/wordpress-portfolio-45.png' },
  { name: 'Credent Consulting', alt: 'WordPress Portfolio 37', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586923/webdads2u/wordpress/wordpress-portfolio-15.png' },
  { name: 'Century Hotels', alt: 'WordPress Portfolio 38', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586712/webdads2u/wordpress/wordpress-portfolio-46.png' },
  { name: 'Cooltech', alt: 'WordPress Portfolio 39', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586860/webdads2u/wordpress/wordpress-portfolio-24.png' },
  { name: 'Electro Grizzly', alt: 'WordPress Portfolio 40', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586705/webdads2u/wordpress/wordpress-portfolio-47.png' },
  { name: 'Ethix', alt: 'WordPress Portfolio 41', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586701/webdads2u/wordpress/wordpress-portfolio-48.png' },
  { name: 'Exposing', alt: 'WordPress Portfolio 42', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586693/webdads2u/wordpress/wordpress-portfolio-49.png' },
  { name: 'Kagira', alt: 'WordPress Portfolio 43', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586894/webdads2u/wordpress/wordpress-portfolio-19.png' },
  { name: 'Integra', alt: 'WordPress Portfolio 44', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586894/webdads2u/wordpress/wordpress-portfolio-19.png' },
  { name: 'St Elizebeth School', alt: 'WordPress Portfolio 45', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587018/webdads2u/wordpress/wordpress-portfolio-2.png' },
  { name: 'Students Charitable Trust', alt: 'WordPress Portfolio 46', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587025/webdads2u/wordpress/wordpress-portfolio-1.png' },
  { name: 'SV Tech Engineer', alt: 'WordPress Portfolio 47', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587005/webdads2u/wordpress/wordpress-portfolio-4.png' },
  { name: 'Vtree', alt: 'WordPress Portfolio 48', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586873/webdads2u/wordpress/wordpress-portfolio-22.png' },
  { name: 'SSR', alt: 'WordPress Portfolio 49', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587012/webdads2u/wordpress/wordpress-portfolio-3.png' },
  { name: 'St Antony Academy', alt: 'WordPress Portfolio 50', url: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757586744/webdads2u/wordpress/wordpress-portfolio-41.png' }
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
