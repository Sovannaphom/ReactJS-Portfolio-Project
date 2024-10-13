import React from "react";
import PageHeaderContent from "../../components/pagHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <h3>FrontEnd Developer</h3>
        <span>{}</span>
      </div>
    </section>
  );
};

export default Contact;
