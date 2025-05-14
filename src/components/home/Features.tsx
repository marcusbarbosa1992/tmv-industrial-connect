
import { ShieldCheck, Gauge, Users, BarChart3 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="text-tmv-blue mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Qualidade Garantida",
      description:
        "Todos os nossos produtos passam por rigorosos testes de qualidade e possuem garantia de fábrica.",
    },
    {
      icon: <Gauge size={40} />,
      title: "Eficiência de Processos",
      description:
        "Nossas soluções otimizam sua operação industrial, reduzindo custos e aumentando a produtividade.",
    },
    {
      icon: <Users size={40} />,
      title: "Suporte Especializado",
      description:
        "Nossa equipe técnica está pronta para oferecer o melhor suporte antes, durante e após a aquisição.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Inovação Contínua",
      description:
        "Trabalhamos com as tecnologias mais avançadas do mercado, mantendo seu processo sempre atualizado.",
    },
  ];

  return (
    <section className="bg-tmv-lightgray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a TMV Comercial?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Há mais de uma década fornecendo as melhores soluções em automação industrial para empresas de todos os portes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
