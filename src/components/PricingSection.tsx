
import React from 'react';
import { Star } from 'lucide-react';

const PricingSection = () => {
  const checkoutUrl = "https://pay.hotmart.com/W99912615Y?checkoutMode=10";

  return (
    <section className="py-16 bg-gradient-to-r from-beauty-pink to-beauty-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Compre agora e transforme sua carreira na beleza!
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg space-y-4 mb-8">
            <p>
              Se eu fosse cobrar o valor real desse método, ele sairia por <strong>R$ 997,00</strong>.
            </p>
            
            <p>
              Afinal, <strong>com um único atendimento você já pode recuperar esse valor.</strong>
            </p>
            
            <p className="text-xl font-bold">
              Mas hoje, você pode garantir o Método Fast Blond por apenas…
            </p>
          </div>
          
          <div className="bg-white text-beauty-dark rounded-lg p-8 max-w-md mx-auto mb-8 shadow-2xl">
            <div className="text-center">
              <div className="line-through text-gray-400 text-lg mb-2">
                De: R$ 197,00 (preço padrão)
              </div>
              
              <div className="text-4xl font-bold text-beauty-pink mb-4">
                Por: R$ 97,00
              </div>
              
              <div className="space-y-2 text-sm mb-6">
                <p className="flex items-center gap-2">
                  <span className="text-beauty-pink">📌</span>
                  <strong>Isso custa menos do que VOCÊ cobra para fazer um cabelo!</strong>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-beauty-pink">📌</span>
                  <strong>É o preço para ter uma agenda cheia de clientes dispostas a pagar mais!</strong>
                </p>
              </div>
              
              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-beauty-pink to-beauty-purple text-white text-xl font-bold py-4 px-8 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Comece Agora
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-beauty-gold text-beauty-gold" />
            ))}
            <span className="ml-2 text-lg font-semibold">+1.000 cabeleireiras satisfeitas!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
