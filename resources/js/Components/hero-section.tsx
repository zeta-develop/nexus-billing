import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-purple-500/20"
      />

      <div className="relative flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-300 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm">Hosting de nueva generación</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tu servidor.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500">
              Sin límites.
            </span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Servidores de alto rendimiento con protección DDoS, panel de control intuitivo y soporte 24/7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/registro"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-white transition-all hover:translate-y-[-2px]"
            >
              <span className="relative font-medium">Comenzar ahora</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/precios"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm px-8 py-4 text-white font-medium hover:bg-white/10 transition-all"
            >
              Ver precios
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

