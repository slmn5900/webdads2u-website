

"use client";
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Formsection() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const onSubmit = (data) => {
        if (!isCheckboxChecked) {
            alert("Please confirm that you are not a robot.");
            return;
        }
        console.log(data);
    };

    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
    };

    return (
        <>
            <section className='quick-contactsec'>
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className='quick-form'>
                                <h2>Quick contact us!</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="infld"> 
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            {...register('name', { required: "Name is required" })}
                                        />
                                        {errors.name && <p>{errors.name.message}</p>}
                                    </div>

                                    <div className="infld">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            {...register('email', { required: "Email is required" })}
                                        />
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>

                                    <div  className="infld">
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="Phone"
                                            {...register('phone', { required: "Phone number is required" })}
                                        />
                                        {errors.phone && <p>{errors.phone.message}</p>}
                                    </div>

                                    <div>
                                        <select
                                            id="services"
                                            {...register('services', { required: "Please select a service" })}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="seo">SEO</option>
                                            <option value="marketing">Marketing</option>
                                        </select>
                                        {errors.services && <p>{errors.services.message}</p>}
                                    </div>

                                    <div className="check-in">
                                        <label>
                                            <input
                                                type="checkbox"
                                                id="not-robot"
                                                onChange={handleCheckboxChange}
                                            />
                                            I am not a robot
                                        </label>
                                        
                                    </div>

                                    <button type="submit">Submit</button>
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
