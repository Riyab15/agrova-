import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid, List, SortAsc } from "lucide-react";
import { ProductCard } from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const ProductsPage = () => {
  const [viewMode, setViewMode] = React.useState("grid");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("name");
  const [showFilters, setShowFilters] = React.useState(false);

  // Mock products data
  const allProducts = [
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
      category: "vegetables",
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
      category: "vegetables",
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
      category: "dairy",
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
      category: "vegetables",
    },
    {
      id: 5,
      name: "Fresh Apples",
      price: 80,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
      farmer: {
        name: "Rajesh Gupta",
        avatar:
          "https://ui-avatars.com/api/?name=Rajesh+Gupta&background=4a9a4a&color=fff",
      },
      rating: 4.5,
      stock: 30,
      location: "4.1 km away",
      category: "fruits",
    },
    {
      id: 6,
      name: "Fresh Milk",
      price: 60,
      unit: "liter",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
      farmer: {
        name: "Krishna Devi",
        avatar:
          "https://ui-avatars.com/api/?name=Krishna+Devi&background=4a9a4a&color=fff",
      },
      rating: 4.9,
      isFreshToday: true,
      stock: 40,
      location: "2.8 km away",
      category: "dairy",
    },
  ];

  const categories = [
    { id: "all", name: "All Products", count: allProducts.length },
    {
      id: "vegetables",
      name: "Vegetables",
      count: allProducts.filter((p) => p.category === "vegetables").length,
    },
    {
      id: "fruits",
      name: "Fruits",
      count: allProducts.filter((p) => p.category === "fruits").length,
    },
    {
      id: "dairy",
      name: "Dairy",
      count: allProducts.filter((p) => p.category === "dairy").length,
    },
    { id: "grains", name: "Grains", count: 0 },
  ];

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    let filtered = allProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.farmer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-forest-800 dark:text-forest-100 mb-2">
          Fresh Products
        </h1>
        <p className="text-forest-600 dark:text-forest-400">
          Discover fresh, locally-sourced produce from verified farmers
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 space-y-4"
      >
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest-500 dark:text-forest-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products or farmers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-forest pl-10 w-full md:max-w-md"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-forest-500 text-white"
                    : "bg-forest-100 dark:bg-forest-800 text-forest-700 dark:text-forest-300 hover:bg-forest-200 dark:hover:bg-forest-700"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-forest pr-8 text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
              <SortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 text-forest-500 dark:text-forest-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex rounded-lg border border-forest-300 dark:border-forest-700">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-l-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-forest-500 text-white"
                    : "text-forest-500 dark:text-forest-400 hover:bg-forest-100 dark:hover:bg-forest-800"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-r-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-forest-500 text-white"
                    : "text-forest-500 dark:text-forest-400 hover:bg-forest-100 dark:hover:bg-forest-800"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <p className="text-forest-600 dark:text-forest-400">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
          {selectedCategory !== "all" &&
            ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
          {searchTerm && ` for "${searchTerm}"`}
        </p>
      </motion.div>

      {/* Products Grid/List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {filteredProducts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {viewMode === "grid" ? (
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
                ) : (
                  // List view (simplified card)
                  <div className="card-forest p-4 flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-forest-800 dark:text-forest-100">
                        {product.name}
                      </h3>
                      <p className="text-forest-600 dark:text-forest-400 text-sm">
                        by {product.farmer.name}
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="font-bold text-forest-800 dark:text-forest-100">
                          ₹{product.price}/{product.unit}
                        </span>
                        <span className="text-forest-500 dark:text-forest-400 text-sm">
                          ★ {product.rating}
                        </span>
                      </div>
                    </div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-forest-400 dark:text-forest-600 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-forest-800 dark:text-forest-100 mb-2">
              No products found
            </h3>
            <p className="text-forest-600 dark:text-forest-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </motion.div>

      {/* Load More Button (Future Enhancement) */}
      {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ProductsPage;
