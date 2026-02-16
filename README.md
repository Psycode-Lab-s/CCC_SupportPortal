# CCC Support Portal

A comprehensive customer support portal application with dual interfaces for customers and administrators.

## Features

### Customer Portal
- **Dashboard** - View product overview and issue tracking
- **My Products** - Browse and manage registered products
- **Chat Support** - Real-time support chat with agents
- **Video Tutorials** - Access product guides and videos
- **Profile Management** - Update personal information

### Admin Portal
- **Dashboard** - Overview of support metrics and analytics
- **User Management** - Manage customer accounts
- **Product Management** - Add and manage products
- **Issue Management** - Track and resolve customer issues
- **Chat Management** - Monitor and handle support conversations
- **Video Management** - Upload and organize tutorial videos
- **Settings** - Configure portal preferences

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **State Management:** React Context API

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Psycode-Lab-s/CCC_SupportPortal.git
cd CCC_SupportPortal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
CCC_SupportPortal/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React Context providers
│   │   ├── pages/           # Page components
│   │   │   ├── admin/       # Admin portal pages
│   │   │   └── customer/    # Customer portal pages
│   │   └── data/            # Mock data
│   ├── assets/              # Static assets (images, etc.)
│   └── styles/              # Global styles and theme
├── index.html
└── vite.config.ts
```

## Theme

The application supports light and dark mode with a coffee brown color scheme.

## License

© 2026 Psycode Labs. All rights reserved.

## Repository

https://github.com/Psycode-Lab-s/CCC_SupportPortal