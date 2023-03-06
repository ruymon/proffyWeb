import { BackArrow } from "./BackArrow";

interface NavbarProps {
  title: string;
}

export function Navbar({title}: NavbarProps) {
  return (
    <nav className="w-full flex items-center justify-center bg-violet-600 text-white">
      <div className="w-full max-w-6xl px-6 py-4 flex items-center justify-between opacity-80">
        <BackArrow variant="dark" />
        <span className="font-head">{ title }</span>
        <img className="object-contain w-14" src="/proffy.svg" alt="Logo do Proffy" />
      </div>
    </nav>
  )
}