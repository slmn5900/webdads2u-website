import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function Webdevelopmentservices() {
    return (
        <section className="">
            <div className="container">
                <div className="row text-center webdevelopmentservices">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <Title title="What Web Development Services we can do!" />
                        {/* <h2>What Web Development Services we can do!</h2> */}
                        <Description Des="Web development encompasses various specialties: front-end for user interaction, back-end for databases, and UI/UX design for seamless experiences. It goes beyond static pages, fueling dynamic platforms, e-commerce, and social networks. Technologies like JavaScript, PHP, and frameworks like React.js and WordPress, along with UI/UX design, drive creativity, shaping captivating digital realms." />
                        {/* <p>Web development encompasses various specialties: front-end for user interaction, back-end for databases, and UI/UX design for seamless experiences. It goes beyond static pages, fueling dynamic platforms, e-commerce, and social networks. Technologies like JavaScript, PHP, and frameworks like React.js and WordPress, along with UI/UX design, drive creativity, shaping captivating digital realms.</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Webdevelopmentservices;
