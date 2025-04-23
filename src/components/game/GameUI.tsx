
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Character } from "./types";
import { Progress } from "@/components/ui/progress";

interface GameUIProps {
  character: Character | null;
}

const GameUI: React.FC<GameUIProps> = ({ character }) => {
  const [questLog, setQuestLog] = useState<string[]>([
    "Welcome to Techropolis! Speak with the Quest Giver to begin your first task.",
    "HINT: Use WASD to move around and click on NPCs to interact with them."
  ]);
  
  const [isQuestLogOpen, setIsQuestLogOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  if (!character) return null;

  // Calculate XP percentage
  const xpNeeded = character.level * 1000;
  const xpPercentage = (character.experience / xpNeeded) * 100;

  return (
    <div className="p-4 bg-black/80 text-white border-t-2 border-purple-600">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-lg font-bold">
            {character.level}
          </div>
          <div>
            <div className="text-sm font-bold">{character.role}</div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-400">XP:</div>
              <Progress value={xpPercentage} className="h-2 w-24" />
              <div className="text-xs text-gray-400">
                {character.experience}/{xpNeeded}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setIsQuestLogOpen(!isQuestLogOpen);
              setIsInventoryOpen(false);
              setIsStatsOpen(false);
            }}
            className={isQuestLogOpen ? "bg-purple-800" : ""}
          >
            Quest Log
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setIsInventoryOpen(!isInventoryOpen);
              setIsQuestLogOpen(false);
              setIsStatsOpen(false);
            }}
            className={isInventoryOpen ? "bg-purple-800" : ""}
          >
            Inventory
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setIsStatsOpen(!isStatsOpen);
              setIsQuestLogOpen(false);
              setIsInventoryOpen(false);
            }}
            className={isStatsOpen ? "bg-purple-800" : ""}
          >
            Stats
          </Button>
        </div>
      </div>
      
      {/* Quest Log Panel */}
      {isQuestLogOpen && (
        <div className="bg-gray-900 p-4 rounded-md border border-purple-600 mb-2 max-h-60 overflow-y-auto">
          <h3 className="text-lg font-bold mb-2">Quest Log</h3>
          <ul className="space-y-2">
            {questLog.map((entry, index) => (
              <li key={index} className="text-sm text-gray-300">• {entry}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Inventory Panel */}
      {isInventoryOpen && (
        <div className="bg-gray-900 p-4 rounded-md border border-purple-600 mb-2">
          <h3 className="text-lg font-bold mb-2">Inventory</h3>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-md flex items-center justify-center">
                {i === 0 && (
                  <div className="text-xs text-center">
                    Laptop
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Stats Panel */}
      {isStatsOpen && (
        <div className="bg-gray-900 p-4 rounded-md border border-purple-600 mb-2">
          <h3 className="text-lg font-bold mb-2">Character Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Attributes</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm">Strength</span>
                  <span className="text-sm font-bold">{character.stats.strength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Intellect</span>
                  <span className="text-sm font-bold">{character.stats.intellect}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Charisma</span>
                  <span className="text-sm font-bold">{character.stats.charisma}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Adaptability</span>
                  <span className="text-sm font-bold">{character.stats.adaptability}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Skills</h4>
              <ul className="text-sm space-y-1">
                {character.skills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameUI;
