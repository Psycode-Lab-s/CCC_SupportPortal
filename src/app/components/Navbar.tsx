import React from 'react';
import { useNavigate } from 'react-router';
import { Moon, Sun, User, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useApp } from '../contexts/AppContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

interface NavbarProps {
  pageTitle: string;
}

export function Navbar({ pageTitle }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { currentUser, role } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    if (role === 'customer') {
      navigate('/customer/profile');
    } else {
      navigate('/admin/settings');
    }
  };

  const initials = currentUser.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="h-16 border-b border-border bg-background flex items-center justify-between px-6 transition-colors duration-200">
      <h1 className="text-2xl">{pageTitle}</h1>
      
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="transition-colors duration-200"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem 
              onClick={handleProfileClick}
              className="flex items-center gap-2 cursor-pointer"
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
