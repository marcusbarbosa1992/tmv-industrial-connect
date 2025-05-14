
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-tmv-blue to-tmv-darkgray text-white relative">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Soluções de Automação Industrial para sua Empresa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Tecnologia, qualidade e expertise ao serviço da indústria brasileira. 
            Descubra como a TMV Comercial pode transformar seus processos industriais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/produtos" className="bg-tmv-lightblue hover:bg-opacity-90 text-tmv-darkgray font-medium py-3 px-8 rounded-md text-center transition-all">
              Conheça Nossos Produtos
            </Link>
            <Link to="/contato" className="border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-medium py-3 px-8 rounded-md text-center transition-all">
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract background shape */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full overflow-hidden opacity-20">
        <div className="absolute w-full h-full bg-tmv-lightblue rounded-full blur-3xl transform translate-x-1/2 translate-y-1/3"></div>
      </div>
    </section>
  );
};

export default Hero;
