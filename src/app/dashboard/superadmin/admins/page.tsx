"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { ShieldAlert, UserPlus, Search } from "lucide-react"

const admins = [
    { id: 1, name: "Sarah Connor", email: "sarah@eliteclub.com", role: "Org Admin", org: "Elite Sports Club" },
    { id: 2, name: "John Wick", email: "j.wick@cityleague.com", role: "Org Admin", org: "City Football League" },
    { id: 3, name: "Bruce Wayne", email: "bruce@downtowngym.com", role: "Moderator", org: "Downtown Gym" },
]

export default function AdminsPage() {
    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Platform Admins</h2>
                        <p className="text-muted-foreground font-medium">Manage permissions and roles for organization administrators.</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search admins..." className="pl-9 w-[250px]" />
                        </div>
                        <Button className="btn-sports rounded-xl font-bold uppercase tracking-tight">
                            <UserPlus className="mr-2 h-4 w-4" />
                            New Admin
                        </Button>
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {people.map((admin, idx) => (
                        <motion.div
                            key={admin.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card className="hover:border-primary/50 transition-colors group">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black uppercase">
                                        {admin.name.charAt(0)}
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ShieldAlert className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent className="mt-4">
                                    <h3 className="font-bold text-lg">{admin.name}</h3>
                                    <p className="text-sm text-muted-foreground">{admin.email}</p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="text-xs font-bold uppercase tracking-wider bg-secondary px-2 py-1 rounded-md">{admin.role}</span>
                                        <span className="text-xs text-muted-foreground">at {admin.org}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

const people = [
    { id: 1, name: "Sarah Connor", email: "sarah@eliteclub.com", role: "Org Admin", org: "Elite Sports Club" },
    { id: 2, name: "John Wick", email: "j.wick@cityleague.com", role: "Org Admin", org: "City Football League" },
    { id: 3, name: "Bruce Wayne", email: "bruce@downtowngym.com", role: "Moderator", org: "Downtown Gym" },
    { id: 4, name: "Tony Stark", email: "tony@avengers.com", role: "Super Admin", org: "PlayM8 HQ" },
    { id: 5, name: "Clark Kent", email: "clark@dailyplanet.com", role: "Moderator", org: "Metropolis Gym" },
]
