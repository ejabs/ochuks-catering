import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/components/CartProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Chocolate Layer Cake",
      price: 15750.0,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Rich chocolate cake with premium cocoa and cream filling",
      category: "cakes",
    },
    {
      id: 2,
      name: "Assorted Pastries Box",
      price: 8750.0,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Selection of our finest pastries including croissants and Danish",
      category: "pastries",
    },
    {
      id: 3,
      name: "Wedding Cake Custom",
      price: 52500.0,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Elegant multi-tier wedding cake customized to your preferences",
      category: "cakes",
    },
    {
      id: 4,
      name: "Artisan Cupcakes (12pc)",
      price: 12600.0,
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Dozen of gourmet cupcakes with various flavors and toppings",
      category: "desserts",
    },
    {
      id: 5,
      name: "Danish Pastries (4pc)",
      price: 2800.0,
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Traditional Danish pastries with fruit filling",
      category: "pastries",
    },
    {
      id: 6,
      name: "Birthday Cake",
      price: 12250.0,
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Colorful birthday cake with decorations",
      category: "cakes",
    },
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1
    );
  };

  const getVisibleProducts = () => {
    const itemsToShow =
      window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2;
    const products = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % featuredProducts.length;
      products.push(featuredProducts[index]);
    }
    return products;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most popular items, made fresh daily with the finest ingredients
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {getVisibleProducts().map((product, index) => (
                <div
                  key={`${product.id}-${currentIndex}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up bg-white">
                    <CardContent className="p-0">
                      <Link to={`/product/${product.id}`}>
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 right-2">
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                              {product.category}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        </div>
                      </Link>
                      <div className="p-6">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors duration-200 font-playfair">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-red-400">
                            ₦{product.price.toLocaleString()}
                          </span>
                          <Button
                            onClick={() => addToCart(product)}
                            className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300 font-playfair"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-orange-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="h-6 w-6 text-orange-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1 h-1 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex
                    ? "bg-orange-600 animate-pulse"
                    : "bg-gray-300 hover:bg-orange-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300 font-playfair"
          >
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
