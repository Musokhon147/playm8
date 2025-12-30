import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import PageTransition from "@/components/layout/page-transition"

interface DashboardLayoutProps {
    children: React.ReactNode
    role: "superadmin" | "admin" | "moderator" | "user"
}

const roleNames = {
    superadmin: "Super Admin",
    admin: "Admin",
    moderator: "Moderator",
    user: "User",
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar role={role} />
            <SidebarInset>
                <Header roleName={roleNames[role]} />
                <main className="flex-1 p-6 md:p-8 space-y-6">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
