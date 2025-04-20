
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface AISearchProps {
  onSearch: (query: string) => void;
}

const AISearch = ({ onSearch }: AISearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [apiKey, setApiKey] = useState(localStorage.getItem('perplexityApiKey') || '');
  const [showApiInput, setShowApiInput] = useState(!localStorage.getItem('perplexityApiKey'));
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key to use the AI search feature.",
        variant: "destructive",
      });
      setShowApiInput(true);
      return;
    }

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant that finds and summarizes tech articles.'
            },
            {
              role: 'user',
              content: searchTerm
            }
          ],
          temperature: 0.2,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('Search request failed');
      }

      const data = await response.json();
      onSearch(data.choices[0].message.content);
    } catch (error) {
      toast({
        title: "Search Error",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
      });
    }
  };

  const saveApiKey = () => {
    localStorage.setItem('perplexityApiKey', apiKey);
    setShowApiInput(false);
    toast({
      title: "API Key Saved",
      description: "Your Perplexity API key has been saved.",
    });
  };

  return (
    <div className="space-y-4 p-4 border-b-2 border-black">
      {showApiInput && (
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Enter your Perplexity API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="font-serif border-2 border-black"
          />
          <Button 
            onClick={saveApiKey}
            className="w-full bg-black text-white hover:bg-black/80"
          >
            Save API Key
          </Button>
        </div>
      )}
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search articles with AI..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8 border-2 border-black font-serif"
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>
      <Button 
        onClick={handleSearch}
        className="w-full bg-black text-white hover:bg-black/80 font-serif"
      >
        Search & Summarize
      </Button>
    </div>
  );
};

export default AISearch;
