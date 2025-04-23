
// Shared types for the game

export interface CharacterStats {
  strength: number;
  intellect: number;
  charisma: number;
  adaptability: number;
}

export interface Character {
  role: string;
  stats: CharacterStats;
  level: number;
  experience: number;
  skills: string[];
}

export type GameStage = "intro" | "character-selection" | "playing";
