import * as Checkbox from '@radix-ui/react-checkbox';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { SideBanner } from "../../components/SideBanner";

export function Login() {


  return (
    <main className="w-full h-full min-h-screen md:w-screen md:h-screen flex flex-col gap-8 md:gap-0 md:flex-row items-center md:justify-between bg-slate-50">
      <aside className="w-full md:max-w-[50%] h-full">
        <SideBanner />
      </aside>

      <section className="w-full h-full md:grid md:grid-rows-3 grid-cols-1 place-items-center flex flex-col items-center justify-center">
        <div className="w-full max-w-md h-full p-6 flex flex-col justify-end gap-10 md:row-span-2">
          <h1 className="font-sans font-semibold text-4xl text-slate-800">Fazer login</h1>

          <form className="w-full flex flex-col gap-10">

            <div className='flex flex-col'>
              <Input type="email" placeholder="E-mail" autoCorrect="false" />
              <Input type="password" placeholder="Senha" autoCorrect="false" />
            </div>



            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Checkbox.Root className="flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 data-[state=checked]:border-green-500 transition-all bg-white data-[state=checked]:bg-green-500 text-white outline-none" id="remember">
                  <Checkbox.Indicator className="CheckboxIndicator">
                    <FiCheck />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor="remember">Lembrar-me</label>
              </div>

              <a href="#">Esqueci minha senha</a>
            </div>

            <Button variant="primary">
              <span>Entrar</span>
            </Button>

          </form>
        </div>

        <footer className='flex justify-between w-full max-w-md p-6'>
          <div className='flex flex-col'>
            <span className="text-slate-500">Não tem uma conta?</span>
            <Link to="/auth/register" className="text-violet-500 font-semibold hover:underline underline-offset-2">Cadastre-se</Link>
          </div>

          <span className='text-sm text-slate-400 hidden sm:flex'>É de graça 💜</span>
        </footer>
      </section>
    </main>
  );
};
