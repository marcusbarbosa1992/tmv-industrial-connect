
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Placeholder for logo - we'll use a text placeholder until the actual logo is provided
const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-heading font-bold text-tmv-blue">TMV <span className="text-tmv-lightblue">Comercial</span></span>
    </Link>
  );
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre Nós", path: "/sobre" },
  { name: "Produtos", path: "/produtos" },
  { name: "Contato", path: "/contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-medium text-gray-700 hover:text-tmv-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contato" className="tmv-button">
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-tmv-blue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-medium text-gray-700 hover:text-tmv-blue transition-colors py-2"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contato" 
              className="tmv-button text-center"
              onClick={toggleMenu}
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
