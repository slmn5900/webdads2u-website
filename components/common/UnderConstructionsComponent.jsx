'use client';
import React from 'react';
import Lottie from 'lottie-react';
import UnderConstruction from './UnderDevelopment.json';

const UnderConstructionsComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ width: '300px', height: '300px' }}>
                <Lottie animationData={UnderConstruction} loop autoplay />
            </div>
        </div>
    );
};

export default UnderConstructionsComponent;
