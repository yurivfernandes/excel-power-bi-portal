
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-700">ExcelPro</div>
          <div className="hidden md:flex items-center gap-8 text-gray-600">
            <a href="#cursos" className="hover:text-blue-700 transition-colors">Cursos</a>
            <a href="#beneficios" className="hover:text-blue-700 transition-colors">Benefícios</a>
            <a href="#depoimentos" className="hover:text-blue-700 transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-blue-700 transition-colors">Contato</a>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
