import React from 'react'

function ThinkingProcess() {
  return (
    <section className='ThinkingProcess-main'>
        <div className="container">
            <div className="row ThinkingProcess">
                <div className="col-sm-12 col-lg-12 text-center">
                    <h1>Design <span className='ThinkingProcess-span'>Thinking Process</span></h1>
                    <p>Implement a prototyping and testing phase in the Design Thinking Process to refine and tailor your branding strategies and understand the unique needs of your audience through the Design, fostering a human-centered approach to problem-solving for your branding company in Chennai.</p>
                </div>
            </div>
        </div>

        <div className="container d-none d-lg-block ThinkingProcess-img">
            <div className="row justify-content-center ">
                <div className="col-lg-4 text-center"><h3>Define</h3></div>
                <div className="col-lg-4 text-center"><h3>Prototype</h3></div>
            </div>
            <div className="row">
            <div className="col-lg-12"><img src="/webdads/images/branding-design/process.png" alt="process" className='img-fluid' /></div>
            </div>
            <div className="row text-center">
            <div className="col-lg-4"><h3>Empathize</h3></div>
                <div className="col-lg-4"><h3>Ideation</h3></div>
                <div className="col-lg-4"><h3>Test</h3></div>
            </div>
        </div>
    </section>
  )
}

export default ThinkingProcess