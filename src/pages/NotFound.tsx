
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl md:text-8xl font-bold text-tmv-blue mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link to="/" className="tmv-button">
          Voltar para a página inicial
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
