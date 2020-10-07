import React from "react";
import "./architecture.sass";

const Architecture = () => {
  return (
    <>
      <div className="block_title">Fi-Mi Architecture</div>
      <div
        className="architecture"
        style={{
          backgroundImage: `url("${require("../../images/body/union_blue.png")}"`
        }}
      >
        <div className="architecture_image_wrapper">
          <div
            className="architecture_image"
            style={{
              backgroundImage: `url("${require("../../images/body/architecture/architecture.png")}"`
            }}
          ></div>
        </div>
        <div className="architecture_content_wrapper">
          <div className="architecture_content">
            <div className="architecture_content_intro">
              The architecture consists of three tiers: sensing, communication, and
              application. Physically, the sensing tier includes smart sensing
              devices installed on buses. The communication tier incorporates the
              infrastructure for data transmission between the monitoring devices
              and the servers located in the application tier.
            </div>
            <div className="architecture_content_details">
              <ul>
                <li>
                  <b>The sensing tier</b> is responsible for sensing the air quality
                  and reporting the sensed data. The monitoring devices measure the
                  air quality at predefined positions on the bus routes. The devices
                  also collect RSSI information that will be used to determine the
                  bus locations.
                </li>
                <li>
                  <b>The communication tier</b> is in charge of transferring the
                  sensed data and the RSSI information measured by the monitoring
                  devices to the servers. Fi-Mi plans to leverage a new form of
                  opportunistic communication to balance between communication
                  quality and cost.
                </li>
                <li>
                  <b>The application tier</b> is imperative for controlling the
                  behaviors of the monitoring devices, processing the sensed data,
                  and providing interactive services to users.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Architecture;
