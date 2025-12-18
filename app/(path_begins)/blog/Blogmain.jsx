'use client';
import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiClock1 } from 'react-icons/ci';
import { motion } from 'framer-motion';
export default function Blogmain() {
    const [data, setData] = useState([]);
    const FetchData = async () => {
        const response = await fetch('/api/Blog.json');

        const data = await response.json();
        console.log(data, 'ssssss');
        setData(data);
    };

    useEffect(() => {
        FetchData();
    }, []);
    return (
        <Box>
            <h2 style={{ textAlign: 'center', paddingTop: "3rem", paddingBottom: "3rem" ,textTransform:"uppercase" }}>Blog</h2>
            <Container>
                <Grid2 container spacing={4}>
                    {data.map((post, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        // height: '480px',
                                        boxShadow: 'none',
                                        background: 'white',
                                        ':hover': {
                                            boxShadow: 3
                                        }
                                    }}
                                >
                                    {/* <Link href={post.link} passHref> */}
                                    <CardMedia component="div" sx={{ position: 'relative', height: 200 }}>
                                        <Image src={post.img} alt={post.alt} fill style={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }} />
                                    </CardMedia>
                                    {/* </Link> */}
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            component={Link}
                                            href={post.link}
                                            sx={{
                                                textDecoration: 'none',
                                                color: '#08203A',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '20px',
                                                fontWeight: 600
                                            }}
                                        >
                                            {post.title}
                                        </Typography>

                                        <Typography sx={{ display: 'flex', alignItems: 'center', color: '#929292', mt: 1, fontSize: '14px', gap: 1 }}>
                                            <Avatar alt="Remy Sharp" src="/webdads/images/home/testimonial/client-review-4.avif" sx={{ width: 30, height: 30 }} />{' '}
                                            <Link href="/" style={{ textDecoration: 'none', fontSize: '15px' }}>
                                                Webdads2u
                                            </Link>
                                            <CiClock1 style={{ fontSize: '18px', marginRight: '5px' }} /> {post.date}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                                color: '#666',
                                                my: 2
                                            }}
                                        >
                                            {post.description}
                                        </Typography>

                                        {/* <Link href={post.link} passHref>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#08203A',
                                                    color: '#fff',
                                                    px: 3,
                                                    py: 1,
                                                    borderRadius: '5px',
                                                    fontSize: '16px',
                                                    fontWeight: 600,
                                                    textTransform: 'none'
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </Link> */}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
