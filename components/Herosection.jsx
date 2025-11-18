'use client';
import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import ReCAPTCHA from 'react-google-recaptcha';
import '../style/Herosection.css';
import { FaStar } from "react-icons/fa";
import { quirckServiceForm } from '../api/UserAuthentication'; 

const Herosection = () => {
  const [text] = useTypewriter({
    words: ['Digitalization', 'Automation', 'Innovation'],
    loop: true,
    typeSpeed:20,
    deleteSpeed:20,
    delaySpeed: 20,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', service: '' });

  // Auto popup after 3 seconds (once per session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('popupshown');
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('popupshown', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for global popup trigger
useEffect(() => {
  const openPopup = () => setShowPopup(true);
  window.addEventListener("openGlobalPopup", openPopup);

  return () => window.removeEventListener("openGlobalPopup", openPopup);
}, []);


  // Counter setup
  const datas = [
    { label: 'Successful Projects', end: 200 },
    { label: 'Sales Closed', end: 300 },
    { label: 'Years Experience', end: 10 },
  ];

  const [counter, setCounter] = useState(datas.map(() => 0));
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => prev.map((val, i) => (val < datas[i].end ? val + 1 : val)));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler with API call integration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      // alert('Please complete the reCAPTCHA.');
      return;
    }

    setLoading(true);
    const dataToSend = {
      name: formData.name,
      phoneNumber: formData.mobile,
      email: formData.email,
      services: formData.service,
      captcha: recaptchaValue,
    };

    try {
      const response = await quirckServiceForm(dataToSend);
      if (response.success) {
        alert('Form submitted successfully!');
        setShowPopup(false);
        setFormData({ name: '', mobile: '', email: '', service: '' });
        setRecaptchaValue(null);
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
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="dots">
          {[...Array(5)].map((_, i) => <div key={i} className="dot"></div>)}
        </div>

        {/* Desktop Hero */}
        <div className="Herosection-body glass text-center">
          <h1>
            Better <span style={{ fontWeight: '500', color: '#d7142a' }}>{text}</span> Solution
            <br /> to Transform your Business
          </h1>
          <h6>Our expertise in bringing ideas to reality help your market place</h6>
          {/* <button onClick={() => setShowPopup(true)}>Get a Quote</button> */}
          <button
  className="social-btn"
  onClick={() => window.dispatchEvent(new Event("openGlobalPopup"))}
>
  Get a Quotes
</button>


          {/* Counters */}
          <div className="counter-main-home d-flex" style={{ justifyContent: 'flex-start', gap: '60px', padding: '40px', marginTop: '50px' }}>
            {datas.map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }} className='d-flex header-counter-sec align-items-baseline'>
                <h2 style={{ margin: 0 }}>{counter[i]}+</h2>
                <h6 className='ps-2 header-h6'>{item.label}</h6>
              </div>
            ))}
            <div className='d-flex align-items-baseline'>
              <FaStar className='star-icon' />
              <FaStar className='star-icon' />
              <FaStar className='star-icon' />
              <FaStar className='star-icon' />
              <FaStar className='star-icon' />
              <h6 className='header-counter-sec google-rating ps-3'>Google Rating</h6>
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="mobileHerosection-body glass text-center">
          <h1>
            Better <br />
            <span style={{ fontWeight: 600, color: '#d7142a' }}>{text}</span> <br />
            Solution to<br />Transform <br />your Business
          </h1>
          <h6>Our expertise in bringing ideas to reality help your market place</h6>
          {/* <button onClick={() => setShowPopup(true)}>Get quotes</button> */}
          <button
            className="social-btn"
            onClick={() => window.dispatchEvent(new Event("openGlobalPopup"))}
          >
            Get a Quotes
          </button>

        </div>
      </section>

      {/* Popup Overlay */}
      {showPopup && (
        <div
          className="popup-overlay"
          onClick={(e) => e.target.classList.contains('popup-overlay') && setShowPopup(false)}
        >
          <div className="popup-box glass-popup">
            <span className="close-btn" onClick={() => setShowPopup(false)}>&times;</span>
            <h2>Quick contact us!</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength="10"
                pattern='[0-9]{10}'
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="select-option"
                required
              >
                <option value="">Select ...</option>
                <option>Website Development</option>
                <option>SEO</option>
                <option>App Development</option>
                <option>Brochure Design</option>
                <option>Logo Design</option>
              </select>

              <div className="recaptcha-box">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(value) => setRecaptchaValue(value)}
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit ➤'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Herosection;
