// 'use client';

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Box, Grid22, TextField, Button, Typography, MenuItem, FormHelperText, FormControl, InputLabel, Select } from '@mui/material';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { quirckServiceForm } from '../api/UserAuthentication';

// function Formsection() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset
//     } = useForm();

//     const [loading, setLoading] = useState(false);
//     const [recaptchaValue, setRecaptchaValue] = useState(false);

//     const onSubmit = async (data) => {
//         if (recaptchaValue === false) {
//             alert('Please complete the reCAPTCHA.');
//             return;
//         }

//         setLoading(true);
//         const formData = {
//             name: data.name,
//             phoneNumber: data.phone,
//             email: data.email,
//             services: data.services,
//             captcha: recaptchaValue
//         };

//         try {
//             const response = await quirckServiceForm(formData);
//             if (response.success) {
//                 alert('Form submitted successfully!');
//                 reset();
//             } else {
//                 alert('Failed to submit form. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred while submitting the form.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleRecaptchaChange = (value) => {
//         setRecaptchaValue(value);
//     };

//     return (
//         <Box component="section" className="quick-contactsec" sx={{ position: 'relative', m: 'auto', px: { xs: 2, md: 0 } }}>
//             <Grid22 container spacing={1} sx={{ position: { xs: 'relative', md: 'absolute' }, bottom: '0', width: '100%', margin: 'auto' }}>
//                 <Grid22 size={{ xs: 12, md: 7 }} sx={{ ml: { xs: '0px', md: '70px' } }}>
//                     <Box className="quick-form" p={3} boxShadow={3}>
//                         <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
//                             Quick contact us!
//                         </Typography>

//                         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                             <Grid22 container spacing={1} position={'relative'} textAlign={'center'} alignItems={'center'}>
//                                 <Grid22 size={{ xs: 12, sm: 3, md: 2 }}>
//                                     <TextField
//                                         fullWidth
//                                         // label="Name"
//                                         placeholder="Name"
//                                         InputProps={{
//                                             sx: { backgroundColor: 'white' } // ✅ Correct target
//                                         }}
//                                         InputLabelProps={{
//                                             sx: { color: 'black' } // ✅ Label in black
//                                         }}
//                                         size="small"
//                                         variant="outlined"
//                                         {...register('name', { required: 'Name is required' })}
//                                         error={!!errors.name}
//                                         helperText={errors.name?.message}
//                                     />
//                                 </Grid22>
//                                 <Grid22 size={{ xs: 12, sm: 3, md: 2 }}>
//                                     <TextField
//                                         fullWidth
//                                         // label="Phone"
//                                         placeholder="Mobile"
//                                         size="small"
//                                         InputProps={{
//                                             sx: {
//                                                 backgroundColor: 'white',
//                                                 color: 'black', // value text color
//                                                 '& .MuiOutlinedInput-notchedOutline': {
//                                                     borderColor: 'white' // normal border
//                                                 },
//                                                 '&:hover .MuiOutlinedInput-notchedOutline': {
//                                                     borderColor: 'white'
//                                                 },
//                                                 '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                                                     borderColor: 'white' // focused border
//                                                 }
//                                             }
//                                         }}
//                                         InputLabelProps={{
//                                             sx: {
//                                                 color: 'black',
//                                                 '&.Mui-focused': {
//                                                     color: 'black'
//                                                 }
//                                             }
//                                         }}
//                                         type="tel"
//                                         // variant="outlined"
//                                         {...register('phone', { required: 'Phone number is required' })}
//                                         error={!!errors.phone}
//                                         helperText={errors.phone?.message}
//                                     />
//                                 </Grid22>
//                                 <Grid22 size={{ xs: 12, sm: 3 }}>
//                                     <FormControl fullWidth size="small" error={!!errors.services}>
//                                         <InputLabel
//                                             sx={{
//                                                 color: 'black',
//                                                 // backgroundColor: 'white',
//                                                 px: 0.5,
//                                                 pb: 2,
//                                                 '&.Mui-focused': {
//                                                     color: '#0000',
//                                                     fontWeight: '600',
//                                                     border: '#ffff'
//                                                 }
//                                             }}
//                                         >
//                                             Select a Service
//                                         </InputLabel>
//                                         <Select
//                                             labelId="services-label"
//                                             defaultValue=""
//                                             {...register('services', { required: 'Please select a service' })}
//                                             label="Select a service"
//                                             inputProps={{
//                                                 sx: {
//                                                     backgroundColor: 'white'
//                                                 }
//                                             }}
//                                             sx={{
//                                                 backgroundColor: 'white',
//                                                 color: 'black',
//                                                 '& .MuiSelect-icon': {
//                                                     color: 'black'
//                                                 },
//                                                 '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                                                     borderColor: 'white',
//                                                     color: 'white'
//                                                 }
//                                             }}
//                                         >
//                                             <MenuItem value="">Select a service</MenuItem>
//                                             <MenuItem value="Website Development">Web Development</MenuItem>
//                                             <MenuItem value="SEO">SEO</MenuItem>
//                                             <MenuItem value="App Development">App Development</MenuItem>
//                                             <MenuItem value="Brochure Design">Brochure Design</MenuItem>
//                                             <MenuItem value="Logo Design">Logo Design</MenuItem>
//                                         </Select>
//                                         {errors.services && <FormHelperText>{errors.services.message}</FormHelperText>}
//                                     </FormControl>
//                                 </Grid22>
//                                 <Grid22 size={{ xs: 12, sm: 3 }}>
//                                     <Box
//                                         sx={{
// transform: 'scale(0.59)',
// transformOrigin: '0 0',
// WebkitTransform: 'scale(0.50)',
// WebkitTransformOrigin: '0 0',
// height: '40px',
// // width:"50px",``
// display: 'flex'
//                                         }}
//                                     >
//                                         <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
//                                     </Box>
//                                 </Grid22>
//                                 <Grid22 size={{ xs: 12, sm: 5, md: 2 }} textAlign={'center'} alignSelf={'center'} position={{ sm: 'relative', md:'static' }} left={'30%'} >
//                                     <Button
//                                         // fullWidth
//                                         variant="contained"
//                                         color="primary"
//                                         type="submit"
//                                         disabled={loading}
//                                         size="small"
//                                     >
//                                         {loading ? 'Loading...' : 'Submit'}
//                                     </Button>
//                                 </Grid22>
//                             </Grid22>
//                         </form>
//                     </Box>
//                 </Grid22>
//             </Grid22>
//         </Box>
//     );
// }

// export default Formsection;
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
                m: 'auto',
                px: { xs: 2, md: 0 },
                mt: { xs: 0, md: -18 }
            }}
        >
            <Grid2
                container
                spacing={2}
                sx={{
                    position: { xs: 'relative', md: 'relative' },
                    bottom: 0,
                    width: '100%',
                    mx: 'auto'
                }}
            >
                <Grid2 size={{ xs: 12, sm: 7 }} sx={{ ml: { xs: 0, md: '80px' } }}>
                    <Box
                        sx={{
                            p: 3,
                            boxShadow: 3,
                            borderTopRightRadius: '12px',
                            borderTopLeftRadius: '12px',
                            background: 'linear-gradient(to left, #262250 30%, #E40724)'
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
                            <Grid2 container spacing={2} alignItems="center" justifyContent="center">
                                {/* Name */}
                                <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
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

                                {/* Phone */}
                                <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Mobile"
                                        size="small"
                                        type="tel"
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

                                {/* Service Dropdown */}
                                <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                                    <FormControl fullWidth size="small" error={!!errors.services} sx={{ backgroundColor: 'white', borderRadius: '6px' }}>
                                        <InputLabel sx={{ color: 'white', fontWeight: '600' }}>Select a Service</InputLabel>
                                        <Select
                                            label="Select a Service"
                                            defaultValue=""
                                            {...register('services', {
                                                required: 'Please select a service'
                                            })}
                                            sx={{
                                                color: 'black',
                                                '& .MuiSelect-icon': { color: 'black' }
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

                                {/* reCAPTCHA */}
                                <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
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
                                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={(value) => setRecaptchaValue(value)} />
                                    </Box>
                                </Grid2>

                                {/* Submit Button */}
                                <Grid2 size={{ xs: 12, md: 2 }} textAlign="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={loading}
                                        size="small"
                                        sx={{
                                            px: 3,
                                            py: 1,
                                            borderRadius: '8px',
                                            fontWeight: 600,
                                            width: { xs: '100%', sm: 'auto' }
                                        }}
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
