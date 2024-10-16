import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pagHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <dvi className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
          layout="1"
          lineColor="var(--yellow-them-main-color)"
          >
            {
              data.experience.map((item, i)=>(
                <VerticalTimelineElement
                key={i}
                className="timeline__experience_vertical-timeline-element"
                >
              <div className="vertical-timeline-element-title-wrapper">
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  {item.subTitle}
                </h4>

                <p>
                  {
                    item.description
                  }
                </p>
              </div>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className="timeline_education">
          <h3 className="timeline_education__hearder-text">Education</h3>
        </div>
      </dvi>
    </section>
  );
};

export default Resume;
