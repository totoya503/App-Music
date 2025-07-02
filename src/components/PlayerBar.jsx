import styled from "styled-components";

export default function PlayerBar({currentTrack}) {
    return (
    <Footer>
        <TrackInfo>
            {currentTrack ? (
                <>
                <strong>{currentTrack.name}</strong> — {currentTrack.artist}
                </>
                ) : (
                "Ninguna canción seleccionada"
            )}
        </TrackInfo>
        <Controls>
            <Button>⏮️</Button>
            <Button>⏯️</Button>
            <Button>⏭️</Button>
        </Controls>
    </Footer>
    );
}

const Footer = styled.footer`
    background-color: #121212;
    color: white;
    padding: 12px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;


const TrackInfo = styled.div`
    font-size: 14px;
    text-align: center;
`;

const Controls = styled.div`
    display: flex;
    gap: 20px;
`;

const Button = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;

&:hover {
    color: #1db954;
}
`;
