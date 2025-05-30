import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <div className="text-2xl font-bold text-blue-600">
              Ochuks Catering
            </div>
            <span className="text-sm text-gray-600">Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 story-link"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 story-link"
            >
              Products
            </Link>
            <Link
              to="/catering"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 story-link"
            >
              Catering Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 story-link"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 story-link"
            >
              Contact
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            {/* <Button
              variant="ghost"
              size="sm"
              className="hover:scale-105 transition-transform duration-200"
            >
              <Search className="h-5 w-5" />
            </Button> */}
            <CartDrawer />

            {/* Mobile menu button */}
            <button
              className="md:hidden hover:scale-105 transition-transform duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                Products
              </Link>
              <Link
                to="/catering"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                Catering Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
