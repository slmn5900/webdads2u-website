import React from 'react'

function OurStreamscard() {
    // ourstreamscard
    // /webdads/images/mobile-app-development/download.png
    return (
        <section className='ourstreamscard-amin'>
            <div className="container">
                <div className="row text-center ourstreamscard">
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row ">
                        <div className="p-2  flex-fill card ourstreamscard-ios"><div>
                            <img src="/webdads/images/mobile-app-development/download.png" alt="download" className='imgfilter' />
                        </div>
                            <h4>IOS App <br/>
                            Development</h4>
                        </div>
                        <div className="p-2  flex-fill card ourstreamscard-android"><div>
                            <img src="/webdads/images/mobile-app-development/download-an.png" alt="download-an" className='imgfilter' />
                        </div>
                        <h4>Android App <br/>
                        Development</h4>
                        </div>
                        <div className="p-2  flex-fill card ourstreamscard-ios"><div>
                            <img src="/webdads/images/mobile-app-development/download-react.png" alt="download-react" className='imgfilter' />
                        </div>
                        <h4>React Native App <br/>
                        Development</h4>
                        </div>
                        <div className="p-2  flex-fill card ourstreamscard-android"><div>
                            <img src="/webdads/images/mobile-app-development/download-app.png" alt="download-app"  className='imgfilter'/>
                        </div>
                        <h4>Mobile App UI/Ux<br/>
                        Development</h4>
                        </div>
                        <div className="p-2  flex-fill card ourstreamscard-ios"><div>
                            <img src="/webdads/images/mobile-app-development/download-react.png" alt="download-react" className='imgfilter' />
                        </div>
                        <h4>Flutter App <br/>
                        Development</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStreamscard