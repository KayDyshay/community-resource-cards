
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import GameUI from "@/components/game/GameUI";
import GameWorld from "@/components/game/GameWorld";
import CharacterSelection from "@/components/game/CharacterSelection";
import { Button } from "@/components/ui/button";
import ChatBot from "@/components/ChatBot";
import Loading from "@/components/game/Loading";
import { Character, GameStage } from "@/components/game/types";
import { Link } from "react-router-dom";

const Game = () => {
  const [gameStage, setGameStage] = useState<GameStage>("intro");
  const [character, setCharacter] = useState<Character | null>(null);

  const handleStartGame = () => {
    setGameStage("character-selection");
  };

  const handleCharacterSelect = (selectedCharacter: Character) => {
    setCharacter(selectedCharacter);
    setGameStage("playing");
  };

  return (
    <div className="relative w-full h-screen bg-background-dark text-text-primary overflow-hidden">
      {/* Home Link button */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 text-black rounded-xl shadow-lg border border-black hover:bg-[#f5d787] font-serif font-bold text-base sm:text-lg transition-all"
        style={{ textDecoration: "none" }}
        aria-label="Go to Tech Tribune home"
      >
        <span role="img" aria-label="Home">🏠</span>
        <span className="hidden sm:inline">Tech Tribune</span>
      </Link>

      {gameStage === "intro" ? (
        <IntroScreen onStart={handleStartGame} />
      ) : gameStage === "character-selection" ? (
        <CharacterSelection onSelectCharacter={handleCharacterSelect} />
      ) : (
        <div className="w-full h-full">
          <Suspense fallback={<Loading />}>
            <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <GameWorld character={character} />
              <OrbitControls />
              <Environment preset="city" />
            </Canvas>
          </Suspense>
          <div className="absolute bottom-0 left-0 right-0">
            <GameUI character={character} />
          </div>
        </div>
      )}
      <ChatBot />
    </div>
  );
};

const IntroScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 space-y-8 bg-gradient-to-b from-background-dark to-primary-dark">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-text-primary newspaper-title mb-4">
        SideQuest Society
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-text-secondary italic">
        The RPG of Tech Career Mastery
      </h2>
      
      <div className="max-w-2xl text-center space-y-4 mb-8">
        <p className="text-lg text-text-secondary">
          Welcome to Techropolis, a vibrant virtual city where tech professionals 
          battle real-world challenges: tight deadlines, system bugs, and demanding stakeholders.
        </p>
        <p className="text-lg text-text-secondary">
          Choose your role, develop your skills, and work toward career mastery in this
          AI-powered professional development journey.
        </p>
      </div>
      
      <Button 
        onClick={onStart} 
        className="text-xl py-6 px-10 bg-primary hover:bg-primary-dark text-primary-foreground"
      >
        Begin Your Journey
      </Button>
    </div>
  );
};

export default Game;
