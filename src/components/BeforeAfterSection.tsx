
import React from 'react';
import { X, Check } from 'lucide-react';

const BeforeAfterSection = () => {
  const beforeItems = [
    "Leva horas para finalizar um trabalho de mechas.",
    "Medo constante de errar a cor, causar manchas ou corte químico.",
    "Poucos atendimentos por dia devido ao longo tempo de execução.",
    "Baixos preços devido à falta de confiança e dificuldade em agregar valor ao serviço.",
    "Muitas vezes precisa de um auxiliar para finalizar os processos dentro do prazo.",
    "Insegurança ao corrigir mechas manchadas ou descolorações falhas.",
    "Exaustiva, com longas horas de trabalho e pouco tempo para si mesma ou para a família.",
    "Estagnação profissional, trabalhando muito e faturando pouco."
  ];

  const afterItems = [
    "Em média, 30min. para entregar mechas impecáveis.",
    "Total segurança para personalizar cada atendimento e evitar erros críticos.",
    "Mais atendimentos por dia com qualidade superior.",
    "Preços premium por entregar resultados diferenciados e personalizados.",
    "Você domina o processo do início ao fim sem precisar de ajuda extra.",
    "Métodos práticos e rápidos para corrigir erros e salvar o visual do cliente.",
    "Horário flexível e otimizado, permitindo equilibrar vida pessoal e profissional.",
    "Crescimento contínuo na carreira, com mais clientes, indicações e valorização do serviço."
  ];

  return (
    <section className="py-16 bg-beauty-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-8">
            Esta será a sua vida após aplicar o método Fast Blond
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Antes */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center mb-6">
              <img 
                src="https://beautyproacademy.com.br/wp-content/uploads/2025/03/image_fx_-1024x559.png" 
                alt="Antes do Método Fast Blond"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-red-600 mb-4">Antes do Método Fast Blond</h3>
            </div>
            
            <div className="space-y-3">
              {beforeItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Depois */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center mb-6">
              <img 
                src="https://beautyproacademy.com.br/wp-content/uploads/2025/03/image_fx_-1.png" 
                alt="Depois do Método Fast Blond"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-green-600 mb-4">Depois do Método Fast Blond</h3>
            </div>
            
            <div className="space-y-3">
              {afterItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
