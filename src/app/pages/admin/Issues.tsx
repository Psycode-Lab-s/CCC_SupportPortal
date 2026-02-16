import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { adminIssues } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export function Issues() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2>Issues Management</h2>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[var(--button-primary)]">
              <Plus className="h-4 w-4 mr-2" />
              Add Issue
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Issue</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="issueProduct">Select Product</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Professional Espresso Machine Pro X</SelectItem>
                    <SelectItem value="2">Smart Coffee Grinder Elite</SelectItem>
                    <SelectItem value="3">Commercial Milk Frother Station</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="issueTitle">Issue Title</Label>
                <Input id="issueTitle" placeholder="Enter issue title" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="issueDesc">Description</Label>
                <Textarea
                  id="issueDesc"
                  placeholder="Enter issue description"
                  className="mt-2"
                />
              </div>
              <Button className="w-full bg-[var(--button-primary)]">
                Save Issue
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead>Product</TableHead>
              <TableHead>Issue Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Total Videos</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adminIssues.map((issue) => (
              <TableRow
                key={issue.id}
                className="h-12 border-b border-border hover:bg-muted transition-colors"
              >
                <TableCell>{issue.productName}</TableCell>
                <TableCell>{issue.title}</TableCell>
                <TableCell className="max-w-xs truncate">{issue.description}</TableCell>
                <TableCell>{issue.totalVideos}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
