import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Gift, Heart, Star, Users } from "lucide-react";

export const SpecialOffers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const offers = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Buy 2 pastry boxes, get 1 free! Valid on weekends only.",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "discount",
      icon: Gift,
      buttonText: "Learn More",
      details:
        "Perfect for family gatherings or sharing with friends. Mix and match from our selection of croissants, Danish pastries, and artisan muffins.",
    },
    {
      id: 2,
      title: "Wedding Package",
      description:
        "Complete wedding catering with 20% off for bookings this month.",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "booking",
      icon: Heart,
      buttonText: "Book Now",
      details:
        "Includes custom wedding cake, canapés, dessert table, and professional service staff. Perfect for your special day.",
    },
    {
      id: 3,
      title: "Corporate Catering",
      description:
        "Professional catering for meetings and events with 15% off first booking.",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "booking",
      icon: Users,
      buttonText: "Get Quote",
      details:
        "Breakfast pastries, lunch boxes, coffee service, and custom menu options for corporate events of all sizes.",
    },
    {
      id: 4,
      title: "Birthday Cake Special",
      description:
        "Custom birthday cakes with free delivery within Warri for orders above ₦15,000.",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "booking",
      icon: Star,
      buttonText: "Order Now",
      details:
        "Personalized designs, multiple flavors, and sizes available. Make your celebration extra special with our custom creations.",
    },
  ];

  const handleBooking = (offer) => {
    setSelectedOffer(offer);
  };

  const submitBooking = () => {
    // Handle booking submission here
    console.log("Booking submitted:", bookingForm, selectedOffer);
    setBookingForm({ name: "", email: "", phone: "", date: "", message: "" });
    setSelectedOffer(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-600 via-orange-400 to-red-500 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-playfair">
            Special Offers
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Don't miss out on our limited-time deals and seasonal specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <Card
              key={offer.id}
              className="bg-white/95 backdrop-blur hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-20 h-20 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-orange-600 text-white p-2 rounded-full">
                      <offer.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {offer.description}
                    </p>
                  </div>

                  {offer.type === "booking" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => handleBooking(offer)}
                          className="w-full bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300 font-playfair"
                        >
                          {offer.buttonText}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="font-playfair text-2xl">
                            {offer.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-gray-600">{offer.details}</p>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                value={bookingForm.name}
                                onChange={(e) =>
                                  setBookingForm({
                                    ...bookingForm,
                                    name: e.target.value,
                                  })
                                }
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={bookingForm.email}
                                onChange={(e) =>
                                  setBookingForm({
                                    ...bookingForm,
                                    email: e.target.value,
                                  })
                                }
                                placeholder="Enter your email"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                value={bookingForm.phone}
                                onChange={(e) =>
                                  setBookingForm({
                                    ...bookingForm,
                                    phone: e.target.value,
                                  })
                                }
                                placeholder="Enter your phone number"
                              />
                            </div>
                            <div>
                              <Label htmlFor="date">Preferred Date</Label>
                              <Input
                                id="date"
                                type="date"
                                value={bookingForm.date}
                                onChange={(e) =>
                                  setBookingForm({
                                    ...bookingForm,
                                    date: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="message">
                                Additional Requirements
                              </Label>
                              <Textarea
                                id="message"
                                value={bookingForm.message}
                                onChange={(e) =>
                                  setBookingForm({
                                    ...bookingForm,
                                    message: e.target.value,
                                  })
                                }
                                placeholder="Tell us about your specific needs..."
                                rows={3}
                              />
                            </div>
                          </div>
                          <Button
                            onClick={submitBooking}
                            className="w-full bg-blue-500 hover:bg-blue-600 font-playfair"
                          >
                            Submit Booking Request
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 hover:scale-105 transition-all duration-300 font-playfair"
                        >
                          {offer.buttonText}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="font-playfair text-2xl">
                            {offer.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={offer.image}
                            alt={offer.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <p className="text-gray-600">{offer.details}</p>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-orange-800 mb-2">
                              How to Claim:
                            </h4>
                            <ul className="text-sm text-orange-700 space-y-1">
                              <li>• Valid on weekends (Saturday & Sunday)</li>
                              <li>• Cannot be combined with other offers</li>
                              <li>• Minimum purchase required</li>
                              <li>• Valid until end of month</li>
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
