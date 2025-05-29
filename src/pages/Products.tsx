
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductFilter } from '@/components/ProductFilter';
import { GlobalSearch } from '@/components/GlobalSearch';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    { id: 1, name: 'Chocolate Layer Cake', price: 45.00, category: 'cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Rich chocolate cake with premium cocoa and layers of smooth chocolate ganache. Perfect for celebrations and special occasions.' },
    { id: 2, name: 'Croissants (6pc)', price: 12.00, category: 'pastries', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Buttery, flaky French croissants baked fresh daily. Light, airy texture with a golden crispy exterior.' },
    { id: 3, name: 'Wedding Cake Custom', price: 150.00, category: 'cakes', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Custom wedding cake design tailored to your special day. Multiple tiers available with your choice of flavors and decorations.' },
    { id: 4, name: 'Artisan Cupcakes (12pc)', price: 36.00, category: 'desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Gourmet cupcakes with various flavors including vanilla, chocolate, red velvet, and seasonal specialties.' },
    { id: 5, name: 'Danish Pastries (4pc)', price: 8.00, category: 'pastries', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Traditional Danish pastries with fruit filling. Light, buttery pastry with sweet fruit compote centers.' },
    { id: 6, name: 'Birthday Cake', price: 35.00, category: 'cakes', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Colorful birthday cake with decorations. Available in various sizes and can be customized with personal messages.' },
    { id: 7, name: 'Chocolate Brownies (8pc)', price: 18.00, category: 'desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Fudgy chocolate brownies made with premium chocolate. Rich, dense texture with optional nuts or chocolate chips.' },
    { id: 8, name: 'Muffins Assorted (6pc)', price: 15.00, category: 'pastries', image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Mixed flavors of fresh muffins including blueberry, chocolate chip, banana nut, and lemon poppy seed.' }
  ];

  useEffect(() => {
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [searchParams]);

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm) {
      setSearchParams({ search: newSearchTerm });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600">Discover our wide range of freshly made pastries, custom cakes, and delicious desserts.</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <GlobalSearch 
            onSearch={handleSearch}
            placeholder="Search products..."
          />
          
          <ProductFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
