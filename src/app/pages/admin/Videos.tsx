import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { videos } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
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

export function Videos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2>Videos Management</h2>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[var(--button-primary)]">
              <Plus className="h-4 w-4 mr-2" />
              Add Video
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Video</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="videoProduct">Select Product</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Professional Espresso Machine Pro X</SelectItem>
                    <SelectItem value="2">Smart Coffee Grinder Elite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="videoIssue">Select Issue</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select issue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="installation">Installation</SelectItem>
                    <SelectItem value="cleaning">Cleaning & Maintenance</SelectItem>
                    <SelectItem value="troubleshooting">Troubleshooting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="videoTitle">Video Title</Label>
                <Input id="videoTitle" placeholder="Enter video title" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="videoDesc">Description</Label>
                <Textarea
                  id="videoDesc"
                  placeholder="Enter video description"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="videoFile">Upload Video</Label>
                <Input id="videoFile" type="file" accept="video/*" className="mt-2" />
              </div>
              <Button className="w-full bg-[var(--button-primary)]">
                Save Video
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
              <TableHead>Issue</TableHead>
              <TableHead>Video Title</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.slice(0, 10).map((video) => (
              <TableRow
                key={video.id}
                className="h-12 border-b border-border hover:bg-muted transition-colors"
              >
                <TableCell className="max-w-[200px] truncate">Product {video.productId}</TableCell>
                <TableCell className="capitalize">{video.issueId}</TableCell>
                <TableCell className="max-w-xs truncate">{video.title}</TableCell>
                <TableCell>{video.duration}</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {video.status}
                  </Badge>
                </TableCell>
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
