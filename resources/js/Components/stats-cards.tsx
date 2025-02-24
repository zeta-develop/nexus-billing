import { useColor } from "@/context/color-context"
import { Server, HardDrive, Zap } from "lucide-react"

const stats = [
  { name: "Active Services", value: "3", icon: Server, change: "+1 from last month" },
  { name: "Total Storage", value: "500 GB", icon: HardDrive, change: "+100 GB from last month" },
  { name: "Bandwidth Used", value: "250 GB", icon: Zap, change: "-50 GB from last month" },
]

export function StatsCards() {
  const { selectedColor } = useColor()

  return (
    <>
      {stats.map((stat) => (
        <div key={stat.name} className="bg-zinc-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center">
            <div className={`bg-${selectedColor}-500 rounded-full p-3`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-5">
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-zinc-400">{stat.name}</p>
              <p className="text-sm text-zinc-500 mt-1">{stat.change}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

