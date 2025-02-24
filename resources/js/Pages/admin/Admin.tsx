import { Users, Server, DollarSign, Activity } from "lucide-react"
import { Terminal } from "lucide-react"
import { AdminLayout } from "@/Layouts/AdminLayout"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert"
import { Button } from "@/Components/ui/button"

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "1,234", icon: Users, change: "+20.1%" },
    { title: "Active Services", value: "56", icon: Server, change: "+12.5%" },
    { title: "Revenue", value: "$12,345", icon: DollarSign, change: "+8.3%" },
    { title: "Server Uptime", value: "99.9%", icon: Activity, change: "+0.1%" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-zinc-800 border-zinc-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-zinc-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-zinc-400 mt-1">
                  <span className="text-emerald-500">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>CloudFlare Proxy Detected</AlertTitle>
          <AlertDescription>
            The application has detected CloudFlare proxy. Enable the integration using:
            <code className="ml-2 p-1 bg-red-900/20 rounded text-red-300">php artisan cloudflare:enable</code>
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-zinc-400">New user registration: John Doe</li>
                <li className="text-zinc-400">Service upgrade: Premium Plan</li>
                <li className="text-zinc-400">Support ticket resolved: #1234</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Add New User</Button>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Manage Services</Button>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">View Reports</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}

