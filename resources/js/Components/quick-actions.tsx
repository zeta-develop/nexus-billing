import { Plus, RefreshCw, HelpCircle } from "lucide-react"

export function QuickActions({ selectedColor }: { selectedColor: string }) {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          className={`flex items-center justify-center p-4 bg-${selectedColor}-500 text-white rounded-lg hover:bg-${selectedColor}-600 transition-colors`}
        >
          <Plus className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">New Service</span>
        </button>
        <button
          className={`flex items-center justify-center p-4 bg-${selectedColor}-500 text-white rounded-lg hover:bg-${selectedColor}-600 transition-colors`}
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Renew Service</span>
        </button>
        <button
          className={`flex items-center justify-center p-4 bg-${selectedColor}-500 text-white rounded-lg hover:bg-${selectedColor}-600 transition-colors col-span-2`}
        >
          <HelpCircle className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Get Support</span>
        </button>
      </div>
    </div>
  )
}

