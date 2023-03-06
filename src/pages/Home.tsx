import { FiBookOpen, FiPower, FiTv } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Avatar } from "../components/Avatar";
import { Button } from '../components/Button';

interface HomeProps {};

export function Home({}: HomeProps) {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen flex items-center flex-col gap-14 bg-slate-50">
      <header className="bg-violet-500 w-full text-violet-200 flex justify-center">
        <div className="w-full h-fit max-w-6xl p-6 pb-16 flex flex-col gap-10">
          <nav className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar src="https://github.com/ruymon.png" />
              <span className="text-sm font-medium">Ruy Monteiro</span>
            </div>

            <button className='flex items-center justify-center p-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-all'>
              <FiPower size={16} />
            </button>
          </nav>

          <section className='flex items-center justify-between'>
            <aside className='w-full md:max-w-[50%] shrink-0 flex flex-col'>
              <img className='object-scale-down object-left' src="proffy.svg" alt="Logo do Proffy" draggable="false" />
              <h1 className='font-sans text-4xl leading-snug'>Sua plataforma de <br /> estudos online.</h1>
            </aside>
            <figure className='w-full max-w-[50%] hidden lg:flex'>
              <img className='object-contain' src="heroIllustration.svg" alt="Professores e alunos se divertindo usando o Proffy!" draggable="false" />
            </figure>
          </section>
        </div>
      </header>

      <footer className='w-full max-w-6xl p-6 flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='flex flex-col text-left text-slate-500 text-2xl leading-normal font-sans shrink-0'>
          <span>Seja bem-vindo.</span>
          <strong className='font-semibold'>O que deseja fazer?</strong>
        </div>

        <div className='flex flex-col-reverse lg:flex-row items-center gap-8'>
          <span className='break-words text-slate-400 text-xs text-right leading-relaxed'>Total de 285 conexões já realizadas 💜</span>

          <div className='flex flex-col lg:flex-row items-center gap-4 shrink-0'>
            <Button onClick={() => navigate('app/lecture/newTeacherProfile')} variant="primary" size="large">
              <FiTv size={40} />
              <span>Dar aulas</span>
            </Button>

            <Button variant="secondary" size="large">
              <FiBookOpen size={40} />
              <span>Estudar</span>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
};
