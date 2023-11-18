import { useGameContext } from "../context/GameContext";

type InfoProps = {};

export function Info({}: InfoProps) {
  const gameContext = useGameContext();
  const { timer, wpm } = gameContext;

  return (
    <>
      <div className="flex-container">
        {timer > 0 ? (
          <div className="info">{timer}</div>
        ) : (
          <div className="info">WPM: {wpm}</div>
        )}
      </div>
    </>
  );
}

export default Info;
