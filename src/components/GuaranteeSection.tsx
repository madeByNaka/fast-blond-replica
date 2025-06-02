
import React from 'react';
import { Shield } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-8">
            Garantia 100% livre de riscos.
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4 mb-8">
            <p>
              Eu confio tanto no Método Fast Blond que vou te dar uma <strong>garantia de 7 dias</strong>.
            </p>
            
            <p>
              Se dentro desse período você assistir as aulas e sentir que o método não é para você, 
              basta me enviar um e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas. Sem enrolação.
            </p>
            
            <p className="text-beauty-pink font-bold text-xl">
              Ou seja, o risco é totalmente meu.
            </p>
            
            <p>
              Se você decidir que quer continuar na mesma rotina, essa é uma escolha sua. 
              Mas se você realmente deseja crescer, faturar mais e ter um método eficiente, essa é sua chance!
            </p>
          </div>
          
          <div className="mb-8">
            <img 
              src="https://beautyproacademy.com.br/wp-content/uploads/2025/03/risco-zero.png" 
              alt="Garantia de 7 dias - Risco Zero"
              className="mx-auto max-w-sm w-full"
            />
          </div>
          
          <div className="flex items-center justify-center gap-3 text-green-600 text-xl font-bold">
            <Shield className="w-8 h-8" />
            <span>GARANTIA DE 7 DIAS - RISCO ZERO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
