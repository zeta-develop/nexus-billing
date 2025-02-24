"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Clientes activos", value: "1,000+" },
  { label: "Uptime garantizado", value: "99.9%" },
  { label: "Soporte 24/7", value: "< 30min" },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

