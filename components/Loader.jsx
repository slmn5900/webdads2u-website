"use client";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function Loader() {
  const [visibleCount, setVisibleCount] = useState(12); // Initial number of visible images
  const itemsPerPage = 6;

  const data = [
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/aarthi-homes_13444eb98.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/amazer_1345ff1a6.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/aquafloplast_13460b948.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/avayanflow-tech_13471b8e4.jpg" },
    {
      name: "aarthi-homes",
      url: "/webdads/images/home/Assert2/bhava-business-consultants_134803364.jpg",
    },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/cini-clicks_13499e172.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/cool-tech_135010500.jpg" },
    {
      name: "aarthi-homes",
      url: "/webdads/images/home/Assert2/corengg-serve-engineering_2608905d.png",
    },
    {
      name: "aarthi-homes",
      url: "/webdads/images/home/Assert2/dhina-file-foundation_135191db3.jpg",
    },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/dpn_1352cf267.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/ds-solution_135394bc8.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/electrogrizzy_1354efc9d.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/general-health-care_1355b8739.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/gk-polymers_13561bf57.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/high-lock-fittings_13372ea9d.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/imci-life-services_261ff8f4.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/infinite-innovation_1357bcff8.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/iritube-logo-2.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/jkay-technogy_135880c49.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/aarthi-homes_13444eb98.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/lalit-food-machines_263339d3.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/lotus-founation_13595e077.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/madmags-impression_1360988a6.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/matchbox-mansion_2643c180.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/microsha_13623f8e3.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/pridermx_26585aab.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/pv-pharma_25467877.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/royce-properties_13389a1d3.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/rps-group_256688ab.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/rps-group-1.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/skill-tech_25758a30.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/smart-wholesales_258fab3e.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/ssr-academy_2594356c.png" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/vertex_13410bc8a.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/vse_13423e3b2.jpg" },
    { name: "aarthi-homes", url: "/webdads/images/home/Assert2/web-foster_1343609a9.jpg" },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);
  };

  return (

   <Container>
   
    <div className="mt-3">
      <div className="d-flex flex-wrap">
        <Row>
          {data.slice(0, visibleCount).map((item, index) => (
            <Col
              lg={2}
              md={2}
              sm={4}
              xs={4}
              
              key={index} className="load-shdw"
            >
    
                <Image
                  src={item.url}
                  alt="item"
                  //   width={"auto"}
                  width={180}
                  height={120}

                    // style={{
                    //   boxShadow: "0 15px 55px rgb(138 138 138 / 30%)",
                    //   background: "white",
                    // }}
                />
          
            </Col>
          ))}{" "}
        </Row>
      </div>

      <div className="text-center mt-5">
        {visibleCount < data.length && (
          <Button
            onClick={handleLoadMore}
            className="border rounded-5"
            style={{
              background: "linear-gradient(90deg, #871752 0%, #262250 50%)",
              padding: "18px 50px",margin:"-6px 4px",outline:"2px solid #FEFEFE"
            }}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
    </Container>
  );
}
