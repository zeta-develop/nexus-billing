"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Qué tipos de juegos puedo alojar?",
    answer:
      "Ofrecemos alojamiento optimizado para una variedad de juegos populares, incluyendo Minecraft, Rust, ARK: Survival Evolved, y más. Cada servidor está configurado específicamente para el juego que elijas para garantizar el mejor rendimiento.",
  },
  {
    question: "¿Cómo funciona la protección DDoS?",
    answer:
      "Nuestra protección DDoS de nivel enterprise utiliza técnicas avanzadas de mitigación para detectar y neutralizar ataques en tiempo real, asegurando que tu servidor permanezca en línea y accesible incluso bajo ataques intensos.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplican instantáneamente y solo se te cobrará la diferencia prorrateada si estás actualizando a mitad de ciclo de facturación.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer:
      "Ofrecemos soporte técnico 24/7 a través de nuestro sistema de tickets. Los clientes de planes superiores también tienen acceso a soporte prioritario y, en algunos casos, asistencia telefónica directa.",
  },
  {
    question: "¿Cuál es su política de reembolso?",
    answer:
      "Ofrecemos una garantía de devolución de dinero de 7 días para nuevos clientes. Si no estás satisfecho con nuestro servicio dentro de los primeros 7 días, te reembolsaremos completamente sin hacer preguntas.",
  },
]

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Preguntas frecuentes</h2>
          <p className="text-zinc-400">Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 border-t border-white/10">
                      <p className="text-zinc-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

