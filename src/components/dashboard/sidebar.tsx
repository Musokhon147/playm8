"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    useSidebar,
} from "@/components/ui/sidebar"
import { motion } from "framer-motion"
import { LayoutDashboard, Users, Trophy, ClipboardCheck, Settings, LogOut, Calendar, PlusCircle, Star, Moon, Sun, Shield, MapPin, ArrowLeft, Footprints } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const roleData = {
    superadmin: {
        title: "Super Admin",
        items: [
            { title: "Dashboard", url: "/dashboard/superadmin", icon: LayoutDashboard },
            { title: "Organizations", url: "/dashboard/superadmin/organizations", icon: Users },
            { title: "Assign Admins", url: "/dashboard/superadmin/admins", icon: PlusCircle },
            { title: "Platform Settings", url: "/dashboard/superadmin/settings", icon: Settings },
        ],
    },
    admin: {
        title: "Admin",
        items: [
            { title: "Dashboard", url: "/dashboard/admin", icon: LayoutDashboard },
            { title: "Weekly Schedule", url: "/dashboard/admin/schedule", icon: Calendar },
            { title: "Manage Events", url: "/dashboard/admin/events", icon: Trophy },
            { title: "Matches", url: "/dashboard/admin/matches", icon: Star },
            { title: "Manage Users", url: "/dashboard/admin/users", icon: Users },
        ],
    },
    moderator: {
        title: "Moderator",
        items: [
            { title: "Dashboard", url: "/dashboard/moderator", icon: LayoutDashboard },
            { title: "Judge Players", url: "/dashboard/moderator/judge", icon: ClipboardCheck },
            { title: "Points Assignment", url: "/dashboard/moderator/points", icon: Star },
            { title: "Feedback Management", url: "/dashboard/moderator/feedback", icon: ClipboardCheck },
        ],
    },
    user: {
        title: "Member",
        items: [
            { title: "Dashboard", url: "/dashboard/user", icon: LayoutDashboard },
            { title: "Matchmake", url: "/dashboard/user/matchmake", icon: PlusCircle },
            { title: "PlayM8s Nearby", url: "/dashboard/user/nearby", icon: MapPin },
            { title: "Book Matches", url: "/dashboard/user/book", icon: Calendar },
            { title: "My Teams", url: "/dashboard/user/teams", icon: Shield },
            { title: "Scores", url: "/dashboard/user/scores", icon: Trophy },
            { title: "My Profile", url: "/dashboard/user/profile", icon: Users },
            { title: "Give Feedback", url: "/dashboard/user/feedback", icon: Star },
        ],
    },
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    role: keyof typeof roleData
}

export function AppSidebar({ role, ...props }: AppSidebarProps) {
    const pathname = usePathname()
    const data = roleData[role]
    const { setOpen, open } = useSidebar()
    const [isHovering, setIsHovering] = React.useState(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const { setTheme } = useTheme()

    React.useEffect(() => {
        let t: NodeJS.Timeout
        if (isHovering || isMenuOpen) {
            setOpen(true)
        } else {
            // Enhanced delayed collapse for smoother interaction
            t = setTimeout(() => setOpen(false), 400) // Increased delay to 400ms
        }
        return () => clearTimeout(t)
    }, [isHovering, isMenuOpen, setOpen])

    return (
        <>
            {/* Edge Trigger Zone */}
            <div
                className="fixed top-0 bottom-0 left-0 w-[30px] z-[50] bg-transparent transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                aria-hidden="true"
            />

            <Sidebar
                variant="inset"
                collapsible="offcanvas"
                {...props}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="border-r-0 z-[60]"
            >
                <SidebarHeader className="p-4">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" className="hover:bg-transparent" asChild>
                                <Link href="/" className="flex items-center gap-3 group">
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex aspect-square size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 group-hover:bg-primary/90 transition-all"
                                    >
                                        <Trophy className="size-5" />
                                    </motion.div>
                                    <div className="flex flex-col gap-0.5 leading-none">
                                        <motion.span
                                            whileHover={{ x: 2 }}
                                            className="font-black text-xl tracking-tighter uppercase italic"
                                        >
                                            Play<span className="text-primary italic">M8</span>
                                        </motion.span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{data.title}</span>
                                    </div>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className="px-2">
                    {role === "user" && (
                        <SidebarGroup>
                            <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary">PlayM8 Journey</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild className="h-11 rounded-xl font-black uppercase tracking-tight bg-primary/5 text-primary hover:bg-primary/10 transition-all border border-primary/10">
                                            <Link href="/" className="flex items-center gap-2 w-full">
                                                <ArrowLeft className="size-4" />
                                                <span>Go Back</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    )}
                    <SidebarGroup>
                        <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">Menu</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {data.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title} className="h-11 rounded-xl font-bold uppercase tracking-tight data-[active=true]:bg-primary/10 data-[active=true]:text-primary transition-all overflow-hidden group/menu-item">
                                            <motion.div
                                                initial={false}
                                                whileHover={{ x: 4, backgroundColor: "rgba(var(--primary), 0.05)" }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full flex items-center gap-2 relative z-10"
                                            >
                                                <Link href={item.url} className="flex items-center gap-2 w-full p-1">
                                                    {/* Active Indicator Line */}
                                                    {pathname === item.url && (
                                                        <motion.div
                                                            layoutId="active-nav-indicator"
                                                            className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                        />
                                                    )}
                                                    <item.icon className={cn("transition-transform duration-300 group-hover/menu-item:scale-110", pathname === item.url ? "text-primary" : "text-muted-foreground group-hover/menu-item:text-primary")} />
                                                    <span className={cn("transition-colors", pathname === item.url ? "text-primary" : "text-foreground group-hover/menu-item:text-primary")}>{item.title}</span>
                                                </Link>
                                            </motion.div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className="p-4 gap-2">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-accent/10 border border-primary/10 mb-2">
                                <div className="flex items-center gap-2">
                                    <DropdownMenu onOpenChange={setIsMenuOpen}>
                                        <DropdownMenuTrigger asChild>
                                            <button className="relative p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer outline-none">
                                                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-1.5 left-1.5" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start" className="rounded-2xl border-primary/10 bg-background/80 backdrop-blur-xl z-[100]">
                                            <DropdownMenuItem onClick={() => setTheme("light")} className="font-bold uppercase tracking-tight focus:bg-primary/10 focus:text-primary rounded-xl cursor-pointer">
                                                Light
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme("dark")} className="font-bold uppercase tracking-tight focus:bg-primary/10 focus:text-primary rounded-xl cursor-pointer">
                                                Dark
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme("system")} className="font-bold uppercase tracking-tight focus:bg-primary/10 focus:text-primary rounded-xl cursor-pointer">
                                                System
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Appearance</span>
                                </div>
                            </div>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className="h-11 rounded-xl font-bold uppercase tracking-tight hover:bg-destructive/10 hover:text-destructive transition-colors">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full flex items-center gap-2"
                                >
                                    <Link href="/login" className="flex items-center gap-2 w-full">
                                        <LogOut className="h-4 w-4" />
                                        <span>Log out</span>
                                    </Link>
                                </motion.div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </>
    )
}
