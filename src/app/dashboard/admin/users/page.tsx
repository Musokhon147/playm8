"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Search, Ban, CheckCircle } from "lucide-react"

const users = [
    { id: 1, name: "Alex Johnson", email: "alex.j@example.com", status: "Active", matches: 42, rating: "Pro" },
    { id: 2, name: "Sam Smith", email: "sam.smith@test.com", status: "Active", matches: 15, rating: "Rookie" },
    { id: 3, name: "Suspicious User", email: "bot123@spam.com", status: "Banned", matches: 0, rating: "N/A" },
    { id: 4, name: "Emily Blunt", email: "emily.b@actor.com", status: "Active", matches: 8, rating: "Intermediate" },
    { id: 5, name: "Ryan Gosling", email: "ryan@drive.com", status: "Active", matches: 200, rating: "Elite" },
]

export default function UsersPage() {
    return (
        <DashboardLayout role="admin">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">User Management</h2>
                        <p className="text-muted-foreground font-medium">Oversee member activity and moderation.</p>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search users by name or email..." className="pl-9 w-[300px]" />
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user, idx) => (
                        <motion.div
                            key={user.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card className="hover:bg-primary/5 transition-colors group">
                                <CardContent className="pt-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <Avatar className="h-12 w-12 border-2 border-primary/20">
                                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h3 className="font-bold text-lg leading-none">{user.name}</h3>
                                                <p className="text-sm text-muted-foreground">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className={`h-2.5 w-2.5 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`} />
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="flex gap-4 text-sm">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-primary">{user.matches}</span>
                                                <span className="text-xs text-muted-foreground uppercase tracking-wider">Matches</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-primary">{user.rating}</span>
                                                <span className="text-xs text-muted-foreground uppercase tracking-wider">Rank</span>
                                            </div>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant={user.status === "Active" ? "outline" : "secondary"}
                                            className="h-8 text-xs font-bold uppercase tracking-wider"
                                        >
                                            {user.status === "Active" ? (
                                                <>
                                                    <Ban className="mr-1 h-3 w-3" /> Ban
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle className="mr-1 h-3 w-3" /> Unban
                                                </>
                                            )}
                                        </Button>
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
