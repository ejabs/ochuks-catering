import { ShoppingCart, X, Plus, Minus, Tag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/CartProvider";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const CartDrawer = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const subtotal = getTotalPrice();
  const finalTotal = subtotal - discount;

  const applyPromoCode = () => {
    // Simple promo code logic - you can expand this
    if (promoCode.toLowerCase() === "sweet10") {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
    } else if (promoCode.toLowerCase() === "welcome20") {
      setDiscount(subtotal * 0.2);
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative hover:scale-110 transition-all duration-300 group"
        >
          <ShoppingCart className="h-5 w-5 group-hover:animate-bounce" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-96 p-0 animate-slide-in-right">
        <SheetHeader className="p-6 border-b bg-gradient-to-r from-orange-50 to-yellow-50">
          <SheetTitle className="text-xl font-bold text-gray-900 font-playfair">
            Shopping Cart
          </SheetTitle>
          <p className="text-sm text-gray-600">
            {cartItemsCount} item(s) in your cart
          </p>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center animate-fade-in">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-playfair">
                  Your cart is empty
                </h3>
                <p className="text-gray-600 mb-6">
                  Add some delicious items to get started!
                </p>
                <Button
                  asChild
                  className="bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/products">Shop Now</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm font-playfair">
                          {item.name}
                        </h4>
                        <p className="text-orange-600 font-bold">
                          ₦{item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-2 py-1 bg-gray-100 rounded text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          ₦{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:scale-110 transition-all duration-200 mt-1"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Section */}
              <div className="border-t p-6 bg-gray-50">
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button
                      onClick={applyPromoCode}
                      variant="outline"
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      Apply
                    </Button>
                  </div>
                  {promoApplied && (
                    <p className="text-green-600 text-sm mt-2 animate-fade-in">
                      Promo code applied! You saved ₦{discount.toFixed(2)}
                    </p>
                  )}

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-300 font-playfair"
                  >
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>

                {/* Order Summary */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>₦{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount:</span>
                      <span>-₦{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                    <span className="font-playfair">Total:</span>
                    <span className="text-orange-600">
                      ₦{finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-300 font-playfair"
                >
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
