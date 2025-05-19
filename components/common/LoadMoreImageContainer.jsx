<<<<<<< HEAD
// import { useEffect, useState } from 'react';
// import '../../style/common/loadmoreimage.scss';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
=======
// 'use client';
// import { useEffect, useState, useCallback } from 'react';
// import '../../style/common/loadmoreimage.scss';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import SocialMedia from './SocialMedia.jsx';
// import { Container } from 'react-bootstrap';
>>>>>>> 6010d3c (Add new features and updates)

// const LoadMoreImageContainer = ({ images, heading1, heading2, paragraph1, paragraph2 }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD

//     const openLightbox = (index) => {
//         setCurrentImageIndex(index);
//         setIsOpen(true);
//     };

//     const closeLightbox = () => {
//         setIsOpen(false);
//         setCurrentImageIndex(null);
//     };

//     const nextImage = () => {
//         if (currentImageIndex < images.length - 1) {
//             setCurrentImageIndex((prevIndex) => prevIndex + 1);
//         }
//     };

//     const prevImage = () => {
//         if (currentImageIndex > 0) {
//             setCurrentImageIndex((prevIndex) => prevIndex - 1);
//         }
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Escape') {
//             closeLightbox();
//         } else if (e.key === 'ArrowRight') {
//             nextImage();
//         } else if (e.key === 'ArrowLeft') {
//             prevImage();
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [currentImageIndex]);

//     return (
//         <>
//             <div className="brochure-page-heading-image ">
//                 <div className="container brochure-page-container">
//                     <div className="brochure-page-innerContainer">
//                         <h1 className="brochure-page-heading">{heading1}</h1>
//                         <p className="brochure-page-paragraph">{paragraph1}</p>
//                         <div className="brochure-page-buttonWrapper">
//                             <button>
//                                 <a className="button" href="/contact-us/">
//                                     Contact Us
//                                 </a>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <section style={{ background: 'black' }}>
//                 <div className="container">
//                     <h1 className="brochure-page-heading2">{heading2}</h1>
//                     <p className="brochure-page-paragraph2">{paragraph2}</p>
//                 </div>

//                 <section className="loadmore-section">
//                     {images.map((src, index) => (
//                         <div className="image-wrapper" key={index} onClick={() => openLightbox(index)}>
//                             <img src={src.url} alt={src.alt || 'Image'} />
//                             <div className="overlay" />
//                         </div>
//                     ))}
//                 </section>

//                 {isOpen && currentImageIndex !== null && (
//                     <div className={`loadmore-section-lightbox ${isOpen ? 'show' : ''}`} onClick={closeLightbox}>
//                         <div className="loadmore-section-filter" style={{ backgroundImage: `url(${images[currentImageIndex].url})` }} />
//                         <img src={images[currentImageIndex].url} alt={`Image of ${images[currentImageIndex].alt || 'untitled'}`} />
//                         <div className="loadmore-section-arrowr" onClick={prevImage}>
//                             <IoIosArrowBack />
//                         </div>
//                         <div className="loadmore-section-arrowl" onClick={nextImage}>
//                             <IoIosArrowForward />
//                         </div>
//                         <div className="loadmore-section-close" onClick={closeLightbox} />
//                     </div>
//                 )}
//             </section>
//         </>
//     );
// };

// export default LoadMoreImageContainer;



// "use client"
// import { useEffect, useState } from 'react';
// import '../../style/common/loadmoreimage.scss';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import SocialMedia from "./SocialMedia.jsx"
// import { Container} from 'react-bootstrap';
// const LoadMoreImageContainer = ({ images, heading1, heading2, paragraph1, paragraph2 }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
=======
>>>>>>> 6010d3c (Add new features and updates)
//     const [visibleImages, setVisibleImages] = useState(6); // State for how many images to show

//     const openLightbox = (index) => {
//         setCurrentImageIndex(index);
//         setIsOpen(true);
//     };

//     const closeLightbox = () => {
//         setIsOpen(false);
//         setCurrentImageIndex(null);
//     };

//     const nextImage = () => {
//         if (currentImageIndex < images.length - 1) {
//             setCurrentImageIndex((prevIndex) => prevIndex + 1);
//         }
//     };

//     const prevImage = () => {
//         if (currentImageIndex > 0) {
//             setCurrentImageIndex((prevIndex) => prevIndex - 1);
//         }
//     };

<<<<<<< HEAD
//     const handleKeyDown = (e) => {
//         if (e.key === 'Escape') {
//             closeLightbox();
//         } else if (e.key === 'ArrowRight') {
//             nextImage();
//         } else if (e.key === 'ArrowLeft') {
//             prevImage();
//         }
//     };
=======
//     // Memoize the handleKeyDown function to prevent unnecessary re-creations
//     const handleKeyDown = useCallback(
//         (e) => {
//             if (e.key === 'Escape') {
//                 closeLightbox();
//             } else if (e.key === 'ArrowRight') {
//                 nextImage();
//             } else if (e.key === 'ArrowLeft') {
//                 prevImage();
//             }
//         },
//         [currentImageIndex, nextImage, prevImage]
//     ); // Dependencies here, which will only change when `currentImageIndex`, `nextImage`, or `prevImage` changes
>>>>>>> 6010d3c (Add new features and updates)

//     useEffect(() => {
//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
<<<<<<< HEAD
//     }, [currentImageIndex]);
=======
//     }, [handleKeyDown]); // Depend on handleKeyDown here, since it is memoized
>>>>>>> 6010d3c (Add new features and updates)

//     const loadMoreImages = () => {
//         setVisibleImages((prevVisible) => Math.min(prevVisible + 6, images.length));
//     };

//     return (
//         <>
//             <div className="brochure-page-heading-image ">
//                 <div className="container brochure-page-container">
//                     <div className="brochure-page-innerContainer">
//                         <h1 className="brochure-page-heading">{heading1}</h1>
//                         <p className="brochure-page-paragraph">{paragraph1}</p>
//                         <div className="brochure-page-buttonWrapper">
<<<<<<< HEAD
//                             <button>
//                                 <a className="button" href="/contact-us/">
//                                     Contact Us
//                                 </a>
//                             </button>
=======
//                                 <a className="button" href="/contact-us/">
//                             <button>
//                                     Contact Us
//                             </button>
//                                 </a>
>>>>>>> 6010d3c (Add new features and updates)
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <section style={{ background: 'black' }}>
//                 <div className="container">
//                     <h1 className="brochure-page-heading2">{heading2}</h1>
//                     <p className="brochure-page-paragraph2">{paragraph2}</p>
//                 </div>

//                 <section className="loadmore-section">
//                     <Container>
<<<<<<< HEAD
//                     {images.slice(0, visibleImages).map((src, index) => (
//                         <div className="image-wrapper" key={index} onClick={() => openLightbox(index)}>
//                             <img src={src.url} alt={src.alt || 'Image'} />
//                             <div className="overlay" />
//                         </div>
//                     ))}
//                     </Container>
                    
//                 </section>

//                 {visibleImages < images.length && (
//                     <div className='load-more-button-div'>
              
=======
//                         {images.slice(0, visibleImages).map((src, index) => (
//                             <div className="image-wrapper" key={index} onClick={() => openLightbox(index)}>
//                                 <img src={src.url} alt={src.alt || 'Image'} />
//                                 <div className="overlay" />
//                             </div>
//                         ))}
//                     </Container>
//                 </section>

//                 {visibleImages < images.length && (
//                     <div className="load-more-button-div">
>>>>>>> 6010d3c (Add new features and updates)
//                         <button className="load-more-button" onClick={loadMoreImages}>
//                             Load More
//                         </button>
//                     </div>
//                 )}

//                 {isOpen && currentImageIndex !== null && (
//                     <div className={`loadmore-section-lightbox ${isOpen ? 'show' : ''}`} onClick={closeLightbox}>
//                         <div className="loadmore-section-filter" style={{ backgroundImage: `url(${images[currentImageIndex].url})` }} />
//                         <img src={images[currentImageIndex].url} alt={`Image of ${images[currentImageIndex].alt || 'untitled'}`} />
//                         <div className="loadmore-section-arrowr" onClick={prevImage}>
//                             <IoIosArrowBack />
//                         </div>
//                         <div className="loadmore-section-arrowl" onClick={nextImage}>
//                             <IoIosArrowForward />
//                         </div>
//                         <div className="loadmore-section-close" onClick={closeLightbox} />
//                     </div>
//                 )}
//             </section>
<<<<<<< HEAD
            
//             <SocialMedia/>
=======

//             <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
//         </>
//     );
// };

// export default LoadMoreImageContainer;
<<<<<<< HEAD






// ================================================================================================================================================
// ====================================================== this code is reworded================================================================
// ================================================================================================================================================
"use client"
import { useEffect, useState, useCallback } from 'react';
import '../../style/common/loadmoreimage.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SocialMedia from "./SocialMedia.jsx";
import { Container} from 'react-bootstrap';
=======
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
'use client';
import { useEffect, useState, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap'; // Inside your LoadMoreImageContainer component, update the section as follows:
import '../../style/common/loadmoreimage.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SocialMedia from './SocialMedia.jsx';
import { Container } from 'react-bootstrap';
>>>>>>> 6010d3c (Add new features and updates)

const LoadMoreImageContainer = ({ images, heading1, heading2, paragraph1, paragraph2 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [visibleImages, setVisibleImages] = useState(6); // State for how many images to show

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentImageIndex(null);
    };

    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Memoize the handleKeyDown function to prevent unnecessary re-creations
<<<<<<< HEAD
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }, [currentImageIndex, nextImage, prevImage]); // Dependencies here, which will only change when `currentImageIndex`, `nextImage`, or `prevImage` changes
=======
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        },
        [currentImageIndex, nextImage, prevImage]
    ); // Dependencies here, which will only change when `currentImageIndex`, `nextImage`, or `prevImage` changes
>>>>>>> 6010d3c (Add new features and updates)

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]); // Depend on handleKeyDown here, since it is memoized

    const loadMoreImages = () => {
        setVisibleImages((prevVisible) => Math.min(prevVisible + 6, images.length));
    };

    return (
        <>
            <div className="brochure-page-heading-image ">
                <div className="container brochure-page-container">
                    <div className="brochure-page-innerContainer">
                        <h1 className="brochure-page-heading">{heading1}</h1>
                        <p className="brochure-page-paragraph">{paragraph1}</p>
                        <div className="brochure-page-buttonWrapper">
<<<<<<< HEAD
                            <button>
                                <a className="button" href="/contact-us/">
                                    Contact Us
                                </a>
                            </button>
=======
                            <a className="button" href="/contact-us/">
                                <button>Contact Us</button>
                            </a>
>>>>>>> 6010d3c (Add new features and updates)
                        </div>
                    </div>
                </div>
            </div>
            <section style={{ background: 'black' }}>
                <div className="container">
                    <h1 className="brochure-page-heading2">{heading2}</h1>
                    <p className="brochure-page-paragraph2">{paragraph2}</p>
                </div>
<<<<<<< HEAD

                <section className="loadmore-section">
=======
                {/* <section className="loadmore-section">
>>>>>>> 6010d3c (Add new features and updates)
                    <Container>
                        {images.slice(0, visibleImages).map((src, index) => (
                            <div className="image-wrapper" key={index} onClick={() => openLightbox(index)}>
                                <img src={src.url} alt={src.alt || 'Image'} />
                                <div className="overlay" />
                            </div>
                        ))}
                    </Container>
<<<<<<< HEAD
                </section>

                {visibleImages < images.length && (
                    <div className='load-more-button-div'>
=======
                </section> */}
                {/* <section className="loadmore-section">
                    <Container>
                        <Row>
                            {images.slice(0, visibleImages).map((src, index) => (
                                <Col xs={12} sm={6} md={6} lg={6} key={index} className="mb-4">
                                    <div className="image-wrapper" onClick={() => openLightbox(index)}>
                                        <img src={src.url} alt={src.alt || 'Image'} className="img-fluid" />
                                        <div className="overlay" />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section> */}
                <section className="loadmore-section">
                    <Container>
                        <Row>
                            {images.slice(0, visibleImages).map((src, index) => (
                                <Col xs={12} sm={6} md={6} lg={6} key={index} className="mb-4">
                                    <div className="image-wrapper" onClick={() => openLightbox(index)}>
                                        <img src={src.url} alt={src.alt || 'Image'} className="img-fluid" />
                                        <div className="gallery-item-hoverer-bg"></div>
                                        <div className="gallery-item-caption-over">
                                            <h2 className="fg-item-title">{src.name || 'Untitled'}</h2>
                                        </div>
                                        <div className="overlay" />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {visibleImages < images.length && (
                    <div className="load-more-button-div">
>>>>>>> 6010d3c (Add new features and updates)
                        <button className="load-more-button" onClick={loadMoreImages}>
                            Load More
                        </button>
                    </div>
                )}
<<<<<<< HEAD

=======
>>>>>>> 6010d3c (Add new features and updates)
                {isOpen && currentImageIndex !== null && (
                    <div className={`loadmore-section-lightbox ${isOpen ? 'show' : ''}`} onClick={closeLightbox}>
                        <div className="loadmore-section-filter" style={{ backgroundImage: `url(${images[currentImageIndex].url})` }} />
                        <img src={images[currentImageIndex].url} alt={`Image of ${images[currentImageIndex].alt || 'untitled'}`} />
                        <div className="loadmore-section-arrowr" onClick={prevImage}>
                            <IoIosArrowBack />
                        </div>
                        <div className="loadmore-section-arrowl" onClick={nextImage}>
                            <IoIosArrowForward />
                        </div>
                        <div className="loadmore-section-close" onClick={closeLightbox} />
                    </div>
                )}
            </section>

            <SocialMedia />
        </>
    );
};

export default LoadMoreImageContainer;
