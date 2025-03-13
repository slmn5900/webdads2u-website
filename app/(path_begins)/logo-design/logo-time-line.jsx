import React, { useEffect } from 'react';

function Logotimeline() {

  useEffect(() => {
    const timelineBlocks = document.querySelectorAll('.cd-timeline-block');
    
    const checkVisibility = () => {
      timelineBlocks.forEach(block => {
        const rect = block.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          block.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check for blocks already in view

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);


  return (
    <section className='logotimeline-main'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 logotimeline">
            <img src="webdads/images/logo-design/logo-design.jpg" alt="logo-design" loading='lazy' className='img-fluid' />
          </div>


          <div className="col-sm-12 col-md-12 col-lg-6 mt-4 align-self-center">
            <section id="cd-timeline" className="cd-container">
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                  <img src="webdads/images/logo-design/one.png" alt="one" loading='lazy' className='img-fluid' />
                </div>

                <div className="cd-timeline-content">
                  
                  <p>Analyzing the brand and its complete guidelines is the first step in logo designing, so we start with thorough research.</p>
                  
                  
                </div>
              </div>

              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-movie">
                  <img src="webdads/images/logo-design/two.png" alt="two" loading='lazy' className='img-fluid' />
                </div>

                <div className="cd-timeline-content">
                
                  <p>Sketching is our next step! Brand names will be used to inspire visual representations.</p>
                  
                  
                </div>
              </div>

              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-location">
                  <img src="webdads/images/logo-design/three.png" alt="three" loading='lazy' className='img-fluid' />
                </div>

                <div className="cd-timeline-content">
              
                  <p>The page will begin to take form visual symbols and shapes once ideas start flowing into it in text form.</p>
                  
                  
                </div>
              </div>

              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-location">
                  <img src="webdads/images/logo-design/four.png" alt="four" loading='lazy' className='img-fluid' />
                </div>

                <div className="cd-timeline-content">
               
                  <p>All angles and directions are considered while conceptualizing the established themes and text earlier.</p>
                  
              
                </div>
              </div>

              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-movie">
                  <img src="webdads/images/logo-design/five.png" alt="five" loading='lazy' className='img-fluid' />
                </div>

                <div className="cd-timeline-content">
              
                  <p>Finally, the digital execution is implemented and refined in different stages.</p>
         
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logotimeline;
