import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function Advantagesusingresponsiveweb() {
  return (
    <section className='advantagesusingresponsiveweb-main'>
        <div className="container">
            <div className="row text-center advantagesusingresponsiveweb-hearder">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h4 className='mt-sm-1 mt-md-2 mt-lg-3'>Advantages of Using Responsive Web</h4>
                    <h4 className='mb-sm-1 mb-mb-2 mb-lg-3'>Designing Service</h4>
                </div>
            </div>
            <div className="row advantagesusingresponsiveweb">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757478580/webdads2u/responsive-website/rmp-website.png" alt="RMP" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p>Utilizing responsive web page design services offers numerous advantages. Firstly, it ensures your website adapts seamlessly to various devices, enhancing user experience. Secondly, responsive web design boosts your site’s visibility on search engines, as it is favored for mobile-friendly indexing. Embrace responsive web design to optimize user engagement and maximize your online presence.</p>

                        <ul className='p-0'>
                            <li> <FaCircleCheck className='icon-item' /> Enhance the experience of your audience</li>
                            <li> <FaCircleCheck className='icon-item' /> Make your website search engine friendly</li>
                            <li> <FaCircleCheck className='icon-item' /> Get an easy to manage website</li>
                            <li> <FaCircleCheck className='icon-item' /> Efficient web design can boost sales</li>
                            <li> <FaCircleCheck className='icon-item' /> It saves you both time and cost</li>
                            <li> <FaCircleCheck className='icon-item' /> Efficient websites have a lower bounce rates</li>
                        </ul>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Advantagesusingresponsiveweb;