// 'use client';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { contactUsForm } from '../../../api/UserAuthentication';
// import { Box } from '@mui/material';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//     });
//     const [captchaValue, setCaptchaValue] = useState(null);
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false); // new state for loading
//     const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.name) {
//             newErrors.name = 'Name is required';
//         }
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email address is invalid';
//         }
//         if (!formData.phone) {
//             newErrors.phone = 'Phone number is required';
//         } else if (!/^\d{10}$/.test(formData.phone)) {
//             newErrors.phone = 'Phone number must be exactly 10 digits';
//         }
//         if (!formData.service) {
//             newErrors.service = 'Service is required';
//         }
//         if (!captchaValue) {
//             newErrors.captcha = 'Please complete the reCAPTCHA';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             return;
//         }

//         if (isCheckboxChecked === false) {
//             alert('Please complete the reCAPTCHA.');
//             return;
//         }
//         setLoading(true); // Set loading to true

//         const data = {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             services: formData.service,
//             message: formData.message,
//             captcha: true // Assuming captcha is always true if validated
//         };

//         try {
//             const response = await contactUsForm(data);

//             console.log('Success:---------->contact', response);
//             if (response.success) {
//                 // const result = await response.json();
//                 setFormData({
//                     name: '',
//                     email: '',
//                     phone: '',
//                     service: '',
//                     message: ''
//                 });
//                 setCaptchaValue(null);
//                 setIsCheckboxChecked(false);
//                 console.log('Success:', response);
//                 alert('Form submitted successfully!');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred while submitting the form.');
//         } finally {
//             setLoading(false); // Set loading to false
//         }
//     };

//     const handleCaptchaChange = (value) => {
//         setCaptchaValue(value);
//         setIsCheckboxChecked(true);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit} className="contactform">
//                 <div>
//                     <h2>Ready To Get Started?</h2>
//                 </div>
//                 <Row>
//                     <Col md={6}>
//                         <div>
//                             <label>
//                                 Name <span>*</span>
//                             </label>
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                             {errors.name && <p>{errors.name}</p>}
//                         </div>
//                     </Col>
//                     <Col md={6}>
//                         <div>
//                             <label>
//                                 Email<span>*</span>
//                             </label>
//                             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                             {errors.email && <p>{errors.email}</p>}
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={12} lg={6}>
//                         <div>
//                             <label>
//                                 Phone<span> *</span>
//                             </label>
//                             <input type="text" name="phone" value={formData.phone} onChange={handleChange} inputMode="numeric" pattern="\d{10}" minLength={10} maxLength={10} required />
//                             {errors.phone && <p>{errors.phone}</p>}
//                         </div>
//                     </Col>
//                     <Col md={6}>
//                         <div>
//                             <label>
//                                 Service <span>*</span>
//                             </label>
//                             <select name="service" value={formData.service} onChange={handleChange} required>
//                                 <option value="">Select the service</option>
//                                 <option value="Website Development">Website Development</option>
//                                 <option value="App Development">App Development</option>
//                                 <option value="SEO">SEO</option>
//                                 <option value="Digital Marketing">Digital Marketing</option>
//                                 <option value="Brochure Design">Brochure Design</option>
//                                 <option value="Logo Design">Logo Design</option>
//                             </select>
//                             {errors.service && <p>{errors.service}</p>}
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={12}>
//                         <div>
//                             <label>Message</label>
//                             <textarea name="message" value={formData.message} onChange={handleChange} />
//                         </div>
//                         <div className="mt-2 mb-3">
//                             {/* <ReCAPTCHA
//                                 sitekey="YOUR_SITE_KEY" // Replace with your reCAPTCHA site key
//                                 onChange={handleCaptchaChange}
//                             /> */}
//                             <Box
//                                 sx={{
//                                     width: '100%',
//                                     display: 'flex',
//                                     // justifyContent: 'center',
//                                     // alignItems: 'center',
//                                     mt: 2,
//                                     mb: 2,
//                                     '& .recaptcha': {
//                                         transform: 'scale(0.9)', // slightly smaller on small screens
//                                         transformOrigin: '0 0',
//                                         '@media (max-width:600px)': {
//                                             transform: 'scale(0.8)' // shrink more on mobile
//                                         }
//                                     }
//                                 }}
//                             >
//                                 <div className="recaptcha">
//                                     <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} onChange={handleCaptchaChange} />
//                                 </div>
//                             </Box>
//                             {errors.captcha && <p>{errors.captcha}</p>}
//                         </div>
//                         <button type="submit" disabled={loading}>
//                             {loading ? 'Loading...' : 'Submit'}
//                         </button>
//                     </Col>
//                 </Row>
//             </form>
//         </>
//     );
// };

// export default ContactForm;
'use client';
import React, { useState } from 'react';
import { Box, Grid2, TextField, Typography, MenuItem, Button, CircularProgress } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { contactUsForm } from '../../../api/UserAuthentication';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Allow only numbers for phone
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, ''); // remove non-digits
            setFormData((prevData) => ({
                ...prevData,
                [name]: numericValue
            }));
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        if (!formData.service) newErrors.service = 'Service is required';
        if (!captchaValue) newErrors.captcha = 'Please complete the reCAPTCHA';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (!isCheckboxChecked) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

        setLoading(true);

        const data = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            services: formData.service,
            message: formData.message,
            captcha: true
        };

        try {
            const response = await contactUsForm(data);
            if (response.success) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
                setCaptchaValue(null);
                setIsCheckboxChecked(false);
                alert('Form submitted successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setLoading(false);
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        setIsCheckboxChecked(true);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                px: 8,
                py:5,
                borderRadius: 3,
                // boxShadow: 3,
                backgroundColor: '#F2F6FB',
                maxWidth: 800,
                mx: 'auto'
            }}
        >
            <Typography variant="h5" fontWeight={600} sx={{pb:1}} gutterBottom>
                Ready To Get Started?
            </Typography>

            <Grid2 container spacing={2}>
                {/* Name */}
                <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth sx={{ bgcolor: 'white' }} label="Name" name="name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                </Grid2>

                {/* Email */}
                <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Email" sx={{ bgcolor: 'white' }} name="email" type="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
                </Grid2>

                {/* Phone */}
                <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Phone" sx={{ bgcolor: 'white' }} name="phone" value={formData.phone} onChange={handleChange} inputProps={{ maxLength: 10, inputMode: 'numeric', pattern: '[0-9]*' }} error={!!errors.phone} helperText={errors.phone} />
                </Grid2>

                {/* Service */}
                <Grid2 size={{ xs: 12, sm: 6 }}>
                    <TextField select sx={{ bgcolor: 'white' }} fullWidth label="Service" name="service" value={formData.service} onChange={handleChange} error={!!errors.service} helperText={errors.service}>
                        <MenuItem value="">Select the service</MenuItem>
                        <MenuItem value="Website Development">Website Development</MenuItem>
                        <MenuItem value="App Development">App Development</MenuItem>
                        <MenuItem value="SEO">SEO</MenuItem>
                        <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
                        <MenuItem value="Brochure Design">Brochure Design</MenuItem>
                        <MenuItem value="Logo Design">Logo Design</MenuItem>
                    </TextField>
                </Grid2>

                {/* Message */}
                <Grid2 size={{ xs: 12 }}>
                    <TextField fullWidth  sx={{ bgcolor: 'white' }} label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={4} />
                </Grid2>

                {/* reCAPTCHA */}
                <Grid2 size={{ xs: 12 }}>
                    <Box
                        sx={{
                            mt: 2,
                            mb: 2,
                            '& .recaptcha': {
                                transform: 'scale(0.9)',
                                transformOrigin: '0 0',
                                '@media (max-width:600px)': {
                                    transform: 'scale(0.8)'
                                }
                            }
                        }}
                    >
                        <div className="recaptcha">
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} onChange={handleCaptchaChange} />
                        </div>
                    </Box>
                    {errors.captcha && (
                        <Typography color="error" variant="body2">
                            {errors.captcha}
                        </Typography>
                    )}
                </Grid2>

                {/* Submit Button */}
                <Grid2 size={{ xs: 12 }}>
                    <Button type="submit" fullWidth variant="contained" disabled={loading} sx={{ py: 1.5, fontWeight: 600 }}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default ContactForm;
