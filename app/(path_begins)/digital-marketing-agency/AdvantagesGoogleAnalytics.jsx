import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { LiaArrowRightSolid } from "react-icons/lia";
import { LiaArrowLeftSolid } from "react-icons/lia";

export default function Advantagesgoogleaalytics() {
  return (
    <div className="section advantagesgoogleanalytics-main">
      <div className="container">
        <div className="row text-center advantagesgoogleanalytics">
          <div className="col-12">
            <h2>Advantages of Google Analytics</h2>
            <p>Google Analytics offers invaluable insights into website performance, user behavior, and traffic sources, empowering Digital Marketing professionals to make data-driven decisions. Its robust features allow for comprehensive analysis, goal tracking, and optimization to enhance online marketing strategies and maximize ROI.</p>
          </div>
        </div>
        <div className="row text-light">
          <div className="col-12">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text-light"
                >
                  Analyzing traffic sources is crucial in Digital Marketing to understand where website visitors are coming from, whether it’s organic search, social media, referrals, or paid campaigns. By identifying the most effective channels, marketers can allocate resources effectively to optimize their strategies.
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                  <LiaArrowLeftSolid />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <div className="card">
                    <div className="d-flex flex-row flex-row flex-md-row align-items-center">
                      <div className="image">
                        <img src="webdads/images/digital-marketing-agency/laptop.png" alt="tab" className='img-fluid laptop' loading='lazy' />
                      </div>
                      <div className="contend flex-fill text-center">
                        <h3>Analyze Traffic Source</h3>
                      </div>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text-light"
                >
                  Creating a visual chart for traffic flow is essential in Digital Marketing to visually represent website traffic patterns and sources. Utilizing tools like Google Analytics or data visualization software, marketers can analyze and interpret traffic data more effectively, aiding in strategic decision-making and optimization efforts.
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                  <LiaArrowRightSolid />                
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <div className="card">
                    <div className="d-flex flex-row flex-row flex-md-row align-items-center">
                      <div className="image">
                        <img src="webdads/images/digital-marketing-agency/downloa.png" alt="tab" className='img-fluid downloa' loading='lazy' />
                      </div>
                      <div className="contend flex-fill text-center">
                        <h3>Visual Chart for Traffic Flow</h3>
                      </div>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text-light"
                >
                  Measuring the popularity of a specific page is integral to Digital Marketing strategies. By analyzing metrics like page views, time on page, and bounce rate, marketers can gauge user engagement and tailor content and promotions to optimize performance and drive conversions.
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                  <LiaArrowLeftSolid />

                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <div className="card">
                    <div className="d-flex flex-row flex-row flex-md-row align-items-center">
                      <div className="image">
                        <img src="webdads/images/digital-marketing-agency/tab.png" alt="tab" className='img-fluid tab' loading='lazy' />
                      </div>
                      <div className="contend flex-fill text-center">
                        <h3>Popularity of Specific Page</h3>
                      </div>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text-light"
                >
                  Understanding visitors’ information is crucial in Digital Marketing for crafting targeted campaigns and personalized experiences. By analyzing demographics, behaviour, and preferences, marketers can segment their audience effectively and deliver relevant content and offers. This data, obtained through tools like Google Analytics or CRM systems, enables businesses to enhance engagement, increase conversions, and build stronger relationships with their audience.
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                  <LiaArrowRightSolid />                
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <div className="card">
                    <div className="d-flex flex-row flex-row flex-md-row align-items-center">
                      <div className="image">
                        <img src="webdads/images/digital-marketing-agency/id.png" alt="tab" className='img-fluid id' loading='lazy' />
                      </div>
                      <div className="contend flex-fill text-center">
                        <h3>Visitors’ Information</h3>
                      </div>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>

            </Timeline>
          </div>
        </div>
      </div>
    </div>


  );
}
