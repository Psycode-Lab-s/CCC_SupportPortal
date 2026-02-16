import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { Play } from 'lucide-react';
import { customerProducts, issueCategories, videos } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { FloatingChatButton } from '../../components/FloatingChatButton';

export function IssueDetail() {
  const { productId, issueId } = useParams();
  const navigate = useNavigate();
  
  const product = customerProducts.find((p) => p.id === productId);
  const issue = issueCategories.find((i) => i.id === issueId);
  const issueVideos = videos.filter(
    (v) => v.productId === productId && v.issueId === issueId
  );

  if (!product || !issue) {
    return <div>Not found</div>;
  }

  return (
    <>
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/customer')}>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/customer/products')}>
              My Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate(`/customer/products/${productId}`)}>
              {product.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{issue.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-white dark:bg-card border border-border rounded-xl transition-colors duration-200">
        <div className="p-4 border-b border-border">
          <h2>{issue.title}</h2>
          <p className="text-muted-foreground mt-1">{issue.description}</p>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead className="w-24">Thumbnail</TableHead>
              <TableHead>Issue Title</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issueVideos.map((video) => (
              <TableRow
                key={video.id}
                className="h-12 border-b border-border hover:bg-muted transition-colors"
              >
                <TableCell>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                </TableCell>
                <TableCell>{video.title}</TableCell>
                <TableCell>{video.duration}</TableCell>
                <TableCell>{video.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    className="bg-[var(--button-primary)]"
                    onClick={() => navigate(`/customer/videos/${video.id}`)}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Watch
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
