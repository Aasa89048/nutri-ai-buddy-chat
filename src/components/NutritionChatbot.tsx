
import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { findResponse } from "@/data/nutritionResponses";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  text: string;
  type: "user" | "ai";
}

const welcomeMessage = {
  id: "welcome",
  text: "Hi there! I'm your AI Nutrition Buddy. I can help with nutrition questions, meal ideas, and healthy eating tips. What would you like to know today?",
  type: "ai" as const
};

const NutritionChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (userMessage: string) => {
    const newUserMessage = {
      id: `user-${Date.now()}`,
      text: userMessage,
      type: "user" as const
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      try {
        const response = findResponse(userMessage);
        
        const newAiMessage = {
          id: `ai-${Date.now()}`,
          text: response,
          type: "ai" as const
        };
        
        setMessages((prev) => [...prev, newAiMessage]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error processing message:", error);
        toast.error("Sorry, I couldn't process your request.");
        setIsLoading(false);
      }
    }, 1000);
  };
  
  const resetChat = () => {
    setMessages([welcomeMessage]);
    toast.success("Started a new conversation");
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  return (
    <Card className="flex flex-col h-[600px] max-h-[80vh] shadow-lg border">
      <ChatHeader onReset={resetChat} />
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 chat-container"
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            type={message.type}
          />
        ))}
        
        {isLoading && (
          <ChatMessage
            message=""
            type="ai"
            isLoading={true}
          />
        )}
      </div>
      
      <div className="p-4 border-t">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </Card>
  );
};

export default NutritionChatbot;
