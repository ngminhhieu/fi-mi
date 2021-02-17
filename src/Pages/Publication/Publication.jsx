import React from "react";
import "./publication.sass";

const Publications = () => {
  return (
    <>
      <div 
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/publication.png")}"`
        }}
      >Publications</div>
      {/* <div className="tba">TO BE ANNOUNCED</div> */}
      <div className="publications">
        <div className="publications_journals">
          <div className="title">Journal papers</div>
          <p>[1] Hong Son Vu, Ngan Nguyen, Nam Ha-Van, Chulhun Seo, and Minh Thuy Le, 
            “Multiband Ambient RF Energy Harvesting for Autonomous IoT Devices", 
            IEEE MICROWAVE AND WIRELESS COMPONENTS LETTERS, 2020.</p>
        </div>
        <div className="publications_conferences">
          <div className="title">Conference papers</div>
          <p>[1] Viet Dung Nguyen, Phi Le Nguyen, Trung Hieu Nguyen, Kien Nguyen, 
            Phan Thuan Do, “An (e-1)/(2e-1)-Approximation Algorithm for Maximizing the Coverage 
            Capability in Vehicle-based Mobile Air Quality Monitoring Systems”, 
            The 19th IEEE International Symposium on Network Computing and Applications (NCA 2020).</p>
          <p>[2] La Van Quan, Phi Le Nguyen, Thanh-Hung Nguyen, Kien Nguyen, “Q-learning-based,
             Optimized On-demand Charging Algorithm in WRSN”, The 19th IEEE International 
             Symposium on Network Computing and Applications (NCA 2020).</p>
          <p>[3] Nguyen Thi Hanh, Huynh Thi Thanh Binh and Nguyen Van Son, "Minimal Relay Node Placement for 
             Ensuring Network Connectivity in Mobile Wireless Sensor Networks", The 19th IEEE International 
             Symposium on Network Computing and Applications (NCA 2020).</p>
          <p>[4] Viet-Dung Nguyen, Phi Le Nguyen, Trung Hieu Nguyen, Phan Thuan Do, “A 1/2-Approximation 
             Algorithm for Target Coverage Problem in Mobile Air Quality Monitoring Systems”, The 2020 IEEE 
             Global Communications Conference (IEEE GLOBECOM), 8–10 December 2020, Taipei, Taiwan.</p>  
        </div>
      </div>
    </>
  );
};

export default Publications;
