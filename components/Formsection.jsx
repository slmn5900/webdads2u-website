// 'use client';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { quirckServiceForm } from '../api/UserAuthentication';
// // import ReCAPTCHA from 'react-google-recaptcha';

// function Formsection() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         watch
//     } = useForm();
//     const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
//     // const [recaptchaValue, setRecaptchaValue] = useState(null);

//     const onSubmit = async (data) => {
//         // if (!recaptchaValue) {
//         //     alert('Please complete the reCAPTCHA.');
//         //     return;
//         // }

//         const formData = {
//             name: data.name,
//             phoneNumber: data.phone,
//             email: data.email,
//             services: data.services,
//             // captcha: recaptchaValue
//             captcha: isCheckboxChecked
//         };

//         try {
//             const response = await quirckServiceForm(formData);

//             if (response.ok) {
//                 const result = await response.json();
//                 console.log('Success:', result);
//                 alert('Form submitted successfully!');
//             } else {
//                 console.error('Error:', response.statusText);
//                 alert('Failed to submit form. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred while submitting the form.');
//         }
//     };

//     const handleCheckboxChange = (e) => {
//         setIsCheckboxChecked(e.target.checked);
//     };

//     // const handleRecaptchaChange = (value) => {
//     //     setRecaptchaValue(value);
//     // };

//     return (
//         <>
//             <section className="quick-contactsec">
//                 <Container>
//                     <Row>
//                         <Col md={8}>
//                             <div className="quick-form">
//                                 <h2>Quick contact us!</h2>
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     <div className="infld">
//                                         <input id="name" type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} />
//                                         {errors.name && <p>{errors.name.message}</p>}
//                                     </div>

//                                     <div className="infld">
//                                         <input id="email" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
//                                         {errors.email && <p>{errors.email.message}</p>}
//                                     </div>

//                                     <div className="infld">
//                                         <input id="phone" type="tel" placeholder="Phone" {...register('phone', { required: 'Phone number is required' })} />
//                                         {errors.phone && <p>{errors.phone.message}</p>}
//                                     </div>

//                                     <div>
//                                         <select id="services" {...register('services', { required: 'Please select a service' })}>
//                                             <option value="">Select a service</option>
//                                             <option value="web-development">Web Development</option>
//                                             <option value="seo">SEO</option>
//                                             <option value="marketing">Marketing</option>
//                                         </select>
//                                         {errors.services && <p>{errors.services.message}</p>}
//                                     </div>

//                                     <div className="check-in">
//                                         <label>
//                                             <input type="checkbox" id="not-robot" onChange={handleCheckboxChange} />I am not a robot
//                                         </label>
//                                     </div>

//                                     {/* <div className="recaptcha">
//                                         <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleRecaptchaChange} />
//                                     </div> */}

//                                     <button type="submit">Submit</button>
//                                 </form>
//                             </div>
//                         </Col>
//                         <Col md={4}></Col>
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     );
// }

// export default Formsection;
// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================
// ===========================================================================================================
// 'use client';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { quirckServiceForm } from '../api/UserAuthentication';
// import ReCAPTCHA from 'react-google-recaptcha';

// function Formsection() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         watch
//     } = useForm();
//     // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
//     const [loading, setLoading] = useState(false); // New state for loading
//     const [recaptchaValue, setRecaptchaValue] = useState(false);

//     const onSubmit = async (data) => {
//         if (recaptchaValue === false) {
//             alert('Please complete the reCAPTCHA.');
//             return;
//         }

//         setLoading(true); // Set loading to true

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
//             } else {
//                 console.error('Error:', response.statusText);
//                 alert('Failed to submit form. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred while submitting the form.');
//         } finally {
//             setLoading(false); // Set loading to false
//         }
//     };

//     // const handleCheckboxChange = (e) => {
//     //     setIsCheckboxChecked(e.target.checked);
//     // };

//     const handleRecaptchaChange = (value) => {
//         setRecaptchaValue(!recaptchaValue);
//         // setIsCheckboxChecked(!isCheckboxChecked);
//     };

//     return (
//         <>
//             <section className="quick-contactsec">
//                 <Container>
//                     <Row>
//                         <Col md={8}>
//                             <div className="quick-form">
//                                 <h2>Quick contact us!</h2>
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     <div className="homepage-quick-service-form">
//                                         <section className="homepage-quick-service-form-section">
//                                             <div className="infld">
//                                                 <input id="name" type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} />
//                                                 {errors.name && <p>{errors.name.message}</p>}
//                                             </div>

//                                             <div className="infld">
//                                                 <input id="email" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
//                                                 {errors.email && <p>{errors.email.message}</p>}
//                                             </div>

//                                             <div className="infld">
//                                                 <input id="phone" type="tel" placeholder="Phone" {...register('phone', { required: 'Phone number is required' })} />
//                                                 {errors.phone && <p>{errors.phone.message}</p>}
//                                             </div>
//                                         </section>
//                                         <section className="homepage-quick-service-form-recaptcha-parent">
//                                             <div className="homepage-quick-service-form-recaptcha-child1">
//                                                 <select id="services" {...register('services', { required: 'Please select a service' })}>
//                                                     <option value="">Select a service</option>
//                                                     <option value="Website Development">Web Development</option>
//                                                     <option value="SEO">SEO</option>
//                                                     <option value="App Development">App Development</option>
//                                                     <option value="Brochure Design">Brochure Design</option>
//                                                     <option value="Logo Design">Logo Design</option>
//                                                 </select>
//                                                 {errors.services && <p>{errors.services.message}</p>}
//                                             </div>

//                                             <div className="homepage-quick-service-form-recaptcha-child2" style={{ height: '45px' }}>
//                                                 <ReCAPTCHA
//                                                     style={{
//                                                         transform: 'scale(0.6)',
//                                                         transformOrigin: '0 0',
//                                                         WebkitTransform: 'scale(0.6)',
//                                                         WebkitTransformOrigin: '0 0'
//                                                     }}
//                                                     Theme="compact"
//                                                     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//                                                     onChange={handleRecaptchaChange}
//                                                 />
//                                             </div>
//                                         </section>
//                                     </div>

//                                     <button type="submit" disabled={loading}>
//                                         {loading ? 'Loading...' : 'Submit'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </Col>
//                         <Col md={4}></Col>
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     );
// }

// export default Formsection;

// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { quirckServiceForm } from '../api/UserAuthentication';
import ReCAPTCHA from 'react-google-recaptcha';

function Formsection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset // Extract the reset function
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
            console.log(response, 'response==========>');
            if (response.success) {
                alert('Form submitted successfully!');
                reset(); // Reset the form fields
            } else {
                console.error('Error:', response.statusText);
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
        setRecaptchaValue(!recaptchaValue);
    };

    return (
        <>
            <section className="quick-contactsec">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="quick-form">
                                <h2>Quick contact us!</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="homepage-quick-service-form">
                                        <section className="homepage-quick-service-form-section">
                                            <div className="infld">
                                                <input id="name" type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} />
                                                {errors.name && <p>{errors.name.message}</p>}
                                            </div>

                                            <div className="infld">
                                                <input id="email" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
                                                {errors.email && <p>{errors.email.message}</p>}
                                            </div>

                                            <div className="infld">
                                                <input id="phone" type="tel" placeholder="Phone" {...register('phone', { required: 'Phone number is required' })} />
                                                {errors.phone && <p>{errors.phone.message}</p>}
                                            </div>
                                        </section>
                                        <section className="homepage-quick-service-form-recaptcha-parent">
                                            <div className="homepage-quick-service-form-recaptcha-child1">
                                                <select id="services" {...register('services', { required: 'Please select a service' })}>
                                                    <option value="">Select a service</option>
                                                    <option value="Website Development">Web Development</option>
                                                    <option value="SEO">SEO</option>
                                                    <option value="App Development">App Development</option>
                                                    <option value="Brochure Design">Brochure Design</option>
                                                    <option value="Logo Design">Logo Design</option>
                                                </select>
                                                {errors.services && <p>{errors.services.message}</p>}
                                            </div>

                                            <div className="homepage-quick-service-form-recaptcha-child2" style={{ height: '45px' }}>
                                                <ReCAPTCHA
                                                    style={{
                                                        transform: 'scale(0.6)',
                                                        transformOrigin: '0 0',
                                                        WebkitTransform: 'scale(0.6)',
                                                        WebkitTransformOrigin: '0 0'
                                                    }}
                                                    Theme="compact"
                                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                                    onChange={handleRecaptchaChange}
                                                />
                                            </div>
                                        </section>
                                    </div>

                                    <button type="submit" disabled={loading}>
                                        {loading ? 'Loading...' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Formsection;
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// 'use client';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { quirckServiceForm } from '../api/UserAuthentication';
// import ReCAPTCHA from 'react-google-recaptcha';

// function Formsection() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset // Extract the reset function
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
//             console.log(response, 'response==========>');
//             if (response.success) {
//                 alert('Form submitted successfully!');
//                 reset(); // Reset the form fields
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
//         setRecaptchaValue(!recaptchaValue);
//     };

//     return (
//         <>
//             <section className="quick-contactsec">
//                 <Container>
//                     <Row>
//                         {/* <Col> */}
//                         <Col md={8}>
//                             <div className="quick-form">
//                                 <h2>Quick contact us!</h2>
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     <div className="homepage-quick-service-form">
//                                         <section className="homepage-quick-service-form-section">
//                                             <div className="infld">
//                                                 <input id="name" type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} />
//                                                 {errors.name && <p>{errors.name.message}</p>}
//                                             </div>

//                                             <div className="infld">
//                                                 <input id="email" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
//                                                 {errors.email && <p>{errors.email.message}</p>}
//                                             </div>

//                                             <div className="infld">
//                                                 <input id="phone" type="tel" placeholder="Phone" {...register('phone', { required: 'Phone number is required' })} />
//                                                 {errors.phone && <p>{errors.phone.message}</p>}
//                                             </div>
//                                         </section>
//                                         <section className="homepage-quick-service-form-recaptcha-parent">
//                                             <div className="homepage-quick-service-form-recaptcha-child1">
//                                                 <select id="services" {...register('services', { required: 'Please select a service' })}>
//                                                     <option value="">Select a service</option>
//                                                     <option value="Website Development">Web Development</option>
//                                                     <option value="SEO">SEO</option>
//                                                     <option value="App Development">App Development</option>
//                                                     <option value="Brochure Design">Brochure Design</option>
//                                                     <option value="Logo Design">Logo Design</option>
//                                                 </select>
//                                                 {errors.services && <p>{errors.services.message}</p>}
//                                             </div>

//                                             <div className="homepage-quick-service-form-recaptcha-child2" style={{ height: '45px' }}>
//                                                 <ReCAPTCHA
//                                                     style={{
//                                                         transform: 'scale(0.6)',
//                                                         transformOrigin: '0 0',
//                                                         WebkitTransform: 'scale(0.6)',
//                                                         WebkitTransformOrigin: '0 0'
//                                                     }}
//                                                     Theme="compact"
//                                                     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//                                                     onChange={handleRecaptchaChange}
//                                                 />
//                                             </div>
//                                         </section>
//                                     </div>

//                                     <button type="submit" disabled={loading}>
//                                         {loading ? 'Loading...' : 'Submit'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </Col>
//                         <Col md={4}>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     );
// }

// export default Formsection;
