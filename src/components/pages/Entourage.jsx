import React from "react";
import "./Entourage.css";
import "./Sponsors.css";
import bgPattern from "./mediapages/blue.png";

const Entourage = () => {
  return (
    <section className="entourage">
      <img src={bgPattern} alt="" className="entourage-bg" />

      <div className="entourage-content">
        {/* TOP TEXT */}
        <h2 className="sponsors-title">To assist us with our needs...</h2>

        {/* BEST MAN */}
        <div className="secondary-block">
          <h3>Best Man</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Isaiah Gideon Claus D. Mapanao</p>
        </div>

        {/* MAID OF HONOR */}
        <div className="secondary-block">
          <h3>Maid of Honor</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Alessandra Julia S. Fernandez</p>
        </div>
        <br />

        {/* SECOND SCRIPT */}
        <h2 className="sponsors-title">To guide our ways ahead...</h2>

        {/* GROOMSMEN */}
        <div className="secondary-block">
          <h3>Groomsmen</h3>
          {/* <div className="divider"></div> */}
          <div className="list">
            <p>Isaac Ninoi D. Mapanao</p>
            <p>Francis S. Consolacion</p>
            <p>Neric I. Magleo</p>
            <p>Jess Rowel L. Julian</p>
            <p>Christian Cyril Sarzaba</p>
            <p>Renci Victorio</p>
          </div>
        </div>

        {/* BRIDESMAID */}
        <div className="secondary-block">
          <h3>Bridesmaid</h3>
          {/* <div className="divider"></div> */}
          <div className="list">
            <p>Hazel Anne C. Estillero</p>
            <p>Fevi Grace V. Mapanao</p>
            <p>Mariel D. Mapanao</p>
            <p>Hiezel Jhoy O. Ubando</p>
            <p>Gina Mae F. Cerezo</p>
            <p>Sandra F. Cerezo</p>
          </div>
        </div>

        {/* RING BEARER */}
        <div className="secondary-block">
          <h3>Ring Bearer</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Steven Luis C. Consolacion</p>
        </div>

        {/* COIN BEARER */}
        <div className="secondary-block">
          <h3>Coin Bearer</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Genaro Angelo Dispo Soriano</p>
        </div>

        {/* BIBLE BEARER */}
        <div className="secondary-block">
          <h3>Bible Bearer</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Zymon Armel Bareng</p>
        </div>

        {/* FLOWER GIRLS */}
        <div className="secondary-block">
          <h3>Flower Girls</h3>
          {/* <div className="divider"></div> */}
          <div className="list">
            <p>Rychz Aviella F. Labinghisa</p>
            <p>Erica Gyelle A. Bautista</p>
            <p>Brielle Chalcedony R. Mapanao</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entourage;
