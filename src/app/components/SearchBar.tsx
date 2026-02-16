import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search...' }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-white dark:bg-card text-[#111111] dark:text-[#FFFFFF] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      />
    </div>
  );
}
