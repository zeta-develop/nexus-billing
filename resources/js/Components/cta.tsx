import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para empezar?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Crea tu cuenta ahora y obtén un 20% de descuento en tu primer mes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/registro"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-white transition-all hover:translate-y-[-2px]"
            >
              <span className="relative font-medium">Crear cuenta</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm px-8 py-4 text-white font-medium hover:bg-white/10 transition-all"
            >
              Contactar ventas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

