
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for creating exceptional baked goods, our catering company has been serving 
                delicious pastries, custom cakes, and comprehensive catering services for over a decade. What started 
                as a small home bakery has grown into a trusted partner for celebrations, corporate events, and 
                everyday indulgences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe that every celebration deserves something special. Our mission is to create memorable 
                experiences through exceptional baked goods and personalized catering services. Using only the 
                finest ingredients and time-honored techniques, we craft each product with care and attention to detail.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Artisan Pastries</h3>
                  <p className="text-gray-600 text-sm">
                    Fresh croissants, Danish pastries, muffins, and seasonal specialties baked daily
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Custom Cakes</h3>
                  <p className="text-gray-600 text-sm">
                    Wedding cakes, birthday cakes, and custom designs tailored to your vision
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">Catering Services</h3>
                  <p className="text-gray-600 text-sm">
                    Full-service catering for corporate events, weddings, and private parties
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of talented pastry chefs, bakers, and catering professionals bring years of experience and 
                passion to everything we create. Led by our head chef with training from renowned culinary schools, 
                we combine traditional methods with innovative techniques to deliver exceptional quality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Quality</h2>
              <p className="text-gray-600 leading-relaxed">
                We're committed to using only premium ingredients, sourced locally whenever possible. Our products 
                are made fresh daily without artificial preservatives. We take pride in accommodating dietary 
                requirements including gluten-free, dairy-free, and vegan options upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
