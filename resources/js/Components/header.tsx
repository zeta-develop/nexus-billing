import { Bell, Mail, Menu, Moon, Sun } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <header className="h-16 bg-indigo-600 px-6 flex items-center justify-between sticky top-0 z-50">
      <button onClick={onMenuClick} className="text-white hover:bg-indigo-700 p-2 rounded-lg">
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-4">
        <button className="text-white hover:bg-indigo-700 p-2 rounded-lg">🇬🇧 English</button>

        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-white hover:bg-indigo-700 p-2 rounded-lg">
          {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <button className="text-white hover:bg-indigo-700 p-2 rounded-lg relative">
          <Mail className="w-5 h-5" />
        </button>

        <button className="text-white hover:bg-indigo-700 p-2 rounded-lg relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="flex items-center gap-2 text-white hover:bg-indigo-700 px-3 py-2 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center">JS</div>
          <span>John Smith</span>
        </button>
      </div>
    </header>
  )
}

