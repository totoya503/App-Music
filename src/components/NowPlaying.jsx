import styled from "styled-components";

export default function NowPlaying({ currentTrack }) {
    {{/* hubiera querido meter mas informacion pero spotify no retorna tanta data */}}
    return (
        <Aside>
        <Title>Ahora suena:</Title>
        {currentTrack ? (
            <TrackInfo>    
                {currentTrack.image && 
                (<AlbumArt src={currentTrack.image} alt="Portada del álbum" />)}
                <TrackName>{currentTrack.name}</TrackName>
                <ArtistName>{currentTrack.artist}</ArtistName>
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

const AlbumArt = styled.img`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const TrackName = styled.h4`
    font-size: 18px;
    margin: 0;
`;

const ArtistName = styled.p`
    font-size: 14px;
    color: #b3b3b3;
    margin: 0;
`;
