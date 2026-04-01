import { useState, useRef, useEffect } from "react";
import "./App.css";
import OP from "./components/pages/OP";
import rskitolMusic from "./components/pages/mediapages/rskitol.mp3";
import FirstDivider from "./components/pages/firstDivider";
import HomeOne from "./components/pages/homeOne";
import NCountdown from "./components/pages/NCountdown";
import EventCard from "./components/pages/EventCard";
import Sponsors from "./components/pages/Sponsors";
import Entourage from "./components/pages/Entourage";
import GiftsAttire from "./components/pages/GiftsAttire";
import RSVP from "./components/pages/RSVP";
import Couplecard from "./components/pages/Couplecard";

function App() {
  const [showHero, setShowHero] = useState(true);
  const audioRef = useRef(null);

  const handleStart = () => {
    setShowHero(false);

    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 1;
      audio.play();
    }
  };
  useEffect(() => {
    if (showHero) {
      document.body.style.overflow = "hidden"; // 🚫 disable scroll
    } else {
      document.body.style.overflow = "auto"; // ✅ enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [showHero]);

  return (
    <>
      {showHero && <OP onStart={handleStart} />}

      {/* hidden audio */}
      <audio ref={audioRef} src={rskitolMusic} />
      <HomeOne />
      <EventCard />
      <NCountdown />
      <Couplecard />
      <Entourage />
      <Sponsors />
      <FirstDivider />
      <GiftsAttire />

      <RSVP />
    </>
  );
}

export default App;
