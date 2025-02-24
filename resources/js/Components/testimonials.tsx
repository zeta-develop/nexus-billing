import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Dueño de servidor Minecraft",
    content:
      "El rendimiento de mi servidor mejoró notablemente desde que cambié a WemX. El soporte técnico es excepcional.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Sarah Lee",
    role: "Administradora de comunidad Rust",
    content: "La protección DDoS es impresionante. Nunca más tuvimos problemas de caídas por ataques.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Mike Brown",
    role: "Streamer de ARK",
    content: "El panel de control es intuitivo y fácil de usar. Puedo gestionar mi servidor sin complicaciones.",
    avatar: "/placeholder.svg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Descubre por qué los jugadores y administradores confían en nosotros para sus servidores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-zinc-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

