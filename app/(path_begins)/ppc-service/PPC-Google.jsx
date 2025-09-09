// import React from 'react';

// function Ppcgoogle() {
//     return (
//         <section className='ppcgoogle-main'>
//             <div className="container">
//                 <div className="row ppcgoogle-header text-center">
//                     <div className="col-sm-12 col-md-12 col-lg-12">
//                         <h2>Our PPC Google ads Services in India</h2>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center ppcgoogle">
//                         <div className="card">
//                             <div className="content">
//                                 <div className="front align-self-center">
//                                     <div className='text-text-boss'>
//                                     <img src="webdads/images/ppc-service/Search-Ads.png" alt="Search-Ads" loading='lazy' className='img-fluid' />
//                                     <h3>Search Advertising</h3>
//                                     </div>
//                                 </div>
//                                 <div className="back align-items-center">
//                                     <p>Search advertising involves placing paid ads on search engine results pages, commonly using platforms like Google Ads to reach target audiences.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center ppcgoogle">
//                         <div className="card">
//                             <div className="content">
//                                 <div className="front align-self-center">
//                                     <div className='text-text-boss'>
//                                     <img src="webdads/images/ppc-service/Display-Ads.png" alt="Display-Ads" loading='lazy' className='img-fluid' />
//                                     <h3>Display-Ads</h3>
//                                     </div>
//                                 </div>
//                                 <div className="back align-items-center">
//                                     <p>Display advertising entails placing visual ads on websites, apps, or social media platforms to increase brand visibility and engagement, often through Google Ads.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center ppcgoogle">
//                         <div className="card">
//                             <div className="content">
//                                 <div className="front align-self-center">
//                                     <div className='text-text-boss'>
//                                     <img src="webdads/images/ppc-service/Social-Media-Ads.png" alt="Social-Media-Ads" loading='lazy' className='img-fluid' />
//                                     <h3>Social Media Advertising</h3>
//                                     </div>
//                                 </div>
//                                 <div className="back align-items-center">
//                                     <p>Social media advertising involves promoting products or services on platforms like Facebook, Instagram, and Twitter. While Google Ads primarily focuses on search and display, it also offers options for advertising on YouTube and other Google-owned platforms.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center ppcgoogle">
//                         <div className="card">
//                             <div className="content">
//                                 <div className="front align-self-center">
//                                     <div className='text-text-boss'>
//                                     <img src="webdads/images/ppc-service/Remark.png" alt="Remark" loading='lazy' className='img-fluid' />
//                                     <h3>Remarketing</h3>
//                                     </div>
//                                 </div>
//                                 <div className="back align-items-center">
//                                     <p>Remarketing, facilitated through Google Ads, involves targeting users who have previously visited a website or app by displaying relevant ads to them as they browse other websites or apps.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center ppcgoogle">
//                         <div className="card">
//                             <div className="content">
//                                 <div className="front align-self-center">
//                                     <div className='text-text-boss'>
//                                     <img src="webdads/images/ppc-service/Product-lisitng-ads.png" alt="Product-lisitng-ads" loading='lazy' className='img-fluid' />
//                                     <h3>Product Listing Ads</h3>
//                                     </div>
//                                 </div>
//                                 <div className="back align-items-center">
//                                     <p>Product Listing Ads, managed through Google Ads, display product images, prices, and details to potential customers searching for specific products on Google&apos;s shopping platform.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center ppcgoogle">
//                         <div className="card">
//                             <div className="content">
//                                 <div className="front align-self-center">
//                                     <div className='text-text-boss'>
//                                     <img src="webdads/images/ppc-service/Mobile-Ads.png" alt="Mobile-AdsAds" loading='lazy' className='img-fluid' />
//                                     <h3>Mobile Advertising</h3>
//                                     </div>
//                                 </div>
//                                 <div className="back align-items-center">
//                                     <p>Mobile advertising refers to the practice of displaying ads on mobile devices such as smartphones and tablets. Google Ads offers various mobile advertising options, including mobile search ads and in-app ads, to reach mobile users effectively.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Ppcgoogle;

'use client';
import React from 'react';
import { Box, Container, Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';

const services = [
    {
        title: 'Search Advertising',
        img: 'webdads/images/ppc-service/Search-Ads.png',
        alt: 'Search-Ads',
        desc: 'Search advertising involves placing paid ads on search engine results pages, commonly using platforms like Google Ads to reach target audiences.'
    },
    {
        title: 'Display Ads',
        img: 'webdads/images/ppc-service/Display-Ads.png',
        alt: 'Display-Ads',
        desc: 'Display advertising entails placing visual ads on websites, apps, or social media platforms to increase brand visibility and engagement, often through Google Ads.'
    },
    {
        title: 'Social Media Advertising',
        img: 'webdads/images/ppc-service/Social-Media-Ads.png',
        alt: 'Social-Media-Ads',
        desc: 'Social media advertising involves promoting products or services on platforms like Facebook, Instagram, and Twitter. Google Ads also offers advertising on YouTube and other Google-owned platforms.'
    },
    {
        title: 'Remarketing',
        img: 'webdads/images/ppc-service/Remark.png',
        alt: 'Remark',
        desc: 'Remarketing, facilitated through Google Ads, involves targeting users who have previously visited a website or app by displaying relevant ads to them as they browse other websites or apps.'
    },
    {
        title: 'Product Listing Ads',
        img: 'webdads/images/ppc-service/Product-lisitng-ads.png',
        alt: 'Product-lisitng-ads',
        desc: 'Product Listing Ads, managed through Google Ads, display product images, prices, and details to potential customers searching for specific products on Google’s shopping platform.'
    },
    {
        title: 'Mobile Advertising',
        img: 'webdads/images/ppc-service/Mobile-Ads.png',
        alt: 'Mobile-Ads',
        desc: 'Mobile advertising refers to the practice of displaying ads on mobile devices. Google Ads offers mobile search ads and in-app ads to reach mobile users effectively.'
    }
];

function Ppcgoogle() {
    return (
        <Box component="section" sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
            <Container>
                {/* Header */}
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 5 }}>
                    Our PPC Google Ads Services in India
                </Typography>

                {/* Services Grid2 */}
                <Grid2 container spacing={4}>
                    {services.map((service, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: '100%',
                                    textAlign: 'center',
                                    boxShadow: 3,
                                    borderRadius: 3,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
                                }}
                            >
                                <CardMedia component="img" src={service.img} alt={service.alt} loading="lazy" sx={{ width: 100, height: 100, objectFit: 'contain', mx: 'auto', mt: 3 }} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: '600', mb: 1 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}

export default Ppcgoogle;
