import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeaderContent from "../../components/pagHeaderContent";


const Skills = () => {
    return (
        <section id="skill" className="skill">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
        </section>
    )
}

export default Skills;