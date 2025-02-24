import { useState } from "react"
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Search, Server, Globe, Database, MonitorDot } from "lucide-react"
import { DashboardLayout } from "@/Layouts/DashboardLayout"
import { Badge } from "@/Components/ui/badge"
import { Link } from "@inertiajs/react"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

const services = [
  {
    id: 1,
    name: "Basic Web Hosting",
    type: "Universal",
    status: "Active",
    expiresAt: "2024-06-30",
    usage: "75%",
    icon: Globe,
  },
  {
    id: 2,
    name: "Minecraft Premium Server",
    type: "Minecraft",
    status: "Active",
    expiresAt: "2024-07-15",
    usage: "50%",
    icon: Server,
  },
  {
    id: 3,
    name: "Rust Dedicated Server",
    type: "Rust",
    status: "Suspended",
    expiresAt: "2024-05-01",
    usage: "0%",
    icon: Database,
  },
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredServices = services.filter((service) => service.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700">Manage All Services</Button>
        </div>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              Active Services
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
                <Input
                  placeholder="Search services..."
                  className="pl-8 bg-zinc-700 border-zinc-600 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-zinc-400">Service</TableHead>
                  <TableHead className="text-zinc-400">Type</TableHead>
                  <TableHead className="text-zinc-400">Status</TableHead>
                  <TableHead className="text-zinc-400">Expires At</TableHead>
                  <TableHead className="text-zinc-400">Usage</TableHead>
                  <TableHead className="text-zinc-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium text-white">
                      <div className="flex items-center">
                        <service.icon className="mr-2 h-5 w-5 text-indigo-400" />
                        {service.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-zinc-300">{service.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={service.status === "Active" ? "default" : "secondary"}
                        className={service.status === "Active" ? "bg-green-500" : "bg-yellow-500"}
                      >
                        {service.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-zinc-300">{service.expiresAt}</TableCell>
                    <TableCell className="text-zinc-300">{service.usage}</TableCell>
                    <TableCell>
                      <Link href={`/dashboard/services/${service.id}`}>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                          <MonitorDot className="h-4 w-4" />
                          <span>Manage</span>
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

