
import React from 'react';
import { Check } from 'lucide-react';

const WhatYouLearnSection = () => {
  const learningItems = [
    "Técnicas avançadas de mechas para resultados profissionais.",
    "Como criar loiros perfeitos em diferentes tipos de cabelo.",
    "Como corrigir mechas manchadas e evitar erros comuns.",
    "Ajuste perfeito de tons sem precisar de descolorações agressivas.",
    "Como aumentar o valor percebido do seu trabalho e cobrar mais."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-8">
            Tudo o que você vai aprender.
          </h2>
          
          <div className="space-y-4 mb-8 text-left max-w-3xl mx-auto">
            {learningItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Você vai aprender tudo isso com aulas práticas, passo a passo, direto ao ponto, 
            para que você possa <strong>aplicar no dia seguinte e já ver os resultados</strong>!
          </p>
          
          <button className="bg-gradient-to-r from-beauty-pink to-beauty-purple text-white text-xl font-bold py-4 px-8 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Comece Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
