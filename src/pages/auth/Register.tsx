import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { SideBanner } from "../../components/SideBanner";

import arrow from '../../assets/arrow.svg';

export function Register() {
  return (
    <main className="w-full h-full min-h-screen md:w-screen md:h-screen flex flex-col-reverse  md:gap-0 md:flex-row items-center md:justify-between bg-slate-50">
      <section className="w-full h-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm h-full flex flex-col justify-between gap-10">
          <button type="button" className='text-violet-500 p-2 rounded-lg hover:bg-violet-100 w-fit transition-all'>
            <img src={arrow} alt="Voltar"/>
          </button>


          <div className='h-full flex flex-col justify-center gap-10'>
            <header className="flex flex-col gap-3">
              <h1 className="font-sans font-semibold text-4xl text-slate-800">Cadastro</h1>
              <span className='text-slate-500'>Preencha os dados abaixo para começar.</span>
            </header>

            <form className="w-full flex flex-col gap-10">

              <div className='flex flex-col'>
                <Input type="text" placeholder="Nome" autoCorrect="false" autoComplete="given-name" />
                <Input type="text" placeholder="Sobrenome" autoCorrect="false" autoComplete="family-name" />
                <Input type="email" placeholder="E-mail" autoCorrect="false" autoComplete="email" />
                <Input type="password" placeholder="Senha" autoCorrect="false" autoComplete="new-password" />
              </div>

              <Button variant="primary">
                <span>Concluir cadastro</span>
              </Button>

            </form>
          </div>
        </div>
      </section>

      <aside className="w-full md:max-w-[50%] h-full">
        <SideBanner />
      </aside>
    </main>
  );
};
