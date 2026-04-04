import React, { useEffect, useRef } from "react";
import "./Sponsors.css";
import bgPattern from "./mediapages/blue.png";

const Sponsors = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="sponsors">
      <img src={bgPattern} alt="" className="sponsors-bg" />

      <div className="sponsors-content">
        {/* PRINCIPAL */}
        <h1 className="sponsors-title">Principal Sponsors</h1>

        <div className="">
          <div className="rsvp-divider"></div>
          {/* add divider if gusto linya sa may className div */}
          <span></span>
        </div>

        <div className="principal-grid">
          <div>
            <p>Constante B. Agbayani</p>
            <p>Gregorio Z. Nipal Jr.</p>
            <p>Alfredo C. Martinez II</p>
            <p>Julius P. Consolacion</p>
            <p>Elizaldy R. Ducusin</p>
            <p>Ferdinand C. Mapanao</p>
            <p>Jonathan P. De Guzman</p>
            <p>Ludger L. Decano</p>
            <p>Jaime L. Malabanan</p>
            <p>Pedro C. Cerezo</p>
            <p>Arnel F. Lauzon</p>
            <p>Dennis A. Lastimosa</p>
            <p>Crispino B. De Leon</p>
            <p>Regie D. Basila</p>
            <p>Tedie P. Tabiasura</p>
            <p>Raul M. Calamiong</p>
          </div>

          <div>
            <p>Marlyn E. Agbayani</p>
            <p>Sara Rusela U. Lazo</p>
            <p>Lea M. Fajardo</p>
            <p>Consuelo Consolacion</p>
            <p>Edna M. Ballesta</p>
            <p>Doriz Vida V. Mapanao</p>
            <p>Teresita Menan K. De Guzman</p>
            <p>Rosalie Pinky T. Decano</p>
            <p>Arnelie D. Soriano</p>
            <p>Arlene S. Bautista</p>
            <p>Manette J. Lauzon</p>
            <p>Myra D. Lastimosa</p>
            <p>Teresita F. De Leon</p>
            <p>Mary Joy B. Basila</p>
            <p>Elma S. Tabiasure</p>
            <p>Francisca E. Calamiong</p>
          </div>
        </div>

        {/* SECONDARY */}
        <h1 className="sponsors-title secondary">Secondary Sponsors</h1>

        <div className="">
          <div className="rsvp-divider"></div>{" "}
          {/* add divider if gusto linya sa may className div */}
          <span></span>
        </div>

        <div className="secondary-block">
          <h3>To light our path...</h3>
          <p>Roderick P. Labinghisa</p>
          <p>Allyzah Mae F. Labinghisa</p>

          <h3>To clothe us together...</h3>
          <p>Christian Mayo M. Abando</p>
          <p>Charlene R. Alvarado</p>

          <h3>To bind us as one...</h3>
          <p>Anthony A. Ulit</p>
          <p>Krystalllyn Meijalle Caballero</p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
