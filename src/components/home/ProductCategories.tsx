
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
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3";
          }}
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
      title: "Conector Pneumatico Engate Rapido",
      image: "https://www.jrgs.com.br/imagens/conector-pneumatico-engate-rapido/conector-pneumatico-engate-rapido.webp",
      description: "Um conector pneumatico engate rapido é um componente usado em sistemas pneumáticos para conectar e desconectar rapidamente linhas de ar comprimido sem a necessidade de ferramentas.",
      link: "https://www.jrgs.com.br/conector-pneumatico-engate-rapido"
    },
    {
      title: "Conexao Instantanea Reta de Latao",
      image: "https://www.jrgs.com.br/imagens/conexao-instantanea-reta-de-latao/conexao-instantanea-reta-de-latao.webp",
      description: "A conexao instantanea reta de latao é um tipo de conector rápido usado em sistemas pneumáticos e hidráulicos para unir tubos ou mangueiras de forma rápida e segura. Fabricada em latão...",
      link: "https://www.jrgs.com.br/conexao-instantanea-reta-de-latao"
    },
    {
      title: "Conexao em Latao",
      image: "https://www.jrgs.com.br/imagens/conexao-em-latao/conexao-em-latao.webp",
      description: "A conexao em latao é um componente usado em sistemas pneumáticos e hidráulicos para conectar diferentes seções de tubulação ou mangueira. Fabricada em latão...",
      link: "https://www.jrgs.com.br/conexao-em-latao"
    },
    {
      title: "Conexões Instantâneas em Plástico",
      image: "https://www.jrgs.com.br/imagens/conexoes-instantaneas-em-plastico/conexoes-instantaneas-em-plastico.webp",
      description: "Conexões instantâneas em plástico são componentes utilizados para conectar rapidamente tubulações em sistemas pneumáticos, hidráulicos ou de água sem necessidade de ferramentas...",
      link: "https://www.jrgs.com.br/conexoes-instantaneas-em-plastico"
    },
    {
      title: "Conexões Pneumáticas Metálicas",
      image: "https://www.jrgs.com.br/imagens/conexoes-pneumaticas-metalicas/conexoes-pneumaticas-metalicas.webp",
      description: "As conexões pneumáticas metálicas são componentes robustos usados em sistemas de ar comprimido para unir tubulações, mangueiras e equipamentos...",
      link: "https://www.jrgs.com.br/conexoes-pneumaticas-metalicas"
    },
     {
      title: "Atuador Elétrico",
      image: "https://www.jrgs.com.br/imagens/atuador-eletrico/atuador-eletrico.webp",
      description: "Um atuador elétrico é um dispositivo mecânico usado para converter energia elétrica em movimento mecânico. Este tipo de atuador é amplamente utilizado...",
      link: "https://www.jrgs.com.br/atuador-eletrico"
    },
    {
      title: "Atuador Pneumático",
      image: "https://www.jrgs.com.br/imagens/atuador-pneumatico/atuador-pneumatico.webp",
      description: "Um atuador pneumático é um dispositivo utilizado para converter energia do ar comprimido em movimento mecânico. Estes atuadores são uma parte fundamental...",
      link: "https://www.jrgs.com.br/atuador-pneumatico"
    },
    {
      title: "Cilindro Perfilado",
      image: "https://www.jrgs.com.br/imagens/cilindro-perfilado/cilindro-perfilado.webp",
      description: "O cilindro perfilado é um tipo de cilindro pneumático que se caracteriza por ter um corpo com perfil extrudado, geralmente em alumínio...",
      link: "https://www.jrgs.com.br/cilindro-perfilado"
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
