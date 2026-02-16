import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { customerProducts, issueCategories } from '../../data/mockData';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';
import * as LucideIcons from 'lucide-react';
import { FloatingChatButton } from '../../components/FloatingChatButton';

export function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = customerProducts.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
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
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-white dark:bg-card border border-border rounded-xl p-6 transition-colors duration-200">
        <h2>{product.name}</h2>
        <p className="text-muted-foreground mt-2">{product.description}</p>
      </div>

      <div>
        <h3 className="mb-4">Issue Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {issueCategories.map((category) => {
            const IconComponent = (LucideIcons as any)[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/customer/products/${productId}/issues/${category.id}`)}
                className="bg-white dark:bg-card border border-border rounded-xl p-4 text-left transition-all duration-200 hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {IconComponent && (
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div>
                      <h4>{category.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                      <div className="text-sm text-primary mt-2">
                        {category.videoCount} videos available
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>

    <FloatingChatButton />
    </>
  );
}
