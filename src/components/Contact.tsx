
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 mb-8">
            Tire suas dúvidas e comece sua jornada de aprendizado
          </p>
          <form className="space-y-6">
            <Input type="text" placeholder="Nome completo" />
            <Input type="email" placeholder="E-mail" />
            <Textarea placeholder="Mensagem" className="min-h-[120px]" />
            <Button className="w-full bg-blue-700 hover:bg-blue-800">
              Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
