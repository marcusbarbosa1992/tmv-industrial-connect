
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tmv-darkgray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">TMV Comercial</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em soluções de automação industrial, oferecendo produtos de alta qualidade e atendimento personalizado para sua empresa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-tmv-lightblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tmv-lightblue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tmv-lightblue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-white transition-colors">Produtos</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Produtos */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos/categoria1" className="text-gray-300 hover:text-white transition-colors">Sensores e Atuadores</Link>
              </li>
              <li>
                <Link to="/produtos/categoria2" className="text-gray-300 hover:text-white transition-colors">Controladores</Link>
              </li>
              <li>
                <Link to="/produtos/categoria3" className="text-gray-300 hover:text-white transition-colors">Sistemas de Visão</Link>
              </li>
              <li>
                <Link to="/produtos/categoria4" className="text-gray-300 hover:text-white transition-colors">Equipamentos de Segurança</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-2 flex-shrink-0 text-tmv-lightblue" />
                <span className="text-gray-300">(XX) XXXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 flex-shrink-0 text-tmv-lightblue" />
                <span className="text-gray-300">contato@tmvcomercial.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-tmv-lightblue" />
                <span className="text-gray-300">
                  Rua Nome da Rua, 123 - Bairro<br />
                  Cidade - Estado, CEP XXXXX-XXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TMV Comercial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
