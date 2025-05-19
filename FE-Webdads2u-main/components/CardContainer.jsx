'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiClock1 } from 'react-icons/ci';

const initialPosts = [
    {
        id: 1,
        title: 'SEO Algorithm Updates for the Year 2023',
        date: 'November 17, 2023',
        excerpt: 'Home Blog SEO SEO Algorithm Updates for the Year 2023...',
        link: '/seo-algorithm-updates-for-the-year-2023/',
        imgSrc: '/webdads/images/home/card-container-images/seo-algorithm-updates-for-the-year-2023_20240d03e2.avif',
        alt: 'SEO Algorithm Updates'
    },
    {
        id: 2,
        title: 'Introduction to Python – A developer perspective',
        date: 'December 2, 2023',
        excerpt: 'We choose to develop our code base in Python. Most...',
        link: '/introduction-to-python-a-developer-perspective/',
        // imgSrc: '/webdads/images/home/card-container-images/introduction-to-python–A-developer-perspective.avif',
        imgSrc: '/webdads/images/home/card-container-images/introduction_to_python_A_developer_perspective.avif',
        alt: 'Introduction to Python'
    },
    {
        id: 3,
        title: 'What is CRM Software Development',
        date: 'March 19, 2024',
        excerpt: 'Home Blog CRM and ERP What is CRM software development...',
        link: '/what-is-crm-software-development/',
        imgSrc: '/webdads/images/home/card-container-images/crm-webdads.avif',
        alt: 'CRM Software Development'
    }
];

const CardContainer = () => {
    const [posts, setPosts] = useState(initialPosts);
    // const [page, setPage] = useState(1);

    return (
        <>
            <div className='container'>
                <div className="row pt-5" style={{ display: 'flex',alignItems: 'center', justifyContent: 'center' }} >
                    <div className="elementor-element elementor-element-d32b387 blog-sec elementor-widget elementor-widget-text-editor" data-id="d32b387" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="" style={{ textAlign: 'center' ,display: 'flex',alignItems: 'center', justifyContent: 'center',flexDirection: 'column'}}>
                            <p className='landing-page-card-blog-para-p'>Our Latest Blog</p>
                            <h3 className='landing-page-card-blog-para-h3'>
                                Connect with us for experiencing the best <span >IT Solutions</span>
                            </h3>

                        </div>
                    </div>
                </div>
            </div>
            <section className="container py-3">
                <div className="row">
                    {posts.map((post) => (
                        <div key={post.id} className="col-sm-6 col-md-4 mb-4">
                            <div className="landing-page-card-post-grid">
                                <div className="landing-page-card-post-thumbnail">
                                    <div>
                                        <Link href={post.link} passHref style={{ textDecoration: 'none' }}>
                                            <div className="entry-overlay">
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </div>
                                            <Image
                                                src={post.imgSrc}
                                                alt={post.alt}
                                                width={900}
                                                height={490}
                                                className="img-fluid"
                                                loading="lazy" 
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h2 className="post-title">
                                        <Link href={post.link} passHref style={{ textDecoration: 'none', fontFamily: `Poppins, Sans-serif`, fontSize: '22px', fontWeight: '600', color: `#08203A` }}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="post-date" style={{ color: '#929292', fontSize: '12px' }}>
                                        <CiClock1 style={{ fontSize: '18px' }} /> {post.date}
                                    </p>
                                    <p className="post-excerpt" style={{ color: '#666', fontFamily: 'Poppins, Sans-serif', fontSize: '16px', fonWeight: '400', margin: '15px 0 20px 0' }}>
                                        {post.excerpt}
                                    </p>
                                    <Link href={post.link} passHref a className="read-more" style={{ textDecoration: 'none' }}>
                                        {/* <a className="read-more">Read More</a> */}
                                        <button className="landing-page-card-btn" style={{ backgroundColor: `#08203A`, color: 'white', padding: '10px', borderRadius: '5px', width: '150px', fontSize: '18px', fontWeight: '600' }}>
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {page < 3 && ( // Simulate 3 pages of posts
        <div className="load-more-button-wrap text-center">
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )} */}
            </section>
        </>
    );
};

export default CardContainer;
