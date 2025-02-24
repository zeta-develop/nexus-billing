import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const games = [
  {
    name: "Minecraft",
    description: "Servidores optimizados para vanilla y modpacks",
    image: "/placeholder.svg",
    specs: ["2GB - 32GB RAM", "NVMe SSD", "Anti-DDoS"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Rust",
    description: "Hosting de alto rendimiento para comunidades",
    image: "/placeholder.svg",
    specs: ["4GB - 64GB RAM", "CPU dedicada", "Backups automáticos"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "ARK: SE",
    description: "Servidores configurados para máximo rendimiento",
    image: "/placeholder.svg",
    specs: ["8GB - 128GB RAM", "Almacenamiento SSD", "Panel personalizado"],
    color: "from-blue-500/20 to-purple-500/20",
  },
]

export function GameServers() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Servidores optimizados para cada juego
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Hardware de última generación y configuraciones específicas para cada tipo de servidor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
              />

              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-6">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                <p className="text-zinc-400 mb-6">{game.description}</p>

                <ul className="space-y-2 mb-6">
                  {game.specs.map((spec) => (
                    <li key={spec} className="text-sm text-zinc-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/juegos/${game.name.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  Ver planes
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

