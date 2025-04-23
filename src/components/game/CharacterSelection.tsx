
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Character } from "./types";
import { Laptop, BriefcaseBusiness, SearchCheck, It, Database, ShieldCheck } from "lucide-react";

// Helper for avatar cropping (approximate sprite via background position)
const avatarSprites = [
  { name: "Projectt", style: "bg-[url('/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png')] bg-[length:700%_100%] bg-left" },
  { name: "UX Designer", style: "bg-[url('/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png')] bg-[length:700%_100%] bg-[center_left_16.5%]" },
  { name: "UX Researcher", style: "bg-[url('/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png')] bg-[length:700%_100%] bg-[center_left_33%]" },
  { name: "IT", style: "bg-[url('/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png')] bg-[length:700%_100%] bg-[center_left_49.5%]" },
  { name: "Data Scientist", style: "bg-[url('/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png')] bg-[length:700%_100%] bg-[center_left_66%]" },
  { name: "Cybersecurity", style: "bg-[url('/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png')] bg-[length:700%_100%] bg-[center_left_83%]" },
];

// Use new role labels to match uploaded image
const characterRoles = [
  {
    id: "projectt",
    title: "Projectt",
    description: "Resourceful builder and planner, armed with a trusty laptop.",
    icon: <Laptop className="h-7 w-7" />,
    baseStats: { strength: 7, intellect: 7, charisma: 7, adaptability: 7 },
    skills: ["Workflow Mastery", "Cross-Team Communication", "Tech Savvy"],
    avatar: avatarSprites[0]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Creative architect turning ideas into functionality.",
    icon: <BriefcaseBusiness className="h-7 w-7" />,
    baseStats: { strength: 6, intellect: 7, charisma: 8, adaptability: 8 },
    skills: ["Interaction Design", "Empathy", "Rapid Prototyping"],
    avatar: avatarSprites[1]
  },
  {
    id: "ux-researcher",
    title: "UX Researcher",
    description: "Explorer of insights who uncovers user needs.",
    icon: <SearchCheck className="h-7 w-7" />,
    baseStats: { strength: 6, intellect: 8, charisma: 8, adaptability: 7 },
    skills: ["Survey Design", "Interviewing", "Persona Mapping"],
    avatar: avatarSprites[2]
  },
  {
    id: "it",
    title: "IT",
    description: "Systems expert ensuring uptime and resilience.",
    icon: <It className="h-7 w-7" />,
    baseStats: { strength: 8, intellect: 7, charisma: 6, adaptability: 7 },
    skills: ["Incident Response", "Patch Management", "Network Support"],
    avatar: avatarSprites[3]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Insight extractor and database wizard.",
    icon: <Database className="h-7 w-7" />,
    baseStats: { strength: 6, intellect: 9, charisma: 7, adaptability: 7 },
    skills: ["Model Building", "Statistical Analysis", "Visualization"],
    avatar: avatarSprites[4]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Guardian of the digital realm.",
    icon: <ShieldCheck className="h-7 w-7" />,
    baseStats: { strength: 8, intellect: 8, charisma: 6, adaptability: 7 },
    skills: ["Threat Defense", "Risk Assessment", "Physical Security"],
    avatar: avatarSprites[5]
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
    <div className="h-full overflow-auto py-8 px-4 bg-gradient-to-b from-[#fafaf8] via-[#e4e4e4] to-[#cdc6c6]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#222222]">Choose Your Character</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {characterRoles.map((role, idx) => (
            <Card
              key={role.id}
              className={`relative cursor-pointer border-2 shadow-md transition-all hover:scale-105
                ${selectedRoleId === role.id
                  ? "border-[#8B5CF6] bg-[#F1F0FB]"
                  : "border-[#a8a7a9] bg-white"}`
              }
              onClick={() => handleSelectRole(role.id)}
            >
              {/* Avatar crop */}
              <div className="flex justify-center mt-4">
                <div
                  className={`rounded-full border-4 border-[#6E59A5] drop-shadow w-24 h-24 bg-cover bg-no-repeat bg-center`}
                  style={{
                    backgroundImage: "url('/lovable-uploads/c348a44e-2fb9-43f8-a3b9-9bda3ed040ad.png')",
                    backgroundPosition: `${16.5 * idx}% center`,
                    backgroundSize: "600% 100%"
                  }}
                  aria-label={role.title + " avatar"}
                />
              </div>
              <CardHeader className="flex flex-row items-center justify-between py-2 px-4">
                <CardTitle className="text-lg font-medium text-[#252525]">{role.title}</CardTitle>
                <div className="text-[#9b87f5]">{role.icon}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#403E43]">{role.description}</p>
                <div className="mt-3 space-y-1">
                  <h4 className="text-xs font-semibold text-[#403E43]">Base Stats:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-[#7E69AB]">
                    <div>STR: <span className="font-bold text-[#333]">{role.baseStats.strength}</span></div>
                    <div>INT: <span className="font-bold text-[#333]">{role.baseStats.intellect}</span></div>
                    <div>CHA: <span className="font-bold text-[#333]">{role.baseStats.charisma}</span></div>
                    <div>ADP: <span className="font-bold text-[#333]">{role.baseStats.adaptability}</span></div>
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-xs font-semibold text-[#403E43] mb-1">Skills:</h4>
                  <ul className="text-xs space-y-1 text-[#555]">
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
            className="text-lg py-4 px-10 rounded-lg bg-[#8B5CF6] hover:bg-[#6E59A5] text-white font-semibold disabled:bg-[#aaa] disabled:text-white"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
