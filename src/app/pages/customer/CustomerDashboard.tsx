import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { FloatingChatButton } from '../../components/FloatingChatButton';
import { SearchBar } from '../../components/SearchBar';
import { customerProducts } from '../../data/mockData';
import { Badge } from '../../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'Where can I find troubleshooting videos?',
    answer: 'Navigate to the specific product in your My Products section. Each product has a dedicated issues section with video tutorials for common problems.',
  },
  {
    id: '2',
    question: 'How do I contact support?',
    answer: 'You can use the floating chat button at the bottom right of any page to instantly connect with our support team, or visit the Chat Support section.',
  },
  {
    id: '3',
    question: 'What should I do if my machine is not working?',
    answer: 'First, check the troubleshooting videos for your specific product. If the issue persists, open a support chat ticket and our team will assist you promptly.',
  },
];

export function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Search across products and their issues
  const searchResults = customerProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="space-y-8 p-6">
        <div>
          <h2 className="text-2xl font-bold mb-6">Support Dashboard</h2>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search for issues like 'grinder not working', 'machine noise', etc..."
          />
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Search Results ({searchResults.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-card border border-border rounded-xl p-4 hover:border-primary transition-all"
                >
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <Badge variant="outline">{product.issueCount} related issues</Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Intro Video Section */}
        <div className="bg-white dark:bg-card border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Welcome Video</h3>
          <div className="relative rounded-lg overflow-hidden bg-muted" style={{ height: '300px' }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/welcome.mp4" type="video/mp4" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">
                  Getting Started with CCC Support Portal
                </p>
              </div>
            </video>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-card border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-border rounded-lg px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      <FloatingChatButton />
    </>
  );
}
