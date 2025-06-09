
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

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
        
        <div className="max-w-6xl mx-auto relative">
          {/* Mobile drag hint */}
          <div className="block md:hidden text-center mb-4">
            <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
              👈 Deslize para ver mais depoimentos 👉
            </span>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <img 
                      src={testimonial.image} 
                      alt={`Depoimento ${testimonial.id}`}
                      className="w-full h-auto"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom navigation arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-beauty-pink text-beauty-dark hover:text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={scrollNext}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-beauty-pink text-beauty-dark hover:text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </Carousel>

          {/* Page indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current 
                    ? 'bg-beauty-pink scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Current position indicator */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              {current} de {count} depoimentos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
