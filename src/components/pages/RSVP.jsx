import React, { useEffect, useRef } from "react";
import "./RSVP.css";
import bgPattern from "./mediapages/yea.jpg";

const RSVP = () => {
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
    <section ref={sectionRef} className="rsvp">
      {/* background */}
      <img src={bgPattern} alt="" className="rsvp-bg" />

      <div className="rsvp-content">
        {/* TOP DIVIDER */}

        {/* TITLE */}
        <h1 className="rsvp-title">Rsvp</h1>

        {/* MESSAGE */}
        <p className="rsvp-text">
          We look forward to celebrating with you. <br />
          We have reserved one (1) seat/s for you. <br />
          The favor of your reply is requested on or before April 18, 2026.
        </p>

        <p className="rsvp-text">
          Kindly confirm through the google form below or via SMS 09483736446
          <br />
          Mr.Luigi Cabrera.
        </p>

        {/* FORM EMBED */}
        <div className="rsvp-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfiDzQPr_AtjGbGpdb-2lneYrXyPikJfIZEhbx36ywjyi3ZjQ/viewform?embedded=true"
            width="640"
            height="793"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="RSVP Form"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        {/* BOTTOM DIVIDER */}
      </div>
    </section>
  );
};

export default RSVP;
