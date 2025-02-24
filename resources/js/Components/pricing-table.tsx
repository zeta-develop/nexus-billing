"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$5",
    description: "Perfecto para servidores pequeños",
    features: ["2GB RAM", "10GB SSD", "Protección DDoS básica", "Panel de control estándar", "Soporte por ticket"],
  },
  {
    name: "Pro",
    price: "$15",
    description: "Ideal para comunidades en crecimiento",
    features: [
      "8GB RAM",
      "50GB NVMe SSD",
      "Protección DDoS avanzada",
      "Panel de control personalizado",
      "Soporte prioritario 24/7",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$30",
    description: "Para servidores de alto rendimiento",
    features: [
      "16GB RAM",
      "100GB NVMe SSD",
      "Protección DDoS enterprise",
      "Panel totalmente personalizable",
      "Soporte dedicado 24/7",
    ],
  },
]

export function PricingTable() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Planes simples y transparentes</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen nuestras características premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 ${
                plan.popular ? "ring-2 ring-emerald-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-4">
                {plan.price}
                <span className="text-lg font-normal text-zinc-400">/mes</span>
              </div>
              <p className="text-zinc-400 mb-6">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-lg transition-colors">
                Seleccionar plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

