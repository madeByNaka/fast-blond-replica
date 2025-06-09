import React from 'react';

const ForWhoSection = () => {
  const targetAudience = [
    {
      number: "01.",
      title: "Para cabeleireiras que querem aumentar seu faturamento sem precisar trabalhar mais horas por dia.",
      image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/image_fx_.png"
    },
    {
      number: "02.",
      title: "Para profissionais que querem entregar mechas perfeitas sem medo de errar e sem causar danos aos cabelos das clientes.",
      image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/image_fx_-1.png"
    },
    {
      number: "03.",
      title: "Para cabeleireiras \"faz tudo\" que desejam se especializar em mechas e se tornar uma referência no mercado.",
      image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/image_fx_-2.png"
    },
    {
      number: "04.",
      title: "Para quem já fez outros cursos e se frustrou porque não conseguiu aplicar o que aprendeu na prática.",
      image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/image_fx_-3.png"
    },
    {
      number: "05.",
      title: "Para quem está cansada de abaixar o preço para não perder clientes e quer aprender a cobrar o que realmente merece.",
      image: "https://beautyproacademy.com.br/wp-content/uploads/2025/02/image_fx_-4.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-8">
            Para quem é o método Fast Blond?
          </h2>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {targetAudience.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-beauty-gray rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={`Público ${item.number}`}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="text-beauty-pink font-bold text-xl mb-2">{item.number}</div>
                <h3 className="text-lg md:text-xl font-semibold text-beauty-dark">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
