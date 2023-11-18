/**
 * Calculate the words per minute (WPM).
 * @param lastWordIdx - The index of the last word the player was on.
 * @param wordsStatuses - An array containing the className of each game word representing each word as correct/incorrect.
 * @param startTime - The starting time for the game.
 * @returns The calculated WPM.
 */
export function calculateWPM(
  lastWordIdx: number,
  wordsStatuses: string[],
  startTime: number
): number {
  let correctWords = 0;
  const gameMinutes = startTime / 60;

  for (let wordIdx = 0; wordIdx < lastWordIdx; wordIdx++) {
    if (wordsStatuses[wordIdx] !== "word incorrect") {
      correctWords++;
    }
  }

  const wpm = correctWords / gameMinutes;
  return wpm;
}
