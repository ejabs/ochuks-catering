
import { Card, CardContent } from '@/components/ui/card';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      event: 'Wedding Catering',
      text: 'Sweet Delights made our wedding day absolutely perfect! The cake was stunning and delicious, and the catering service was exceptional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      event: 'Corporate Event',
      text: 'Professional service and amazing pastries for our company event. Everyone was impressed with the quality and presentation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      event: 'Birthday Party',
      text: 'The custom birthday cake exceeded our expectations. Beautiful design and incredible taste. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
