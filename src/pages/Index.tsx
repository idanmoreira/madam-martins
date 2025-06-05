
import Header from "@/components/Header";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO and structured data would be added here for CMS integration */}
      <Header />
      <Services />
      <Gallery />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
