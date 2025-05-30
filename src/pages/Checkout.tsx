import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/CartProvider";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  { value: "10am-12pm", label: "10:00 AM - 12:00 PM" },
  { value: "12pm-2pm", label: "12:00 PM - 2:00 PM" },
  { value: "2pm-4pm", label: "2:00 PM - 4:00 PM" },
  { value: "4pm-6pm", label: "4:00 PM - 6:00 PM" },
];

const localGovernmentAreas = [
  { value: "warri-south", label: "Warri South", shippingFee: 1500 },
  { value: "warri-north", label: "Warri North", shippingFee: 2000 },
  { value: "warri-southwest", label: "Warri South West", shippingFee: 1800 },
  { value: "uvwie", label: "Uvwie", shippingFee: 2500 },
  { value: "udu", label: "Udu", shippingFee: 2200 },
  { value: "effurun", label: "Effurun", shippingFee: 1700 },
];

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [selectedLGA, setSelectedLGA] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    timeSlot: "",
    specialInstructions: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getShippingFee = () => {
    const lga = localGovernmentAreas.find((area) => area.value === selectedLGA);
    return lga ? lga.shippingFee : 0;
  };

  const getTotalWithShipping = () => {
    return getTotalPrice() + getShippingFee();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !formData.timeSlot || !selectedLGA) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields including date, time slot, and local government area.",
        variant: "destructive",
      });
      return;
    }

    const orderData = {
      items: cartItems,
      customer: formData,
      deliveryDate: format(date, "PPP"),
      timeSlot: formData.timeSlot,
      location: {
        lga: localGovernmentAreas.find((area) => area.value === selectedLGA)
          ?.label,
        address: formData.address,
        state: "Warri, Delta State",
      },
      subtotal: getTotalPrice(),
      shippingFee: getShippingFee(),
      total: getTotalWithShipping(),
    };

    // Store order data in localStorage for order confirmation page
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Initialize Paystack payment
    const handler = (window as any).PaystackPop.setup({
      key: "pk_test_your_public_key_here", // Replace with your Paystack public key
      email: formData.email,
      amount: getTotalWithShipping() * 100, // Amount in kobo
      currency: "NGN",
      ref: "order_" + Math.floor(Math.random() * 1000000000),
      metadata: {
        custom_fields: [
          {
            display_name: "Order Items",
            variable_name: "order_items",
            value: cartItems.length + " items",
          },
        ],
      },
      callback: function (response: any) {
        // Payment successful
        localStorage.setItem("paymentReference", response.reference);
        clearCart();
        window.location.href = "/order-confirmation";
      },
      onClose: function () {
        toast({
          title: "Payment Cancelled",
          description: "You cancelled the payment process.",
        });
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <div>
                  <Label>State</Label>
                  <Input
                    value="Warri, Delta State"
                    readOnly
                    className="bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div>
                  <Label>Local Government Area</Label>
                  <Select
                    value={selectedLGA}
                    onValueChange={setSelectedLGA}
                    required
                  >
                    <SelectTrigger className="transition-all duration-200 hover:scale-105">
                      <SelectValue placeholder="Select your local government area" />
                    </SelectTrigger>
                    <SelectContent>
                      {localGovernmentAreas.map((lga) => (
                        <SelectItem key={lga.value} value={lga.value}>
                          {lga.label} (₦{lga.shippingFee} shipping)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Delivery Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal transition-all duration-200 hover:scale-105",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a delivery date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Delivery Time</Label>
                  <Select
                    value={formData.timeSlot}
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeSlot: value })
                    }
                    required
                  >
                    <SelectTrigger className="transition-all duration-200 hover:scale-105">
                      <SelectValue placeholder="Select delivery time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot.value} value={slot.value}>
                          {slot.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialInstructions">
                    Special Instructions
                  </Label>
                  <Textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any special delivery instructions or customization requests..."
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                  size="lg"
                >
                  Pay Now - ₦{getTotalWithShipping().toFixed(2)}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center animate-fade-in"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold">
                      ₦{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Subtotal:</span>
                    <span>₦{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Shipping:</span>
                    <span>₦{getShippingFee().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span>₦{getTotalWithShipping().toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg animate-fade-in">
                  <p className="text-sm text-blue-800">
                    <strong>Payment Methods:</strong> We accept all major
                    debit/credit cards, bank transfers, and mobile money through
                    Paystack.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />

      {/* Paystack Script */}
      <script src="https://js.paystack.co/v1/inline.js"></script>
    </div>
  );
};

export default Checkout;
