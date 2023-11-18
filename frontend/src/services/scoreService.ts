import axios from "axios";
import { API_BASE_URL } from "../config.ts";

export async function saveScore(userId: string, score: number): Promise<void> {
  const data = {
    userId,
    value: score
  };

  // Don't attempt to save the score if it is null or zero
  if (!score || score == 0) {
    return;
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/score`, data);
    console.log("Successfully saved score:", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error saving score:",
        error.response?.data || error.message
      );
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error;
  }
}
