
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Character } from "./types";
import { Laptop, BriefcaseBusiness, SearchCheck, Network, Database, ShieldCheck } from "lucide-react";

// Map cropping for each role's avatar within the sprite
const avatarPositions = [
  "0% 50%",     // Projectt
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
    <div className="h-full overflow-auto py-8 px-4 bg-gradient-to-b from-[#232138] via-[#2a2256] to-[#22203b]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#EFEAFB]">Choose Your Character</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mb-8">
          {characterRoles.map((role, idx) => (
            <Card
              key={role.id}
              tabIndex={0}
              aria-pressed={selectedRoleId === role.id}
              className={`relative group cursor-pointer shadow-md transition-transform duration-150 hover:scale-[1.03] outline-none
                ${
                  selectedRoleId === role.id
                    ? "border-4 border-[#9b87f5] bg-[#25184b]/80 ring-2 ring-[#e5deff]"
                    : "border-2 border-[#53498e] bg-[#191427]/70 hover:border-[#9b87f5]"
                }
                focus-visible:ring-4 focus-visible:ring-[#8B5CF6]`}
              onClick={() => handleSelectRole(role.id)}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") handleSelectRole(role.id);
              }}
            >
              {/* Avatar Sprite */}
              <div className="flex justify-center mt-4">
                <div className="rounded-full border-4 border-[#9b87f5] drop-shadow w-24 h-24 overflow-hidden bg-[#2b2441] flex items-center justify-center">
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
              <CardHeader className="flex flex-row items-center justify-between py-2 px-4">
                <CardTitle className="text-lg font-bold text-[#D6BCFA]">
                  {role.title}
                </CardTitle>
                <div className="text-[#A78BFA] drop-shadow">{role.icon}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#F1F0FB]">{role.description}</p>
                <div className="mt-3 space-y-1">
                  <h4 className="text-xs font-semibold text-[#A78BFA]">Base Stats:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-[#E5DEFF]">
                    <div>STR: <span className="font-bold text-[#FEC6A1]">{role.baseStats.strength}</span></div>
                    <div>INT: <span className="font-bold text-[#D3E4FD]">{role.baseStats.intellect}</span></div>
                    <div>CHA: <span className="font-bold text-[#FDE1D3]">{role.baseStats.charisma}</span></div>
                    <div>ADP: <span className="font-bold text-[#FFDEE2]">{role.baseStats.adaptability}</span></div>
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-xs font-semibold text-[#A78BFA] mb-1">Skills:</h4>
                  <ul className="text-xs space-y-1 text-[#E5DEFF]">
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
            className="text-lg py-4 px-10 rounded-lg font-semibold disabled:bg-[#6d6d77] disabled:text-white bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5] hover:from-[#7E69AB] hover:to-[#8B5CF6] text-white shadow-lg focus-visible:ring-4 focus-visible:ring-[#D6BCFA]"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
