
import React from 'react';
import { Star, ArrowDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-beauty-pink to-beauty-purple text-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-beauty-gold text-xl">🔥</span>
            <h1 className="text-lg md:text-xl font-bold">
              GARANTA SUA VAGA HOJE COM 50% DE DESCONTO!
            </h1>
            <span className="text-beauty-gold text-xl">🔥</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-beauty-gold text-beauty-gold" />
            ))}
            <span className="ml-2 text-sm">+1.000 cabeleireiras satisfeitas!</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
