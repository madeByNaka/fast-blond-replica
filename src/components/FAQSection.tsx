
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é a BeautyPro Academy?",
      answer: "A BeautyPro Academy é uma plataforma de formação completa para profissionais da beleza, oferecendo cursos especializados e conteúdo de alta qualidade para capacitar e transformar sua carreira."
    },
    {
      question: "Como funcionam os cursos?",
      answer: "Todos os cursos estão disponíveis online, com acesso ilimitado. Você pode estudar no seu ritmo e assistir às aulas quando e onde quiser, seja no celular, tablet ou computador."
    },
    {
      question: "Os cursos são indicados para iniciantes?",
      answer: "Sim, nossa plataforma possui cursos para todos os níveis, desde iniciantes até profissionais experientes que desejam se especializar em técnicas avançadas."
    },
    {
      question: "Novos cursos são adicionados à plataforma?",
      answer: "Sim, constantemente adicionamos novos cursos e conteúdos para manter você atualizado com as últimas tendências e técnicas do mercado da beleza."
    },
    {
      question: "Como faço para cancelar minha assinatura?",
      answer: "Você pode cancelar sua assinatura a qualquer momento diretamente pela plataforma, sem burocracias."
    },
    {
      question: "Quanto tempo terei acesso ao curso após a compra?",
      answer: "O acesso é válido por 1 ano, garantindo que você possa estudar no seu ritmo e revisar o conteúdo sempre que precisar durante esse período. Após o término do período anual, você pode renovar seu acesso para continuar aproveitando a plataforma."
    },
    {
      question: "Como faço para solicitar o reembolso?",
      answer: "Basta entrar em contato com a nossa equipe de suporte dentro do período de 7 dias após a compra. O processo é simples e sem burocracia."
    }
  ];

  return (
    <section className="py-16 bg-beauty-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-beauty-dark mb-8">
            Perguntas frequentes.
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-beauty-dark hover:text-beauty-pink">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
