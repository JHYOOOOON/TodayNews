import React from "react";
import { MdEmail } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import "./ContactInform.scss";

const linkSpan = (link) => {
  return (
    <span>
      <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </span>
  );
};

const ContactInform = () => {
  return (
    <div className="contact-left">
      <p className="contact-title">Contact Us</p>
      <div className="link-container">
        <div>
          <MdEmail />
          <span>jhyooooooon@gmail.com</span>
        </div>
        <div>
          <GrGithub />
          {linkSpan("github.com/JHYOOOOON")}
        </div>
        <div>
          <FaBlog />
          {linkSpan("blog.naver.com/chon_5")}
        </div>
      </div>
    </div>
  );
};

export default ContactInform;
