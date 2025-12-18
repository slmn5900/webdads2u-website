'use client';
import Lottie from 'lottie-react';
import UnderConstruction from '../../../../components/common/UnderDevelopment.json';

const UnderConstructions = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ width: '300px', height: '300px' }}>
                <Lottie animationData={UnderConstruction} loop autoplay />
            </div>
        </div>
    );
};

export default UnderConstructions;
