
import { Bot } from "lucide-react";

interface ChatMessageProps {
  message: {
    content: string;
    role: "user" | "assistant";
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.role === "assistant";

  return (
    <div className={`flex gap-2 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-black
          ${isBot ? "bg-black" : "bg-[#f5f5f0]"}`}
      >
        {isBot ? (
          <Bot className="h-4 w-4 text-white" />
        ) : (
          <span className="font-serif text-sm">You</span>
        )}
      </div>
      <div
        className={`flex-1 p-3 rounded-lg text-sm font-serif border-2 border-black
          ${isBot ? "bg-[#f5f5f0]" : "bg-black text-white"}`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
