import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import ProductsSection from "../components/Products";
import ProjectsSection from "../components/Projects";
import EnvironmentSection from "../components/Environiments";
import Materials from "../components/Materials";
import History from "../components/History";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ProjectsSection />
      <EnvironmentSection />
      <Materials />
      <History />
      <Footer />
    </main>
  );
}