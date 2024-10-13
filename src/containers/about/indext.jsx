import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pagHeaderContent";
import { Animate } from "react-simple-animate";

const jobSummary =
  "I am a front-end web developer with experience building responsive, dynamic websites using HTML, CSS, JavaScript, and React. I focus on creating user-friendly interfaces, optimizing performance, and ensuring compatibility across browsers. My expertise includes developing clean, efficient code, collaborating with teams, and implementing modern design practices for seamless user experiences.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <Animate
          play
          duration={1.5}
          delay={0.1}
          start={{transform: 'translateX(-900px)'}}
          end={{transform: 'translatex(0px)'}}

        >
          <h3>FrontEnd Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

        <h3>Personal Infomation</h3>
      </div>
    </section>
  );
};

export default About;
