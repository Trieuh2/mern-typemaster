import { useGameContext } from "../context/GameContext";
import { Letter } from "./Letter";

type WordProps = {
  wordIdx: number;
};

export function Word({ wordIdx }: WordProps) {
  const { wordsDisplayTexts, wordsClassNames } = useGameContext();

  return (
    <>
      <div className={wordsClassNames[wordIdx]}>
        {wordsDisplayTexts[wordIdx].split("").map((letter, letterIdx) => (
          <Letter
            key={letterIdx}
            wordIdx={wordIdx}
            letterIdx={letterIdx}
            char={letter}
          />
        ))}
      </div>
    </>
  );
}

export default Word;
