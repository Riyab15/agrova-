import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";

// Layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";

// Consumer Pages
import ConsumerCart from "./pages/consumer/CartPage";
import ConsumerWishlist from "./pages/consumer/WishlistPage";
import ConsumerOrders from "./pages/consumer/OrdersPage";
import CheckoutPage from "./pages/consumer/CheckoutPage";

// Farmer Pages
import FarmerDashboard from "./pages/farmer/DashboardPage";
import FarmerProducts from "./pages/farmer/ProductsPage";
import FarmerOrders from "./pages/farmer/OrdersPage";
import FarmerEarnings from "./pages/farmer/EarningsPage";

// Admin Pages
import AdminDashboard from "./pages/admin/DashboardPage";
import AdminUsers from "./pages/admin/UsersPage";
import AdminProducts from "./pages/admin/ProductsPage";
import AdminOrders from "./pages/admin/OrdersPage";

// Protected Route Component
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-forest-50 dark:bg-forest-950">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailsPage />} />

                {/* Consumer Routes */}
                <Route
                  path="/consumer/cart"
                  element={
                    <ProtectedRoute userType="consumer">
                      <ConsumerCart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/consumer/wishlist"
                  element={
                    <ProtectedRoute userType="consumer">
                      <ConsumerWishlist />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/consumer/orders"
                  element={
                    <ProtectedRoute userType="consumer">
                      <ConsumerOrders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/consumer/checkout"
                  element={
                    <ProtectedRoute userType="consumer">
                      <CheckoutPage />
                    </ProtectedRoute>
                  }
                />

                {/* Farmer Routes */}
                <Route
                  path="/farmer/dashboard"
                  element={
                    <ProtectedRoute userType="farmer">
                      <FarmerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/farmer/products"
                  element={
                    <ProtectedRoute userType="farmer">
                      <FarmerProducts />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/farmer/orders"
                  element={
                    <ProtectedRoute userType="farmer">
                      <FarmerOrders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/farmer/earnings"
                  element={
                    <ProtectedRoute userType="farmer">
                      <FarmerEarnings />
                    </ProtectedRoute>
                  }
                />

                {/* Admin Routes */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute userType="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute userType="admin">
                      <AdminUsers />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <ProtectedRoute userType="admin">
                      <AdminProducts />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/orders"
                  element={
                    <ProtectedRoute userType="admin">
                      <AdminOrders />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />

            {/* Toast notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "var(--forest-800)",
                  color: "var(--forest-100)",
                },
                success: {
                  style: {
                    background: "var(--success-500)",
                  },
                },
                error: {
                  style: {
                    background: "var(--error-500)",
                  },
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
