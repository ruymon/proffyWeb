import { FiCheckSquare } from "react-icons/fi";
import { Button } from "../../components/Button";

interface SuccessProps {};

export function Success({}: SuccessProps) {
  return (
    <>
      <FiCheckSquare size={80} className="text-green-500" />
      
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-head text-white font-bold text-6xl">Cadastro concluído</h1>
        <span className="font-sans text-purple-200">Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.</span>
      </div>

      <Button variant="primary">
        <span>Fazer login</span>
      </Button>
      </>
  );
};
