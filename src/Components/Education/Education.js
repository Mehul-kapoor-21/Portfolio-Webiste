import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container" id="education" style={{backgroundColor:"red"}}>
      <div className="education-list-container">
        {/* desc */}
        <div className="education-desc-container">
          <h1>
            My <span>Education</span>
          </h1>
        </div>
        {/* Education */}

        <div className="experience">
          <VerticalTimeline lineColor="#003087" layout="2-columns">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",borderRadius:"16px" }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2017 - 2019"
              iconStyle={{ background: "#fcd212", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                Carmel Convent Sr. Sec. School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Class 9th-10th</h4>
              <p>
              Secondary School - 90%
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",borderRadius:"16px" }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2019 - 2021"
              iconStyle={{ background: "#fcd212", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                Carmel Convent Sr. Sec. School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Class 11th-12th</h4>
              <p>
              Senior Secondary School - 93%
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",borderRadius:"16px" }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2021 - Present"
              iconStyle={{ background: "#fcd212", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                 Chitkara University
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Computer Science And Engineering</h4>
              <p>
              CGPA - 9.69/10
              </p>
            </VerticalTimelineElement>

            
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
