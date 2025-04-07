
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Apple, User } from "lucide-react";

type MessageType = "user" | "ai";

interface ChatMessageProps {
  message: string;
  type: MessageType;
  isLoading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, type, isLoading }) => {
  return (
    <div
      className={cn(
        "flex w-full gap-3 p-4 rounded-lg",
        type === "user" ? "flex-row-reverse" : "",
      )}
    >
      <Avatar className={cn(
        "h-8 w-8",
        type === "user" ? "bg-blue-100" : "bg-nutrition-100"
      )}>
        {type === "user" ? (
          <User className="h-5 w-5 text-blue-500" />
        ) : (
          <Apple className="h-5 w-5 text-nutrition-600" />
        )}
      </Avatar>
      <div
        className={cn(
          "rounded-lg px-4 py-3 max-w-[80%]",
          type === "user"
            ? "bg-blue-500 text-white"
            : "bg-muted"
        )}
      >
        {isLoading ? (
          <div className="h-6 flex items-center">
            <span className="typing-indicator text-lg">Thinking</span>
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
