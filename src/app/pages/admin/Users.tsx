import React, { useState } from 'react';
import { Plus, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { adminUsers } from '../../data/mockData';
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
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

type UserType = 'admin' | 'support' | 'content' | 'customer' | '';

export function Users() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter users based on search query
  const filteredUsers = adminUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  const handleClose = () => {
    setIsDialogOpen(false);
    setStep(1);
    setUserType('');
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="userType">User Type</Label>
        <Select value={userType} onValueChange={(value) => setUserType(value as UserType)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select user type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customer">Customer</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="support">Support Agent</SelectItem>
            <SelectItem value="content">Content Manager</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="userName">Name</Label>
        <Input id="userName" placeholder="Enter full name" className="mt-2" />
      </div>
      <div>
        <Label htmlFor="userEmail">Email</Label>
        <Input id="userEmail" type="email" placeholder="Enter email" className="mt-2" />
      </div>
      <div>
        <Label htmlFor="userPhone">Phone Number</Label>
        <Input id="userPhone" type="tel" placeholder="Enter phone number" className="mt-2" />
      </div>
      <Button 
        onClick={handleNext} 
        className="w-full bg-[var(--button-primary)]"
        disabled={!userType}
      >
        Next <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );

  const renderStep2Customer = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Customer Details</h3>
      <div>
        <Label htmlFor="companyName">Company Name</Label>
        <Input id="companyName" placeholder="Enter company name" className="mt-2" />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Enter address" className="mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="City" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input id="zipCode" placeholder="Zip code" className="mt-2" />
        </div>
      </div>
      <div>
        <Label htmlFor="country">Country</Label>
        <Input id="country" placeholder="Enter country" className="mt-2" />
      </div>
      <div>
        <Label htmlFor="gstNumber">GST Number (Optional)</Label>
        <Input id="gstNumber" placeholder="Enter GST number" className="mt-2" />
      </div>
      <div className="flex gap-2">
        <Button onClick={handleBack} variant="outline" className="flex-1">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <Button onClick={handleClose} className="flex-1 bg-[var(--button-primary)]">
          Save Customer
        </Button>
      </div>
    </div>
  );

  const renderStep2OtherUsers = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">{userType} Details</h3>
      <div>
        <Label htmlFor="department">Department</Label>
        <Input id="department" placeholder="Enter department" className="mt-2" />
      </div>
      <div>
        <Label htmlFor="employeeId">Employee ID</Label>
        <Input id="employeeId" placeholder="Enter employee ID" className="mt-2" />
      </div>
      <div>
        <Label htmlFor="joinDate">Join Date</Label>
        <Input id="joinDate" type="date" className="mt-2" />
      </div>
      {userType === 'admin' && (
        <div>
          <Label htmlFor="accessLevel">Access Level</Label>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select access level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full">Full Access</SelectItem>
              <SelectItem value="limited">Limited Access</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <div className="flex gap-2">
        <Button onClick={handleBack} variant="outline" className="flex-1">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <Button onClick={handleClose} className="flex-1 bg-[var(--button-primary)]">
          Save {userType}
        </Button>
      </div>
    </div>
  );

  return (
    <>
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Users Management</h2>
        <div className="flex items-center gap-4 flex-1 max-w-2xl">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search users by name, email, or role..."
          />
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[var(--button-primary)] whitespace-nowrap">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                Add New User - Step {step} of 2
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              {step === 1 && renderStep1()}
              {step === 2 && userType === 'customer' && renderStep2Customer()}
              {step === 2 && userType !== 'customer' && userType !== '' && renderStep2OtherUsers()}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      </div>

      <div className="bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow
                key={user.id}
                className="h-12 border-b border-border hover:bg-muted transition-colors"
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                    }
                  >
                    {user.status}
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredUsers.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
