import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Users,
  UserCircle,
  Package,
  Settings,
  LogOut,
} from 'lucide-react';
import logo from '../../assets/logo.png';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: UserCircle, label: 'Customers', path: '/admin/customers' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="w-20 h-screen border-r border-border bg-[#F9FAFB] dark:bg-black flex flex-col transition-colors duration-200">
      <div className="h-16 flex items-center justify-center border-b border-border">
        <img src={logo} alt="CCC Support Portal" className="h-12 w-12 object-contain" />
      </div>

      <nav className="flex-1 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              title={item.label}
              className={`w-full flex items-center justify-center p-4 mb-1 transition-all duration-200 relative group ${
                isActive
                  ? 'text-primary dark:text-primary bg-primary/10 border-r-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-card'
              }`}
            >
              <Icon className="h-5 w-5" />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-2 px-2 py-1 bg-card text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-2 border-t border-border">
        <button
          onClick={handleLogout}
          title="Logout"
          className="w-full flex items-center justify-center p-4 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200 group relative"
        >
          <LogOut className="h-5 w-5" />
          
          {/* Tooltip */}
          <span className="absolute left-full ml-2 px-2 py-1 bg-red-600 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
