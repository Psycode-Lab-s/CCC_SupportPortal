import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  sender: 'user' | 'bot' | 'agent';
  message: string;
  timestamp: string;
}

interface ChatPanelProps {
  onClose: () => void;
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      message: 'Hello! How can I help you today?',
      timestamp: '10:30',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      message: inputValue,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        message: 'Thank you for your message. A support agent will be with you shortly.',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-[400px] bg-white dark:bg-card border-l border-border flex flex-col shadow-xl transition-colors duration-200 z-50">
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        <h3>Chat Support</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : msg.sender === 'agent'
                    ? 'bg-secondary dark:bg-card border border-border'
                    : 'bg-secondary dark:bg-card border border-border'
                }`}
              >
                <div className="text-sm">{msg.message}</div>
                <div className="text-xs mt-1 opacity-70">{msg.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button onClick={handleSend} className="bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-primary-foreground">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
