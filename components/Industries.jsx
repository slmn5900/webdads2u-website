<<<<<<< HEAD

// import React from 'react'
// import { Container, Row, Col} from 'react-bootstrap';
// import Image from 'next/image';
// import Softwate from '../public/webdads/images/home/it-software-industries-serve.png'
// import Ecommerce from '../public/webdads/images/home/ecommerce-industries-serve.png'
// import Telecome from '../public/webdads/images/home/telecom-industries-serve.png'
// import RealEstate from '../public/webdads/images/home/telecom-industries-serve-1.png'
// import Engineer from '../public/webdads/images/home/engineering-industries-serve.png'
// import Travels from '../public/webdads/images/home/travel-industries-serve.png'
// import Healthcare from '../public/webdads/images/home/healthcare-industries-serve.png'
// import Food from '../public/webdads/images/home/food-industries-serve.png'
// import Architech from '../public/webdads/images/home/architech-interior-industries-serve.png'
// import Logistics from '../public/webdads/images/home/logistic-industries-serve.png'
// import Finance from '../public/webdads/images/home/finance-industries-serve.png'
// import Hospitality from '../public/webdads/images/home/hospitallity-industries-serve.png'
// import Media from '../public/webdads/images/home/media-cinema-industries-serve.png'
// import Agency from '../public/webdads/images/home/ad-agency-industries-serve.png'
// import Auto from '../public/webdads/images/home/auto-mobile-industries-serve.png'
// import Sports from '../public/webdads/images/home/sports-industries-serve.png'


// function Industries() {
//   return (
//     <>
//     <section className='Industries-serv pt-5'>
//         <Container>
//             <Row>
//             <Col md={12}>
//             <h2 className='text-center'>Industries We Serve</h2>
//             <p className='text-center'>Here, we make almost every genre of applications. You name it and we build it.
//             </p>
// </Col>
// </Row>
//     <Row>
//             <Col md={6}>
//             <Row>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Softwate}
//             alt="IT / Software"
//            />
//            <p>IT / Software</p>

//             </div>

//           </Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Ecommerce}
//             alt="E-commerce"
//            />
//            <p>E-commerce</p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service">
//             <Image
//             src={Telecome}
//             alt="Telecome"
//            />
//            <p>Telecome</p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={RealEstate}
//             alt="Realestate"
//            />
//            <p>Realestate</p>

//             </div>
//           </Col>

//             </Row>
//          </Col>
//             <Col md={6}>
//             <Row>
//           <Col md={3} xs={6}>
//           <div className="industrial-service">
//             <Image
//             src={Engineer}
//             alt="Engineering"/>
//            <p>Engineering</p>

//             </div>

//           </Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service">
//             <Image
//             src={Travels}
//             alt="Travels"
//            />
//            <p>Travels</p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Healthcare}
//             alt="Healthcare"
//            />
//            <p>Healthcare
//            </p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Food}
//             alt="Food & Restaurant"
//            />
//            <p>Food & Restaurant
//            </p>

//             </div>
//           </Col>

//             </Row>
//             </Col>
//             </Row>
//             <Row>
//             <Col md={6}>
//             <Row>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Architech}
//             alt="Architech & Interior
// "
//            />
//            <p>Architech & Interior </p>

//             </div>

//           </Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Logistics}
//             alt="Logistics"
//            />
//            <p>Logistics</p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service">
//             <Image
//             src={Finance}
//             alt="Finance"
//            />
//            <p>Finance</p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Hospitality}
//             alt="Hospitality"
//            />
//            <p>Hospitality</p>

//             </div>
//           </Col>

//             </Row>
//          </Col>
//             <Col md={6}>
//             <Row>
//           <Col md={3} xs={6}>
//           <div className="industrial-service">
//             <Image
//             src={Media}
//             alt="Media / Cinema"/>
//            <p>Media / Cinema </p>

//             </div>

//           </Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service">
//             <Image
//             src={Agency}
//             alt="Ad Agency
// "
//            />
//            <p>Ad Agency
//            </p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Auto }
//             alt="Auto Mobile"
//            />
//            <p>Auto Mobile

//            </p>

//             </div></Col>
//           <Col md={3} xs={6}>
//           <div className="industrial-service ">
//             <Image
//             src={Sports}
//             alt="Sports"/>
//            <p>Sports </p>

//             </div>
//           </Col>

//             </Row>
//             </Col>

//             </Row>
//         </Container>
//     </section>


//     </>
//   )
// }

// export default Industries


=======
>>>>>>> a0d19cc (Initial commit)
'use client';
import React from 'react';
import { Grid2, Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Industry data
const industries = [
<<<<<<< HEAD
  { img: '/webdads/images/home/it-software-industries-serve.png', title: 'IT / Software' },
  { img: '/webdads/images/home/ecommerce-industries-serve.png', title: 'E-commerce' },
  { img: '/webdads/images/home/telecom-industries-serve.png', title: 'Telecome' },
  { img: '/webdads/images/home/telecom-industries-serve-1.png', title: 'Realestate' },
  { img: '/webdads/images/home/engineering-industries-serve.png', title: 'Engineering' },
  { img: '/webdads/images/home/travel-industries-serve.png', title: 'Travels' },
  { img: '/webdads/images/home/healthcare-industries-serve.png', title: 'Healthcare' },
  { img: '/webdads/images/home/food-industries-serve.png', title: 'Food & Restaurant' },
  { img: '/webdads/images/home/architech-interior-industries-serve.png', title: 'Architech & Interior' },
  { img: '/webdads/images/home/logistic-industries-serve.png', title: 'Logistics' },
  { img: '/webdads/images/home/finance-industries-serve.png', title: 'Finance' },
  { img: '/webdads/images/home/hospitallity-industries-serve.png', title: 'Hospitality' },
  { img: '/webdads/images/home/media-cinema-industries-serve.png', title: 'Media / Cinema' },
  { img: '/webdads/images/home/ad-agency-industries-serve.png', title: 'Ad Agency' },
  { img: '/webdads/images/home/auto-mobile-industries-serve.png', title: 'Auto Mobile' },
  { img: '/webdads/images/home/sports-industries-serve.png', title: 'Sports' },
];

const Industries = () => {
  return (
    <section className="" style={{ paddingTop: '3rem' }}>
      <Container>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight={500} fontFamily="Poppins, sans-serif">
            Industries We Serve
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            Here, we make almost every genre of applications. You name it and we build it.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {industries.map((item, index) => (
            <Grid2 size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Box
                  textAlign="center"
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    backgroundColor: '#fffff',
                    boxShadow: "5px 5px 10px -6px rgba(0,0,0,0.5)",
                    // height: '135px',
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={40}
                    height={40}
                    style={{ objectFit: 'contain' }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    // mt={1}
                    fontSize={{xs:"10px", sm: "8px", md: "16px" }}
                    fontFamily="Poppins, sans-serif"
                  >
                    {item.title}
                  </Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </section >
  );
=======
    { img: '/webdads/images/home/it-software-industries-serve.png', title: 'IT / Software' },
    { img: '/webdads/images/home/ecommerce-industries-serve.png', title: 'E-commerce' },
    { img: '/webdads/images/home/telecom-industries-serve.png', title: 'Telecome' },
    { img: '/webdads/images/home/telecom-industries-serve-1.png', title: 'Realestate' },
    { img: '/webdads/images/home/engineering-industries-serve.png', title: 'Engineering' },
    { img: '/webdads/images/home/travel-industries-serve.png', title: 'Travels' },
    { img: '/webdads/images/home/healthcare-industries-serve.png', title: 'Healthcare' },
    { img: '/webdads/images/home/food-industries-serve.png', title: 'Food & Restaurant' },
    { img: '/webdads/images/home/architech-interior-industries-serve.png', title: 'Architech & Interior' },
    { img: '/webdads/images/home/logistic-industries-serve.png', title: 'Logistics' },
    { img: '/webdads/images/home/finance-industries-serve.png', title: 'Finance' },
    { img: '/webdads/images/home/hospitallity-industries-serve.png', title: 'Hospitality' },
    { img: '/webdads/images/home/media-cinema-industries-serve.png', title: 'Media / Cinema' },
    { img: '/webdads/images/home/ad-agency-industries-serve.png', title: 'Ad Agency' },
    { img: '/webdads/images/home/auto-mobile-industries-serve.png', title: 'Auto Mobile' },
    { img: '/webdads/images/home/sports-industries-serve.png', title: 'Sports' }
];

const Industries = () => {
    return (
        <section className="">
            <Container sx={{ pt: { xs: 2, sm: 0 } }}>
                <Box textAlign="center" mb={4} sx={{ mt: { sx: 2, sm: 2, md: 6 } }}>
                    <Typography variant="h4" fontWeight={500} fontFamily="Poppins, sans-serif">
                        Industries We Serve
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mt={1}>
                        Here, we make almost every genre of applications. You name it and we build it.
                    </Typography>
                </Box>

                <Grid2 container spacing={1}>
                    {industries.map((item, index) => (
                        <Grid2 size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                                <Box
                                    textAlign="center"
                                    sx={{
                                        p: 1,
                                        borderRadius: 2,
                                        backgroundColor: '#fffff',
                                        boxShadow: '5px 5px 10px -6px rgba(0,0,0,0.5)'
                                        // height: '135px',
                                    }}
                                >
                                    <Image src={item.img} alt={item.title} width={40} height={40} style={{ objectFit: 'contain' }} />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                        // mt={1}
                                        fontSize={{ xs: '10px', sm: '8px', md: '16px' }}
                                        fontFamily="Poppins, sans-serif"
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </section>
    );
>>>>>>> a0d19cc (Initial commit)
};

export default Industries;
