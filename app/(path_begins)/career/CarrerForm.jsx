'use client';
import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Container, Row, Col, Button } from 'react-bootstrap';
const CarrerForm = () => {
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

    const [captchaValue, setCaptchaValue] = useState(null);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countryOptions = data.map((country) => ({
                    name: country.name.common,
                    code: country.cca2
                }));
                setCountries(countryOptions);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert('Please complete the reCAPTCHA.');
            return;
        }
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="carrerfm">
                <h2>Career Form</h2>
                <Row>
                    <Col md={6}>
                        <div>
                            <label>
                                Name <span>(Required)</span>
                            </label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <label>
                                Email<span>(Required)</span>
                            </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div>
                            <label>
                                Phone<span>(Required)</span>
                            </label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <label>
                                Job Title <span>(Required)</span>
                            </label>
                            <select name="jobTitle" value={formData.jobTitle} onChange={handleChange} required>
                                <option value="">Select a job title</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                                <option value="analyst">Analyst</option>
                                {/* Add more job titles as needed */}
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div>
                            <label>
                                Date of Birth <span>(Required)</span>
                            </label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="genderrd">
                            <label>
                                Gender <span>(Required)</span>{' '}
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
                    <Col lg={4}>
                        <div className="genderrd">
                            <label>
                                Marital Status <span>(Required)</span>{' '}
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
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="">
                            <h2>
                                Address <span>(Required)</span>
                            </h2>
                        </div>
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
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
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
                                Resume <span>(Required)</span>
                            </label>
                            <input type="file" name="resume" onChange={handleChange} required />
                        </div>
                        <div className="mt-2 mb-2">
                            <ReCAPTCHA
                                sitekey="YOUR_NEW_SITE_KEY" // Replace with your actual reCAPTCHA site key
                                onChange={handleCaptchaChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

export default CarrerForm;
