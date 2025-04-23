
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Character } from "./types";
import { Laptop, BriefcaseBusiness, SearchCheck, Network, Database, ShieldCheck } from "lucide-react";

// Map cropping for each role's avatar within the sprite
const avatarPositions = [
  "0% 50%",     // Project Manager
  "16.5% 50%",  // UX Designer
  "33% 50%",    // UX Researcher
  "49.5% 50%",  // IT
  "66% 50%",    // Data Scientist
  "83% 50%"     // Cybersecurity
];

const characterRoles = [
  {
    id: "project-manager",
    title: "Project Manager",
    description: "Resourceful builder and planner, armed with a trusty laptop.",
    icon: <Laptop className="h-7 w-7" />,
    baseStats: { strength: 7, intellect: 7, charisma: 7, adaptability: 7 },
    skills: ["Workflow Mastery", "Cross-Team Communication", "Tech Savvy"],
    avatarIdx: 0
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Creative architect turning ideas into functionality.",
    icon: <BriefcaseBusiness className="h-7 w-7" />,
    baseStats: { strength: 6, intellect: 7, charisma: 8, adaptability: 8 },
    skills: ["Interaction Design", "Empathy", "Rapid Prototyping"],
    avatarIdx: 1
  },
  {
    id: "ux-researcher",
    title: "UX Researcher",
    description: "Explorer of insights who uncovers user needs.",
    icon: <SearchCheck className="h-7 w-7" />,
    baseStats: { strength: 6, intellect: 8, charisma: 8, adaptability: 7 },
    skills: ["Survey Design", "Interviewing", "Persona Mapping"],
    avatarIdx: 2
  },
  {
    id: "it",
    title: "IT",
    description: "Systems expert ensuring uptime and resilience.",
    icon: <Network className="h-7 w-7" />,
    baseStats: { strength: 8, intellect: 7, charisma: 6, adaptability: 7 },
    skills: ["Incident Response", "Patch Management", "Network Support"],
    avatarIdx: 3
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Insight extractor and database wizard.",
    icon: <Database className="h-7 w-7" />,
    baseStats: { strength: 6, intellect: 9, charisma: 7, adaptability: 7 },
    skills: ["Model Building", "Statistical Analysis", "Visualization"],
    avatarIdx: 4
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Guardian of the digital realm.",
    icon: <ShieldCheck className="h-7 w-7" />,
    baseStats: { strength: 8, intellect: 8, charisma: 6, adaptability: 7 },
    skills: ["Threat Defense", "Risk Assessment", "Physical Security"],
    avatarIdx: 5
  }
];

interface CharacterSelectionProps {
  onSelectCharacter: (character: Character) => void;
}

const gradientPalette = [
  "from-[#D946EF]/90 via-[#8B5CF6]/90 to-[#33F083]/90", // Neon pink to neon purple to neon green
  "from-[#FDE047]/80 via-[#D946EF]/80 to-[#8B5CF6]/80", // Neon yellow to pink to purple
  "from-[#33F083]/80 via-[#1EAEDB]/80 to-[#FDE047]/80", // Neon green to blue to yellow
  "from-[#8B5CF6]/80 via-[#D946EF]/80 to-[#F97316]/80", // Neon purple to pink to orange
  "from-[#F97316]/80 via-[#FDE047]/70 to-[#33F083]/80", // Orange to yellow to green
  "from-[#1EAEDB]/80 via-[#8B5CF6]/80 to-[#D946EF]/80", // Blue to purple to pink
];

const CharacterSelection: React.FC<CharacterSelectionProps> = ({ onSelectCharacter }) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

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
    <div className="min-h-screen w-full py-8 px-4 bg-gradient-to-b from-[#0A0123] via-[#20115e] to-[#331972] animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#D946EF] via-[#33F083] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Choose Your Character
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {characterRoles.map((role, idx) => (
            <Card
              key={role.id}
              tabIndex={0}
              aria-pressed={selectedRoleId === role.id}
              onClick={() => handleSelectRole(role.id)}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") handleSelectRole(role.id);
              }}
              className={`relative group cursor-pointer transition-transform duration-150 hover:scale-105 outline-none glass-morphism
                bg-gradient-to-tr ${gradientPalette[idx] || gradientPalette[0]}
                ${selectedRoleId === role.id
                  ? "ring-4 ring-[#D946EF] scale-105 shadow-2xl"
                  : "ring-0"
                }
              `}
              style={{
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
                border: "2.5px solid rgba(253, 224, 71, 0.35)", // border neon yellow light
                boxShadow: selectedRoleId === role.id
                  ? "0 0 24px 6px #D946EF"
                  : "0 2px 12px 3px rgba(37, 255, 184, 0.10)",
              }}
            >
              <div className="flex justify-center mt-4">
                <div className="rounded-full border-4 border-[#FDE047] drop-shadow w-24 h-24 overflow-hidden bg-white/70 flex items-center justify-center ring-2 ring-[#D946EF]">
                  <img
                    src="/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png"
                    alt={role.title + " avatar"}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: avatarPositions[role.avatarIdx],
                      objectFit: "cover"
                    }}
                  />
                </div>
              </div>
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 mb-1">
                <CardTitle className="text-xl font-black bg-gradient-to-r from-[#FDE047] via-[#D946EF] to-[#33F083] bg-clip-text text-transparent drop-shadow">
                  {role.title}
                </CardTitle>
                <div className="text-[#33F083] drop-shadow-xl">{role.icon}</div>
              </CardHeader>
              <CardContent>
                <p className="text-base font-medium text-[#23082D] bg-white/70 rounded-lg px-2 py-1 shadow">
                  {role.description}
                </p>
                <div className="mt-3 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">Base Stats</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-[#23082D]">
                    <div>
                      STR: <span className="font-bold text-[#33F083]">{role.baseStats.strength}</span>
                    </div>
                    <div>
                      INT: <span className="font-bold text-[#D946EF]">{role.baseStats.intellect}</span>
                    </div>
                    <div>
                      CHA: <span className="font-bold text-[#FDE047]">{role.baseStats.charisma}</span>
                    </div>
                    <div>
                      ADP: <span className="font-bold text-[#F97316]">{role.baseStats.adaptability}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-[#33F083] mb-1 uppercase tracking-wider">
                    Skills
                  </h4>
                  <ul className="text-sm font-semibold text-[#23082D] space-y-1">
                    {role.skills.map((skill, i) => (
                      <li key={i}>• {skill}</li>
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
            className="text-xl py-5 px-12 rounded-2xl font-extrabold disabled:bg-[#bbb] disabled:text-[#8B5CF6] bg-gradient-to-r from-[#D946EF] via-[#33F083] to-[#FDE047] hover:from-[#FDE047] hover:to-[#D946EF] text-[#19044e] shadow-2xl focus-visible:ring-4 focus-visible:ring-[#D946EF] animate-fade-in"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
