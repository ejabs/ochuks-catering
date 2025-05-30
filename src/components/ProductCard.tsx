import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/components/CartProvider";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
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
        <div className="p-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600 mb-3 text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className=" font-bold text-black">
              ₦{product.price.toFixed(2)}
            </span>
            <Button
              onClick={() => addToCart(product)}
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
