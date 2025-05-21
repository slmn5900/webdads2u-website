'use client';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './return.scss';

export const metadata = {
    title: 'REFUND POLICY - WEBDADS2U PRIVATE LIMITED',
    description: 'If you haven’t received a refund yet, first check your bank account again.Then contact your credit card company, it may take some time before your refund is',
    keyword: 'refund policy - webdads2u private limited'
};
const page = () => {
    return (
        <>
            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="">
                            <h2 style={{ textAlign: 'center' }}>REFUND POLICY</h2>
                            <h3>Return</h3>
                            <p>Our policy lasts 6 days. If 6 days have gone from the date of service availed, unfortunately, we can’t offer you a refund or exchange.</p>
                            <p>To complete your return, we require a receipt or proof of purchase.</p>
                            <h3 className="pt-2">Late Or Missing Refunds</h3>
                            <p>If you haven’t received a refund yet, first check your bank account again.</p>
                            <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                            <p>Next, contact your bank. There is often some processing time before a refund is posted.</p>
                            <p>If you’ve done all of this and you still have not received your refund yet, please contact us at info@webdads2u.com</p>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default page;
