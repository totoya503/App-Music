import { useEffect, useState } from "react";
import styled from "styled-components";
import { searchTracks } from "../api/spotify";


export default function MusicSection({ tracks, onSelectTrack }) {
    return (
    <Section>
        <TrackList>
            {tracks.map((track) => (<Track key={track.id} onClick={() => 
onSelectTrack({
name: track.name,
artist: track.artists[0].name,
image: track.album?.images?.[0]?.url || "", // Imagen del álbum o eso espero
})
}>
                <p>{track.name}</p>
                <small>{track.artists[0].name}</small>
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
