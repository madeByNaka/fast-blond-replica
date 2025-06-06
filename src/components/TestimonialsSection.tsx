
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/03/1.jpg" },
    { id: 2, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/03/2.jpg" },
    { id: 3, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/03/3-1.jpg" },
    { id: 4, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/2.jpg" },
    { id: 5, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/3.jpg" },
    { id: 6, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/5.jpg" },
    { id: 7, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/6.jpg" },
    { id: 8, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/7.jpg" },
    { id: 9, image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/9.jpg" }
  ];

  return (
    <section className="py-16 bg-beauty-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-4">
            Veja o que cabeleireiras comuns estão falando sobre o método Fast Blond
          </h2>
          
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-beauty-gold text-beauty-gold" />
            ))}
            <span className="ml-2 text-lg font-semibold">+1.000 cabeleireiras satisfeitas!</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={testimonial.image} 
                alt={`Depoimento ${testimonial.id}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
