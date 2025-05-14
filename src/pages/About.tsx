
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-tmv-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-6">Sobre a TMV Comercial</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Conheça nossa história de inovação e compromisso com a excelência em automação industrial
          </p>
        </div>
      </div>

      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
            <p className="text-gray-700 mb-4">
              A TMV Comercial nasceu da visão empreendedora de profissionais com ampla experiência 
              no setor de automação industrial. Desde nossa fundação, temos focado em fornecer 
              soluções tecnológicas inovadoras que atendem às necessidades específicas de nossos clientes.
            </p>
            <p className="text-gray-700 mb-4">
              Ao longo dos anos, expandimos nossa atuação e hoje somos referência no fornecimento de 
              componentes e soluções para automação industrial em todo o Brasil, atendendo empresas 
              de diversos portes e segmentos.
            </p>
            <p className="text-gray-700">
              Nossa trajetória é marcada pela busca constante por inovação, qualidade e excelência no 
              atendimento, valores que continuam guiando nossa atuação no mercado.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3" 
              alt="TMV Comercial" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-tmv-lightgray py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Missão, Visão e Valores</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Princípios que norteiam nossa atuação e relacionamento com clientes, 
              parceiros e colaboradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-tmv-blue">Missão</h3>
              <p className="text-gray-700">
                Fornecer soluções de automação industrial de alta qualidade, contribuindo para 
                a eficiência operacional e competitividade de nossos clientes, através de 
                produtos inovadores e atendimento personalizado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-tmv-blue">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como referência nacional em soluções para automação industrial, 
                destacando-se pela qualidade dos produtos, excelência no atendimento e 
                compromisso com a inovação tecnológica.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-tmv-blue">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Ética e transparência em todas as relações</li>
                <li>• Compromisso com a qualidade e satisfação do cliente</li>
                <li>• Valorização das pessoas e do trabalho em equipe</li>
                <li>• Inovação e aperfeiçoamento contínuo</li>
                <li>• Responsabilidade socioambiental</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Contamos com profissionais qualificados e experientes, dedicados a oferecer o melhor 
            atendimento e as melhores soluções para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200">
                <img 
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 10}.jpg`}
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Nome do Profissional</h3>
                <p className="text-tmv-blue mb-4">Cargo na Empresa</p>
                <p className="text-gray-600">
                  Profissional com ampla experiência na área de automação industrial.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
