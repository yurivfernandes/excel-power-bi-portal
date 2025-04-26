import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Presentation } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Domine Excel e Power BI com um especialista
            </h1>
            <p className="text-xl text-gray-600">
              Aprenda as ferramentas mais poderosas de análise de dados e destaque-se no mercado de trabalho.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                Começar agora
              </Button>
              <Button size="lg" variant="outline">
                Saber mais
              </Button>
            </div>
            <div className="flex gap-8 pt-8">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-6 w-6 text-blue-700" />
                <span className="text-gray-600">Excel Avançado</span>
              </div>
              <div className="flex items-center gap-2">
                <Presentation className="h-6 w-6 text-green-700" />
                <span className="text-gray-600">Power BI Completo</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Pessoa trabalhando com Excel e Power BI" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
