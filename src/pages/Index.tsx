
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ProductCategories from "../components/home/ProductCategories";
import ContactCTA from "../components/home/ContactCTA";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <ProductCategories />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
