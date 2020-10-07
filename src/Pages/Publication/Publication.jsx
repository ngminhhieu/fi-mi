import React from "react";
import "./publication.sass";

const Publications = () => {
  return (
    <>
      <div className="block_title">Publications</div>
      <div className="publications">
        <div className="publications_journals">
          <div className="title">Journal papers</div>
          <p>
            - Haesik kim, Gabriel Porto Villardi and Jing Ma, “Energy Efficient
            Dynamic Resource Allocation for Wireless Systems Using Receiver
            Puncturing Technique,” Journal of Communications and Networks, Vol. 20,
            no.4, August 2018.
          </p>
          <p>
            - M. López-Benítez, A. Al-Tahmeesschi, D. K. Patel, J. Lehtomäki and K.
            Umebayashi, "Estimation of Primary Channel Activity Statistics in
            Cognitive Radio Based on Periodic Spectrum Sensing Observations," in
            IEEE Transactions on Wireless Communications, vol. 18, no. 2, pp.
            983-996, Feb. 2019.
          </p>
          <p>
            - Razvan-Andrei Stoica, Giuseppe Thadeu Freitas De Abreu, Takanori
            Hara, and Koji Ishibashi, "Massively Concurrent Non-Orthogonal Multiple
            Access for 5G Networks and Beyond," IEEE Access, Volume: 7, pp82080 -
            82100, 19 June 2019.
          </p>
        </div>
        <div className="publications_conferences">
          <div className="title">Conference and workshop papers</div>
          <p>
            - K. Umebayashi, Y. Kimoto, A. Tölli, "Adaptive Antenna Array with
            weight and antenna space control", IEEE WCNC 2020.
          </p>
          <p>
            - A. Al-Tahmeesschi, K. Umebayashi, H. Iwata, M. Lopez-Benitez, J.
            Lehtomaki, "Applying Deep Neural Networks for Duty Cycle Estimation",
            IEEE WCNC 2020.
          </p>
          <p>
            - P. Shah, S. Joshi, A. Tölli, K. Umebayashi, "Direct Beamformer
            Estimation for Hybrid Architecture in mmWave Dynamic TDD System", IEEE
            WCNC 2020-Workshop.
          </p>
          <p>
            - H. Iwata, K. Umebayashi, A. Al-Tahmeesschi, S. Joshi, M.
            Lopez-Benitez, J. Lehtomaki, "A Study on High-Efficiency Energy
            Detection-Based Spectrum Measurements", IEEE WCNC 2020-Workshop.
          </p>
          <p>
            - A. Arvola, S. Joshi, A. Tölli, “Dynamic UL/DL Mode Selection and
            Resource Allocation in Multi-Cell MIMO TDD Systems”, Asilomar 2019.
          </p>
          <p>
            - P. Shah, S. Joshi, A. Tölli, K. Umebayashi, “Direct Beamformer
            Estimation for Hybrid Architecture in mmWave Dynamic TDD System”, IEEE
            WCNC 2020-Workshop.
          </p>
          <p>
            - P. Jayasinghe, A. Tölli, J. Kaleva, M. Latva-aho “Traffic Aware
            Beamformer Design for Integrated Access and Backhaul with Flexible TDD”,
            IEEE WCNC 2020.
          </p>
          <p>
          - Uitto, M. & Heikkinen, A. & Rantala, S.J.. & Mäkelä, J. :“ Evaluation
          of Evolved Multimedia Broadcast Multicast Service for More Efficient
          Mobile Video Streaming”, ISM'19, San Diego, CA, USA, December 2019.
          </p>
          <p>
          - Uitto, M. & Hoppari, M. & Heikkilä, T. & Isto, P. & Anttonen, A. &
          Mämmelä, A. :“Remote Control Demonstrator Development in 5G Test
          Network”, EuCNC'19, Valencia, Spain, June 2019.
          </p>
          <p>
          - Hiroki Iwata, Kenta Umebayashi, Ahmed Al-Tahmeesschi, Miguel
          Lopez-Benitez and Janne Lehtomäki "Time and Frequency Varying Noise
          Floor Estimation for Spectrum Usage Measurement" WCNC'19, Marrakech,
          Morocco, April 2019.
          </p>
          <p>
          - Yuya Aoki, Takeo Fujii, “Spectrum database construction based on HMM
          and spectrum sharing in multiple primary users environment,” Proc.
          ICAIIC2019, Okinawa, Japan, Feb. 2019.
          </p>
          <p>
          - Hirofumi Nakajo, Yuya Aoki, Keita Katagiri, Takeo Fuji "High Density
          Spectrum Sharing Method among Micro Operators considering Spectrum
          Database," IWSS2019, Marrakech, Morocco, April 2019.
          </p>
          <p>
          - T. Hara, A. Stoica, K. Ishibashi, and G. Abreu, “On the Sum-Rate
          Capacity and Spectral Efficiency Gains of Massively Concurrent NOMA
          Systems,” WCNC'19, Marrakech, Morocco, Apr. 2019.
          </p>
          <p>
          - Keita Katagiri, Keita Onose, Koya Sato, Kei Inage, Takeo Fujii,
          "Highly accurate estimation of radio propagation using model
          classifier," IEICE Tech. Rep., SR2018-108, Jan. 2019.
          </p>
          <p>
          - Hirofumi Nakajo, Yuya Aoki, Keita Katagiri, Takeo Fujii, "High density
          spectrum sharing method among micro operators considering mesurement-
          based spectrum database," IEICE Tech. Rep., SR2018-115, Jan. 2019.
          </p>
          
          <p>
          -Hiroki Iwata, Kenta Umebayash, Ahmed Al-Tahmeesschi, Miguel
          Lopez-Benitez, "Neural Network-based Channel Occupancy Rate Prediction"
          IEICE SmartCom SR2018-88, pp. 75-82, Oct. 2018.
          </p>
          <p>
          -Ryo Sato, Kenta Umebayashi, K. B. Shashika Manosha, "Efficient channel
          allocation for Citizens broadband radio service/spectrum access system"
          IEICE SmartCom SR2018-89, pp. 83-84, Oct. 2018.
          </p>
          <p>
          - Akihisa Abe, Yuya Aoki, Takeo Fujii, "Time Series Analysis of Multiple
          Primary Users by Cooperative Sensing based on SDAR Algorithm," The 5th
          International Workshop on Smart Wireless Communications, Bangkok,
          Thailand, Oct. 2018.
          </p>
          <p>
          - Yuya Aoki, Takeo Fujii, "Spectrum Sharing in Cooperation with Time-
          Space Radio Environment Database," The 5th International Workshop on
          Smart Wireless Communications, Bangkok, Thailand, Oct. 2018.
          </p>
          <p>
          - Hirofumi Nakajo, Yuya Aoki, Keita Katagiri, Takeo Fujii, "Spatial
          Spectrum Sharing among Micro Operators considering Distribution on
          Measurement-based Spectrum Database," The 5th International Workshop on
          Smart Wireless Communications, Bangkok, Thailand, Oct. 2018.
          </p>
          <p>
          - Ryuji Kobayashi and Koichi Adachi, “Computational Capability and Radio
          Resource Allocation for Mobile Edge Computing,” The 5th International
          Workshop on Smart Wireless Communications, Bangkok, Thailand, Oct. 2018.
          </p>
          <p>
          - Takanori Hara, Koji Ishibashi, Soon X. Ng, and Lajos Hanzo, “Low-
          Complexity Generator Polynomial Search for Turbo Trellis-Coded Spatial
          Modulation Using Symbol-based EXIT Charts,” in Proc. 10th International
          Symposium on Turbo Codes & Iterative Information Processing, Hong-Kong,
          Dec. 2018. (Accepted)
          </p>
          <p>
          -Kazuya Ohira, Koji Ishibashi, "Aggregate-Compression-Aided Subcarrier
          IQ Index Modulation with Discreteness-Aware Fast Iterative Shrinkage-
          Thresholding Algorithm,” Symposium on Information Theory and Its
          Applications (SITA) 2018, Fukushima, Japan, Dec. 2018.
          </p>
          <p>
          - Yuya Aoki, Takeo Fujii, "Construction of Time-Space Radio
          Environment Database using HMM for Cooperative Sensing," International
          Conference on Computing, Networking and Communications (ICNC 2019),
          Honolulu, USA, Feb. 2019.
          </p>
        </div>
        <div className="publications_invited_speeches">
          <div className="title">Invited speechs, Keynotes and panels</div>
          <p>
          - Arto Matilainen, "H2020 5G-ENHANCE â€“ An introduction to a Practical
          Use Case", HIMMS & Health2.0 European Conference, 10 June 2019.
          </p>
          <p>
          - Haesik kim and Kenta Umebayashi, “5G Enhanced Mobile Broadband Access
          Networks in Crowded Environments”, Smartcom2018.
          </p>
          <p>
          - Kenta Umebayshi, "5G Enhanced Mobile Broadband Access Networks in
          Crowded Environments", 7th EU-Japan Symposium on ICT Research and
          Innovation, 3 Dec. 2018.
          </p>
          <p>
          - Haesik Kim, Takeo Fujii and etc. "Smart Spectrum Exploitation in
          Current and Future Wireless Communication Systems", the 5th IEEE WCNC
          International Workshop on Smart Spectrum (IWSS 2019) (in conjunction
          with IEEE WCNC 2019), panel discussion.
          </p>
        </div>
        <div className="publications_3gpp">
          <div className="title">3GPP standard contributions</div>
          <p>
          - S2-188911, S. Filin, H. Murakami, K. Ishizu, "FS_Vertical_LAN: Update
          to Key Issue #1: Network discovery, selection and access control for
          type-a and type-b networks," Aug 2018.
          </p>
          <p>
          - S2-1810551, S. Filin, H. Murakami, "FS_Vertical_LAN: New solution for
          network identification, discovery, and selection for non-public
          networks," Oct 2018.
          </p>
          <p>- 3GPP S2-186675, NICT, "Updates to ATSSS Solution 1."</p>
          <p>- 3GPP S2-188152, NICT, "FS_Vertical_LAN: Update to Key Issue #1:
          Network discovery, selection and access control for type-a and type-b
          networks"</p>
          
          <p>- 3GPP S2-188453, NICT "FS_Vertical_LAN: Update to Key Issue #1: Network
          discovery, selection and access control for type-a and type-b networks"</p>
          
          <p>- 3GPP S2-188911, NICT "FS_Vertical_LAN: Update to Key Issue #1: Network
          discovery, selection and access control for type-a and type-b networks"</p>
          
          <p>- 3GPP S2-188502, Nokia, Nokia Shanghai Bell, Qualcomm, Samsung, Intel,
          NICT "Key issue on accessing PLMN services via type-a network and vice
          versa"</p>
          
          <p>- 3GPP S2-1810551, NICT "FS_Vertical_LAN: New solution for network
          identification, discovery, and selection for non-public networks"</p>
          
          <p>- 3GPP S2-1811790, NICT "FS_Vertical_LAN: Proposed conclusion options
          for solution to key issues 1 and 2 for stand-alone NPN" </p>
          <p>- 3GPP S2-1900433, NEC, Interdigital, AT&T, KDDI, NICT, Convidawireless,
          "Handling of slice based overload control at NG-RAN"</p>
          
          <p>- 3GPP S2-1900434, NEC, Interdigital, AT&T, KDDI, NICT, Convidawireless,
          "5G-AN sending a wait time for each congested slice (option 1)"</p>
          
          <p>- 3GPP S2-1900435, NEC, Interdigital, AT&T, KDDI, NICT, Convidawireless,
          "5G-AN sending one wait time for all congested slices (option 2)"</p>
          
          <p>- 3GPP S2-1900686, NEC, Interdigital, AT&T, KDDI, NICT, Convidawireless,
          "Handling of slice based overload control at NG-RAN"</p>
          
          <p>- 3GPP S2-1901109, Qualcomm, NICT "TS 23.501: Introducing Non-public
          network"</p>
          
          <p>- 3GPP S2-1901329, Qualcomm, NICT, Intel, Ericsson "TS 23.501:
          Introducing Non-public network"</p>
          
          <p>- 3GPP S2-1901646, NICT, "FS_Vertical_LAN: Proposed solution to EN on
          the list of NIDs per PLMN ID per cell for stand-alone NPN"</p>
          
          <p>- 3GPP S2-1901764, Qualcomm Incorporated, NICT, Intel, Ericsson,
          InterDigital, "TS 23.501: Introducing Non-public network"</p>
          
          <p>- 3GPP S2-1903448, NEC, Interdigital, NEC, ATT, KDDI, NICT,
          Convidawireless, Nokia, "23.501 CR1150 (Rel-16, 'C'): 5G-AN sending one
          wait time for all congested slices"</p>
          
          <p>- 3GPP S2-1904485, NEC, Interdigital, NEC, ATT, KDDI, NICT,
          Convidawireless, Nokia, "23.501 CR1150 (Rel-16, 'C'): 5G-AN sending one
          wait time for all congested slices"</p>
          
          <p>- 3GPP S2-1903647, Nokia, Nokia Shanghai Bell, NTT DoCoMo, Interdigital,
          Verizon, ETRI, SK Telecom, NICT, AT&T, Telecom Italia, BMWi, KDDI,
          Siemens, "Study on enhanced support of Industrial IoT"</p>
          
        </div>
      </div>
    </>
  );
};

export default Publications;
