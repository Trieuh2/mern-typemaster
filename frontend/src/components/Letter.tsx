import { useGameContext } from "../context/GameContext";

type LetterProps = {
  char: string;
  letterIdx: number;
  wordIdx: number;
};

export function Letter({ char, letterIdx, wordIdx }: LetterProps) {
  const { lettersClassNames } = useGameContext();

  return (
    <>
      <span className={lettersClassNames[wordIdx][letterIdx]}>{char}</span>
    </>
  );
}

export default Letter;
