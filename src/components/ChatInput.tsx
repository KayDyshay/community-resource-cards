
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t-2 border-black p-4 bg-[#f5f5f0]">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border-2 border-black font-serif text-sm"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="bg-black hover:bg-black/80"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
