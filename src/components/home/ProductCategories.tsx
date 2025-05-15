
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
      <div className="h-48 overflow-hidden" onClick={(e) => e.preventDefault()}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3";
          }}
          referrerPolicy="no-referrer"
          draggable="false"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={`/produtos?categoria=${encodeURIComponent(title)}`}
          className="text-tmv-blue font-medium hover:underline"
        >
          Ver produtos →
        </Link>
      </div>
    </div>
  );
};

// Dados dos produtos organizados por categorias para evitar duplicações
const productData = [
  {
    category: "Conexões",
    items: [
      {
        title: "Conector Pneumatico Engate Rapido",
        image: "/lovable-uploads/062b0eb1-2ed9-42a6-81dc-50c31661d763.png",
        description: "Um conector pneumatico engate rapido é um componente usado em sistemas pneumáticos para conectar e desconectar rapidamente linhas de ar comprimido sem a necessidade de ferramentas.",
        link: "/produtos?categoria=Conector%20Pneumatico%20Engate%20Rapido"
      },
      {
        title: "Conexao Instantanea Reta de Latao",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
        description: "A conexao instantanea reta de latao é um tipo de conector rápido usado em sistemas pneumáticos e hidráulicos para unir tubos ou mangueiras de forma rápida e segura.",
        link: "/produtos?categoria=Conexao%20Instantanea%20Reta%20de%20Latao"
      },
      {
        title: "Conexao em Latao",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
        description: "A conexao em latao é um componente usado em sistemas pneumáticos e hidráulicos para conectar diferentes seções de tubulação ou mangueira.",
        link: "/produtos?categoria=Conexao%20em%20Latao"
      },
      {
        title: "Conexões Instantâneas em Plástico",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
        description: "Conexões instantâneas em plástico são componentes utilizados para conectar rapidamente tubulações em sistemas pneumáticos, hidráulicos ou de água sem necessidade de ferramentas.",
        link: "/produtos?categoria=Conexões%20Instantâneas%20em%20Plástico"
      },
      {
        title: "Conexões Pneumáticas Metálicas",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
        description: "As conexões pneumáticas metálicas são componentes robustos usados em sistemas de ar comprimido para unir tubulações, mangueiras e equipamentos.",
        link: "/produtos?categoria=Conexões%20Pneumáticas%20Metálicas"
      }
    ]
  },
  {
    category: "Atuadores",
    items: [
      {
        title: "Atuador Elétrico",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
        description: "Um atuador elétrico é um dispositivo mecânico usado para converter energia elétrica em movimento mecânico. Este tipo de atuador é amplamente utilizado.",
        link: "/produtos?categoria=Atuador%20Elétrico"
      },
      {
        title: "Atuador Pneumático",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
        description: "Um atuador pneumático é um dispositivo utilizado para converter energia do ar comprimido em movimento mecânico. Estes atuadores são uma parte fundamental.",
        link: "/produtos?categoria=Atuador%20Pneumático"
      }
    ]
  },
  {
    category: "Cilindros",
    items: [
      {
        title: "Cilindro Perfilado",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
        description: "O cilindro perfilado é um tipo de cilindro pneumático que se caracteriza por ter um corpo com perfil extrudado, geralmente em alumínio.",
        link: "/produtos?categoria=Cilindro%20Perfilado"
      }
    ]
  }
];

// Criar uma lista achatada de todos os produtos
const allProducts = productData.flatMap(category => category.items);

const ProductCategories = () => {
  return (
    <section className="container-section">
      <div className="flex justify-center mb-8">
        <img 
          src="/lovable-uploads/062b0eb1-2ed9-42a6-81dc-50c31661d763.png" 
          alt="TMV Comercial Ltda." 
          className="h-20 object-contain"
          draggable="false"
          referrerPolicy="no-referrer"
        />
      </div>
      <h2 className="section-heading">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProducts.map((product, index) => (
          <CategoryCard
            key={index}
            title={product.title}
            image={product.image}
            description={product.description}
            link={product.link}
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
