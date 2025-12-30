"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Shield, Users, Calendar, Trophy, Plus, Settings, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import React, { use } from "react" // Import `use` for unwrapping params if on Next 15

// Mock Data
const teamData = {
    id: 1,
    name: "Thunderbolts FC",
    motto: "Strike Fast, Strike Hard",
    sport: "Football",
    founded: "2024",
    role: "Captain",
    stats: {
        matches: 16,
        wins: 12,
        draws: 2,
        losses: 2,
        winRate: 75,
        streak: "W W W D W"
    },
    members: [
        { id: 1, name: "Alex (You)", role: "Captain", image: "Alex", status: "Active" },
        { id: 2, name: "Dave", role: "Striker", image: "Dave", status: "Active" },
        { id: 3, name: "Sarah", role: "Midfield", image: "Sarah", status: "Injured" },
        { id: 4, name: "Mike", role: "Defense", image: "Mike", status: "Active" },
        { id: 5, name: "Jenny", role: "Goalie", image: "Jenny", status: "Active" },
    ],
    schedule: [
        { id: 1, opponent: "Red Dragons", date: "Jan 05, 10:00 AM", location: "Field A", type: "League" },
        { id: 2, opponent: "City United", date: "Jan 12, 11:30 AM", location: "Field B", type: "Friendly" },
    ]
}

export default function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // In Next 15, params is a promise.
    const { id } = use(params)

    return (
        <DashboardLayout role="user">
            <div className="space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/dashboard/user/teams" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Squads
                    </Link>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                <Shield className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-black uppercase tracking-tighter italic flex items-center gap-3">
                                    {teamData.name}
                                    <Badge variant="outline" className="text-sm font-bold tracking-widest">{teamData.sport}</Badge>
                                </h1>
                                <p className="text-muted-foreground font-medium italic">"{teamData.motto}"</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="font-bold uppercase tracking-widest">
                                <Settings className="mr-2 h-4 w-4" /> Settings
                            </Button>
                            <Button className="btn-sports font-bold uppercase tracking-widest">
                                <Plus className="mr-2 h-4 w-4" /> Invite Player
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Tabs */}
                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3 max-w-md bg-muted/50 p-1 rounded-xl">
                        <TabsTrigger value="overview" className="rounded-lg font-bold uppercase tracking-wide">Overview</TabsTrigger>
                        <TabsTrigger value="roster" className="rounded-lg font-bold uppercase tracking-wide">Roster</TabsTrigger>
                        <TabsTrigger value="schedule" className="rounded-lg font-bold uppercase tracking-wide">Schedule</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card className="bg-primary/5 border-none shadow-sm">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-bold uppercase text-muted-foreground">Total Matches</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-black">{teamData.stats.matches}</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-green-500/5 border-none shadow-sm">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-bold uppercase text-muted-foreground">Win Rate</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-black text-green-600">{teamData.stats.winRate}%</div>
                                    <Progress value={teamData.stats.winRate} className="h-1.5 mt-2 bg-green-200" />
                                </CardContent>
                            </Card>
                            <Card className="md:col-span-2 border-none shadow-sm bg-card/50">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-bold uppercase text-muted-foreground">Recent Form</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center gap-2">
                                    {teamData.stats.streak.split(' ').map((result, idx) => (
                                        <div key={idx} className={`h-10 w-10 rounded-full flex items-center justify-center font-black ${result === 'W' ? 'bg-green-500 text-white' :
                                                result === 'D' ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'
                                            }`}>
                                            {result}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="roster">
                        <Card className="border-none shadow-md bg-card/50">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold uppercase tracking-tight">Active Squad ({teamData.members.length})</CardTitle>
                                <CardDescription>Manage your team composition.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {teamData.members.map((member) => (
                                    <motion.div
                                        key={member.id}
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-background border hover:border-primary/50 transition-all cursor-pointer"
                                    >
                                        <Avatar className="h-12 w-12 border-2 border-border">
                                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.image}`} />
                                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="font-bold">{member.name}</div>
                                            <div className="text-xs text-muted-foreground uppercase font-bold tracking-wide">{member.role}</div>
                                        </div>
                                        <Badge variant="secondary" className={`${member.status === "Active" ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
                                            }`}>
                                            {member.status}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="schedule">
                        <Card className="border-none shadow-md bg-card/50">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold uppercase tracking-tight">Upcoming Fixtures</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {teamData.schedule.map((match) => (
                                    <div key={match.id} className="flex items-center p-4 rounded-xl bg-background border gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                                            <Calendar className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-lg">VS {match.opponent}</div>
                                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                                                <Trophy className="h-3 w-3" /> {match.type} • {match.location}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary">{match.date.split(',')[0]}</div>
                                            <div className="text-xs font-bold text-muted-foreground">{match.date.split(',')[1]}</div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
}
