import React from "react";
import "./contact.sass";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_vietnam_wrapper">
        <div className="contact_vietnam">
          <div className="contact_vietnam_flag">
            <img
              src={require("../../images/body/contact/vietnam_contact.png")}
              alt="Vietnam Flag"
            />
          </div>
          <div className="contact_vietnam_description">
            <p class="contact_team_title">Vietnamese Team</p>
            <p>
              <b>Dr. Nguyen Phi Le</b>
            </p>
            <p>School of Information and Communication Technology</p>
            <p>Hanoi University of Science and Technology</p>{" "}
            <p>
              <a href="lenp@soict.hust.edu.vn">lenp@soict.hust.edu.vn</a>
            </p>
          </div>
        </div>
      </div>

      <div className="contact_japan_wrapper">
        <div className="contact_japan">
          <div className="contact_japan_flag">
            <img
              src={require("../../images/body/contact/japan_contact.png")}
              alt="Vietnam Flag"
            />
          </div>
          <div className="contact_japan_description">
            <p class="contact_team_title">Japanese Team</p>
            <p>Prof. Kien Nguyen</p>
            <p>Graduate School of Engineering</p>
            <p>Chiba University</p>
            <p>
              <a href="lenp@soict.hust.edu.vn">nguyen@chiba-u.jp</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
