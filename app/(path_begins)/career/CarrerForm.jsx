'use client';
import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { careerForm } from '../../../api/UserAuthentication';
<<<<<<< HEAD
const allCountries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Ivory Coast',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
=======
import { AllCountriess } from './country.jsx';
const allCountries = AllCountriess;
>>>>>>> a0d19cc (Initial commit)
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

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     if (!captchaValue && isCheckboxChecked === false) {
    //         alert('Please complete the reCAPTCHA.');
    //         return;
    //     }

    //     const formDataValues=new FormData()

    //     try {
    //         const response = await careerForm(formDataValues)
    //         if (response.sucess) {
    //             alert("thanks for the form submission.")
    //         } else {

    //         }
    //     } catch (error) {
    //         console.log(error);
    //         alert('something wents to wrong');
    //     }

    //     // Handle form submission logic here
    //     console.log('Form submitted:', formData);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValue || !isCheckboxChecked) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

<<<<<<< HEAD
=======
        // const formDataValues = new FormData();
>>>>>>> a0d19cc (Initial commit)
        const formDataValues = new FormData();

        // Append each field to the FormData object
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

        // Append the resume file
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
                        <div>
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
                                {allCountries.map((country) => (
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
                                Resume <span>(Required)</span>
                            </label>
                            <input type="file" name="resume" onChange={handleChange} required />
                        </div>
                        <div className="mt-2 mb-2">
                            {/* <ReCAPTCHA
<<<<<<< HEAD
                                sitekey="YOUR_NEW_SITE_KEY" // Replace with your actual reCAPTCHA site key
=======
                                sitekey="YOUR_new_SITE_KEY" // Replace with your actual reCAPTCHA site key
>>>>>>> a0d19cc (Initial commit)
                                onChange={handleCaptchaChange}
                            /> */}
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

export default CarrerForm;
