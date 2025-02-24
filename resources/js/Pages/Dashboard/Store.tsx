import { useState } from "react"
import { Search, Server, Globe, Database, ShieldCheck, Zap, ShoppingCart } from "lucide-react"
import { DashboardLayout } from "@/Layouts/DashboardLayout"
import { Badge } from "@/Components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"

const categories = [
  {
    id: "universal",
    title: "Universal",
    description: "Versatile packages for various hosting needs",
    image: "/placeholder.svg",
    imageAlt: "Universal services icon",
    icon: Globe,
  },
  {
    id: "minecraft",
    title: "Minecraft",
    description: "Optimized servers for Minecraft hosting",
    image: "/placeholder.svg",
    imageAlt: "Minecraft grass block",
    icon: Server,
  },
  {
    id: "rust",
    title: "Rust",
    description: "High-performance Rust game servers",
    image: "/placeholder.svg",
    imageAlt: "Rust game logo",
    icon: Database,
  },
]

const products = [
  {
    id: 1,
    name: "Basic Web Hosting",
    category: "Universal",
    description: "Affordable hosting for small websites",
    price: "$5.99/mo",
    features: ["1 GB Storage", "10 GB Bandwidth", "1 Domain", "24/7 Support"],
    icon: Globe,
  },
  {
    id: 2,
    name: "Minecraft Premium",
    category: "Minecraft",
    description: "High-performance Minecraft server hosting",
    price: "$19.99/mo",
    features: ["4 GB RAM", "50 GB SSD", "Unlimited Players", "Mod Support"],
    icon: Server,
  },
  {
    id: 3,
    name: "Rust Battlegrounds",
    category: "Rust",
    description: "Dedicated Rust server with anti-cheat",
    price: "$29.99/mo",
    features: ["6 GB RAM", "100 GB SSD", "DDoS Protection", "Daily Backups"],
    icon: Database,
  },
  {
    id: 4,
    name: "VPS Hosting",
    category: "Universal",
    description: "Virtual private server for advanced users",
    price: "$39.99/mo",
    features: ["4 vCPU Cores", "8 GB RAM", "100 GB NVMe SSD", "Root Access"],
    icon: Server,
  },
]

export default function StorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeTab === "all" || product.category.toLowerCase() === activeTab),
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Cart
          </Button>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search products..."
              className="pl-8 bg-zinc-800 border-zinc-700 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
            <TabsList className="bg-zinc-800">
              <TabsTrigger value="all" className="text-white data-[state=active]:bg-indigo-600">
                All
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-white data-[state=active]:bg-indigo-600"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-zinc-800 border-zinc-700 hover:border-indigo-500 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white text-xl flex items-center">
                  <product.icon className="mr-2 h-6 w-6 text-indigo-400" />
                  {product.name}
                </CardTitle>
                <Badge variant="secondary">{product.category}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <Button
                    variant="outline"
                    className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
                  >
                    Add to Cart
                  </Button>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-zinc-300">
                      <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

