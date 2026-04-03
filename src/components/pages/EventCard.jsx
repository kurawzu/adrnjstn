import React, { useEffect, useRef } from "react";
import "./EventCard.css";
import bgPattern from "./mediapages/blue.png";

const EventCard = () => {
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
    <section ref={sectionRef} className="event-card">
      <img src={bgPattern} alt="" className="event-bg" />

      <div className="event-content">
        {/* CEREMONY */}
        <div className="event-date">
          <h2 className="bru">Saturday</h2>

          <div className="event-month">
            <h2>May</h2>
            <h2>02</h2>
            <h2>2026</h2>
          </div>

          <h2>
            1:00 <span className="bru">PM</span>
          </h2>
        </div>

        <div className="">
          <div className="rsvp-divider2"></div>
          <span></span>
        </div>

        <h1 className="event-title">Holy Matrimony</h1>

        <p className="event-place">
          <strong>
            {" "}
            Our Lady of Purification Parish <br />
          </strong>
        </p>

        <p className="event-address">
          Binmaley, Pangasinan <br />
          (Archdiocese of Lingayen - Dagupan)
        </p>

        <a
          href="https://maps.app.goo.gl/56S1HF9sLUtjH1ZPA"
          target="_blank"
          rel="noreferrer"
          className="location-btn"
        >
          VIEW LOCATION
        </a>

        {/* 🔥 RECEPTION SECTION */}
        <div className="reception-section">
          <div className="">
            <div className="rsvp-divider2"></div>
            <span></span>
          </div>

          <h1 className="event-title reception-title">Reception</h1>

          <p className="event-place">
            <strong>Jech's Grand Pavilion </strong>
          </p>

          <p className="event-address">Calasiao, Pangasinan</p>

          <a
            href="https://maps.google.com/?q=IECS Grand Pavilion Calasiao Pangasinan"
            target="_blank"
            rel="noreferrer"
            className="location-btn"
          >
            VIEW LOCATION
          </a>

          <div className="">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
