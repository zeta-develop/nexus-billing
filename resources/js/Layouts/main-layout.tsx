import { PropsWithChildren } from "react"


export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col">
      {children}
    </div>
  )
}

