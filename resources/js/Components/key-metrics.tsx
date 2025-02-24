export function KeyMetrics() {
  const metrics = [
    {
      icon: "📦",
      label: "Total Active Orders",
      value: "0",
    },
    {
      icon: "💰",
      label: "Revenue",
      value: "$0.00",
    },
    {
      icon: "💳",
      label: "Subscription",
      value: "$0.00 / 30 days",
    },
    {
      icon: "👥",
      label: "New Users",
      value: "2",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-[#25262b] rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-zinc-400">{metric.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
            </div>
            <span className="text-2xl">{metric.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

