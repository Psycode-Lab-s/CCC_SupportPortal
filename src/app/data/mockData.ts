export const customerProducts = [
  {
    id: '1',
    name: 'Professional Espresso Machine Pro X',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    serialNumber: 'ESM-2024-1234',
    description: 'High-end espresso machine with advanced features',
    issueCount: 12,
  },
  {
    id: '2',
    name: 'Smart Coffee Grinder Elite',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    serialNumber: 'GRD-2024-5678',
    description: 'Precision grinding with smart controls',
    issueCount: 8,
  },
  {
    id: '3',
    name: 'Commercial Milk Frother Station',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
    serialNumber: 'FRT-2024-9012',
    description: 'Professional-grade milk frothing system',
    issueCount: 6,
  },
];

export const issueCategories = [
  {
    id: 'installation',
    title: 'Installation',
    description: 'Setup and initial configuration guides',
    videoCount: 5,
    icon: 'Wrench',
  },
  {
    id: 'cleaning',
    title: 'Cleaning & Maintenance',
    description: 'Regular maintenance and cleaning procedures',
    videoCount: 8,
    icon: 'Droplets',
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    videoCount: 12,
    icon: 'AlertCircle',
  },
  {
    id: 'general',
    title: 'General Usage',
    description: 'Daily operation and best practices',
    videoCount: 7,
    icon: 'BookOpen',
  },
];

export const videos = [
  {
    id: '1',
    productId: '1',
    issueId: 'installation',
    title: 'Initial Setup and Water Tank Installation',
    description: 'Learn how to properly set up your espresso machine',
    duration: '5:42',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    videoUrl: 'https://example.com/video1.mp4',
    lastUpdated: '2026-01-10',
    status: 'Published',
  },
  {
    id: '2',
    productId: '1',
    issueId: 'installation',
    title: 'Electrical Connection and Safety',
    description: 'Important electrical setup guidelines',
    duration: '4:18',
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    videoUrl: 'https://example.com/video2.mp4',
    lastUpdated: '2026-01-12',
    status: 'Published',
  },
  {
    id: '3',
    productId: '1',
    issueId: 'cleaning',
    title: 'Daily Cleaning Routine',
    description: 'Essential daily cleaning steps',
    duration: '6:30',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    videoUrl: 'https://example.com/video3.mp4',
    lastUpdated: '2026-01-15',
    status: 'Published',
  },
  {
    id: '4',
    productId: '1',
    issueId: 'cleaning',
    title: 'Deep Clean and Descaling',
    description: 'Monthly maintenance procedures',
    duration: '8:15',
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    videoUrl: 'https://example.com/video4.mp4',
    lastUpdated: '2026-01-18',
    status: 'Published',
  },
  {
    id: '5',
    productId: '1',
    issueId: 'troubleshooting',
    title: 'Machine Not Heating - Solutions',
    description: 'Troubleshoot heating issues',
    duration: '7:22',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    videoUrl: 'https://example.com/video5.mp4',
    lastUpdated: '2026-01-20',
    status: 'Published',
  },
  {
    id: '6',
    productId: '1',
    issueId: 'troubleshooting',
    title: 'Water Flow Issues',
    description: 'Fix water pressure problems',
    duration: '5:55',
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    videoUrl: 'https://example.com/video6.mp4',
    lastUpdated: '2026-01-22',
    status: 'Published',
  },
];

export const recentActivity = [
  {
    id: '1',
    activity: 'Watched: Daily Cleaning Routine',
    product: 'Professional Espresso Machine Pro X',
    date: '2026-02-14',
  },
  {
    id: '2',
    activity: 'Opened chat support ticket',
    product: 'Smart Coffee Grinder Elite',
    date: '2026-02-13',
  },
  {
    id: '3',
    activity: 'Watched: Water Flow Issues',
    product: 'Professional Espresso Machine Pro X',
    date: '2026-02-12',
  },
  {
    id: '4',
    activity: 'Completed: Installation Guide',
    product: 'Commercial Milk Frother Station',
    date: '2026-02-10',
  },
];

export const adminUsers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@ccc.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.c@ccc.com',
    role: 'Support Agent',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma.d@ccc.com',
    role: 'Content Manager',
    status: 'Active',
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james.w@ccc.com',
    role: 'Support Agent',
    status: 'Inactive',
  },
];

export const adminCustomers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    assignedProducts: 3,
    status: 'Active',
    joinDate: '2025-06-15',
  },
  {
    id: '2',
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    assignedProducts: 2,
    status: 'Active',
    joinDate: '2025-08-22',
  },
  {
    id: '3',
    name: 'Robert Taylor',
    email: 'robert.t@example.com',
    assignedProducts: 1,
    status: 'Active',
    joinDate: '2025-10-10',
  },
  {
    id: '4',
    name: 'Maria Garcia',
    email: 'maria.g@example.com',
    assignedProducts: 4,
    status: 'Active',
    joinDate: '2025-12-05',
  },
];

export const adminProducts = [
  {
    id: '1',
    name: 'Professional Espresso Machine Pro X',
    totalIssues: 4,
    totalVideos: 12,
    createdDate: '2025-01-15',
  },
  {
    id: '2',
    name: 'Smart Coffee Grinder Elite',
    totalIssues: 3,
    totalVideos: 8,
    createdDate: '2025-03-20',
  },
  {
    id: '3',
    name: 'Commercial Milk Frother Station',
    totalIssues: 2,
    totalVideos: 6,
    createdDate: '2025-05-10',
  },
];

export const adminIssues = [
  {
    id: '1',
    productId: '1',
    productName: 'Professional Espresso Machine Pro X',
    title: 'Installation',
    description: 'Setup and configuration guides',
    totalVideos: 5,
  },
  {
    id: '2',
    productId: '1',
    productName: 'Professional Espresso Machine Pro X',
    title: 'Cleaning & Maintenance',
    description: 'Regular maintenance procedures',
    totalVideos: 8,
  },
  {
    id: '3',
    productId: '1',
    productName: 'Professional Espresso Machine Pro X',
    title: 'Troubleshooting',
    description: 'Common problems and solutions',
    totalVideos: 12,
  },
];

export const chatMessages = [
  {
    id: '1',
    conversationId: '1',
    sender: 'user',
    message: 'Hi, I need help with my espresso machine',
    timestamp: '2026-02-14 10:30',
  },
  {
    id: '2',
    conversationId: '1',
    sender: 'bot',
    message: 'Hello! I\'d be happy to help you with your espresso machine. What seems to be the issue?',
    timestamp: '2026-02-14 10:31',
  },
  {
    id: '3',
    conversationId: '1',
    sender: 'user',
    message: 'The water is not flowing properly',
    timestamp: '2026-02-14 10:32',
  },
  {
    id: '4',
    conversationId: '1',
    sender: 'agent',
    message: 'I can help you with that. First, let me check if the water tank is properly seated.',
    timestamp: '2026-02-14 10:35',
  },
];

export const chatConversations = [
  {
    id: '1',
    customerName: 'John Smith',
    lastMessage: 'The water is not flowing properly',
    status: 'Open',
    timestamp: '2026-02-14 10:32',
    unread: 2,
  },
  {
    id: '2',
    customerName: 'Lisa Anderson',
    lastMessage: 'Thank you for your help!',
    status: 'Closed',
    timestamp: '2026-02-13 15:20',
    unread: 0,
  },
  {
    id: '3',
    customerName: 'Robert Taylor',
    lastMessage: 'Can you help me with installation?',
    status: 'Pending',
    timestamp: '2026-02-14 09:15',
    unread: 1,
  },
];
