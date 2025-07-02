import { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import MusicSection from "./components/MusicSection";
import NowPlaying from "./components/NowPlaying";
import PlayerBar from "./components/PlayerBar";
import Login from "./auth/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import styled from "styled-components";

function App() {
  const [user, setUser] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
      <BrowserRouter>
          <Layout>
            <HeaderBar />
            <MainContent>
              <MusicSection />
              <NowPlaying currentTrack={currentTrack} />
            </MainContent>
            <PlayerBar />
          </Layout>
      <Routes>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;