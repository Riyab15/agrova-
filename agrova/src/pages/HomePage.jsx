import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Truck,
  Shield,
  Users,
  Star,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ui/Card";
import Button from "../components/ui/Button";

const HomePage = () => {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 45,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
      farmer: {
        name: "Ravi Kumar",
        avatar:
          "https://ui-avatars.com/api/?name=Ravi+Kumar&background=4a9a4a&color=fff",
      },
      rating: 4.8,
      isOrganic: true,
      isFreshToday: true,
      stock: 25,
      location: "2.5 km away",
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 30,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
      farmer: {
        name: "Sunita Devi",
        avatar:
          "https://ui-avatars.com/api/?name=Sunita+Devi&background=4a9a4a&color=fff",
      },
      rating: 4.9,
      isOrganic: true,
      stock: 15,
      location: "1.8 km away",
    },
    {
      id: 3,
      name: "Farm Fresh Eggs",
      price: 8,
      unit: "dozen",
      image:
        "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=400&fit=crop",
      farmer: {
        name: "Amit Singh",
        avatar:
          "https://ui-avatars.com/api/?name=Amit+Singh&background=4a9a4a&color=fff",
      },
      rating: 4.7,
      isFreshToday: true,
      stock: 50,
      location: "3.2 km away",
    },
    {
      id: 4,
      name: "Organic Carrots",
      price: 35,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
      farmer: {
        name: "Priya Sharma",
        avatar:
          "https://ui-avatars.com/api/?name=Priya+Sharma&background=4a9a4a&color=fff",
      },
      rating: 4.6,
      isOrganic: true,
      stock: 20,
      location: "1.5 km away",
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: "Farm Fresh Quality",
      description:
        "Direct from local farms with guaranteed freshness and quality",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same day delivery for orders placed before 2 PM",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products undergo strict quality checks before delivery",
    },
    {
      icon: Users,
      title: "Support Local Farmers",
      description: "Help local farming communities thrive and grow",
    },
  ];

  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: Users },
    { label: "Local Farmers", value: "500+", icon: Leaf },
    { label: "Products Delivered", value: "1M+", icon: Truck },
    { label: "Customer Rating", value: "4.9★", icon: Star },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-50 to-forest-100 dark:from-forest-950 dark:to-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-nature-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-forest-800 dark:text-forest-100 leading-tight"
                >
                  Fresh from
                  <span className="text-forest-500"> Farm </span>
                  to your
                  <span className="text-forest-500"> Table</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-forest-700 dark:text-forest-300 leading-relaxed"
                >
                  Connect directly with local farmers and get the freshest,
                  highest quality produce delivered to your doorstep. Support
                  sustainable farming while enjoying nature's best.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link to="/products">
                  <Button size="lg" icon={ArrowRight} iconPosition="right">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg">
                    Join as Farmer
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-6 text-forest-600 dark:text-forest-400"
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Same day delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Local farmers</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop"
                  alt="Fresh vegetables from farm"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-forest-900 p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-forest-800 dark:text-forest-100">
                    500+ Farmers Online
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-forest-900 p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success-500" />
                  <span className="text-sm font-medium text-forest-800 dark:text-forest-100">
                    Fresh Stock Updated
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-100 dark:bg-forest-800 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-forest-600 dark:text-forest-400" />
                </div>
                <div className="text-2xl font-bold text-forest-800 dark:text-forest-100">
                  {stat.value}
                </div>
                <div className="text-forest-600 dark:text-forest-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-forest-800 dark:text-forest-100 mb-4">
              Why Choose Agrova?
            </h2>
            <p className="text-xl text-forest-600 dark:text-forest-400 max-w-3xl mx-auto">
              We bridge the gap between farmers and consumers, ensuring quality,
              freshness, and fair prices for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-forest-50 dark:hover:bg-forest-800 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-gradient rounded-xl">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-800 dark:text-forest-100">
                  {feature.title}
                </h3>
                <p className="text-forest-600 dark:text-forest-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-forest-800 dark:text-forest-100 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-forest-600 dark:text-forest-400">
                Handpicked fresh produce from local farmers
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" icon={ArrowRight} iconPosition="right">
                View All
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={(product) =>
                    console.log("Add to cart:", product)
                  }
                  onAddToWishlist={(product) =>
                    console.log("Add to wishlist:", product)
                  }
                  onViewDetails={(product) =>
                    console.log("View details:", product)
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to taste the difference?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who choose fresh,
              locally-sourced produce for their families.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products">
                <Button variant="secondary" size="lg">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-forest-600"
                >
                  Become a Farmer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
