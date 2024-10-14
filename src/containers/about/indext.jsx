import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pagHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name: ",
    Value: "KHANN Sovanaphom",
  },
  {
    label: "Age: ",
    Value: "24",
  },
  {
    label: "Address: ",
    Value: "Saen Sok",
  },
  {
    label: "Email: ",
    Value: "khann.sovannaphom@gmail.com",
  },
  {
    label: "Contact No: ",
    Value: "096 33 888 35",
  },
];

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
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.1}
            start={{ transform: "translateX(-500px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3>FrontEnd Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={0.1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3 className="personalInformatinHeaderTexte">
              Personal Infomation
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__serviceWrapper">
        <Animate
            play
            duration={1.5}
            delay={0.1}
            start={{ transform: "translateY(-500px)" }}
            end={{ transform: "translatex(0px)" }}
          >
          <div className="about__content__serviceWrapper__innerContent">
          
            <div>
              <FaDev size={60} color="var(--yellow-them-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-them-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-them-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-them-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
