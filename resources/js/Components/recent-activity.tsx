import { Activity } from "lucide-react"

const activities = [
  { id: 1, description: "New login from 192.168.1.1", time: "2 hours ago" },
  { id: 2, description: "Service 'Web Hosting' renewed", time: "1 day ago" },
  { id: 3, description: "Password changed", time: "3 days ago" },
]

export function RecentActivity() {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start">
            <Activity className="h-5 w-5 text-zinc-400 mr-3 mt-1" />
            <div>
              <p className="text-white text-sm">{activity.description}</p>
              <p className="text-xs text-zinc-500 mt-1">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

