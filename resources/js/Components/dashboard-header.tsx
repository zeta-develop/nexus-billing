import { Bell, Search, Settings, User, Menu } from "lucide-react"
import { useColor } from "@/context/color-context"

interface DashboardHeaderProps {
  toggleSidebar: () => void
}

export function DashboardHeader({ toggleSidebar }: DashboardHeaderProps) {
  const { selectedColor } = useColor()

  return (
    <header className="bg-zinc-800 shadow-md py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <button onClick={toggleSidebar} className="mr-4 text-white hover:text-zinc-300">
            <Menu className="h-6 w-6" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-zinc-700 text-white rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-zinc-600 w-64"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className={`text-${selectedColor}-500 hover:text-${selectedColor}-400 relative`}>
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className={`text-${selectedColor}-500 hover:text-${selectedColor}-400`}>
            <Settings className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-3">
            <span className="text-white text-sm">John Doe</span>
            <button className={`bg-${selectedColor}-500 rounded-full p-1`}>
              <User className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

