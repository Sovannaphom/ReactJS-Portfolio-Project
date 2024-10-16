import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pagHeaderContent";
import { skillsData } from "./utils"
import {Animate, AnimateKeyframes} from "react-simple-animate"

const Skills = () => {
  return (
    <section id="skill" className="skill">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skill__content-wrapper">
        {
          skillsData.map((item,i)=> (
            <div key={i} className="skill__content-wrapper__inner-content">
              <Animate
              play
              duration={1}
              delay={0.3}
              start={{transform: 'translateX(-200px)'}}
              end={{transform: 'translateX(0px)'}}
              >
                <h3>{item.label}</h3>
                <div>
                  {item.data.map((skillItem, j)=>(
                    <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["oppcity: 1", "opacity: 0 "]}
                    iterationCount="1"
                    >
                    <div className="progressBar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <line
                      percen
                      />

                    </div>
                    </AnimateKeyframes>
                  ))}
                </div>

              </Animate>
            </div>
          ))
        }
      </div>

    </section>
  );
};

export default Skills;
