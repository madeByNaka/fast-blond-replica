import React from 'react';

const CertificateSection = () => {
  const checkoutUrl = "https://pay.hotmart.com/E98072819A?checkoutMode=10&bid=1748886539700";

  return (
    <section className="py-16 bg-beauty-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-8">
            Certificado de conclusão.
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Ao concluir o curso Fast Blond, você receberá um certificado de conclusão que 
            destaca você como um profissional qualificado e diferenciado no mercado.
          </p>
          
          <div className="mb-8">
            <img 
              src="https://beautyproacademy.com.br/wp-content/uploads/2025/02/CERTIFICADO.png" 
              alt="Certificado de Conclusão"
              className="mx-auto max-w-md w-full rounded-lg shadow-lg"
            />
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

export default CertificateSection;
