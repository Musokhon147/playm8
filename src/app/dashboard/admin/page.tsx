import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { StatCard } from "@/components/dashboard/StatCard"
import { TableCard } from "@/components/dashboard/TableCard"
import { Calendar, Trophy, Users, TrendingUp } from "lucide-react"

const matches = [
    { id: "M-101", event: "Summer Tennis Open", players: "John vs Mike", status: "Ongoing" },
    { id: "M-102", event: "Football Finals", players: "Team A vs Team B", status: "Scheduled" },
    { id: "M-103", event: "Badminton Local", players: "Sarah vs Emma", status: "Completed" },
    { id: "M-104", event: "Cricket Night", players: "Local Stars", status: "Cancelled" },
]

export default function AdminDashboard() {
    return (
        <DashboardLayout role="admin">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Upcoming Events"
                    value="8"
                    description="3 starting today"
                    icon={<Calendar className="h-4 w-4" />}
                />
                <StatCard
                    title="Active Matches"
                    value="24"
                    description="Live tracking enabled"
                    icon={<Trophy className="h-4 w-4" />}
                />
                <StatCard
                    title="Total Members"
                    value="856"
                    description="+42 new registers"
                    icon={<Users className="h-4 w-4" />}
                />
                <StatCard
                    title="Revenue"
                    value="$12,400"
                    description="+8% from last month"
                    icon={<TrendingUp className="h-4 w-4" />}
                />
            </div>
            <div className="grid gap-4">
                <TableCard
                    title="Match Schedule"
                    description="Manage ongoing and upcoming matches for your organization."
                    headers={["ID", "Event Name", "Participants", "Status"]}
                    data={matches}
                />
            </div>
        </DashboardLayout>
    )
}
