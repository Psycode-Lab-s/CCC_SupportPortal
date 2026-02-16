import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Chat Support"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        )}
        
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-card animate-pulse" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white dark:bg-card border border-border rounded-lg shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[var(--button-primary)] text-white p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Chat Support</h3>
            <p className="text-sm text-white/80">We're here to help!</p>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto bg-muted">
            <div className="space-y-3">
              {/* Example Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--button-primary)] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                  CS
                </div>
                <div className="bg-white dark:bg-card p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm text-[#111111] dark:text-[#FFFFFF]">
                    Hello! How can we assist you today?
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 inline-block">
                    Just now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-white dark:bg-card text-[#111111] dark:text-[#FFFFFF] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <button className="px-4 py-2 bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white rounded-lg font-medium transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
