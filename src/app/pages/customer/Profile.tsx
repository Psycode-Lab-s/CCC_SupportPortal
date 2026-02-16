import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { FloatingChatButton } from '../../components/FloatingChatButton';

export function Profile() {
  const { currentUser } = useApp();

  return (
    <>
    <div className="max-w-2xl">
      <div className="bg-white dark:bg-card border border-border rounded-xl p-6 transition-colors duration-200">
        <h2 className="mb-6">Profile Settings</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              defaultValue={currentUser.name}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={currentUser.email}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Leave blank to keep current password"
              className="mt-2"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="bg-[var(--button-primary)]">
              Save Changes
            </Button>
            <Button variant="outline">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
