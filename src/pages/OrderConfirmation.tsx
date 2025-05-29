
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OrderData {
  items: any[];
  customer: any;
  deliveryDate: string;
  timeSlot: string;
  location: any;
  subtotal: number;
  shippingFee: number;
  total: number;
}

const OrderConfirmation = () => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [paymentReference, setPaymentReference] = useState('');

  useEffect(() => {
    const storedOrderData = localStorage.getItem('orderData');
    const storedPaymentRef = localStorage.getItem('paymentReference');
    
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
    
    if (storedPaymentRef) {
      setPaymentReference(storedPaymentRef);
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find your order details.</p>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-scale-in" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your order. We'll prepare your delicious items with care.</p>
          {paymentReference && (
            <p className="text-sm text-gray-500 mt-2">Payment Reference: {paymentReference}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderData.items.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold">₦{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₦{orderData.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>₦{orderData.shippingFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total Paid:</span>
                    <span className="text-green-600">₦{orderData.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer & Delivery Info */}
          <div className="space-y-6">
            {/* Customer Information */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Name:</strong> {orderData.customer.firstName} {orderData.customer.lastName}</p>
                <p><strong>Email:</strong> {orderData.customer.email}</p>
                <p><strong>Phone:</strong> {orderData.customer.phone}</p>
                {orderData.customer.specialInstructions && (
                  <p><strong>Special Instructions:</strong> {orderData.customer.specialInstructions}</p>
                )}
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Address:</strong> {orderData.customer.address}</p>
                <p><strong>Local Government Area:</strong> {orderData.location.lga}</p>
                <p><strong>State:</strong> {orderData.location.state}</p>
                <div className="flex items-center mt-4 p-3 bg-orange-50 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600 mr-2" />
                  <div>
                    <p className="font-medium">Delivery Schedule</p>
                    <p className="text-sm text-gray-600">{orderData.deliveryDate}</p>
                    <p className="text-sm text-gray-600">{orderData.timeSlot}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What's Next */}
        <Card className="mt-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>What happens next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Order Preparation</h3>
                <p className="text-sm text-gray-600">We'll start preparing your fresh items right away</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Quality Check</h3>
                <p className="text-sm text-gray-600">Every item is carefully checked for quality</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">Your order will be delivered on time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-200">
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-200">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
