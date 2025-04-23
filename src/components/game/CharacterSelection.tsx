
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Character } from "@/pages/Game";
import { Code, Layers, LineChart, Palette, Server, ShieldCheck, Terminal, SlidersHorizontal } from "lucide-react";

type CharacterRole = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  baseStats: Character["stats"];
  skills: string[];
};

const characterRoles: CharacterRole[] = [
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Master of vision and strategy, coordinating between teams to build successful products.",
    icon: <SlidersHorizontal className="h-8 w-8" />,
    baseStats: { strength: 6, intellect: 7, charisma: 8, adaptability: 7 },
    skills: ["Stakeholder Management", "Roadmap Planning", "User Research"]
  },
  {
    id: "full-stack",
    title: "Full Stack Developer",
    description: "Versatile coder who can build both front-end interfaces and back-end systems.",
    icon: <Code className="h-8 w-8" />,
    baseStats: { strength: 7, intellect: 8, charisma: 5, adaptability: 7 },
    skills: ["JavaScript Mastery", "API Design", "Database Management"]
  },
  {
    id: "architect",
    title: "Software Architect",
    description: "Strategic thinker who designs scalable, maintainable software systems.",
    icon: <Layers className="h-8 w-8" />,
    baseStats: { strength: 6, intellect: 9, charisma: 6, adaptability: 6 },
    skills: ["System Design", "Technical Leadership", "Performance Optimization"]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Creative problem-solver who crafts intuitive and delightful user experiences.",
    icon: <Palette className="h-8 w-8" />,
    baseStats: { strength: 5, intellect: 7, charisma: 8, adaptability: 7 },
    skills: ["User Research", "Wireframing", "UI Prototyping"]
  },
  {
    id: "it-specialist",
    title: "IT Specialist",
    description: "Infrastructure expert who ensures systems run smoothly and securely.",
    icon: <Server className="h-8 w-8" />,
    baseStats: { strength: 7, intellect: 7, charisma: 5, adaptability: 8 },
    skills: ["Troubleshooting", "System Administration", "Network Security"]
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    description: "Automation wizard who bridges development and operations for faster delivery.",
    icon: <Terminal className="h-8 w-8" />,
    baseStats: { strength: 8, intellect: 7, charisma: 5, adaptability: 8 },
    skills: ["CI/CD Pipeline", "Infrastructure as Code", "Containerization"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analytical mind who extracts insights from complex data to drive decisions.",
    icon: <LineChart className="h-8 w-8" />,
    baseStats: { strength: 5, intellect: 9, charisma: 6, adaptability: 7 },
    skills: ["Machine Learning", "Statistical Analysis", "Data Visualization"]
  },
  {
    id: "security",
    title: "Cybersecurity Specialist",
    description: "Digital guardian who protects systems and data from threats and vulnerabilities.",
    icon: <ShieldCheck className="h-8 w-8" />,
    baseStats: { strength: 7, intellect: 8, charisma: 5, adaptability: 7 },
    skills: ["Threat Analysis", "Penetration Testing", "Security Compliance"]
  },
];

interface CharacterSelectionProps {
  onSelectCharacter: (character: Character) => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({ onSelectCharacter }) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);
  const [characterName, setCharacterName] = useState("");

  const handleSelectRole = (roleId: string) => {
    setSelectedRoleId(roleId);
  };

  const handleStartGame = () => {
    if (!selectedRoleId) return;
    
    const selectedRole = characterRoles.find(role => role.id === selectedRoleId);
    if (!selectedRole) return;
    
    const newCharacter: Character = {
      role: selectedRole.title,
      stats: { ...selectedRole.baseStats },
      level: 1,
      experience: 0,
      skills: [...selectedRole.skills],
    };
    
    onSelectCharacter(newCharacter);
  };

  return (
    <div className="h-full overflow-auto py-8 px-4 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Role</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {characterRoles.map((role) => (
            <Card 
              key={role.id}
              className={`cursor-pointer transition-all border-2 hover:scale-105 ${
                selectedRoleId === role.id 
                  ? "border-purple-500 bg-purple-950" 
                  : "border-gray-700 bg-gray-900 hover:border-purple-400"
              }`}
              onClick={() => handleSelectRole(role.id)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">{role.title}</CardTitle>
                <div className="text-purple-400">{role.icon}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{role.description}</p>
                
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-semibold">Base Stats:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex justify-between">
                      <span className="text-xs">STR</span>
                      <span className="text-xs font-bold">{role.baseStats.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">INT</span>
                      <span className="text-xs font-bold">{role.baseStats.intellect}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">CHA</span>
                      <span className="text-xs font-bold">{role.baseStats.charisma}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">ADP</span>
                      <span className="text-xs font-bold">{role.baseStats.adaptability}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-1">Starting Skills:</h4>
                  <ul className="text-xs space-y-1">
                    {role.skills.map((skill, index) => (
                      <li key={index} className="text-gray-400">• {skill}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Button 
            onClick={handleStartGame} 
            disabled={!selectedRoleId}
            className="text-xl py-6 px-10 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
