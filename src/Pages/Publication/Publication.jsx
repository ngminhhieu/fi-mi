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
          <p><b>To be announced</b></p>
        </div>
        <div className="publications_conferences">
          <div className="title">Conference papers</div>
          <p>[1] Hong Son Vu, Ngan Nguyen, Nam Ha-Van, Chulhun Seo, and Minh Thuy Le, 
            “Multiband Ambient RF Energy Harvesting for Autonomous IoT Devices", 
            IEEE MICROWAVE AND WIRELESS COMPONENTS LETTERS, 2020. </p>
          <p>[2] Viet Dung Nguyen, Phi Le Nguyen, Trung Hieu Nguyen, Kien Nguyen, 
            Phan Thuan Do, “An (e-1)/(2e-1)-Approximation Algorithm for Maximizing the Coverage 
            Capability in Vehicle-based Mobile Air Quality Monitoring Systems”, 
            The 19th IEEE International Symposium on Network Computing and Applications (NCA 2020) (Accepted).</p>
          <p>[3] La Van Quan, Phi Le Nguyen, Thanh-Hung Nguyen, Kien Nguyen, “Q-learning-based,
             Optimized On-demand Charging Algorithm in WRSN”, The 19th IEEE International 
             Symposium on Network Computing and Applications (NCA 2020) (Accepted).</p>
        </div>
      </div>
    </>
  );
};

export default Publications;
