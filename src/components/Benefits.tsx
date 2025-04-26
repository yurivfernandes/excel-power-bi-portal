
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, GraduationCap, FileCode, ClipboardCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher nossos cursos?</h2>
          <p className="text-xl text-gray-600">Benefícios que fazem a diferença na sua carreira</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Aulas Online</h3>
              <p className="text-gray-600">Estude no seu ritmo, onde e quando quiser</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Certificado</h3>
              <p className="text-gray-600">Receba certificado de conclusão reconhecido</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileCode className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Projetos Práticos</h3>
              <p className="text-gray-600">Aprenda na prática com casos reais</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Suporte</h3>
              <p className="text-gray-600">Tire suas dúvidas com especialistas</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
