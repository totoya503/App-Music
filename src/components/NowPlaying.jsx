import styled from "styled-components";

export default function NowPlaying({ currentTrack }) {
  return (
    <Aside>
      <Title>Ahora suena:</Title>
      {currentTrack ? (
        <TrackInfo>
          <p><strong>{currentTrack.name}</strong></p>
          <p>{currentTrack.artist}</p>
        </TrackInfo>
      ) : (
        <p>Ninguna canción en reproducción</p>
      )}
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: #2c2c2c;
  color: white;
  padding: 20px;
  flex: 1;
  height: 100%;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const TrackInfo = styled.div`
  margin-top: 10px;
`;
