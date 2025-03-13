// import { useEffect, useState } from 'react';
// import '../../style/common/loadmoreimage.scss';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// const LoadMoreImageContainer = ({ images, heading1, heading2, paragraph1, paragraph2 }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);

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
//                                 <a className="button" href="https://webdads2u.com/contact-us/">
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
//                             <button>
//                                 <a className="button" href="https://webdads2u.com/contact-us/">
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
//                     <Container>
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
            
//             <SocialMedia/>
//         </>
//     );
// };

// export default LoadMoreImageContainer;






// ================================================================================================================================================
// ====================================================== this code is reworded================================================================
// ================================================================================================================================================
"use client"
import { useEffect, useState, useCallback } from 'react';
import '../../style/common/loadmoreimage.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SocialMedia from "./SocialMedia.jsx";
import { Container} from 'react-bootstrap';

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
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }, [currentImageIndex, nextImage, prevImage]); // Dependencies here, which will only change when `currentImageIndex`, `nextImage`, or `prevImage` changes

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
                            <button>
                                <a className="button" href="https://webdads2u.com/contact-us/">
                                    Contact Us
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section style={{ background: 'black' }}>
                <div className="container">
                    <h1 className="brochure-page-heading2">{heading2}</h1>
                    <p className="brochure-page-paragraph2">{paragraph2}</p>
                </div>

                <section className="loadmore-section">
                    <Container>
                        {images.slice(0, visibleImages).map((src, index) => (
                            <div className="image-wrapper" key={index} onClick={() => openLightbox(index)}>
                                <img src={src.url} alt={src.alt || 'Image'} />
                                <div className="overlay" />
                            </div>
                        ))}
                    </Container>
                </section>

                {visibleImages < images.length && (
                    <div className='load-more-button-div'>
                        <button className="load-more-button" onClick={loadMoreImages}>
                            Load More
                        </button>
                    </div>
                )}

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
