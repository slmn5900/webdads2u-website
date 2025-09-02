import React, { useContext, useState } from 'react';
import { Box, Container, Grid2, Typography, Modal, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { MenuContext } from '../../layout/context/menucontext';

const Brochuregallery = () => {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { work_section } = useContext(MenuContext);
    const title = work_section?.title;
    const images = work_section?.images || work_section?.imgs || work_section?.img;

    const handleShow = (index) => {
        setCurrentIndex(index);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <Box sx={{ background: '#f5f5f5', py: 5 }}>
            <Container maxWidth="lg">
                <Grid2 container justifyContent="center">
                    <Typography
                        variant="h4"
                        component="h3"
                        align="center"
                        sx={{
                            backgroundImage: 'linear-gradient(90deg, #65258a 0%, #e80566 50%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            fontSize: '40px',
                            mb: 4,
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        {title}
                    </Typography>
                </Grid2>
                <Container maxWidth="lg">
                    <Grid2 container spacing={2}>
                        {images?.map((src, index) => (
                            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} item key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover .overlay': {
                                            opacity: 1
                                        }
                                    }}
                                    onClick={() => handleShow(index)}
                                >
                                    <Box
                                        component="img"
                                        src={src}
                                        alt={`Work ${index + 1}`}
                                        sx={{
                                            width: '100%',
                                            borderRadius: 1,
                                            display: 'block'
                                        }}
                                    />
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(0,0,0,0.3)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            borderRadius: 1
                                        }}
                                    />
                                </Box>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
                <Grid2 container justifyContent="center" sx={{ mt: 3 }}>
                    <Button
                        variant="contained"
                        href="/business-card/"
                        sx={{
                            fontFamily: "'Poppins', Sans-serif",
                            fontSize: '18px',
                            fontWeight: 550,
                            background: 'linear-gradient(90deg, #65258a 0%, #e80566 50%)',
                            borderRadius: '5px',
                            py: 1,
                            px: 4,
                            border: 'none',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #65258a 0%, #e80566 50%)',
                                opacity: 0.9
                            }
                        }}
                    >
                        View More
                    </Button>
                </Grid2>
            </Container>

            {/* Modal for Image Viewing */}
            {images && images.length > 0 && (
                <Modal
                    open={show}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            outline: 'none',
                            width: isMobile ? '90%' : 'auto',
                            maxWidth: '90vw',
                            maxHeight: '90vh'
                        }}
                    >
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                zIndex: 1,
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.9)'
                                }
                            }}
                        >
                            <ChevronLeft fontSize="large" />
                        </IconButton>
                        <Box
                            component="img"
                            src={images[currentIndex]}
                            alt="Current Work"
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '80vh',
                                display: 'block',
                                margin: '0 auto'
                            }}
                        />
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                zIndex: 1,
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.9)'
                                }
                            }}
                        >
                            <ChevronRight fontSize="large" />
                        </IconButton>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Button variant="contained" onClick={handleClose} color="secondary">
                                Close
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            )}
        </Box>
    );
};

export default Brochuregallery;
