
import { useState, FormEvent } from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log("Form submitted with data:", formData);
    // Show success message
    setFormSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 5000);
  };

  return (
    <Layout>
      <div className="bg-tmv-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Estamos prontos para atender suas necessidades em automação industrial
          </p>
        </div>
      </div>

      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-tmv-blue p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-gray-600">(XX) XXXX-XXXX</p>
                  <p className="text-gray-600">(XX) XXXXX-XXXX (WhatsApp)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tmv-blue p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <p className="text-gray-600">contato@tmvcomercial.com.br</p>
                  <p className="text-gray-600">vendas@tmvcomercial.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tmv-blue p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Nome da Rua, 123 - Bairro<br />
                    Cidade - Estado<br />
                    CEP: XXXXX-XXX
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Horário de Funcionamento</h3>
              <p className="text-gray-600">Segunda à Sexta: 8h às 18h</p>
              <p className="text-gray-600">Sábado: 9h às 13h</p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219550306!2d-43.17916788503576!3d-22.90575588501566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f251d85272f76f7!2sAv.%20Rio%20Branco%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1646185909407!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa TMV Comercial"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                <p>Agradecemos seu contato. Responderemos o mais breve possível.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Nome Completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmv-blue"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmv-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Telefone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmv-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmv-blue"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Orçamento">Solicitar Orçamento</option>
                    <option value="Suporte Técnico">Suporte Técnico</option>
                    <option value="Informações">Informações sobre Produto</option>
                    <option value="Parceria">Proposta de Parceria</option>
                    <option value="Outros">Outros Assuntos</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tmv-blue"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="tmv-button flex items-center justify-center w-full"
                  >
                    <Send size={16} className="mr-2" />
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
