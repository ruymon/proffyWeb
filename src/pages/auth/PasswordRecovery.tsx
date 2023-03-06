import { BackArrow } from "../../components/BackArrow";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SideBanner } from "../../components/SideBanner";

export function PasswordRecovery() {
  return (
    <main className="w-full h-full min-h-screen md:w-screen md:h-screen flex flex-col-reverse  md:gap-0 md:flex-row items-center md:justify-between bg-slate-50">
      <section className="w-full h-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm h-full flex flex-col justify-between gap-10">
          <BackArrow />


          <div className='h-full flex flex-col justify-center gap-10'>
            <header className="flex flex-col gap-3">
              <h1 className="font-sans font-semibold text-4xl text-slate-800">Eita, esqueceu sua senha?</h1>
              <span className='text-slate-500'>Não esquenta, vamos dar um jeito nisso.</span>
            </header>

            <form className="w-full flex flex-col gap-10">

              <div className='flex flex-col'>
                <Input type="email" placeholder="E-mail" autoCorrect="false" autoComplete="email" />
              </div>

              <Button variant="primary">
                <span>Enviar</span>
              </Button>

            </form>
          </div>
        </div>
      </section>

      <aside className="w-full md:max-w-[50%] h-full">
        <SideBanner />
      </aside>
    </main>

  )
}