
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Benefits />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 ExcelPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
