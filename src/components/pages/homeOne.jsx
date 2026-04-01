import "./OP.css";
import homeImg from "./mediapages/stairs.jpg";

const homeOne = () => {
  return (
    <div className="hero">
      <img src={homeImg} alt="wedding" className="hero-bg" />

      <div className="overlay2">
        <div className="place">
          <h2 className="top-text">The Wedding of</h2>
          <h1 className="names">Adrean & Justinne</h1>
          <h2 className="top-text">05.02.2026</h2>
        </div>
      </div>
    </div>
  );
};

export default homeOne;
