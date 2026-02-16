import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch';
import { FloatingChatButton } from '../../components/FloatingChatButton';

export function Settings() {
  return (
    <>
    <div className="max-w-3xl space-y-6">
      <h2>Settings</h2>

      <div className="bg-white dark:bg-card border border-border rounded-xl p-6 transition-colors duration-200">
        <h3 className="mb-4">General Settings</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="siteName">Site Name</Label>
            <Input
              id="siteName"
              defaultValue="CCC Support Portal"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input
              id="supportEmail"
              type="email"
              defaultValue="support@ccc.com"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="contactPhone">Contact Phone</Label>
            <Input
              id="contactPhone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-card border border-border rounded-xl p-6 transition-colors duration-200">
        <h3 className="mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email notifications for new chats
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>New Customer Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when new customers register
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Video Upload Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when new videos are uploaded
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-card border border-border rounded-xl p-6 transition-colors duration-200">
        <h3 className="mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button className="bg-[var(--button-primary)]">
          Save Changes
        </Button>
        <Button variant="outline">
          Cancel
        </Button>
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
