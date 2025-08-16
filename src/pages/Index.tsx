import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import RestaurantSection from "@/components/RestaurantSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryFilter />
      <RestaurantSection />
      <Footer />
    </div>
  );
};

export default Index;
