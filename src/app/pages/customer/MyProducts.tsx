import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { SearchBar } from '../../components/SearchBar';
import { FloatingChatButton } from '../../components/FloatingChatButton';
import { customerProducts } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

export function MyProducts() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = customerProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.serialNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="space-y-6 p-6">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">My Products</h2>
          <div className="flex-1 max-w-2xl">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search products by name or serial number..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary hover:shadow-xl group"
            >
              {/* Serial Number Badge at Top */}
              <div className="bg-gradient-to-r from-primary to-primary p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80 font-medium">Serial Number</span>
                  <Badge className="bg-white/20 text-white border-0 font-mono">
                    {product.serialNumber}
                  </Badge>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-t border-border">
                    <span className="text-muted-foreground">Known Issues:</span>
                    <Badge variant="outline" className="font-semibold">
                      {product.issueCount} issues
                    </Badge>
                  </div>
                </div>

                <Button
                  className="w-full bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] group"
                  onClick={() => navigate(`/customer/products/${product.id}`)}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products found matching your search.
            </p>
          </div>
        )}
      </div>

      <FloatingChatButton />
    </>
  );
}
