import { useState } from "react"
import {
  LayoutGrid,
  Users,
  Shield,
  CreditCard,
  LogIn,
  ShoppingBag,
  Settings,
  Mail,
  FileText,
  Newspaper,
  Bell,
  Sun,
  Menu,
  Package,
  Briefcase,
  CreditCardIcon as PaymentIcon,
} from "lucide-react"
import type React from "react"
import { Link } from "@inertiajs/react"
import { Button } from "@/Components/ui/button"

const navigation = [
  {
    title: "DASHBOARD",
    items: [{ name: "Overview", href: "/admin", icon: LayoutGrid }],
  },
  {
    title: "CLIENT MANAGEMENT",
    items: [
      { name: "Customers", href: "/admin/customers", icon: Users },
      { name: "Moderation", href: "/admin/moderation", icon: Shield },
      { name: "Payments", href: "/admin/payments", icon: CreditCard },
      { name: "Subscription", href: "/admin/subscription", icon: LogIn },
      { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    ],
  },
  {
    title: "STORE",
    items: [
      { name: "Products", href: "/admin/store/products", icon: Package },
      { name: "Services", href: "/admin/store/services", icon: Briefcase },
      { name: "Payment Gateways", href: "/admin/store/gateways", icon: PaymentIcon },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { name: "Configuration", href: "/admin/configuration", icon: Settings },
      { name: "Emails", href: "/admin/emails", icon: Mail },
      { name: "Pages", href: "/admin/pages", icon: FileText },
      { name: "Articles", href: "/admin/articles", icon: Newspaper },
    ],
  },
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Top Navigation */}
      <header className="fixed top-0 z-50 w-full bg-zinc-800 border-b border-zinc-700 h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
            <Menu className="h-6 w-6 text-zinc-400" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Sun className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">JS</div>
            <span className="text-white">John Smith</span>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="pt-14 flex">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-64 bg-zinc-800 border-r border-zinc-700 overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-64"
          } lg:translate-x-0 z-50`}
        >
          <div className="p-4">
            <Link href="/admin" className="flex items-center mb-6">
              <span className="text-2xl mr-2">⚡</span>
              <span className="text-lg font-bold text-white">ADMIN PANEL</span>
            </Link>
            <nav className="space-y-8">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xs font-semibold text-zinc-400 mb-2">{section.title}</h2>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm`}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 p-6 transition-all duration-300 relative ${sidebarOpen ? "lg:ml-64" : ""}`}>
          {children}
        </main>
      </div>
    </div>
  )
}

