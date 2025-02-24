"use client"

import { motion } from "framer-motion"
import { Shield, Cpu, Gauge, Clock, Headphones, Server } from "lucide-react"

const features = [
  {
    name: "Anti-DDoS Enterprise",
    description: "Protección avanzada contra ataques DDoS con mitigación automática.",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Hardware Premium",
    description: "Procesadores AMD EPYC y discos NVMe en RAID 10.",
    icon: Cpu,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Alto Rendimiento",
    description: "Optimización específica para cada tipo de servidor.",
    icon: Gauge,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Activación Instantánea",
    description: "Tu servidor listo en menos de 60 segundos.",
    icon: Clock,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Soporte 24/7",
    description: "Equipo técnico especializado disponible todo el día.",
    icon: Headphones,
    color: "from-red-500 to-red-600",
  },
  {
    name: "Panel Intuitivo",
    description: "Gestiona tu servidor de forma fácil y rápida.",
    icon: Server,
    color: "from-teal-500 to-teal-600",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Características premium incluidas
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Todo lo que necesitas para mantener tu servidor funcionando al máximo rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

