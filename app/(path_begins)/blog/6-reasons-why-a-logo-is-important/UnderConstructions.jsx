'use client';
import React from 'react';
// import dynamic from 'next/dynamic';
import Lottie from 'lottie-react';
// const UnderConstruction = dynamic(() => import('../../../../components/common/UnderDevelopment.json'), { ssr: false });
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













// // ===========================================
// // ===========================================
// // ===========================================
// // ===========================================
// 'use client';
// import React, { useEffect, useState } from 'react';
// import Lottie from 'lottie-react';
// import UnderConstructionAnimation from '../../../../components/common/UnderDevelopment.json';

// const UnderConstruction = () => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Simulate a loading state for demonstration purposes
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 2000); // Adjust the timeout as needed

//         return () => clearTimeout(timer);
//     }, []);

//     if (loading) {
//         return (
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//                 <div>Loading...</div> {/* You can replace this with a spinner or any loading indicator */}
//             </div>
//         );
//     }

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//             <div style={{ width: '300px', height: '300px' }}>
//                 <Lottie animationData={UnderConstructionAnimation} loop autoplay />
//             </div>
//         </div>
//     );
// };

// export default UnderConstruction;
