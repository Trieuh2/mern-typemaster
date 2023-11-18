import Logo from "../components/Logo.tsx";
import Info from "../components/Info.tsx";
import WordBox from "../components/WordBox.tsx";
import "../style.css";
import { GameContextProvider } from "../context/GameContext.tsx";
import { NewGameButton } from "../components/NewGameButton.tsx";
import Leaderboard from "../components/Leaderboard.tsx";
import SocialMedia from "../components/SocialMedia.tsx";

function Home() {
  return (
    <GameContextProvider>
      <div className="main-container">
        <div className="game-container">
          <div className="game">
            <Logo />
            <div className="flex-container">
              <Info />
              <NewGameButton />
            </div>
            <WordBox />
          </div>
          <Leaderboard />
        </div>
        <SocialMedia />
      </div>
    </GameContextProvider>
  );
}

export default Home;
