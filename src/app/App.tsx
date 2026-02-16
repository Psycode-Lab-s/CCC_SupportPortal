import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import { CustomerSidebar } from './components/CustomerSidebar';
import { AdminSidebar } from './components/AdminSidebar';
import { Navbar } from './components/Navbar';
import { Toaster } from './components/ui/sonner';

// Landing Page
import { LandingPage } from './pages/LandingPage';

// Customer Pages
import { CustomerDashboard } from './pages/customer/CustomerDashboard';
import { MyProducts } from './pages/customer/MyProducts';
import { ProductDetail } from './pages/customer/ProductDetail';
import { IssueDetail } from './pages/customer/IssueDetail';
import { VideoPlayer } from './pages/customer/VideoPlayer';
import { ChatSupport } from './pages/customer/ChatSupport';
import { Profile } from './pages/customer/Profile';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { Users } from './pages/admin/Users';
import { Customers } from './pages/admin/Customers';
import { Products } from './pages/admin/Products';
import { Issues } from './pages/admin/Issues';
import { Videos } from './pages/admin/Videos';
import { ChatManagement } from './pages/admin/ChatManagement';
import { Settings } from './pages/admin/Settings';

function CustomerLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex h-screen bg-background transition-colors duration-200">
      <CustomerSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar pageTitle={title} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function AdminLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex h-screen bg-background transition-colors duration-200">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar pageTitle={title} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            {/* Customer Routes */}
            <Route
              path="/customer"
              element={
                <CustomerLayout title="Support Dashboard">
                  <CustomerDashboard />
                </CustomerLayout>
              }
            />
            <Route
              path="/customer/products"
              element={
                <CustomerLayout title="My Products">
                  <MyProducts />
                </CustomerLayout>
              }
            />
            <Route
              path="/customer/products/:productId"
              element={
                <CustomerLayout title="Product Details">
                  <ProductDetail />
                </CustomerLayout>
              }
            />
            <Route
              path="/customer/products/:productId/issues/:issueId"
              element={
                <CustomerLayout title="Issue Videos">
                  <IssueDetail />
                </CustomerLayout>
              }
            />
            <Route
              path="/customer/videos/:videoId"
              element={
                <CustomerLayout title="Video Player">
                  <VideoPlayer />
                </CustomerLayout>
              }
            />
            <Route
              path="/customer/chat"
              element={
                <CustomerLayout title="Chat Support">
                  <ChatSupport />
                </CustomerLayout>
              }
            />
            <Route
              path="/customer/profile"
              element={
                <CustomerLayout title="Profile">
                  <Profile />
                </CustomerLayout>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <AdminLayout title="Admin Dashboard">
                  <AdminDashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminLayout title="Users Management">
                  <Users />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/customers"
              element={
                <AdminLayout title="Customers Management">
                  <Customers />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/products"
              element={
                <AdminLayout title="Products Management">
                  <Products />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/issues"
              element={
                <AdminLayout title="Issues Management">
                  <Issues />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/videos"
              element={
                <AdminLayout title="Videos Management">
                  <Videos />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/chats"
              element={
                <AdminLayout title="Chat Management">
                  <ChatManagement />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <AdminLayout title="Settings">
                  <Settings />
                </AdminLayout>
              }
            />
          </Routes>

          <Toaster />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}