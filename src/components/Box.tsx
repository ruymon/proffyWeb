import { ReactNode } from "react"

interface BoxProps {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <div className="w-full py-14 px-16 bg-white border border-slate-100 rounded-lg">
      { children }
    </div>
  )
}