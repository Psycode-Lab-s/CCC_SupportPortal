import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useApp } from '../contexts/AppContext';

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RoleSelectionModal({ isOpen, onClose }: RoleSelectionModalProps) {
  const navigate = useNavigate();
  const { setRole } = useApp();

  const handleRoleSelect = (role: 'customer' | 'admin') => {
    setRole(role);
    navigate(role === 'customer' ? '/customer' : '/admin');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Select Your Role</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <button
            onClick={() => handleRoleSelect('customer')}
            className="group p-6 border-2 border-border rounded-xl hover:border-primary transition-all duration-200 text-left bg-white dark:bg-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl">Customer</h3>
              <p className="text-sm text-muted-foreground">
                Access your purchased products and support materials.
              </p>
            </div>
          </button>

          <button
            onClick={() => handleRoleSelect('admin')}
            className="group p-6 border-2 border-border rounded-xl hover:border-primary transition-all duration-200 text-left bg-white dark:bg-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl">Admin</h3>
              <p className="text-sm text-muted-foreground">
                Manage customers, products, issues, and videos.
              </p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
