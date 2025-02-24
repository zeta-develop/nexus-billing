import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';
import { Bell, Grid, Menu } from 'lucide-react';
import { Button } from './ui/button';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'News', href: '/news', icon: '📰' },
    { name: 'Services', href: '/services', icon: '🛠' },
    { name: 'Discord', href: '/discord', icon: '💬' },
];

export function Navigation({
    auth,
}: PageProps) {
    return (
        <header className="border-b border-zinc-800 bg-zinc-900">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="flex items-center gap-2 text-xl font-bold text-white">
                                <span className="text-2xl">⚡</span>
                                Nexus
                            </div>
                        </Link>
                        <nav className="hidden md:ml-6 md:flex md:space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium`}
                                >
                                    <span>{item.icon}</span>
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center gap-4">
                        <button className="relative rounded-lg p-2 hover:bg-zinc-800">
                            <Bell className="h-5 w-5 text-zinc-400" />
                            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>

                        <button className="rounded-lg p-2 hover:bg-zinc-800">
                            <Grid className="h-5 w-5 text-zinc-400" />
                        </button>
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <div className="hidden items-center space-x-4 md:flex">
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="hover:text-dark text-white hover:bg-blue-600"
                                    >
                                        <Link href={route('login')}>Login</Link>
                                    </Button>
                                    <Button
                                        asChild
                                        className={`bg-green-500 text-white hover:bg-blue-600`}
                                    >
                                        <Link href={route('register')}>
                                            Register
                                        </Link>
                                    </Button>
                                </div>
                            </>
                        )}

                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-zinc-400 hover:text-white"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
