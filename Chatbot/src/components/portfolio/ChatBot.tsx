"use client";

import { useChat } from "ai/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full p-4 bg-black text-white hover:bg-gray-800"
      >
        Chat with AI Assistant
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[500px] p-4 flex flex-col bg-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">AI Recruitment Assistant</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="hover:bg-gray-100"
        >
          ✕
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.role === "assistant"
                  ? "bg-gray-100"
                  : "bg-black text-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about my qualifications..."
          className="flex-1"
        />
        <Button type="submit">Send</Button>
      </form>
    </Card>
  );
}
