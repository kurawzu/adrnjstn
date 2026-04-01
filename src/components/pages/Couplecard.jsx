import React from "react";
import "./Couplecard.css";
import pattern from "./mediapages/blue.png";
import groom from "./mediapages/groom.jpg";
import bride from "./mediapages/bride.jpg";

const Couplecard = () => {
  return (
    <section className="couple-card">
      <img src={pattern} alt="" className="card-bg" />

      <div className="card-content">
        <h1 className="card-title">Mapanao & Fernandez</h1>
        <h3 className="card-sub">NUPTIALS</h3>

        <div className="couple-wrapper">
          {/* GROOM */}
          <div className="person left">
            <div className="img-wrapper fancy">
              <img src={groom} alt="groom" />
            </div>

            <h2 className="name">Adrean Ysmael D. Mapanao</h2>

            <p className="parents-title">The son of</p>
            <p className="parents">
              Mr. Ismael C. Mapanao <br />
              Mrs. Mariepe D. Mapanao
            </p>
          </div>

          {/* CENTER LINE + AMP */}
          <div className="center-piece">
            <h1 className="amp">&</h1>
          </div>

          {/* BRIDE */}
          <div className="person right">
            <div className="img-wrapper fancy">
              <img src={bride} alt="bride" />
            </div>

            <h2 className="name">Justinne S. Fernandez</h2>

            <p className="parents-title">The daughter of</p>
            <p className="parents">
              Mr. Julio D. Fernandez Jr. <br />
              Mrs. Amelia D. Fernandez
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couplecard;
