"use clients"
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      const [captchaValue, setCaptchaValue] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
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
   <form onSubmit={handleSubmit} className="contactform">
   <div class="">
                <h2>Ready To Get Started?
                </h2>
            </div>
            <Row>
                <Col md={6}>
                <div>
            <label>Name <span>(Required)</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
                </Col>
                <Col md={6}>
                <div>
            <label>Email<span> (Required)</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>
                <div>
            <label>Phone<span> (Required)</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
                </Col>
                <Col md={6}>
                <div>
            <label>Service <span>(Required)</span></label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select the service</option>
              <option value="service1">Website Development</option>
              <option value="service2">App Development</option>
              <option value="service3">SEO</option>
              <option value="service3">Digital Marketing</option>
              <option value="service3">Brochure Design</option>
              <option value="service3">Logo Design</option>
            </select>
          </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
             
            />
          </div>
          <div className="mt-2 mb-3">
            <ReCAPTCHA
              sitekey="YOUR_SITE_KEY" // Replace with your reCAPTCHA site key
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

export default ContactForm
