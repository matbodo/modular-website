import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import ProductsSection from "../components/Products";
import ProjectsSection from "../components/Projects";
import EnvironmentSection from "../components/Environiments";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ProjectsSection />
      <EnvironmentSection />
    </main>
  );
}