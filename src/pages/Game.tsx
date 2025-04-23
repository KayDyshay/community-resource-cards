
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import GameUI from "@/components/game/GameUI";
import GameWorld from "@/components/game/GameWorld";
import CharacterSelection from "@/components/game/CharacterSelection";
import { Button } from "@/components/ui/button";
import ChatBot from "@/components/ChatBot";
import Loading from "@/components/game/Loading";

export type GameStage = "intro" | "character-selection" | "playing";
export type Character = {
  role: string;
  stats: { 
    strength: number; 
    intellect: number; 
    charisma: number; 
    adaptability: number;
  };
  level: number;
  experience: number;
  skills: string[];
};

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
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
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
    <div className="flex flex-col items-center justify-center h-full p-4 space-y-8 bg-gradient-to-b from-black to-purple-900">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-white newspaper-title mb-4">
        SideQuest Society
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-purple-300 italic">
        The RPG of Tech Career Mastery
      </h2>
      
      <div className="max-w-2xl text-center space-y-4 mb-8">
        <p className="text-lg">
          Welcome to Techropolis, a vibrant virtual city where tech professionals 
          battle real-world challenges: tight deadlines, system bugs, and demanding stakeholders.
        </p>
        <p className="text-lg">
          Choose your role, develop your skills, and work toward career mastery in this
          AI-powered professional development journey.
        </p>
      </div>
      
      <Button 
        onClick={onStart} 
        className="text-xl py-6 px-10 bg-purple-600 hover:bg-purple-700"
      >
        Begin Your Journey
      </Button>
    </div>
  );
};

export default Game;
