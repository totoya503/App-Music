import { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import MusicSection from "./components/MusicSection";
import NowPlaying from "./components/NowPlaying";
import PlayerBar from "./components/PlayerBar";
import Login from "./auth/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router";

function App() {
  const [user, setUser] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
      <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <HeaderBar />
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ flex: 3 }}>
          <MusicSection />
        </div>
        <div style={{ flex: 1 }}>
          <NowPlaying currentTrack={currentTrack} />
        </div>
      </div>
      <PlayerBar />
    </div>
    <Routes>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
