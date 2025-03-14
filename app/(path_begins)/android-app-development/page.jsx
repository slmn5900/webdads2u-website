// // "use client"
// // import React from 'react'
// // import './android-app-development.css'
// // // import Sliderimage from './Slider-image'
// // import AndroidAppDevelopmentServices from './Android-App-Development-Services'
// // import AndroidAppServices from './Android-App-Services'
// // import AndroidApplicationDevelopmentServices from './Android-Application-Development-Services'
// // import Webdads2uTechnologies from './Webdads2u-Technologies'
// // import SocialMedia from '../../../components/common/SocialMedia'
// // import TypesofCustomAndroid from './Types-of-Custom-Android'
// // import AndroidApp from './Android-App'
// // import FrequentlyAskedQuestions from './Frequently-Asked-Questions'
// // // import Mobile from '../../../public/webdads/images/android-app-development/Mobile.png'
// // import Slider from '../../../components/common/Slider-image'

// // const page = () => {
// //   return (
// //     <div>
// //       <section className='android-app-development-banner-image'>
// //         <div className="container">
// //           <div className="row align-items-center android-app-development">
// //             <div className="col-7 col-sm-6 col-md-6 col-xs-6">
// //               <h1>Android App Development</h1>
// //               <p>Learn Android app development to create innovative mobile
// //                 applications for the Android platform, catering to diverse user
// //                 needs and preferences.</p>
// //               <button type='button' className='d-none d-sm-block'>Contact us</button>
// //             </div>
// //             <div className="col-5 col-sm-6 col-md-6 col-xs-6">
// //              <img src="webdads/images/android-app-development/Mobile.png" alt="android-app-development" className='img-fluid' loading='lazy' />
// //               <div className='element-app'>
// //                  <img src="webdads\images\android-app-development/Bodium.png" alt="Bodium" loading='lazy' className='img-fluid android-app-gallery-slider-banner' />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       <Slider />
// //       <div>
// //         <AndroidAppDevelopmentServices/>
// //         <AndroidAppServices/>
// //         <AndroidApplicationDevelopmentServices />
// //         <Webdads2uTechnologies />
// //         <SocialMedia />
// //         <TypesofCustomAndroid />
// //         < AndroidApp/>
// //         < FrequentlyAskedQuestions/>
// //       </div>

// //     </div>
// //   )
// // }
// // export default page

// // ================================================================================================================================
// // ======================================= this code is reworded code ================================================
// // ================================================================================================================================

// "use client"
// import React from 'react'
// import './android-app-development.css'

// // Dynamically import components that should only be rendered on the client side
// import dynamic from 'next/dynamic'
// import AndroidMain from './androidMain'

// export const metadata = {
//   title: 'Web Development Companies In Chennai',
//   description: "Unlock your online potential with our tailored web development services. We design, innovate, and deliver websites that redefine excellence.",

// };

// const page = () => {
//   return (
//     // <div>
//     //   <section className='android-app-development-banner-image'>
//     //     <div className="container">
//     //       <div className="row align-items-center android-app-development">
//     //         <div className="col-7 col-sm-6 col-md-6 col-xs-6">
//     //           <h1>Android App Development</h1>
//     //           <p>Learn Android app development to create innovative mobile
//     //             applications for the Android platform, catering to diverse user
//     //             needs and preferences.</p>
//     //           <button type='button' className='d-none d-sm-block'>Contact us</button>
//     //         </div>
//     //         <div className="col-5 col-sm-6 col-md-6 col-xs-6">
//     //          <img src="webdads/images/android-app-development/Mobile.png" alt="android-app-development" className='img-fluid' loading='lazy' />
//     //           <div className='element-app'>
//     //              <img src="webdads/images/android-app-development/Bodium.png" alt="Bodium" loading='lazy' className='img-fluid android-app-gallery-slider-banner' />
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     //   <Slider />
//     //   <div>
//     //     <AndroidAppDevelopmentServices />
//     //     <AndroidAppServices />
//     //     <AndroidApplicationDevelopmentServices />
//     //     <Webdads2uTechnologies />
//     //     <SocialMedia />
//     //     <TypesofCustomAndroid />
//     //     <AndroidApp />
//     //     <FrequentlyAskedQuestions />
//     //   </div>
//     // </div>
//     <>
//     <AndroidMain/>
//     </>
//   )
// }

// export default page

import React from 'react';

import AndroidMain from './androidMain';

export const metadata = {
    title: 'Android App Development Company In Chennai',
    description: 'Transform your ideas into reality with the leading Android app development company in Chennai. Expert solutions for your business needs. Contact us now!'
};
const page = () => {
    return (
        <>
            <AndroidMain />
        </>
    );
};

export default page;
