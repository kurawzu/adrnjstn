import React from "react";
import "./Entourage.css";
import bgPattern from "./mediapages/beige.png";

const Entourage = () => {
  return (
    <section className="entourage">
      <img src={bgPattern} alt="" className="entourage-bg" />

      <div className="entourage-content">
        {/* TOP TEXT */}
        <h2 className="script">To assist us with our needs...</h2>

        {/* BEST MAN */}
        <div className="block">
          <h3>BEST MAN</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Isaiah Gideon Claus D. Mapanao</p>
        </div>

        {/* MAID OF HONOR */}
        <div className="block">
          <h3>MAID OF HONOR</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Alessandra Julia S. Fernandez</p>
        </div>

        {/* SECOND SCRIPT */}
        <h2 className="script second">To guide our ways ahead...</h2>

        {/* GROOMSMEN */}
        <div className="block">
          <h3>GROOMSMEN</h3>
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
        <div className="block">
          <h3>BRIDESMAID</h3>
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
        <div className="block">
          <h3>RING BEARER</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Steven Luis C. Consolacion</p>
        </div>

        {/* COIN BEARER */}
        <div className="block">
          <h3>COIN BEARER</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Genaro Angelo Dispo Soriano</p>
        </div>

        {/* BIBLE BEARER */}
        <div className="block">
          <h3>BIBLE BEARER</h3>
          {/* <div className="divider"></div> */}
          <p className="highlight">Zymon Armel Bareng</p>
        </div>

        {/* FLOWER GIRLS */}
        <div className="block">
          <h3>FLOWER GIRLS</h3>
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
