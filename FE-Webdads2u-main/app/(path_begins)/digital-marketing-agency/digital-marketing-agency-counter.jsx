// import React, { useState, useEffect } from 'react';

// const Digitalmarketingagencycounter = () => {
//   const stats = [
//     { label: "Global Brands", value: 53, name: "" },
//     { label: "Campaigns", value: 97.1, name: "K" },
//     { label: "People Reached", value: 1, name: 'B+' },
//     { label: "Responses", value: 11, name: "M+" },
//     { label: "Years", value: 10, name: "+" },
//   ];

//   const [isScrolling, setIsScrolling] = useState(false);
//   const [counts, setCounts] = useState(Array(stats.length).fill(0));
//   const [displayCounts, setDisplayCounts] = useState(Array(stats.length).fill(0));

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!isScrolling) {
//         setIsScrolling(true);
//       }
//     };

//     const handleTimer = () => {
//       if (isScrolling) {
//         setDisplayCounts(prevCounts => {
//           return prevCounts.map((count, index) => {
//             if (count < stats[index].value) {
//               return Math.min(count + 1, stats[index].value);
//             }
//             return count;
//           });
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     const interval = setInterval(handleTimer, 50); // Update counts every 100 ms

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(interval);
//     };
//   }, [isScrolling, stats]);

//   return (
//     <section className="digitalmarketingagencycounter-main">
//       <div className="container-fluid">
//         <div className="row text-center digitalmarketingagencycounter">
//           <div className="col-sm-12 col-md-12 col-lg-12">
//             <div style={{}}>

//               <div className='d-flex flex-column flex-md-row justify-content-between justify-content-lg-around'>
//                 {stats.map((stat, index) => (
//                   <div key={index}>
//                     <h2>{displayCounts[index]} {stat.name}</h2>
//                     <p>{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Digitalmarketingagencycounter;




// ===============================================================
// ===================== this code is reworked ===================
// ===============================================================




import React, { useState, useEffect, useMemo } from 'react';

const Digitalmarketingagencycounter = () => {
  // Memoize the stats array to avoid unnecessary re-renders
  const stats = useMemo(() => [
    { label: "Global Brands", value: 53, name: "" },
    { label: "Campaigns", value: 97.1, name: "K" },
    { label: "People Reached", value: 1, name: 'B+' },
    { label: "Responses", value: 11, name: "M+" },
    { label: "Years", value: 10, name: "+" },
  ], []);

  const [isScrolling, setIsScrolling] = useState(false);
  const [counts, setCounts] = useState(Array(stats.length).fill(0));
  const [displayCounts, setDisplayCounts] = useState(Array(stats.length).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }
    };

    const handleTimer = () => {
      if (isScrolling) {
        setDisplayCounts(prevCounts => {
          return prevCounts.map((count, index) => {
            if (count < stats[index].value) {
              return Math.min(count + 1, stats[index].value);
            }
            return count;
          });
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(handleTimer, 50); // Update counts every 50 ms

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [isScrolling, stats]); // Using memoized `stats`

  return (
    <section className="digitalmarketingagencycounter-main">
      <div className="container-fluid">
        <div className="row text-center digitalmarketingagencycounter">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div>
              <div className='d-flex flex-column flex-md-row justify-content-between justify-content-lg-around'>
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h2>{displayCounts[index]} {stat.name}</h2>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digitalmarketingagencycounter;
