import React, { useState } from 'react';
import { Users, Package, AlertCircle } from 'lucide-react';
import { StatsCard } from '../../components/StatsCard';
import { FloatingChatButton } from '../../components/FloatingChatButton';
import { Pagination } from '../../components/Pagination';
import { SearchBar } from '../../components/SearchBar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

const recentAdminActivity = [
  {
    id: '1',
    action: 'New video uploaded',
    performedBy: 'Sarah Johnson',
    date: '2026-02-15 10:30',
  },
  {
    id: '2',
    action: 'Customer assigned product',
    performedBy: 'Mike Chen',
    date: '2026-02-15 09:15',
  },
  {
    id: '3',
    action: 'Issue category updated',
    performedBy: 'Emma Davis',
    date: '2026-02-14 16:45',
  },
  {
    id: '4',
    action: 'Chat ticket closed',
    performedBy: 'Mike Chen',
    date: '2026-02-14 14:20',
  },
  {
    id: '5',
    action: 'New customer registered',
    performedBy: 'Sarah Johnson',
    date: '2026-02-14 11:30',
  },
  {
    id: '6',
    action: 'Product assigned to customer',
    performedBy: 'Emma Davis',
    date: '2026-02-14 09:45',
  },
  {
    id: '7',
    action: 'Support ticket assigned',
    performedBy: 'Mike Chen',
    date: '2026-02-13 15:20',
  },
  {
    id: '8',
    action: 'Video category updated',
    performedBy: 'Sarah Johnson',
    date: '2026-02-13 13:10',
  },
  {
    id: '9',
    action: 'Customer profile updated',
    performedBy: 'Emma Davis',
    date: '2026-02-13 10:55',
  },
  {
    id: '10',
    action: 'New issue reported',
    performedBy: 'Mike Chen',
    date: '2026-02-12 16:30',
  },
  {
    id: '11',
    action: 'Product added to catalog',
    performedBy: 'Sarah Johnson',
    date: '2026-02-12 14:15',
  },
  {
    id: '12',
    action: 'Chat session completed',
    performedBy: 'Emma Davis',
    date: '2026-02-12 11:40',
  },
];

export function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter activities based on search query
  const filteredActivities = recentAdminActivity.filter(activity =>
    activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.performedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = filteredActivities.slice(startIndex, endIndex);

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };
  return (
    <>
      <div className="space-y-8 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard icon={Users} value={248} label="Total Customers" />
        <StatsCard icon={Package} value={32} label="Total Products" />
        <StatsCard icon={AlertCircle} value={156} label="Total Issues" />
      </div>

      <div className="bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200">
        <div className="p-4 border-b border-border flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold">Recent Activity</h2>
          <div className="flex-1 max-w-md">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search activities..."
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead>Action</TableHead>
              <TableHead>Performed By</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentActivities.length > 0 ? (
              currentActivities.map((activity) => (
                <TableRow
                  key={activity.id}
                  className="h-12 border-b border-border hover:bg-muted transition-colors"
                >
                  <TableCell>{activity.action}</TableCell>
                  <TableCell>{activity.performedBy}</TableCell>
                  <TableCell className="text-right">{activity.date}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-muted-foreground h-32">
                  No activities found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredActivities.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
