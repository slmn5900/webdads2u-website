// "use client";
// import React, { useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import Image from "next/image";

// export default function Loader() {
//   const [visibleCount, setVisibleCount] = useState(12); // Initial number of visible images
//   const itemsPerPage = 6;

//   const data = [
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/aarthi-homes_13444eb98.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/amazer_1345ff1a6.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/aquafloplast_13460b948.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/avayanflow-tech_13471b8e4.jpg" },
//     {
//       name: "aarthi-homes",
//       url: "/webdads/images/home/Assert2/bhava-business-consultants_134803364.jpg",
//     },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/cini-clicks_13499e172.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/cool-tech_135010500.jpg" },
//     {
//       name: "aarthi-homes",
//       url: "/webdads/images/home/Assert2/corengg-serve-engineering_2608905d.png",
//     },
//     {
//       name: "aarthi-homes",
//       url: "/webdads/images/home/Assert2/dhina-file-foundation_135191db3.jpg",
//     },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/dpn_1352cf267.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/ds-solution_135394bc8.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/electrogrizzy_1354efc9d.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/general-health-care_1355b8739.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/gk-polymers_13561bf57.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/high-lock-fittings_13372ea9d.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/imci-life-services_261ff8f4.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/infinite-innovation_1357bcff8.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/iritube-logo-2.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/jkay-technogy_135880c49.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/aarthi-homes_13444eb98.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/lalit-food-machines_263339d3.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/lotus-founation_13595e077.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/madmags-impression_1360988a6.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/matchbox-mansion_2643c180.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/microsha_13623f8e3.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/pridermx_26585aab.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/pv-pharma_25467877.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/royce-properties_13389a1d3.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/rps-group_256688ab.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/rps-group-1.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/skill-tech_25758a30.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/smart-wholesales_258fab3e.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/ssr-academy_2594356c.png" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/vertex_13410bc8a.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/vse_13423e3b2.jpg" },
//     { name: "aarthi-homes", url: "/webdads/images/home/Assert2/web-foster_1343609a9.jpg" },
//   ];

//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => prevCount + itemsPerPage);
//   };

//   return (

//    <Container>

//     <div className="mt-3">
//       <div className="d-flex flex-wrap">
//         <Row>
//           {data.slice(0, visibleCount).map((item, index) => (
//             <Col
//               lg={2}
//               md={2}
//               sm={4}
//               xs={4}

//               key={index} className="load-shdw"
//             >

//                 <Image
//                   src={item.url}
//                   alt="item"
//                   //   width={"auto"}
//                   width={180}
//                   height={120}

//                     // style={{
//                     //   boxShadow: "0 15px 55px rgb(138 138 138 / 30%)",
//                     //   background: "white",
//                     // }}
//                 />

//             </Col>
//           ))}{" "}
//         </Row>
//       </div>

//       <div className="text-center mt-5">
//         {visibleCount < data.length && (
//           <Button
//             onClick={handleLoadMore}
//             className="border rounded-5"
//             style={{
//               background: "linear-gradient(90deg, #871752 0%, #262250 50%)",
//               padding: "18px 50px",margin:"-6px 4px",outline:"2px solid #FEFEFE"
//             }}
//           >
//             Load More
//           </Button>
//         )}
//       </div>
//     </div>
//     </Container>
//   );
// }
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Grid2, Container, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function Loader() {
  const [visibleCount, setVisibleCount] = useState(12);
  const itemsPerPage = 6;

  const data = [
    { name: 'aarthi-homes', url: '/webdads/images/home/Assert2/aarthi-homes_13444eb98.jpg' },
    { name: 'amazer', url: '/webdads/images/home/Assert2/amazer_1345ff1a6.jpg' },
    { name: 'aquafloplast', url: '/webdads/images/home/Assert2/aquafloplast_13460b948.jpg' },
    { name: 'avayanflow-tech', url: '/webdads/images/home/Assert2/avayanflow-tech_13471b8e4.jpg' },
    { name: 'bhava', url: '/webdads/images/home/Assert2/bhava-business-consultants_134803364.jpg' },
    { name: 'ciniclicks', url: '/webdads/images/home/Assert2/cini-clicks_13499e172.jpg' },
    { name: 'cooltech', url: '/webdads/images/home/Assert2/cool-tech_135010500.jpg' },
    { name: 'corengg', url: '/webdads/images/home/Assert2/corengg-serve-engineering_2608905d.png' },
    { name: 'dhina', url: '/webdads/images/home/Assert2/dhina-file-foundation_135191db3.jpg' },
    { name: 'dpn', url: '/webdads/images/home/Assert2/dpn_1352cf267.jpg' },
    { name: 'ds-solution', url: '/webdads/images/home/Assert2/ds-solution_135394bc8.jpg' },
    { name: 'electrogrizzy', url: '/webdads/images/home/Assert2/electrogrizzy_1354efc9d.jpg' },
    { name: 'general-health-care', url: '/webdads/images/home/Assert2/general-health-care_1355b8739.jpg' },
    { name: 'gk-polymers', url: '/webdads/images/home/Assert2/gk-polymers_13561bf57.jpg' },
    { name: 'high-lock', url: '/webdads/images/home/Assert2/high-lock-fittings_13372ea9d.jpg' },
    { name: 'imci-life', url: '/webdads/images/home/Assert2/imci-life-services_261ff8f4.png' },
    { name: 'infinite', url: '/webdads/images/home/Assert2/infinite-innovation_1357bcff8.jpg' },
    { name: 'iritube', url: '/webdads/images/home/Assert2/iritube-logo-2.png' },
    { name: 'jkay', url: '/webdads/images/home/Assert2/jkay-technogy_135880c49.jpg' },
    { name: 'lalit', url: '/webdads/images/home/Assert2/lalit-food-machines_263339d3.png' },
    { name: 'lotus', url: '/webdads/images/home/Assert2/lotus-founation_13595e077.jpg' },
    { name: 'madmags', url: '/webdads/images/home/Assert2/madmags-impression_1360988a6.jpg' },
    { name: 'matchbox', url: '/webdads/images/home/Assert2/matchbox-mansion_2643c180.png' },
    { name: 'microsha', url: '/webdads/images/home/Assert2/microsha_13623f8e3.jpg' },
    { name: 'pridermx', url: '/webdads/images/home/Assert2/pridermx_26585aab.png' },
    { name: 'pv-pharma', url: '/webdads/images/home/Assert2/pv-pharma_25467877.png' },
    { name: 'royce', url: '/webdads/images/home/Assert2/royce-properties_13389a1d3.jpg' },
    { name: 'rps', url: '/webdads/images/home/Assert2/rps-group_256688ab.png' },
    { name: 'rps2', url: '/webdads/images/home/Assert2/rps-group-1.png' },
    { name: 'skill-tech', url: '/webdads/images/home/Assert2/skill-tech_25758a30.png' },
    { name: 'smart-wholesales', url: '/webdads/images/home/Assert2/smart-wholesales_258fab3e.png' },
    { name: 'ssr-academy', url: '/webdads/images/home/Assert2/ssr-academy_2594356c.png' },
    { name: 'vertex', url: '/webdads/images/home/Assert2/vertex_13410bc8a.jpg' },
    { name: 'vse', url: '/webdads/images/home/Assert2/vse_13423e3b2.jpg' },
    { name: 'web-foster', url: '/webdads/images/home/Assert2/web-foster_1343609a9.jpg' },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <Box sx={{ pt: 4 }}>

      <Box sx={{ p: 1, }}>

        <Container >
          <Grid2 container spacing={2} justifyContent="center" >
            {data.slice(0, visibleCount).map((item, index) => (
              <Grid2 size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  style={{

                    // boxShadow: '0 15px 55px rgb(138 138 138 / 30%)',
                    borderRadius: 8,
                    // padding: 4,
                  }}
                >
                  {/* <Box
                    component="img"
                    src={item.url}
                    alt={item.name}

                    sx={{
                      width: { xs: "133px", md: 180 }, height: { xs: 100, md: 150 },
                      borderRadius: '8px',
                    }}

                  /> */}
                  <Box
                    sx={{
                      boxShadow: '0 15px 55px rgb(138 138 138 / 30%)',
                      borderRadius: '8px',
                      backgroundColor: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 1,
                    }}
                  >
                    <Image
                      src={item.url}
                      alt="about"
                      width={100}
                      height={100}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>

          {visibleCount < data.length && (
            <Box textAlign="center" mt={3} >
              <Button
                variant="contained"
                onClick={handleLoadMore}
                sx={{
                  borderRadius: 15,
                  px: 5,
                  py: 1.8,
                  fontWeight: '500',
                  background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                  outline: '2px solid #FEFEFE',
                  fontFamily: "Poppins",
                  mb: 0,


                }}
              >
                Load More
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
