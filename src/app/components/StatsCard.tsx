import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: number | string;
  label: string;
}

export function StatsCard({ icon: Icon, value, label }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-card border border-border rounded-xl p-4 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <div className="text-3xl">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}
