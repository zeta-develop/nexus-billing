"use client"

import { useState } from "react"
import { useColor } from "@/context/color-context"

const filters = [
  { id: "new", label: "New" },
  { id: "popular", label: "Popular" },
  { id: "pinned", label: "Pinned" },
]

export function NewsFilter() {
  const [activeFilter, setActiveFilter] = useState("new")
  const { selectedColor } = useColor()

  return (
    <div className="flex space-x-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${
              activeFilter === filter.id
                ? `bg-${selectedColor}-500 text-black`
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

