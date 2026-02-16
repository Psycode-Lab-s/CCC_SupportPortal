import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ScrollArea } from '../../components/ui/scroll-area';
import { FloatingChatButton } from '../../components/FloatingChatButton';

interface Message {
  id: string;
  sender: 'user' | 'bot' | 'agent';
  message: string;
  timestamp: string;
}

export function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      message: 'Hello! Welcome to CCC Support. How can I assist you today?',
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
    <>
    <div className="h-[calc(100vh-8rem)] bg-white dark:bg-card border border-border rounded-xl flex flex-col transition-colors duration-200">
      <div className="p-4 border-b border-border">
        <h2>Chat Support</h2>
        <p className="text-sm text-muted-foreground mt-1">
          We're here to help you with any questions
        </p>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.sender === 'user'
                    ? 'bg-[var(--button-primary)] text-white'
                    : msg.sender === 'agent'
                    ? 'bg-muted border border-border'
                    : 'bg-muted border border-border'
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
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend} className="bg-[var(--button-primary)]">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
