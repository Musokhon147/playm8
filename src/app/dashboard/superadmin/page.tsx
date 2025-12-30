import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { StatCard } from "@/components/dashboard/StatCard"
import { TableCard } from "@/components/dashboard/TableCard"
import { Building2, Users, ShieldAlert, Globe } from "lucide-react"

const organizations = [
    { name: "Elite Sports Club", type: "Tennis", admins: 3, status: "Active" },
    { name: "City Football League", type: "Football", admins: 5, status: "Active" },
    { name: "Downtown Gym", type: "Multi-sport", admins: 2, status: "Inactive" },
    { name: "Suburban Polo Club", type: "Polo", admins: 1, status: "Pending" },
]

export default function SuperAdminDashboard() {
    return (
        <DashboardLayout role="superadmin">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Organizations"
                    value="42"
                    description="+4 from last month"
                    icon={<Building2 className="h-4 w-4" />}
                />
                <StatCard
                    title="Total Admins"
                    value="126"
                    description="+12 since last week"
                    icon={<ShieldAlert className="h-4 w-4" />}
                />
                <StatCard
                    title="Platform Users"
                    value="12,450"
                    description="+18% growth"
                    icon={<Users className="h-4 w-4" />}
                />
                <StatCard
                    title="Global Reach"
                    value="15 Cities"
                    description="Expansion active"
                    icon={<Globe className="h-4 w-4" />}
                />
            </div>
            <div className="grid gap-4 md:grid-cols-1">
                <TableCard
                    title="Recent Organizations"
                    description="Manage and monitor platform organizations."
                    headers={["Name", "Sport Type", "Admins", "Status"]}
                    data={organizations}
                />
            </div>
        </DashboardLayout>
    )
}
