import Image from "next/image";
import "./mini-game.css";

export default function Minigame() {
  return (
    <div className="minigame-container">
      <h2>Mini Game</h2>
      <p>Test your skills with this mini game!</p>
      <div className="game">
        <Image
          src="/path/to/your/game-image.png"
          alt="Mini Game"
          width={500}
          height={500}
        />
        {/* Add your game logic here */}
      </div>
    </div>
  );
}
