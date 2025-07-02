import { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import MusicSection from "./components/MusicSection";
import NowPlaying from "./components/NowPlaying";
import PlayerBar from "./components/PlayerBar";
import Login from "./auth/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import styled from "styled-components";
import { searchTracks } from "./api/spotify";

function App() {
  const [user, setUser] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [tracks, setTracks] = useState([]);

  
const handleSearch = async (query) => {
  //console.log("buscando",query);
  const results = await searchTracks(query);
  //console.log("Resultados:", results);
  setTracks(results);
};

if (!user) return <Login setUser={setUser} />;

  return (
    <BrowserRouter>
      <Layout>
        <HeaderBar onSearch={handleSearch} />
        <MainContent>
          <MusicSection tracks={tracks} onSelectTrack={setCurrentTrack} />
          <NowPlaying currentTrack={currentTrack} />
        </MainContent>
        <PlayerBar currentTrack={currentTrack} />
      </Layout>
    </BrowserRouter>
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