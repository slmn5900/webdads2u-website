// // 'use client';
// // import { Container, Row, Col, Button } from 'react-bootstrap';
// // import React, { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import { quirckServiceForm } from '../api/UserAuthentication';
// // // import ReCAPTCHA from 'react-google-recaptcha';

// // function Formsection() {
// //     const {
// //         register,
// //         handleSubmit,
// //         formState: { errors },
// //         watch
// //     } = useForm();
// //     const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
// //     // const [recaptchaValue, setRecaptchaValue] = useState(null);

// //     const onSubmit = async (data) => {
// //         // if (!recaptchaValue) {
// //         //     alert('Please complete the reCAPTCHA.');
// //         //     return;
// //         // }

// //         const formData = {
// //             name: data.name,
// //             phoneNumber: data.phone,
// //             email: data.email,
// //             services: data.services,
// //             // captcha: recaptchaValue
// //             captcha: isCheckboxChecked
// //         };

// //         try {
// //             const response = await quirckServiceForm(formData);

// //             if (response.ok) {
// //                 const result = await response.json();
// //                 console.log('Success:', result);
// //                 alert('Form submitted successfully!');
// //             } else {
// //                 console.error('Error:', response.statusText);
// //                 alert('Failed to submit form. Please try again.');
// //             }
// //         } catch (error) {
// //             console.error('Error:', error);
// //             alert('An error occurred while submitting the form.');
// //         }
// //     };

// //     const handleCheckboxChange = (e) => {
// //         setIsCheckboxChecked(e.target.checked);
// //     };

// //     // const handleRecaptchaChange = (value) => {
// //     //     setRecaptchaValue(value);
// //     // };

// //     return (
// //         <>
// //             <section className="quick-contactsec">
// //                 <Container>
// //                     <Row>
// //                         <Col md={8}>
// //                             <div className="quick-form">
// //                                 <h2>Quick contact us!</h2>
// //                                 <form onSubmit={handleSubmit(onSubmit)}>
// //                                     <div className="infld">
// //                                         <input id="name" type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} />
// //                                         {errors.name && <p>{errors.name.message}</p>}
// //                                     </div>

// //                                     <div className="infld">
// //                                         <input id="email" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
// //                                         {errors.email && <p>{errors.email.message}</p>}
// //                                     </div>

// //                                     <div className="infld">
// //                                         <input id="phone" type="tel" placeholder="Phone" {...register('phone', { required: 'Phone number is required' })} />
// //                                         {errors.phone && <p>{errors.phone.message}</p>}
// //                                     </div>

// //                                     <div>
// //                                         <select id="services" {...register('services', { required: 'Please select a service' })}>
// //                                             <option value="">Select a service</option>
// //                                             <option value="web-development">Web Development</option>
// //                                             <option value="seo">SEO</option>
// //                                             <option value="marketing">Marketing</option>
// //                                         </select>
// //                                         {errors.services && <p>{errors.services.message}</p>}
// //                                     </div>

// //                                     <div className="check-in">
// //                                         <label>
// //                                             <input type="checkbox" id="not-robot" onChange={handleCheckboxChange} />I am not a robot
// //                                         </label>
// //                                     </div>

// //                                     {/* <div className="recaptcha">
// //                                         <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleRecaptchaChange} />
// //                                     </div> */}

// //                                     <button type="submit">Submit</button>
// //                                 </form>
// //                             </div>
// //                         </Col>
// //                         <Col md={4}></Col>
// //                     </Row>
// //                 </Container>
// //             </section>
// //         </>
// //     );
// // }

// // export default Formsection;
// // ===========================================================================================================
// // ===========================================================================================================
// // ===========================================================================================================
// // ===========================================================================================================
// // ===========================================================================================================
// // ===========================================================================================================
// // ===========================================================================================================
// // 'use client';
// // import { Container, Row, Col, Button } from 'react-bootstrap';
// // import React, { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import { quirckServiceForm } from '../api/UserAuthentication';
// // import ReCAPTCHA from 'react-google-recaptcha';

// // function Formsection() {
// //     const {
// //         register,
// //         handleSubmit,
// //         formState: { errors },
// //         watch
// //     } = useForm();
// //     // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
// //     const [loading, setLoading] = useState(false); // New state for loading
// //     const [recaptchaValue, setRecaptchaValue] = useState(false);

// //     const onSubmit = async (data) => {
// //         if (recaptchaValue === false) {
// //             alert('Please complete the reCAPTCHA.');
// //             return;
// //         }

// //         setLoading(true); // Set loading to true

// //         const formData = {
// //             name: data.name,
// //             phoneNumber: data.phone,
// //             email: data.email,
// //             services: data.services,
// //             captcha: recaptchaValue
// //         };

// //         try {
// //             const response = await quirckServiceForm(formData);
// //             console.log(response, 'response==========>');
// //             if (response.success) {
// //                 alert('Form submitted successfully!');
// //             } else {
// //                 console.error('Error:', response.statusText);
// //                 alert('Failed to submit form. Please try again.');
// //             }
// //         } catch (error) {
// //             console.error('Error:', error);
// //             alert('An error occurred while submitting the form.');
// //         } finally {
// //             setLoading(false); // Set loading to false
// //         }
// //     };

// //     // const handleCheckboxChange = (e) => {
// //     //     setIsCheckboxChecked(e.target.checked);
// //     // };

// //     const handleRecaptchaChange = (value) => {
// //         setRecaptchaValue(!recaptchaValue);
// //         // setIsCheckboxChecked(!isCheckboxChecked);
// //     };

// //     return (
// //         <>
// //             <section className="quick-contactsec">
// //                 <Container>
// //                     <Row>
// //                         <Col md={8}>
// //                             <div className="quick-form">
// //                                 <h2>Quick contact us!</h2>
// //                                 <form onSubmit={handleSubmit(onSubmit)}>
// //                                     <div className="homepage-quick-service-form">
// //                                         <section className="homepage-quick-service-form-section">
// //                                             <div className="infld">
// //                                                 <input id="name" type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} />
// //                                                 {errors.name && <p>{errors.name.message}</p>}
// //                                             </div>

// //                                             <div className="infld">
// //                                                 <input id="email" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
// //                                                 {errors.email && <p>{errors.email.message}</p>}
// //                                             </div>

// //                                             <div className="infld">
// //                                                 <input id="phone" type="tel" placeholder="Phone" {...register('phone', { required: 'Phone number is required' })} />
// //                                                 {errors.phone && <p>{errors.phone.message}</p>}
// //                                             </div>
// //                                         </section>
// //                                         <section className="homepage-quick-service-form-recaptcha-parent">
// //                                             <div className="homepage-quick-service-form-recaptcha-child1">
// //                                                 <select id="services" {...register('services', { required: 'Please select a service' })}>
// //                                                     <option value="">Select a service</option>
// //                                                     <option value="Website Development">Web Development</option>
// //                                                     <option value="SEO">SEO</option>
// //                                                     <option value="App Development">App Development</option>
// //                                                     <option value="Brochure Design">Brochure Design</option>
// //                                                     <option value="Logo Design">Logo Design</option>
// //                                                 </select>
// //                                                 {errors.services && <p>{errors.services.message}</p>}
// //                                             </div>

// //                                             <div className="homepage-quick-service-form-recaptcha-child2" style={{ height: '45px' }}>
// //                                                 <ReCAPTCHA
// //                                                     style={{
// //                                                         transform: 'scale(0.6)',
// //                                                         transformOrigin: '0 0',
// //                                                         WebkitTransform: 'scale(0.6)',
// //                                                         WebkitTransformOrigin: '0 0'
// //                                                     }}
// //                                                     Theme="compact"
// //                                                     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
// //                                                     onChange={handleRecaptchaChange}
// //                                                 />
// //                                             </div>
// //                                         </section>
// //                                     </div>

// //                                     <button type="submit" disabled={loading}>
// //                                         {loading ? 'Loading...' : 'Submit'}
// //                                     </button>
// //                                 </form>
// //                             </div>
// //                         </Col>
// //                         <Col md={4}></Col>
// //                     </Row>
// //                 </Container>
// //             </section>
// //         </>
// //     );
// // }

// // export default Formsection;

// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // ==========================================================================
// // 'use client';
// // import { Container, Row, Col, Button } from 'react-bootstrap';
// // import React, { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import { quirckServiceForm } from '../api/UserAuthentication';
// // import ReCAPTCHA from 'react-google-recaptcha';

// // function Formsection() {
// //     const {
// //         register,
// //         handleSubmit,
// //         formState: { errors },
// //         reset // Extract the reset function
// //     } = useForm();

// //     const [loading, setLoading] = useState(false);
// //     const [recaptchaValue, setRecaptchaValue] = useState(false);

// //     const onSubmit = async (data) => {
// //         if (recaptchaValue === false) {
// //             alert('Please complete the reCAPTCHA.');
// //             return;
// //         }

// //         setLoading(true);

// //         const formData = {
// //             name: data.name,
// //             phoneNumber: data.phone,
// //             email: data.email,
// //             services: data.services,
// //             captcha: recaptchaValue
// //         };

// //         try {
// //             const response = await quirckServiceForm(formData);
// //             console.log(response, 'response==========>');
// //             if (response.success) {
// //                 alert('Form submitted successfully!');
// //                 reset(); // Reset the form fields
// //             } else {
// //                 console.error('Error:', response.statusText);
// //                 alert('Failed to submit form. Please try again.');
// //             }
// //         } catch (error) {
// //             console.error('Error:', error);
// //             alert('An error occurred while submitting the form.');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const handleRecaptchaChange = (value) => {
// //         setRecaptchaValue(!recaptchaValue);
// //     };

// //     return (
// //         <>
// //             <section className="quick-contactsec">
// //                 <Container>
// //                     <Row>
// //                         <Col md={8}>
// //                             <div className="quick-form">
// //                                 <h2>Quick contact us!</h2>
// //                                 <form onSubmit={handleSubmit(onSubmit)}>
// //                                     <Row>
// //                                         <Col>

// //                                         </Col>
// //                                     </Row>
// //                                     <div className="homepage-quick-service-form">
// //                                         <section className="homepage-quick-service-form-section">
// //                                             <div className="infld">
// //                                                 <input id="name" type="text" placeholder="Name"  {...register('name', { required: 'Name is required' })} />
// //                                                 {errors.name && <p>{errors.name.message}</p>}
// //                                             </div>

// //                                             <div className="infld">
// //                                                 <input id="email" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
// //                                                 {errors.email && <p>{errors.email.message}</p>}
// //                                             </div>

// //                                             <div className="infld">
// //                                                 <input id="phone" type="tel" placeholder="Mobile" {...register('phone', { required: 'Phone number is required' })} />
// //                                                 {errors.phone && <p>{errors.phone.message}</p>}
// //                                             </div>
// //                                         </section>
// //                                         <section className="homepage-quick-service-form-recaptcha-parent">
// //                                             <div className="homepage-quick-service-form-recaptcha-child1">
// //                                                 <select id="services" {...register('services', { required: 'Please select a service' })}>
// //                                                     <option value="">Select a service</option>
// //                                                     <option value="Website Development">Web Development</option>
// //                                                     <option value="SEO">SEO</option>
// //                                                     <option value="App Development">App Development</option>
// //                                                     <option value="Brochure Design">Brochure Design</option>
// //                                                     <option value="Logo Design">Logo Design</option>
// //                                                 </select>
// //                                                 {errors.services && <p>{errors.services.message}</p>}
// //                                             </div>

// //                                             <div className="homepage-quick-service-form-recaptcha-child2" style={{ height: '45px' }}>
// //                                                 <ReCAPTCHA
// //                                                     style={{
// //                                                         transform: 'scale(0.6)',
// //                                                         transformOrigin: '0 0',
// //                                                         WebkitTransform: 'scale(0.6)',
// //                                                         WebkitTransformOrigin: '0 0'
// //                                                     }}
// //                                                     Theme="compact"
// //                                                     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
// //                                                     onChange={handleRecaptchaChange}
// //                                                 />
// //                                             </div>
// //                                         </section>
// //                                     </div>

// //                                     <button type="submit" disabled={loading}>
// //                                         {loading ? 'Loading...' : 'Submit'}
// //                                     </button>
// //                                 </form>
// //                             </div>
// //                         </Col>
// //                         <Col md={4}></Col>
// //                     </Row>
// //                 </Container>
// //             </section>
// //         </>
// //     );
// // }

// // export default Formsection;

// 'use client';

// import { Container, Row, Col, Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { quirckServiceForm } from '../api/UserAuthentication';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { Box, Grid2 } from '@mui/material';

// function Formsection() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset
//     } = useForm();

//     const [loading, setLoading] = useState(false);
//     const [recaptchaValue, setRecaptchaValue] = useState(null);

//     const onSubmit = async (data) => {
//         if (!recaptchaValue) {
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
//             console.log(response, 'response==========>');
//             if (response.success) {
//                 alert('Form submitted successfully!');
//                 reset(); // Reset form fields
//                 setRecaptchaValue(null); // Reset reCAPTCHA
//             } else {
//                 console.error('Error:', response.statusText);
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
//         setRecaptchaValue(value); // Set token
//     };

//     return (
//         <Box className="" sx={{ position: "relative" }}>

//             <Box className="quick-contactsec postion-absolute " sx={{ position: { xs: "relative", md: "absolute" }, bottom: "0", width: "100%" }}>
//                 <Container>
//                     <Row>
//                         <Col md={8}>
//                             <div className="quick-form p-3">
//                                 <h2>Quick contact us!</h2>
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     <Grid2 container spacing={1}>
//                                         <Grid2 size={{ xs: 12, md: 2 }}>
//                                             <div className="infld">
//                                                 <input
//                                                     id="name"
//                                                     type="text"
//                                                     placeholder="Name"
//                                                     {...register('name', { required: 'Name is required' })}
//                                                 />
//                                                 {errors.name && <p className="text-danger">{errors.name.message}</p>}
//                                             </div>
//                                         </Grid2>

//                                         {/* <Col md={2}>
//                                         <div className="infld">
//                                             <input
//                                                 id="email"
//                                                 type="email"
//                                                 placeholder="Email"
//                                                 {...register('email', { required: 'Email is required' })}
//                                             />
//                                             {errors.email && <p className="text-danger">{errors.email.message}</p>}
//                                         </div>
//                                     </Col> */}

//                                         <Grid2 size={{ xs: 12, md: 2 }}>
//                                             <div className="infld">
//                                                 <input
//                                                     id="phone"
//                                                     type="tel"
//                                                     placeholder="Phone"
//                                                     {...register('phone', { required: 'Phone number is required' })}
//                                                 />
//                                                 {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
//                                             </div>
//                                         </Grid2>

//                                         <Grid2 size={{ xs: 12, md: 3 }}>
//                                             <div className="infld">
//                                                 <select
//                                                     style={{ color: "#757587" }}
//                                                     id="services"
//                                                     {...register('services', { required: 'Please select a service' })}
//                                                 >
//                                                     <option value="" style={{ color: "#757587" }}>Select a service</option>
//                                                     <option value="Website Development" style={{ color: "#757587" }}>Web Development</option>
//                                                     <option value="SEO" style={{ color: "#757587" }}>SEO</option>
//                                                     <option value="App Development" style={{ color: "#757587" }}>App Development</option>
//                                                     <option value="Brochure Design" style={{ color: "#757587" }}>Brochure Design</option>
//                                                     <option value="Logo Design" style={{ color: "#757587" }}>Logo Design</option>
//                                                 </select>
//                                                 {errors.services && <p className="text-danger">{errors.services.message}</p>}
//                                             </div>
//                                         </Grid2>

//                                         <Grid2 size={{ xs: 12, md: 3 }}>
//                                             <div className="infld ">
//                                                 <ReCAPTCHA
//                                                     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//                                                     onChange={handleRecaptchaChange}
//                                                     style={{
//                                                         transform: 'scale(0.59)',
//                                                         transformOrigin: '0 0',
//                                                         WebkitTransform: 'scale(0.59)',
//                                                         WebkitTransformOrigin: '0 0',
//                                                         // height:"53px"
//                                                     }}
//                                                 // className='w-50 h-50'
//                                                 />
//                                             </div>
//                                         </Grid2>
//                                         <Grid2 size={{ xs: 12, md: 2 }}>
//                                             <div className="">
//                                                 <Button variant="primary" type="submit" disabled={loading}>
//                                                     {loading ? 'Submitting...' : 'Submit'}
//                                                 </Button>
//                                             </div></Grid2>
//                                     </Grid2>

//                                 </form>
//                             </div>
//                         </Col>
//                         <Col md={4}></Col>
//                     </Row>
//                 </Container>
//             </Box>
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
        <Box component="section" className="quick-contactsec" sx={{ position: "relative", m: "auto" }}>
            <Grid2 container spacing={1} sx={{ position: { xs: "relative", md: "absolute" }, bottom: "0", width: "100%", margin: "auto" }}  >
                <Grid2 size={{ xs: 12, md: 7 }} sx={{ ml: { xs: "0px", md: "70px" } }}>
                    <Box className="quick-form" p={3} boxShadow={3} >
                        <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
                            Quick contact us!
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Grid2 container spacing={1} position={"relative"}>
                                <Grid2 size={{ xs: 12, sm: 2 }}>
                                    <TextField
                                        fullWidth
                                        // label="Name"
                                        placeholder='Name'
                                        InputProps={{
                                            sx: { backgroundColor: 'white' }  // ✅ Correct target
                                        }}
                                        InputLabelProps={{
                                            sx: { color: 'black' } // ✅ Label in black
                                        }}
                                        size='small'
                                        variant="outlined"
                                        {...register('name', { required: 'Name is required' })}
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 2 }}>
                                    <TextField
                                        fullWidth
                                        // label="Phone"
                                        placeholder='Mobile'
                                        size='small'
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
                                    <FormControl fullWidth size='small' error={!!errors.services}  >
                                        <InputLabel sx={{
                                            color: 'black',
                                            // backgroundColor: 'white',
                                            px: 0.5,
                                            pb: 2,
                                            '&.Mui-focused': {
                                                color: '#ffffffff',
                                                fontWeight: "600",

                                            },
                                        }} >Select a service</InputLabel>
                                        <Select
                                            labelId="services-label"
                                            defaultValue=""
                                            {...register('services', { required: 'Please select a service' })}
                                            label="Select a service"


                                            inputProps={{
                                                sx: {
                                                    backgroundColor: 'white',
                                                }
                                            }}

                                            sx={{
                                                backgroundColor: 'white',
                                                color: 'black',
                                                '& .MuiSelect-icon': {
                                                    color: 'black',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'black',
                                                    color: "white"

                                                }
                                            }}



                                        >
                                            <MenuItem value="" >Select a service</MenuItem>
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
                                            // width:"50px",
                                            display: "flex"
                                        }}
                                    >
                                        <ReCAPTCHA
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                            onChange={handleRecaptchaChange}
                                        />
                                    </Box>
                                    <Grid2 size={{ xs: 12, sm: 2 }} sx={{ position: { sm: "relative", md: "absolute" }, right: 0, bottom: 2 }}>


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
                            </Grid2>
                        </form>
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 2 }} display={{ xs: 'none', md: 'block' }}>
                    {/* Optional side content */}
                </Grid2>
            </Grid2>
        </Box >
    );
}

export default Formsection;
