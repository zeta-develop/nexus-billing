import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$1/GB",
    description: "Perfecto para servidores pequeños",
    features: [
      "2GB RAM mínimo",
      "Almacenamiento SSD",
      "Protección DDoS",
      "Panel de control",
      "Copias de seguridad",
      "Soporte 24/7",
    ],
  },
  {
    name: "Premium",
    price: "$2/GB",
    description: "Para servidores más exigentes",
    features: [
      "4GB RAM mínimo",
      "NVMe SSD",
      "Protección DDoS avanzada",
      "Panel de control premium",
      "Copias de seguridad diarias",
      "Soporte prioritario",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$3/GB",
    description: "Máximo rendimiento garantizado",
    features: [
      "8GB RAM mínimo",
      "NVMe SSD Premium",
      "Protección DDoS enterprise",
      "Panel personalizado",
      "Copias en tiempo real",
      "Soporte dedicado",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Planes simples y transparentes</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen nuestras características premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-zinc-800/50 rounded-xl p-6 ${plan.popular ? "ring-2 ring-emerald-500" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">Más popular</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-zinc-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 px-4 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">
                Comenzar ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

