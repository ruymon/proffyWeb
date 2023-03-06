import { Box } from "../../components/Box";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";

export function NewTeacherProfile() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col items-center bg-slate-50">
      <Navbar title="Dar aulas" />
      <Header title="Que incrível que você quer dar aulas." subtitle="O primeiro passo, é preencher esse formulário de inscrição." sideNote="Preparare-se! Vai ser o máximo."/>

      <section className="w-full max-w-4xl px-6 pb-6 flex items-center -mt-16">
        <Box>
          <h2>Seus dados</h2>
        </Box>
      </section>
    </main>
  )
}