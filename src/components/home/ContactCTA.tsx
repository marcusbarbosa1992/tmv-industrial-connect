
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="bg-tmv-blue text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar sua indústria?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Nossa equipe de especialistas está pronta para ajudar sua empresa a encontrar
          as melhores soluções em automação industrial. Entre em contato agora mesmo!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contato"
            className="bg-white text-tmv-blue hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
          >
            Fale Conosco
          </Link>
          <a
            href="tel:+5511999999999"
            className="border-2 border-white hover:bg-white hover:text-tmv-blue font-medium py-3 px-8 rounded-md transition-colors"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
