
import { useState } from "react";
import { Bot, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { useToast } from "@/hooks/use-toast";

interface Message {
  content: string;
  role: "user" | "assistant";
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState("");

  const handleSendMessage = async (message: string) => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key to use the chatbot.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { content: message, role: "user" }]);

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
              content: 'You are a helpful assistant focusing on technology and development topics.'
            },
            ...messages,
            { role: 'user', content: message }
          ],
          temperature: 0.7
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      setMessages(prev => [...prev, { content: aiResponse, role: "assistant" }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-black hover:bg-black/80"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white border-2 border-black w-[350px] h-[500px] rounded-lg shadow-lg flex flex-col">
          <div className="border-b-2 border-black p-4 flex justify-between items-center bg-[#f5f5f0]">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-serif font-bold">AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-black/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
          </div>

          {!apiKey && (
            <div className="p-4 border-t-2 border-black bg-[#f5f5f0]">
              <input
                type="password"
                placeholder="Enter Perplexity API Key"
                className="w-full p-2 border-2 border-black font-serif text-sm"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          )}

          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
