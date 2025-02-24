import { Shield, Zap, Server, Users, Clock, Database } from "lucide-react"

const features = [
  {
    name: "Protección DDoS",
    description: "Protección avanzada contra ataques DDoS para mantener tu servidor siempre en línea.",
    icon: Shield,
  },
  {
    name: "Hardware de última generación",
    description: "Servidores equipados con CPUs de última generación y SSDs NVMe.",
    icon: Zap,
  },
  {
    name: "Panel de control intuitivo",
    description: "Interfaz fácil de usar para gestionar tu servidor sin complicaciones.",
    icon: Server,
  },
  {
    name: "Soporte 24/7",
    description: "Equipo de soporte especializado disponible las 24 horas del día.",
    icon: Users,
  },
  {
    name: "Activación instantánea",
    description: "Tu servidor estará listo en menos de 60 segundos después del pago.",
    icon: Clock,
  },
  {
    name: "Copias de seguridad automáticas",
    description: "Sistema automatizado de backups para mantener tus datos seguros.",
    icon: Database,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Ofrecemos la mejor experiencia en hosting de juegos con características diseñadas para jugadores exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

