import React from "react";
import "./team.sass";
import teamLogo from "../../images/body/team/team_logo.svg";
import vietnameseImage from "../../images/body/team/vietnamese_team.svg";
import japaneseImage from "../../images/body/team/japanese_team.svg";

const Team = () => {
  return (
    <>
      <div
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/team.png")}"`
        }}
      >
        Our Team
      </div>
      <div className="team">
        <div className="team_logo">
          <img src={teamLogo} alt="Vietnam Flag" />
        </div>
        <div className="team_details team_vietnam">
          <div className="team_details_image_wrapper">
            <div className="team_details_image">
              <img src={vietnameseImage} alt="Vietnamese Team" />
            </div>
          </div>
          <div className="team_details_description_wrapper">
            <div className="team_details_description">
              <div className="team_details_description_title">
                Vietnamese Team
              </div>
              <div className="team_details_description_line"></div>
              <div className="team_details_description_info">
                <ul>
                  <li>
                    School of Information and Communication Technology, Hanoi
                    University of Science and Technology
                  </li>
                  <li>
                    School of Electrical Engineering, Hanoi University of
                    Science and Technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="team_details team_japan">
          <div className="team_details_description_wrapper">
            <div className="team_details_description">
              <div className="team_details_description_title">
                Japanese Team
              </div>
              <div className="team_details_description_line"></div>
              <div className="team_details_description_info">
                <ul>
                  <li>Graduate School of Engineering, Chiba University</li>
                  <li>
                    Wireless System Laboratory, Toshiba Corporate Research &
                    Development Center, Toshiba Corporation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="team_details_image_wrapper">
            <div className="team_details_image">
              <img src={japaneseImage} alt="Japanese Team" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
