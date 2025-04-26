import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSpreadsheet, Presentation } from "lucide-react";

const Courses = () => {
  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Cursos</h2>
          <p className="text-xl text-gray-600">Escolha o curso ideal para sua jornada profissional</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileSpreadsheet className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>Excel Avançado</CardTitle>
              <CardDescription>Do básico ao avançado em Excel</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Fórmulas avançadas e funções</li>
                <li>• Tabelas dinâmicas</li>
                <li>• Macros e VBA</li>
                <li>• Dashboards em Excel</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Presentation className="h-6 w-6 text-green-700" />
              </div>
              <CardTitle>Power BI Completo</CardTitle>
              <CardDescription>Visualização de dados profissional</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• ETL e modelagem de dados</li>
                <li>• DAX avançado</li>
                <li>• Visualizações interativas</li>
                <li>• Publicação e compartilhamento</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
