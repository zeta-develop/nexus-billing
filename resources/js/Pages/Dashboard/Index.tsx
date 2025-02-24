import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { DashboardLayout } from '@/Layouts/DashboardLayout';
import MainLayout from '@/Layouts/main-layout';
import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { DollarSign, Users } from 'lucide-react';

interface CustomPageProps extends PageProps {
    sessions: Session[];
}

export default function DashboardPage() {
    const { sessions } = usePage<CustomPageProps>().props;

    return (
        <MainLayout>
            <DashboardLayout>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">Overview</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <StatsCard
                            title="Total Users"
                            value="1,234"
                            icon={Users}
                        />
                        <StatsCard
                            title="Active Services"
                            value="56"
                            icon={Users}
                        />
                        <StatsCard
                            title="Revenue"
                            value="$12,345"
                            icon={DollarSign}
                        />
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {sessions.map((session, index) => (
                                    <div key={index}>
                                        <p className="text-sm text-zinc-400">
                                            IP Address: {session.ip_address}
                                        </p>
                                        <p className="text-sm text-zinc-400">
                                            User Agent: {session.user_agent}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </DashboardLayout>
        </MainLayout>
    );
}

interface Session {
    ip_address: string;
    user_agent: string;
}

interface StatsCardProps {
    title: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
}

function StatsCard({ title, value, icon: Icon }: StatsCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-zinc-500">+20.1% from last month</p>
            </CardContent>
        </Card>
    );
}
