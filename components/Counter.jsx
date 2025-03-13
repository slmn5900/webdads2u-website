// import React, { Fragment, useEffect, useState } from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
// import styles from '../style/home/Counter.module.css'; // Custom styles

// const counterDetails = [
//     { title: 'Satisfied Clients', endValue: 150 },
//     { title: 'Successful Projects', endValue: 250 },
//     { title: 'Sales Closed', endValue: 300 },
//     { title: 'Years of Experience', endValue: 10 }
// ];

// const Counter = ({ title, endValue }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const duration = 2000; // Animation duration in milliseconds
//         const start = Date.now();

//         const animate = () => {
//             const elapsed = Date.now() - start;
//             const progress = Math.min(elapsed / duration, 1);
//             setCount(Math.floor(progress * endValue));

//             if (progress < 1) {
//                 requestAnimationFrame(animate);
//             }
//         };

//         animate();
//     }, [endValue]);

//     return (
// <div style={{display:'flex'}}>
//   {counterDetails.map((detail, index)=>(
//             <Fragment key={index}>
//             <Row>
//                 <Col lg={3} md={6} sm={12} className="text-center mb-4" style={{ background: '#F0F0F0' }}>
//                     <div className={styles.counterCard}>
//                         <div className={styles.counterBody}>
//                             <div className="d-flex justify-content-center">
//                                 <h2 className={styles.counterNumber}>{detail.endValue}</h2>
//                                 <span className={styles.counterSuffix}>+</span>
//                             </div>
//                             <p className={styles.counterTitle}>{detail.title}</p>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//         </Fragment>
//   ))}
  
// </div>
//     );
// };

// export default Counter;


'use client'
import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styles from '../style/home/Counter.module.css'; // Custom styles

const CounterItem = ({ title, endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // Animation duration in milliseconds
        const start = Date.now();

        const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * endValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, [endValue]);

    return (
        <Col lg={3} md={6} xs={6}  className="text-center" style={{ background: '#F0F0F0' }}>
            <div className={styles.counterCard}>
                <div className={styles.counterBody}>
                    <div className="d-flex justify-content-center">
                        <h2 className={styles.counterNumber} style={{color:"08203A",fontWeight:"700",fontFamily:`Poppins,Sans-serif`}}>{count}</h2>
                        <span className={styles.counterSuffix} style={{color:"08203A",fontWeight:"800",fontFamily:`Poppins,Sans-serif`}}>+</span>
                    </div>
                    <p className={styles.counterTitle}>{title}</p>
                </div>
            </div>
        </Col>
    );
};

const Counter = () => {
    return (
        <Row>
            {counterDetails.map((detail, index) => (
                <Fragment key={index}>
                    <CounterItem title={detail.title} endValue={detail.endValue} />
                </Fragment>
            ))}
        </Row>
    );
};

const counterDetails = [
    { title: 'Satisfied Clients', endValue: 150 },
    { title: 'Successful Projects', endValue: 250 },
    { title: 'Sales Closed', endValue: 300 },
    { title: 'Years of Experience', endValue: 10 }
];

export default Counter;
