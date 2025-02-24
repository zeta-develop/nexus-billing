"use client"

import { createContext, useContext, useState } from "react"

type ColorContextType = {
  selectedColor: string
  setSelectedColor: (color: string) => void
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [selectedColor, setSelectedColor] = useState("amber")

  return <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>{children}</ColorContext.Provider>
}

export function useColor() {
  const context = useContext(ColorContext)
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider")
  }
  return context
}

