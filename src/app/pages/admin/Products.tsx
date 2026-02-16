import React, { useState } from 'react';
import { Plus, Edit, Trash2, Video, AlertCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { adminProducts } from '../../data/mockData';
import { Button } from '../../components/ui/button';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Badge } from '../../components/ui/badge';

interface Issue {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

interface Video {
  id: string;
  title: string;
  url: string;
  duration: string;
}

export function Products() {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = adminProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  // Mock data for issues and videos
  const productIssues: Record<string, Issue[]> = {
    '1': [
      {
        id: '1',
        title: 'Machine not starting',
        description: 'Common startup issues',
        videos: [
          { id: '1', title: 'Power troubleshooting', url: '', duration: '5:30' },
          { id: '2', title: 'Basic startup guide', url: '', duration: '4:15' },
        ],
      },
      {
        id: '2',
        title: 'Unusual noise during operation',
        description: 'Mechanical issue diagnostics',
        videos: [
          { id: '3', title: 'Noise diagnostic guide', url: '', duration: '6:45' },
        ],
      },
    ],
  };

  const handleAddIssue = (productId: string) => {
    setSelectedProduct(productId);
    setIsIssueModalOpen(true);
  };

  const handleAddVideo = (productId: string, issueId: string) => {
    setSelectedProduct(productId);
    setSelectedIssue(issueId);
    setIsVideoModalOpen(true);
  };

  return (
    <>
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Products Management</h2>
        <div className="flex items-center gap-4 flex-1 max-w-2xl">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
          <Dialog open={isProductModalOpen} onOpenChange={setIsProductModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[var(--button-primary)] whitespace-nowrap">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="Enter product name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="productDesc">Description</Label>
                <Textarea
                  id="productDesc"
                  placeholder="Enter product description"
                  className="mt-2"
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="productImage">Product Image</Label>
                <Input id="productImage" type="file" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="productCategory">Category</Label>
                <Input id="productCategory" placeholder="Enter category" className="mt-2" />
              </div>
              <Button 
                onClick={() => setIsProductModalOpen(false)}
                className="w-full bg-[var(--button-primary)]"
              >
                Save Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      </div>

      {/* Add Issue Dialog */}
      <Dialog open={isIssueModalOpen} onOpenChange={setIsIssueModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Issue</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <Label htmlFor="issueTitle">Issue Title</Label>
              <Input id="issueTitle" placeholder="Enter issue title" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="issueDesc">Description</Label>
              <Textarea
                id="issueDesc"
                placeholder="Describe the issue"
                className="mt-2"
                rows={4}
              />
            </div>
            <Button 
              onClick={() => setIsIssueModalOpen(false)}
              className="w-full bg-[var(--button-primary)]"
            >
              Save Issue
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Video Dialog */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Support Video</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <Label htmlFor="videoTitle">Video Title</Label>
              <Input id="videoTitle" placeholder="Enter video title" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="videoFile">Video File</Label>
              <Input id="videoFile" type="file" accept="video/*" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="videoDesc">Description</Label>
              <Textarea
                id="videoDesc"
                placeholder="Enter video description"
                className="mt-2"
                rows={3}
              />
            </div>
            <Button 
              onClick={() => setIsVideoModalOpen(false)}
              className="w-full bg-[var(--button-primary)]"
            >
              Upload Video
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Products Table with Expandable Rows */}
      <div className="bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead className="w-12"></TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Issues</TableHead>
              <TableHead>Videos</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map((product) => (
              <React.Fragment key={product.id}>
                <TableRow className="border-b border-border hover:bg-muted transition-colors">
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                    >
                      {expandedProduct === product.id ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.totalIssues} Issues</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.totalVideos} Videos</Badge>
                  </TableCell>
                  <TableCell>{product.createdDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" title="Edit Product">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Delete Product">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>

                {/* Expanded Section with Issues */}
                {expandedProduct === product.id && (
                  <TableRow>
                    <TableCell colSpan={6} className="bg-muted p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Issues & Support Videos
                          </h3>
                          <Button
                            onClick={() => handleAddIssue(product.id)}
                            size="sm"
                            className="bg-[var(--button-primary)]"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Issue
                          </Button>
                        </div>

                        {productIssues[product.id]?.map((issue) => (
                          <div
                            key={issue.id}
                            className="bg-white dark:bg-card border border-border rounded-lg p-4"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold text-base">{issue.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {issue.description}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => handleAddVideo(product.id, issue.id)}
                                  size="sm"
                                  variant="outline"
                                >
                                  <Video className="h-4 w-4 mr-2" />
                                  Add Video
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash2 className="h-4 w-4 text-red-600" />
                                </Button>
                              </div>
                            </div>

                            {/* Videos List */}
                            {issue.videos.length > 0 && (
                              <div className="mt-3 space-y-2">
                                <p className="text-sm font-medium text-muted-foreground">
                                  Support Videos:
                                </p>
                                {issue.videos.map((video) => (
                                  <div
                                    key={video.id}
                                    className="flex items-center justify-between p-2 bg-muted rounded"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Video className="h-4 w-4 text-primary" />
                                      <span className="text-sm">{video.title}</span>
                                      <Badge variant="outline" className="text-xs">
                                        {video.duration}
                                      </Badge>
                                    </div>
                                    <div className="flex gap-1">
                                      <Button variant="ghost" size="icon" className="h-6 w-6">
                                        <Edit className="h-3 w-3" />
                                      </Button>
                                      <Button variant="ghost" size="icon" className="h-6 w-6">
                                        <Trash2 className="h-3 w-3 text-red-600" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}

                        {(!productIssues[product.id] || productIssues[product.id].length === 0) && (
                          <div className="text-center py-8 text-muted-foreground">
                            <AlertCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                            <p>No issues added yet. Click "Add Issue" to get started.</p>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
