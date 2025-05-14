
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const CategoryCard = ({ title, image, description, link }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="text-tmv-blue font-medium hover:underline"
        >
          Ver produtos →
        </Link>
      </div>
    </div>
  );
};

const ProductCategories = () => {
  const categories = [
    {
      title: "Sensores e Atuadores",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Detecte e controle variáveis do seu processo industrial com precisão e confiabilidade.",
      link: "/produtos/sensores-atuadores"
    },
    {
      title: "Controladores e PLCs",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Automatize e monitore seus processos com os melhores controladores do mercado.",
      link: "/produtos/controladores"
    },
    {
      title: "Sistemas de Visão",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Inspecione e controle a qualidade dos seus produtos com sistemas de visão de alta precisão.",
      link: "/produtos/sistemas-visao"
    },
    {
      title: "Equipamentos de Segurança",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Proteja sua operação e colaboradores com soluções completas de segurança industrial.",
      link: "/produtos/equipamentos-seguranca"
    }
  ];

  return (
    <section className="container-section">
      <h2 className="section-heading">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            image={category.image}
            description={category.description}
            link={category.link}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/produtos" className="tmv-button">
          Ver Todos os Produtos
        </Link>
      </div>
    </section>
  );
};

export default ProductCategories;
