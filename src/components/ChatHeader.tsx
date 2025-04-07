
import React from "react";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

interface ChatHeaderProps {
  onReset: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onReset }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-nutrition-100 flex items-center justify-center">
          <Apple className="h-6 w-6 text-nutrition-600" />
        </div>
        <div>
          <h2 className="font-semibold text-lg">NutriAI Buddy</h2>
          <p className="text-sm text-muted-foreground">Your personal nutrition assistant</p>
        </div>
      </div>
      <Button variant="ghost" onClick={onReset}>
        New Chat
      </Button>
    </div>
  );
};

export default ChatHeader;
