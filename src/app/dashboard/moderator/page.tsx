import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { StatCard } from "@/components/dashboard/StatCard"
import { TableCard } from "@/components/dashboard/TableCard"
import { ClipboardCheck, Star, Users, MessageSquare } from "lucide-react"

const judgments = [
    { player: "Alice Johnson", match: "Tennis Open", points: 85, feedback: "Excellent footwork" },
    { player: "Bob Smith", match: "Football Finals", points: 70, feedback: "Strong defense" },
    { player: "Charlie Davis", match: "Badminton Local", points: 92, feedback: "Great agility" },
    { player: "Diana Prince", match: "Cricket Night", points: 78, feedback: "Precise bowling" },
]

export default function ModeratorDashboard() {
    return (
        <DashboardLayout role="moderator">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Matches to Judge"
                    value="12"
                    description="4 pending today"
                    icon={<ClipboardCheck className="h-4 w-4" />}
                />
                <StatCard
                    title="Avg. Points Given"
                    value="82"
                    description="+2.5% vs avg."
                    icon={<Star className="h-4 w-4" />}
                />
                <StatCard
                    title="Players Judged"
                    value="340"
                    description="Total career"
                    icon={<Users className="h-4 w-4" />}
                />
                <StatCard
                    title="Feedback Rate"
                    value="98%"
                    description="Very high quality"
                    icon={<MessageSquare className="h-4 w-4" />}
                />
            </div>
            <div className="grid gap-4">
                <TableCard
                    title="Pending Judgments"
                    description="Assign points and provide feedback to players from recent matches."
                    headers={["Player", "Match Context", "Points Assigned", "Quick Feedback"]}
                    data={judgments}
                />
            </div>
        </DashboardLayout>
    )
}
