export function OrderStats() {
  const stats = [
    { label: "Cancelled", value: 0 },
    { label: "Suspended", value: 0 },
    { label: "Terminated", value: 3 },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-sm text-zinc-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

