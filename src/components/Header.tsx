
import React from 'react';
import { Star, ArrowDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-beauty-pink to-beauty-purple text-white py-2 md:py-3">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1 md:mb-2">
            <span className="text-beauty-gold text-lg md:text-xl">🔥</span>
            <h1 className="text-base md:text-lg lg:text-xl font-bold">
              GARANTA SUA VAGA HOJE COM 50% DE DESCONTO!
            </h1>
            <span className="text-beauty-gold text-lg md:text-xl">🔥</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-beauty-gold text-beauty-gold" />
            ))}
            <span className="ml-2 text-xs md:text-sm">+1.000 cabeleireiras satisfeitas!</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
