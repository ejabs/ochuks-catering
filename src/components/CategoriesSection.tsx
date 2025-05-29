
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export const CategoriesSection = () => {
  const categories = [
    {
      name: 'Pastries',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Fresh croissants, muffins, and artisanal pastries',
      link: '/products?category=pastries'
    },
    {
      name: 'Cakes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Custom cakes for every celebration',
      link: '/products?category=cakes'
    },
    {
      name: 'Desserts',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Decadent desserts and sweet treats',
      link: '/products?category=desserts'
    },
    {
      name: 'Catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Full-service catering for all events',
      link: '/catering'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of freshly made pastries, custom cakes, and professional catering services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-center">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
