
import { useState } from "react";
import Layout from "../components/Layout";
import { Search } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Updated product data with the new information provided by the client
const initialProducts = [
  {
    id: 1,
    name: "Conector Pneumatico Engate Rapido",
    category: "Sensores e Atuadores",
    description: "Um conector pneumatico engate rapido é um componente usado em sistemas pneumáticos para conectar e desconectar rapidamente linhas de ar comprimido sem a necessidade de ferramentas. Esse tipo de conector facilita a manutenção, as mudanças de configuração e o gerenciamento de linhas pneumáticas, proporcionando uma conexão segura e eficaz.",
    image: "https://www.jrgs.com.br/imagens/conexao-em-latao/conexao-em-latao.webp",
    specs: [
      "Instalação Rápida e Simples: Permite conexões rápidas e eficientes",
      "Resistência à Corrosão: Altamente resistente à oxidação e corrosão",
      "Versatilidade: Utilizável em ampla gama de temperaturas e condições",
      "Facilidade de Uso: Conexões simplificadas sem ferramentas"
    ]
  },
  {
    id: 2,
    name: "Conexões em Latão",
    category: "Controladores",
    description: "Conexões em latão são componentes metálicos de alta qualidade usados em sistemas hidráulicos, pneumáticos e de fluidos para conectar tubulações. O latão é amplamente utilizado por sua resistência à corrosão, durabilidade e excelente condutividade térmica e elétrica.",
    image: "https://www.jrgs.com.br/imagens/conexao-em-latao/conexao-em-latao.webp",
    specs: [
      "Resistência à Corrosão: Altamente resistente à oxidação",
      "Versatilidade: Utilizável em diversas temperaturas",
      "Condutividade: Boa condutividade térmica e elétrica",
      "Facilidade de Usinagem: Fácil de trabalhar em várias formas"
    ]
  },
  {
    id: 3,
    name: "Conexões em Latão",
    category: "Sistemas de Visão",
    description: "Conexões em latão são componentes metálicos premium usados para conectar tubulações em diversos sistemas. Estas peças são fabricadas com liga de cobre e zinco, oferecendo excelente resistência, durabilidade e vedação.",
    image: "https://www.jrgs.com.br/imagens/conexao-em-latao/conexao-em-latao.webp",
    specs: [
      "Compatibilidade: Excelente para uso com diversos materiais",
      "Durabilidade: Longa vida útil mesmo em condições adversas",
      "Precisão: Fabricação com tolerâncias precisas",
      "Versatilidade: Disponível em diversos formatos e tamanhos"
    ]
  },
  {
    id: 4,
    name: "Conexões Instantâneas em Plástico",
    category: "Equipamentos de Segurança",
    description: "Conexões instantâneas em plástico são componentes utilizados para conectar rapidamente tubulações em sistemas pneumáticos, hidráulicos ou de água sem necessidade de ferramentas. Estas conexões são feitas de materiais plásticos duráveis, como polietileno, PVC ou PTFE, e são projetadas para oferecer uma instalação e desconexão simplificada.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    specs: [
      "Material Durável: Fabricadas em plásticos resistentes",
      "Instalação Fácil: Sistema de engate rápido sem ferramentas",
      "Economia: Solução de custo-benefício para sistemas de tubulação",
      "Versatilidade: Compatível com diferentes tipos de tubos"
    ]
  },
  {
    id: 5,
    name: "Atuadores Pneumáticos",
    category: "Sensores e Atuadores",
    description: "O atuador pneumático é um dispositivo utilizado para converter energia do ar comprimido em movimento mecânico. Estes atuadores são uma parte fundamental dos sistemas automatizados, especialmente em ambientes industriais onde a confiabilidade e a rapidez são essenciais.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    specs: [
      "Movimento Controlado: Precisão no posicionamento",
      "Velocidade: Operação rápida em comparação com outros sistemas",
      "Confiabilidade: Funcionamento consistente em ambientes industriais",
      "Segurança: Operação segura em ambientes potencialmente explosivos"
    ]
  },
  {
    id: 6,
    name: "Válvulas Solenóides",
    category: "Controladores",
    description: "Válvulas solenóides são dispositivos eletromecânicos utilizados para controlar o fluxo de líquidos ou gases em sistemas industriais. Funcionam através da ação de um campo magnético gerado por uma bobina, permitindo automação e controle preciso do fluxo.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    specs: [
      "Controle Automatizado: Integração fácil com sistemas de controle",
      "Resposta Rápida: Acionamento e desligamento quase instantâneos",
      "Versatilidade: Disponível para diferentes pressões e temperaturas",
      "Durabilidade: Construção robusta para ambientes industriais"
    ]
  }
];

// Product categories
const categories = [
  "Todos",
  "Sensores e Atuadores",
  "Controladores",
  "Sistemas de Visão",
  "Equipamentos de Segurança"
];

const ProductCard = ({ product, onView }: { product: any, onView: (product: any) => void }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3";
          }}
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-tmv-blue mb-2 block">{product.category}</span>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        <button
          onClick={() => onView(product)}
          className="tmv-button-outline"
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

const ProductDetailModal = ({ product, onClose }: { product: any, onClose: () => void }) => {
  if (!product) return null;

  const handleRequestQuote = () => {
    toast({
      title: "Solicitação de Orçamento",
      description: `Orçamento para ${product.name} foi solicitado com sucesso!`,
    });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="h-64">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3";
              }}
            />
          </div>
        </div>
        <div className="p-6">
          <span className="text-sm font-medium text-tmv-blue mb-2 block">{product.category}</span>
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Descrição</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Especificações Técnicas</h3>
            <ul className="list-disc list-inside text-gray-700">
              {product.specs ? product.specs.map((spec: string, index: number) => (
                <li key={index}>{spec}</li>
              )) : (
                <>
                  <li>Especificação 1: Valor</li>
                  <li>Especificação 2: Valor</li>
                  <li>Especificação 3: Valor</li>
                  <li>Especificação 4: Valor</li>
                </>
              )}
            </ul>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              Fechar
            </button>
            <button 
              onClick={handleRequestQuote} 
              className="tmv-button"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Filter products based on category and search term
  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-tmv-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-6">Nossos Produtos</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Descubra nossa linha completa de produtos para automação industrial
          </p>
        </div>
      </div>

      <section className="container-section">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex overflow-x-auto pb-4 md:pb-0 space-x-2 md:space-x-4 mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-tmv-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tmv-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={setSelectedProduct} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600">
              Tente ajustar sua busca ou selecionar outra categoria.
            </p>
          </div>
        )}
      </section>

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </Layout>
  );
};

export default Products;
