// 'use clients';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//     });
//     const [captchaValue, setCaptchaValue] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!captchaValue) {
//             alert('Please complete the reCAPTCHA.');
//             return;
//         }
//         // Handle form submission logic here
//         console.log('Form submitted:', formData);
//     };

//     const handleCaptchaChange = (value) => {
//         setCaptchaValue(value);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit} className="contactform">
//                 <div className="">
//                     <h2>Ready To Get Started?</h2>
//                 </div>
//                 <Row>
//                     <Col md={6}>
//                         <div>
//                             <label>
//                                 Name <span>*</span>
//                             </label>
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                         </div>
//                     </Col>
//                     <Col md={6}>
//                         <div>
//                             <label>
//                                 Email<span>*</span>
//                             </label>
//                             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={12} lg={6}>
//                         <div>
//                             <label>
//                                 Phone<span> *</span>
//                             </label>
//                             <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//                         </div>
//                     </Col>
//                     <Col md={6}>
//                         <div>
//                             <label>
//                                 Service <span>*</span>
//                             </label>
//                             <select name="service" value={formData.service} onChange={handleChange} required>
//                                 <option value="">Select the service</option>
//                                 <option value="service1">Website Development</option>
//                                 <option value="service2">App Development</option>
//                                 <option value="service3">SEO</option>
//                                 <option value="service3">Digital Marketing</option>
//                                 <option value="service3">Brochure Design</option>
//                                 <option value="service3">Logo Design</option>
//                             </select>
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
//                             <ReCAPTCHA
//                                 sitekey="YOUR_SITE_KEY" // Replace with your reCAPTCHA site key
//                                 onChange={handleCaptchaChange}
//                             />
//                         </div>
//                         <button type="submit">Submit</button>
//                     </Col>
//                 </Row>
//             </form>
//         </>
//     );
// };

// export default ContactForm;
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
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
    const [loading, setLoading] = useState(false); // New state for loading

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
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
        if (!formData.service) {
            newErrors.service = 'Service is required';
        }
        if (!captchaValue) {
            newErrors.captcha = 'Please complete the reCAPTCHA';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setLoading(true); // Set loading to true

        const data = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            services: formData.service,
            message: formData.message,
            captcha: true // Assuming captcha is always true if validated
        };

        try {
            const response = await contactUsForm(data);
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                alert('Form submitted successfully!');
            } else {
                console.error('Error:', response.statusText);
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="contactform">
                <div className="">
                    <h2>Ready To Get Started?</h2>
                </div>
                <Row>
                    <Col md={6}>
                        <div>
                            <label>
                                Name <span>*</span>
                            </label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <label>
                                Email<span>*</span>
                            </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={6}>
                        <div>
                            <label>
                                Phone<span> *</span>
                            </label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} inputMode="numeric" pattern="\d{10}" minLength={10} maxLength={10} required />
                            {errors.phone && <p>{errors.phone}</p>}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <label>
                                Service <span>*</span>
                            </label>
                            <select name="service" value={formData.service} onChange={handleChange} required>
                                <option value="">Select the service</option>
                                <option value="Website Development">Website Development</option>
                                <option value="App Development">App Development</option>
                                <option value="SEO">SEO</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Brochure Design">Brochure Design</option>
                                <option value="Logo Design">Logo Design</option>
                            </select>
                            {errors.service && <p>{errors.service}</p>}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div>
                            <label>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} />
                        </div>
                        <div className="mt-2 mb-3">
                            <ReCAPTCHA
                                sitekey="YOUR_SITE_KEY" // Replace with your reCAPTCHA site key
                                onChange={handleCaptchaChange}
                            />
                            {errors.captcha && <p>{errors.captcha}</p>}
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

export default ContactForm;
