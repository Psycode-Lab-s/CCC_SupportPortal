import React, { useState } from 'react';
import { Edit, Trash2, Package } from 'lucide-react';
import { adminCustomers } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Pagination } from '../../components/Pagination';
import { SearchBar } from '../../components/SearchBar';
import { FloatingChatButton } from '../../components/FloatingChatButton';
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
import { Checkbox } from '../../components/ui/checkbox';

export function Customers() {
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter customers based on search query
  const filteredCustomers = adminCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

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
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Customers Management</h2>
        <div className="flex-1 max-w-2xl">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search customers by name or email..."
          />
        </div>
      </div>

      <div className="bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead>Customer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Assigned Products</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentCustomers.map((customer) => (
              <TableRow
                key={customer.id}
                className="h-12 border-b border-border hover:bg-muted transition-colors"
              >
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">{customer.assignedProducts} products</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog open={isAssignModalOpen} onOpenChange={setIsAssignModalOpen}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Package className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Assign Products to {customer.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="product1" />
                              <label htmlFor="product1" className="text-sm cursor-pointer">
                                Professional Espresso Machine Pro X
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="product2" />
                              <label htmlFor="product2" className="text-sm cursor-pointer">
                                Smart Coffee Grinder Elite
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="product3" />
                              <label htmlFor="product3" className="text-sm cursor-pointer">
                                Commercial Milk Frother Station
                              </label>
                            </div>
                          </div>
                          <Button className="w-full bg-[var(--button-primary)]">
                            Assign Selected Products
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredCustomers.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
