import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { chatConversations, chatMessages } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { ScrollArea } from '../../components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export function ChatManagement() {
  const [selectedChat, setSelectedChat] = useState(chatConversations[0]);
  const [filter, setFilter] = useState('all');
  const [replyText, setReplyText] = useState('');

  const filteredConversations = chatConversations.filter((conv) => {
    if (filter === 'all') return true;
    return conv.status.toLowerCase() === filter.toLowerCase();
  });

  const handleSendReply = () => {
    if (replyText.trim()) {
      console.log('Sending reply:', replyText);
      setReplyText('');
    }
  };

  return (
    <div className="space-y-6">
      <h2>Chat Management</h2>

      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        <div className="col-span-1 bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200 flex flex-col">
          <div className="p-4 border-b border-border">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chats</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-2">
              {filteredConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`w-full p-3 rounded-lg mb-2 text-left transition-colors ${
                    selectedChat.id === conv.id
                      ? 'bg-primary/10 border border-primary'
                      : 'hover:bg-secondary'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium">{conv.customerName}</div>
                    {conv.unread > 0 && (
                      <Badge className="bg-primary text-primary-foreground">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {conv.lastMessage}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Badge
                      variant="outline"
                      className={
                        conv.status === 'Open'
                          ? 'border-green-500 text-green-700 dark:text-green-400'
                          : conv.status === 'Pending'
                          ? 'border-yellow-500 text-yellow-700 dark:text-yellow-400'
                          : 'border-gray-500 text-gray-700 dark:text-gray-400'
                      }
                    >
                      {conv.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="col-span-2 bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200 flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div>
              <h3>{selectedChat.customerName}</h3>
              <p className="text-sm text-muted-foreground">
                {selectedChat.status} • {selectedChat.timestamp}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="assign">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Assign agent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="assign">Assign Agent</SelectItem>
                  <SelectItem value="sarah">Sarah Johnson</SelectItem>
                  <SelectItem value="mike">Mike Chen</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                className="text-green-600 border-green-600"
              >
                Close Chat
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {chatMessages
                .filter((msg) => msg.conversationId === selectedChat.id)
                .map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === 'user'
                          ? 'bg-secondary dark:bg-card border border-border'
                          : msg.sender === 'agent'
                          ? 'bg-primary text-primary-foreground'
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
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
                placeholder="Type your reply..."
                className="flex-1"
              />
              <Button onClick={handleSendReply} className="bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-primary-foreground">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
