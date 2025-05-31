import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartProvider";
import { ArrowLeft, Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "Chocolate Layer Cake",
      price: 45.0,
      category: "cakes",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Rich chocolate cake with premium cocoa and layers of smooth chocolate ganache. Perfect for celebrations and special occasions.",
    },
    {
      id: 2,
      name: "Croissants (6pc)",
      price: 12.0,
      category: "pastries",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Buttery, flaky French croissants baked fresh daily. Light, airy texture with a golden crispy exterior.",
    },
    {
      id: 3,
      name: "Wedding Cake Custom",
      price: 150.0,
      category: "cakes",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Custom wedding cake design tailored to your special day. Multiple tiers available with your choice of flavors and decorations.",
    },
    {
      id: 4,
      name: "Artisan Cupcakes (12pc)",
      price: 36.0,
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Gourmet cupcakes with various flavors including vanilla, chocolate, red velvet, and seasonal specialties.",
    },
    {
      id: 5,
      name: "Danish Pastries (4pc)",
      price: 8.0,
      category: "pastries",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Traditional Danish pastries with fruit filling. Light, buttery pastry with sweet fruit compote centers.",
    },
    {
      id: 6,
      name: "Birthday Cake",
      price: 35.0,
      category: "cakes",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Colorful birthday cake with decorations. Available in various sizes and can be customized with personal messages.",
    },
    {
      id: 7,
      name: "Chocolate Brownies (8pc)",
      price: 18.0,
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Fudgy chocolate brownies made with premium chocolate. Rich, dense texture with optional nuts or chocolate chips.",
    },
    {
      id: 8,
      name: "Muffins Assorted (6pc)",
      price: 15.0,
      category: "pastries",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Mixed flavors of fresh muffins including blueberry, chocolate chip, banana nut, and lemon poppy seed.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id || ""));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/products"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-black mt-2">
                ₦{product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-3 py-1 text-sm font-medium">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-sm bg-blue-500 hover:bg-blue-600"
            >
              Add to Cart - ₦{(product.price * quantity).toFixed(2)}
            </Button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
