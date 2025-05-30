import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GlobalSearch } from "@/components/GlobalSearch";

export const HeroSection = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const mediaItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Delicious chocolate cake",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Catering spread",
    },
    {
      type: "video",
      src: "https://videos.pexels.com/video-files/4491461/4491461-uhd_2560_1440_25fps.mp4",
      alt: "Catering activity video",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        {mediaItems[currentMediaIndex].type === "image" ? (
          <img
            src={mediaItems[currentMediaIndex].src}
            alt={mediaItems[currentMediaIndex].alt}
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        ) : (
          <video
            src={mediaItems[currentMediaIndex].src}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        )}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight font-playfair drop-shadow-lg">
                Delicious
                <span className="text-blue-500 animate-pulse"> Pastries</span> &
                <span className="text-blue-500 animate-pulse"> Cakes</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed drop-shadow-md">
                From artisanal pastries to custom cakes and full-service
                catering, we bring sweetness to every occasion. Made fresh daily
                with premium ingredients.
              </p>

              {/* Search Bar */}
              <div
                className="max-w-md animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <GlobalSearch placeholder="Search our delicious products..." />
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  asChild
                  size="lg"
                  className=" bg-blue-500 hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-playfair "
                >
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-gray-700  hover:bg-transparent hover:text-blue-600 hover:scale-105 transition-all duration-300 font-playfair"
                >
                  <Link to="/catering">Catering Services</Link>
                </Button>
              </div>
            </div>

            {/* Media indicator dots */}
            <div className="hidden lg:flex justify-center items-end h-full pb-8">
              <div className="flex space-x-3">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w- h-1 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentMediaIndex
                        ? "bg-orange-400 animate-pulse"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
