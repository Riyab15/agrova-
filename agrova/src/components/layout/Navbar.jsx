import React from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  Bell,
  User,
  ShoppingCart,
  Heart,
  Search,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth, USER_TYPES } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isAuthenticated, user, userType, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setShowProfileMenu(false);
  };

  const getNavItems = () => {
    if (!isAuthenticated) {
      return [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ];
    }

    switch (userType) {
      case USER_TYPES.FARMER:
        return [
          { name: "Dashboard", path: "/farmer/dashboard" },
          { name: "Products", path: "/farmer/products" },
          { name: "Orders", path: "/farmer/orders" },
          { name: "Earnings", path: "/farmer/earnings" },
          { name: "Chat", path: "/farmer/chat" },
        ];
      case USER_TYPES.ADMIN:
        return [
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Users", path: "/admin/users" },
          { name: "Products", path: "/admin/products" },
          { name: "Orders", path: "/admin/orders" },
        ];
      default: // CONSUMER
        return [
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Orders", path: "/consumer/orders" },
          { name: "Chat", path: "/consumer/chat" },
        ];
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/90 dark:bg-forest-900/90 backdrop-blur-md border-b border-forest-200 dark:border-forest-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 bg-forest-gradient rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">A</span>
            </motion.div>
            <span className="text-xl font-bold text-forest-800 dark:text-forest-100">
              Agrova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-100 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search for consumers */}
            {userType === USER_TYPES.CONSUMER && (
              <button className="p-2 rounded-lg hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors">
                <Search className="w-5 h-5 text-forest-600 dark:text-forest-400" />
              </button>
            )}

            {/* Cart and Wishlist for consumers */}
            {userType === USER_TYPES.CONSUMER && (
              <>
                <Link
                  to="/consumer/wishlist"
                  className="p-2 rounded-lg hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors relative"
                >
                  <Heart className="w-5 h-5 text-forest-600 dark:text-forest-400" />
                  <span className="absolute -top-1 -right-1 bg-error-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
                <Link
                  to="/consumer/cart"
                  className="p-2 rounded-lg hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors relative"
                >
                  <ShoppingCart className="w-5 h-5 text-forest-600 dark:text-forest-400" />
                  <span className="absolute -top-1 -right-1 bg-error-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </Link>
              </>
            )}

            {/* Notifications */}
            {isAuthenticated && (
              <button className="p-2 rounded-lg hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors relative">
                <Bell className="w-5 h-5 text-forest-600 dark:text-forest-400" />
                <span className="absolute -top-1 -right-1 bg-error-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </button>
            )}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-forest-100 dark:bg-forest-800 hover:bg-forest-200 dark:hover:bg-forest-700 transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-forest-600 dark:text-forest-400" />
              ) : (
                <Moon className="w-5 h-5 text-forest-600 dark:text-forest-400" />
              )}
            </motion.button>

            {/* User Profile or Auth Buttons */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden md:block text-forest-700 dark:text-forest-300 font-medium">
                    {user?.name}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 card-forest shadow-lg rounded-lg overflow-hidden"
                  >
                    <Link
                      to={`/${userType}/profile`}
                      className="block px-4 py-2 hover-forest text-forest-700 dark:text-forest-300"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to={`/${userType}/settings`}
                      className="block px-4 py-2 hover-forest text-forest-700 dark:text-forest-300"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover-forest text-error-600 dark:text-error-400"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-100 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link to="/signup" className="btn-forest-primary">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors"
            >
              <Menu className="w-5 h-5 text-forest-600 dark:text-forest-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white dark:bg-forest-900 border-t border-forest-200 dark:border-forest-700"
        >
          <div className="px-4 py-2 space-y-1">
            {getNavItems().map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-lg text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
