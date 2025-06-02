
import React from 'react';
import { X, Check } from 'lucide-react';

const ProblemSection = () => {
  const checkoutUrl = "https://pay.hotmart.com/E98072819A?checkoutMode=10&bid=1748886539700";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-6">
            Está cansada de trabalhar muito e ganhar pouco?
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4 mb-8">
            <p>
              Se você ainda passa horas em um cabelo, precisa cobrar barato para conseguir clientes 
              e tem medo de errar, isso <strong>não é culpa sua</strong>.
            </p>
            
            <p>
              O problema está no método que você aprendeu. <strong>A maioria dos cursos ensina 
              técnicas complexas, demoradas e que fazem você perder tempo e dinheiro.</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <X className="text-red-500 w-6 h-6" />
                <h3 className="font-bold text-red-700">Método Tradicional</h3>
              </div>
              <p className="text-red-600">
                Você passa <strong>5h</strong> em um cabelo e cobra <strong>R$ 200,00</strong>.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Check className="text-green-500 w-6 h-6" />
                <h3 className="font-bold text-green-700">Método Fast Blond</h3>
              </div>
              <p className="text-green-600">
                Em <strong>30 minutos</strong> você entrega um cabelo impecável e pode cobrar <strong>R$ 500,00 ou mais!</strong>
              </p>
            </div>
          </div>
          
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-beauty-pink to-beauty-purple text-white text-xl font-bold py-4 px-8 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
