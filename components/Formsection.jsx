
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid2, TextField, Button, Typography, MenuItem, FormHelperText, FormControl, InputLabel, Select } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { quirckServiceForm } from '../api/UserAuthentication';

function Formsection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(false);

    const onSubmit = async (data) => {
        if (recaptchaValue === false) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

        setLoading(true);
        const formData = {
            name: data.name,
            phoneNumber: data.phone,
            email: data.email,
            services: data.services,
            captcha: recaptchaValue
        };

        try {
            const response = await quirckServiceForm(formData);
            if (response.success) {
                alert('Form submitted successfully!');
                reset();
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setLoading(false);
        }
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    return (
        <Box component="section" className="quick-contactsec" sx={{ position: 'relative', m: 'auto', px: { xs: 2, md: 0 } }}>
            <Grid2 container spacing={1} sx={{ position: { xs: 'relative', md: 'absolute' }, bottom: '0', width: '100%', margin: 'auto' }}>
                <Grid2 size={{ xs: 12, md: 7 }} sx={{ ml: { xs: '0px', md: '70px' } }}>
                    <Box className="quick-form" p={3} boxShadow={3}>
                        <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
                            Quick contact us!
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Grid2 container spacing={1} position={'relative'} textAlign={'center'} alignItems={'center'}>
                                <Grid2 size={{ xs: 12, sm: 3, md: 2 }}>
                                    <TextField
                                        fullWidth
                                        // label="Name"
                                        placeholder="Name"
                                        InputProps={{
                                            sx: { backgroundColor: 'white' } // ✅ Correct target
                                        }}
                                        InputLabelProps={{
                                            sx: { color: 'black' } // ✅ Label in black
                                        }}
                                        size="small"
                                        variant="outlined"
                                        {...register('name', { required: 'Name is required' })}
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 3, md: 2 }}>
                                    <TextField
                                        fullWidth
                                        // label="Phone"
                                        placeholder="Mobile"
                                        size="small"
                                        InputProps={{
                                            sx: {
                                                backgroundColor: 'white',
                                                color: 'black', // value text color
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white' // normal border
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white'
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white' // focused border
                                                }
                                            }
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'black',
                                                '&.Mui-focused': {
                                                    color: 'black'
                                                }
                                            }
                                        }}
                                        type="tel"
                                        // variant="outlined"
                                        {...register('phone', { required: 'Phone number is required' })}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 3 }}>
                                    <FormControl fullWidth size="small" error={!!errors.services}>
                                        <InputLabel
                                            sx={{
                                                color: 'black',
                                                // backgroundColor: 'white',
                                                px: 0.5,
                                                pb: 2,
                                                '&.Mui-focused': {
                                                    color: '#0000',
                                                    fontWeight: '600',
                                                    border: '#ffff'
                                                }
                                            }}
                                        >
                                            Select a Service
                                        </InputLabel>
                                        <Select
                                            labelId="services-label"
                                            defaultValue=""
                                            {...register('services', { required: 'Please select a service' })}
                                            label="Select a service"
                                            inputProps={{
                                                sx: {
                                                    backgroundColor: 'white'
                                                }
                                            }}
                                            sx={{
                                                backgroundColor: 'white',
                                                color: 'black',
                                                '& .MuiSelect-icon': {
                                                    color: 'black'
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                    color: 'white'
                                                }
                                            }}
                                        >
                                            <MenuItem value="">Select a service</MenuItem>
                                            <MenuItem value="Website Development">Web Development</MenuItem>
                                            <MenuItem value="SEO">SEO</MenuItem>
                                            <MenuItem value="App Development">App Development</MenuItem>
                                            <MenuItem value="Brochure Design">Brochure Design</MenuItem>
                                            <MenuItem value="Logo Design">Logo Design</MenuItem>
                                        </Select>
                                        {errors.services && <FormHelperText>{errors.services.message}</FormHelperText>}
                                    </FormControl>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 3 }}>
                                    <Box
                                        sx={{
                                            transform: 'scale(0.59)',
                                            transformOrigin: '0 0',
                                            WebkitTransform: 'scale(0.50)',
                                            WebkitTransformOrigin: '0 0',
                                            height: '40px',
                                            // width:"50px",``
                                            display: 'flex'
                                        }}
                                    >
                                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
                                    </Box>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 5, md: 2 }} textAlign={'center'} alignSelf={'center'} position={{ sm: 'relative', md:'static' }} left={'30%'} >
                                    <Button
                                        // fullWidth
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={loading}
                                        size="small"
                                    >
                                        {loading ? 'Loading...' : 'Submit'}
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </form>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Formsection;
