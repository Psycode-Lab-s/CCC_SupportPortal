import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';

export function RoleSwitcher() {
  const { role, setRole } = useApp();
  const navigate = useNavigate();

  const switchRole = () => {
    const newRole = role === 'customer' ? 'admin' : 'customer';
    setRole(newRole);
    navigate(newRole === 'customer' ? '/customer' : '/admin');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={switchRole}
        className="bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-primary-foreground shadow-lg"
      >
        Switch to {role === 'customer' ? 'Admin' : 'Customer'} View
      </Button>
    </div>
  );
}
