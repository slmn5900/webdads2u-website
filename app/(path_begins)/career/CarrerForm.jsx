'use client';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Row, Col } from 'react-bootstrap';
import { careerForm } from '../../../api/UserAuthentication';
import { AllCountriess } from './country.jsx';
const allCountries = AllCountriess;
const CarrerForm = () => {
    const resumeInputRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        dob: '',
        gender: '',
        maritalStatus: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        resume: null
    });
    const [loading, setLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!captchaValue || !isCheckboxChecked) {
        //     alert('Please complete the reCAPTCHA.');
        //     return;
        // }
        const formDataValues = new FormData();
        formDataValues.append('name', formData.name);
        formDataValues.append('email', formData.email);
        formDataValues.append('phone', formData.phone);
        formDataValues.append('jobTitle', formData.jobTitle);
        formDataValues.append('dob', formData.dob);
        formDataValues.append('gender', formData.gender);
        formDataValues.append('maritalStatus', formData.maritalStatus);
        formDataValues.append('address', formData.streetAddress);
        formDataValues.append('city', formData.city);
        formDataValues.append('state', formData.state);
        formDataValues.append('zipCode', formData.zip);
        formDataValues.append('country', formData.country);
        if (formData.resume) {
            formDataValues.append('resume', formData.resume);
        }

        try {
            setLoading(true);
            const response = await careerForm(formDataValues);
            if (response.success) {
                alert('Thank you for reaching out! We have received your Career Form.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    jobTitle: '',
                    dob: '',
                    gender: '',
                    maritalStatus: '',
                    streetAddress: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: '',
                    resume: null
                });
                if (resumeInputRef.current) {
                    resumeInputRef.current.value = '';
                }
                setIsCheckboxChecked(false);
                setCaptchaValue(null);
            } else {
                alert('Something went wrong with the submission.');
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        setIsCheckboxChecked(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="carrerfm">
                <h2>Career Form</h2>
                <Row>
                    <Col md={6}>
                        <div>
                            <label>
                                Name <span>*</span>
                            </label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <label>
                                Email<span>*</span>
                            </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div>
                            <label>
                                Phone<span>*</span>
                            </label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <label>
                                Job Title <span>*</span>
                            </label>
                            <select name="jobTitle" value={formData.jobTitle} onChange={handleChange} required>
                                <option value="">Select a job title</option>
                                <option value="Full Stack Development">Full Stack Development</option>
                                <option value="React Development">React Development</option>
                                <option value="WordPress Development">WordPress Development</option>
                                <option value="PHP Development">PHP Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Graphical Design">Graphical Design</option>
                                <option value="Tele Callers">Tele Callers</option>
                                {/* Add more job titles as needed */}
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div>
                            <label>
                                Date of Birth <span>*</span>
                            </label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="genderrd">
                            <label>
                                Gender <span>*</span>{' '}
                            </label>
                            <label>
                                <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
                                Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
                                Female
                            </label>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="genderrd">
                            <label>
                                Marital Status <span>*</span>{' '}
                            </label>
                            <label>
                                <input type="radio" name="maritalStatus" value="single" checked={formData.maritalStatus === 'single'} onChange={handleChange} required />
                                Single
                            </label>
                            <label>
                                <input type="radio" name="maritalStatus" value="married" checked={formData.maritalStatus === 'married'} onChange={handleChange} required />
                                Married
                            </label>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <label>Street Address </label>
                            <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div>
                            <label>City </label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <label>State / Province / Region</label>
                            <input type="text" name="state" value={formData.state} onChange={handleChange} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div>
                            <label>ZIP / Postal Code</label>
                            <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <label>Country </label>
                            <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="">Select a country</option>
                                {allCountries?.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="resume-fl">
                            <label>
                                Resume <span>*</span>
                            </label>
                            <input ref={resumeInputRef} type="file" name="resume" onChange={handleChange} required />
                        </div>
                        <div className="mt-2 mb-2">
                            {/* <ReCAPTCHA
                                sitekey="YOUR_new_SITE_KEY" // Replace with your actual reCAPTCHA site key
                                onChange={handleCaptchaChange}
                            /> */}
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
                        </div>
                        <button className='border-0' type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

export default CarrerForm;
