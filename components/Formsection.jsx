'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid2, TextField, Button, Typography, MenuItem, FormHelperText, FormControl, InputLabel, Select, CircularProgress } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { quirckServiceForm } from '../api/UserAuthentication';
import SendIcon from '@mui/icons-material/Send';
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
        if (!recaptchaValue) {
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

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                textAlign: "center",
                m: 'auto',
                mt: { xs: 0, md: -18 }
            }}
        >
            <Grid2
                container
                spacing={1}
                sx={{
                    position: { xs: 'relative', md: 'relative' },
                    bottom: 0,
                    width: '100%',
                    mx: 'auto'
                }}
            >
                <Grid2 size={{ xs: 12, lg: 8 }} sx={{ ml: { xs: 0, md: '80px' } }}>
                    <Box
                        sx={{
                            p: 3,
                            boxShadow: 3,
                            borderTopRightRadius: '12px',
                            borderTopLeftRadius: '12px',
                            background: 'linear-gradient(90deg,#871752 1%,#262250 44%)'
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                background: 'white',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700,
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >
                            Quick contact us!
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Grid2 container spacing={2} alignItems="center" justifyContent="start">
                                <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Name"
                                        size="small"
                                        variant="outlined"
                                        {...register('name', { required: 'Name is required' })}
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                        sx={{
                                            backgroundColor: 'white',
                                            borderRadius: '6px',
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white'
                                            }
                                        }}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Mobile"
                                        size="small"
                                        type="tel"
                                        inputProps={{
                                            maxLength: 10, // ✅ restricts typing to 10 digits
                                            inputMode: 'numeric', // ✅ brings up numeric keypad on mobile
                                            pattern: '[0-9]*', // ✅ allows only digits
                                        }}
                                        {...register('phone', {
                                            required: 'Phone number is required'
                                        })}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        sx={{
                                            backgroundColor: 'white',
                                            borderRadius: '6px',
                                            '& input': { color: 'black' },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white'
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white'
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white'
                                            }
                                        }}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 6, md: 2 }}  >
                                    <TextField
                                        fullWidth
                                        placeholder="Email"
                                        size="small"
                                        type="email"
                                        variant="outlined"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Enter a valid email address',
                                            },
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: "6px",
                                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },

                                        }}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                                    <FormControl
                                        fullWidth
                                        size="small"
                                        error={!!errors.services}
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: "6px",
                                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                        }}
                                    >
                                        <Select
                                            displayEmpty
                                            defaultValue=""
                                            {...register("services", {
                                                required: "Please select a service",
                                            })}
                                            sx={{
                                                color: "gray", // placeholder color 
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Select a service
                                            </MenuItem>
                                            <MenuItem value="Website Development">Web Development</MenuItem>
                                            <MenuItem value="SEO">SEO</MenuItem>
                                            <MenuItem value="App Development">App Development</MenuItem>
                                            <MenuItem value="Brochure Design">Brochure Design</MenuItem>
                                            <MenuItem value="Logo Design">Logo Design</MenuItem>
                                        </Select>

                                        {errors.services && (
                                            <FormHelperText>{errors.services.message}</FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                                    <Box
                                        sx={{
                                            transform: 'scale(0.59)',
                                            transformOrigin: '0 0',
                                            WebkitTransform: 'scale(0.50)',
                                            WebkitTransformOrigin: '0 0',
                                            height: '40px',
                                            display: 'flex',
                                            borderRadius: 6,
                                            position: 'relative'
                                        }}
                                    >
                                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={(value) => setRecaptchaValue(value)} />
                                    </Box>
                                </Grid2>
                                <Grid2 xs={12} sm={6} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={loading}
                                        sx={{
                                            minWidth: 0,
                                            width: 'auto',
                                            height: 40,
                                            marginLeft: 4,
                                            borderRadius: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'linear-gradient(to left, #ff0f47 1%, #8a1652)'
                                        }}
                                    >
                                        {loading ? (
                                            <CircularProgress size={20} color="inherit" />
                                        ) : (
                                            <>
                                                <SendIcon fontSize="small" sx={{ transform: 'rotate(-40deg)' }} />
                                            </>
                                        )}
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
