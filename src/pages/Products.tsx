
import { useState } from "react";
import Layout from "../components/Layout";
import { Search } from "lucide-react";

// Sample product data - would be replaced with actual data from CMS/API
const initialProducts = [
  {
    id: 1,
    name: "Sensor de Proximidade Indutivo",
    category: "Sensores e Atuadores",
    description: "Sensor para detecção de objetos metálicos sem contato físico.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Controlador Lógico Programável",
    category: "Controladores",
    description: "Controlador robusto para automação de processos industriais.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Câmera de Inspeção Visual",
    category: "Sistemas de Visão",
    description: "Sistema de visão para controle de qualidade em linhas de produção.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Cortina de Luz de Segurança",
    category: "Equipamentos de Segurança",
    description: "Barreira de proteção para áreas de risco em ambientes industriais.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    name: "Sensor Fotoelétrico",
    category: "Sensores e Atuadores",
    description: "Sensor para detecção de objetos através de feixe de luz.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    name: "IHM Touch Screen",
    category: "Controladores",
    description: "Interface homem-máquina com tela touchscreen para controle de processos.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    name: "Leitor de Código de Barras Industrial",
    category: "Sistemas de Visão",
    description: "Sistema de leitura de códigos de barras e QR para rastreabilidade.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 8,
    name: "Botão de Emergência",
    category: "Equipamentos de Segurança",
    description: "Dispositivo para interrupção imediata de operações em caso de emergência.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
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
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-tmv-blue mb-2 block">{product.category}</span>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
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
            />
          </div>
        </div>
        <div className="p-6">
          <span className="text-sm font-medium text-tmv-blue mb-2 block">{product.category}</span>
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Descrição</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
              Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Especificações Técnicas</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Especificação 1: Valor</li>
              <li>Especificação 2: Valor</li>
              <li>Especificação 3: Valor</li>
              <li>Especificação 4: Valor</li>
            </ul>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              Fechar
            </button>
            <a href="/contato" className="tmv-button">
              Solicitar Orçamento
            </a>
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
