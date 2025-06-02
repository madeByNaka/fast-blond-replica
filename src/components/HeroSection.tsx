
import React from 'react';
import { ArrowDown, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const checkoutUrl = "https://pay.hotmart.com/E98072819A?checkoutMode=10&bid=1748886539700";

  return (
    <section className="bg-gradient-to-b from-beauty-gray to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src="https://beautyproacademy.com.br/wp-content/uploads/2025/01/bp_white.png" 
              alt="Beauty Pro Academy" 
              className="mx-auto h-16 md:h-20"
            />
          </div>
          
          <div className="mb-6">
            <ArrowDown className="mx-auto text-beauty-pink w-8 h-8 animate-bounce" />
            <p className="text-lg text-beauty-pink font-semibold mt-2">Método Fast Blond</p>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-beauty-dark mb-6 leading-tight">
            Faça parte do grupo de cabeleireiras que aplicam mechas em até{' '}
            <span className="text-beauty-pink">30 minutos</span> e faturam mais de{' '}
            <span className="text-beauty-pink">R$ 15 mil</span> todos os meses!
          </h1>
          
          <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span className="text-lg">Sem técnicas complicadas.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span className="text-lg">Sem gastar horas com as clientes.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span className="text-lg">Sem desvalorizar o preço do seu trabalho.</span>
            </div>
          </div>
          
          <div className="mb-8 max-w-sm mx-auto">
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3OWmYXu-jYU"
                title="Método Fast Blond - Beauty Pro Academy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
          
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-beauty-pink to-beauty-purple text-white text-xl font-bold py-4 px-8 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Comece Agora (R$ 97)
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
