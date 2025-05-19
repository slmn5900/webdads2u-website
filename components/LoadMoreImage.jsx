import Image from 'next/image';
import { Container } from 'postcss';
import { Button, Col, Row } from 'react-bootstrap';
// import Application from "../app/Application/page"

import a1 from '../public/webdads/images/home/Assert/Adsfit_19890fc227.png';
import a2 from '../public/webdads/images/home/Assert/Amethyst.png';
import a3 from '../public/webdads/images/home/Assert/Atgomart_198912fc12.png';
import a4 from '../public/webdads/images/home/Assert/Global_198926bdb3.png';
import a5 from '../public/webdads/images/home/Assert/arc-man-logo_2299280a.avif';
import a6 from '../public/webdads/images/home/Assert/best_227e2dba.avif';
import a7 from '../public/webdads/images/home/Assert/diamond.avif';
import a8 from '../public/webdads/images/home/Assert/greem-yard.png';
import a9 from '../public/webdads/images/home/Assert/re-life_222a8f32.avif';
import a10 from '../public/webdads/images/home/Assert/saj-hotel-logo_221ae891.avif';
import a11 from '../public/webdads/images/home/Assert/smart-duckling-logo_2184e61c.avif';
import a12 from '../public/webdads/images/home/Assert/teamwater-logo_220f3c18.avif';
import Loader from './Loader';
// import Project from "../app/Project-details/page"
// import Digital from "./Digital/page";
export default function LoadMoreImage() {
    const about = [
        {
            no: 1,
            img: a1
        },
        {
            no: 2,
            img: a2
        },
        {
            no: 3,
            img: a3
        },
        {
            no: 4,
            img: a4
        },
        {
            no: 5,
            img: a5
        },
        {
            no: 6,
            img: a6
        },
        {
            no: 7,
            img: a7
        },
        {
            no: 8,
            img: a8
        },
        {
            no: 9,
            img: a9
        },
        {
            no: 10,
            img: a10
        },
        {
            no: 11,
            img: a11
        },
        {
            no: 12,
            img: a12
        }
    ];

    return (
        <div className=" ">
            <div className="container">
                <Row>
                    <Col md={6} className="">
                        <div className="mt-5">
                            <h5 className="fw-bold">10+ years and 150+ clients</h5>
                            <h1 className="fw-bold load-ayout" style={{ color: '#262250' }}>
                                We are the Solution for Web Designing and Web Development
                            </h1>
                            <p>
                                <span className="fw-bold" style={{ color: '#7a7a7a', fontSize: '18px' }}>
                                    <a href="https://webdads2u.com/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Best Web Design and Web Development Company in Chennai
                                    </a>
                                </span>
                                , India to help you increase your business growth.
                            </p>
                            <div className="about-layout ">
                                {/* <a href="https://webdads2u.com/about/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <span className="fs-5 text-white ">About more</span>
                                </a> */}
                                <Button
                                    href="/about/"
                                    // variant="primary"
                                    className="border rounded-5"
                                    style={{
                                        background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                        padding: '18px 50px'
                                    }}
                                >
                                    About more
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={3} className="load-images">
                        {about.length > 0 ? (
                            about.map((item, index) => (
                                <>
                                    <Image
                                        src={item.img}
                                        alt="about"
                                        width={120}
                                        height={120}
                                        style={{
                                            boxShadow: '0 15px 55px rgb(138 138 138 / 30%)',
                                            background: 'white'
                                        }}
                                    />
                                </>
                            ))
                        ) : (
                            <p>no data</p>
                        )}
                    </Col>
                </Row>
            </div>
            <Loader />
            <div>{/* <Project/> */}</div>
            <div>{/* <Application/> */}</div>
        </div>
    );
}
