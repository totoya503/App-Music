export default function NowPlaying({ currentTrack }) {
  return (
    <aside style={{ backgroundColor: "#1e1e1e", padding: "10px", color: "white" }}>
      <h4>Ahora suena:</h4>
      {currentTrack ? (
        <div>
          <p>{currentTrack.name}</p>
          <p>{currentTrack.artist}</p>
        </div>
      ) : (
        <p>Nada reproduciéndose</p>
      )}
    </aside>
  );
}
