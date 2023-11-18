export async function wordsGenerator(
  length: number,
  difficulty: string
): Promise<string[]> {
  if (!length || !difficulty) {
    throw new Error("Invalid length or difficulty");
  }

  try {
    const response = await fetch("../data/wordlist.json");
    if (!response.ok) {
      throw new Error(
        "Network response was not ok while attempting to fetch wordsList."
      );
    }

    const wordsArray = await response.json();

    const difficultyMapping = new Map([
      ["easy", 5],
      ["medium", 10],
      ["hard", 15]
    ]);
    const difficultyValue = difficultyMapping.get(difficulty);
    const minWordLength =
      difficultyValue !== undefined ? difficultyValue - 5 : 0;
    const maxWordLength = difficultyValue || 10;

    // Filter out words that are not within range of the min and max word lengths
    const filteredWordsArray = wordsArray.filter(
      (word: string) =>
        minWordLength <= word.length && word.length <= maxWordLength
    );

    // Ensure the requested length does not exceed the array size
    length = Math.min(filteredWordsArray.length, length);
    let result = [];
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * filteredWordsArray.length);
      result.push(filteredWordsArray[randomIndex]);
      filteredWordsArray.splice(randomIndex, 1); // Remove the word to avoid duplicates
    }

    return result;
  } catch (error) {
    console.error("Error fetching or processing words:", error);
    throw error; // Re-throw the error to handle it outside of the function
  }
}
