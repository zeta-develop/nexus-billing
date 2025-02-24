import { Button } from '@/Components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Bell,
    ChevronDown,
    CreditCard,
    FileText,
    LayoutGrid,
    Menu,
    MessagesSquare,
    MonitorDot,
    Shield,
    ShoppingCart,
    User,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';

const menuItems = [
    { name: 'Dashboard', icon: LayoutGrid, href: '/dashboard' },
    { name: 'News', icon: FileText, href: '/dashboard/news' },
    { name: 'Services', icon: MonitorDot, href: '/dashboard/services' },
    { name: 'Store', icon: ShoppingCart, href: '/dashboard/store' },
    { name: 'Tickets', icon: MessagesSquare, href: '/dashboard/tickets' },
];

const settingsItems = [
    { name: 'Profile', icon: User, href: '/profile' },
    { name: 'Billing', icon: CreditCard, href: '/dashboard/billing' },
];

interface DashboardLayoutProps {
    children: ReactNode;
    showSidebar?: boolean;
}

export function DashboardLayout({
    children,
    showSidebar = true,
}: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const user = usePage().props.auth.user;

    return (
        <div className="flex h-screen bg-zinc-950">
          <Head title="Dashboard" />
            {/* Sidebar - Only show if showSidebar is true */}
            {showSidebar && (
                <aside
                    className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-zinc-900 text-white transition-all duration-300 ease-in-out`}
                >
                    <div className="flex items-center justify-between p-4">
                        <Link
                            href="/dashboard"
                            className="flex items-center space-x-2"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 10V3L4 14H11V21L20 10H13Z"
                                    fill="#FF7A00"
                                    stroke="#FF7A00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {sidebarOpen && (
                                <span className="text-xl font-bold">Nexus</span>
                            )}
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav className="mt-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-2 px-4 py-3`}
                            >
                                <item.icon className="h-5 w-5" />
                                {sidebarOpen && <span>{item.name}</span>}
                            </Link>
                        ))}
                    </nav>
                </aside>
            )}

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-end bg-zinc-900 p-4 text-white">
                    
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/dashboard/cart">
                                <ShoppingCart className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center space-x-2"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700">
                                        JS
                                    </div>
                                    <span>{user.username}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    {user.email}{' '}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {settingsItems.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-2"
                                        >
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Main content area */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-zinc-950 p-6">
                    <div className="container mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
}
