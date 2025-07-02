import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTopTracks } from "../api/spotify";

export default function MusicSection() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchTracks() {
      const data = await getTopTracks();
      setTracks(data);
    }
    fetchTracks();
  }, []);

  return (
    <Section>
      <Title>Nuevos Lanzamientos</Title>
      <TrackList>
        {tracks.map((album) => (
          <Track key={album.id}>
            <p>{album.name}</p>
            <small>{album.artists[0].name}</small>
          </Track>
        ))}
      </TrackList>
    </Section>
  );
}

const Section = styled.section`
  background-color: #1b1b1b;
  color: white;
  padding: 20px;
  flex: 3;
  overflow-y: auto;
  height: 100%;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Track = styled.div`
  background-color: #272727;
  padding: 10px;
  border-radius: 8px;
`;
