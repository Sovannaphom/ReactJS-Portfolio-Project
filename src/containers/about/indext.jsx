import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pagHeaderContent";

const jobSummary = "A highly skilled and detail-oriented Front-End Developer with [X] years of experience in building responsive and dynamic websites and applications. Proficient in modern front-end technologies such as HTML5, CSS3, JavaScript, and ReactJS, with a strong understanding of web development best practices and user experience design principles. Adept at turning wireframes and mockups into interactive, visually appealing, and user-friendly interfaces. Committed to writing clean, maintainable code and collaborating effectively with back-end developers, designers, and project stakeholders to deliver high-quality digital solutions.";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <h3>FrontEnd Developer</h3>
                <p>{jobSummary}</p>
            </div>
        </section>
    )
}

export default About;