import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Ochuks Catering
            </h3>
            <p className="text-gray-300 mb-4">
              Premium pastries, custom cakes, and professional catering services
              for all your special occasions.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 39 Princess Walk Ovwain Warri Delta State</p>
              <p>📞 +(234) 123-4567</p>
              <p>✉️ ochukscateringservices@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/catering"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Catering
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=pastries"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Pastries
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=cakes"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Cakes
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=desserts"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Desserts
                </Link>
              </li>
              <li>
                <Link
                  to="/catering"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Private Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for special offers and new product
              updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ochuks Catering Services . All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
