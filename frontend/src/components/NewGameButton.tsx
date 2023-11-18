import { useGameContext } from "../context/GameContext.tsx";

export function NewGameButton() {
  const { fetchWordsAndInitialize } = useGameContext();

  return (
    <>
      <button onClick={fetchWordsAndInitialize}>New Game</button>
    </>
  );
}
