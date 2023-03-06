interface HeaderProps {
  title: string;
  subtitle?: string;
  sideNote?: string
}

export function Header({ title, subtitle, sideNote }: HeaderProps ) {
  return (
    <header className="w-full bg-violet-600 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 py-24 pb-32 flex items-end justify-between">
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="text-white font-head font-bold text-4xl">{ title }</h1>
          <span className="text-violet-200">{ subtitle }</span>
        </div>

        <span className="text-sm text-violet-200">{ sideNote }</span>
      </div>
    </header>
  )
}