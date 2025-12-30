import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { StatCard } from "@/components/dashboard/StatCard"
import { TableCard } from "@/components/dashboard/TableCard"
import { DashboardWelcome } from "@/components/dashboard/DashboardWelcome"
import { RecentMatches } from "@/components/dashboard/RecentMatches"
import { PlusCircle, Trophy, Star, History } from "lucide-react"

const bookings = [
    { sport: "Tennis", venue: "Court 4", time: "Tomorrow, 10:00 AM", status: "Confirmed" },
    { sport: "Football", venue: "Pitch B", time: "Sat, 4:00 PM", status: "Pending" },
    { sport: "Badminton", venue: "Hall 2", time: "Next Mon, 6:00 PM", status: "Confirmed" },
    { sport: "Swimming", venue: "Olympic Pool", time: "Today, 5:00 PM", status: "Cancelled" },
]

export default function UserDashboard() {
    return (
        <DashboardLayout role="user">
            <DashboardWelcome />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Active Bookings"
                    value="3"
                    description="Next: Tomorrow 10am"
                    icon={<PlusCircle className="h-4 w-4" />}
                />
                <StatCard
                    title="My Score"
                    value="1,240"
                    description="Top 15% of players"
                    icon={<Trophy className="h-4 w-4" />}
                />
                <StatCard
                    title="Skill Rating"
                    value="Pro"
                    description="Based on last 5 matches"
                    icon={<Star className="h-4 w-4" />}
                />
                <StatCard
                    title="Total Matches"
                    value="48"
                    description="Since Jan 2025"
                    icon={<History className="h-4 w-4" />}
                />
            </div>

            <div className="grid gap-6 md:grid-cols-7">
                <div className="md:col-span-4 lg:col-span-5">
                    <TableCard
                        title="My Bookings"
                        description="View and manage your upcoming sports matches."
                        headers={["Sport", "Venue", "DateTime", "Status"]}
                        data={bookings}
                    />
                </div>
                <div className="md:col-span-3 lg:col-span-2">
                    <RecentMatches />
                </div>
            </div>
        </DashboardLayout>
    )
}
