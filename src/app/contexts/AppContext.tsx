import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'customer' | 'admin';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  currentUser: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole>('customer');
  
  const currentUser = {
    name: role === 'customer' ? 'John Smith' : 'Admin User',
    email: role === 'customer' ? 'john.smith@example.com' : 'admin@ccc.com',
  };

  return (
    <AppContext.Provider value={{ role, setRole, currentUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
