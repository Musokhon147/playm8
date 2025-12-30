"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Users, Plus, Trophy, Shield, Star, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// Mock Data
const initialTeams = [
    {
        id: 1,
        name: "Thunderbolts FC",
        sport: "Football",
        role: "Captain",
        members: [
            { id: 1, name: "Alex (You)", image: "Alex" },
            { id: 2, name: "Dave", image: "Dave" },
            { id: 3, name: "Sarah", image: "Sarah" },
            { id: 4, name: "Mike", image: "Mike" },
        ],
        stats: { wins: 12, losses: 4 }
    },
    {
        id: 2,
        name: "Net Runners",
        sport: "Tennis Doubles",
        role: "Member",
        members: [
            { id: 1, name: "Alex (You)", image: "Alex" },
            { id: 5, name: "Jenny", image: "Jenny" },
        ],
        stats: { wins: 5, losses: 2 }
    }
]

export default function MyTeamsPage() {
    const [teams, setTeams] = useState(initialTeams)
    const [newTeamName, setNewTeamName] = useState("")

    const handleCreateTeam = () => {
        if (!newTeamName.trim()) return
        const newTeam = {
            id: teams.length + 1,
            name: newTeamName,
            sport: "Custom",
            role: "Captain",
            members: [{ id: 1, name: "Alex (You)", image: "Alex" }],
            stats: { wins: 0, losses: 0 }
        }
        setTeams([...teams, newTeam])
        setNewTeamName("")
    }

    return (
        <DashboardLayout role="user">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">My Squads</h2>
                        <p className="text-muted-foreground font-medium">Manage your teams and roster.</p>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="btn-sports font-bold uppercase tracking-widest rounded-xl">
                                <Plus className="mr-2 h-4 w-4" /> Create Team
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-black uppercase tracking-tight">Form a New Team</DialogTitle>
                                <DialogDescription>
                                    Create a squad to compete in leagues and tournaments.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right font-bold">
                                        Team Name
                                    </Label>
                                    <Input
                                        id="name"
                                        value={newTeamName}
                                        onChange={(e) => setNewTeamName(e.target.value)}
                                        placeholder="e.g., The Avengers"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" onClick={handleCreateTeam} className="btn-sports w-full font-bold uppercase">
                                    Launch Team
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {teams.map((team, idx) => (
                        <motion.div
                            key={team.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border-none shadow-lg bg-card/50 hover:shadow-xl transition-all group overflow-hidden relative cursor-pointer">
                                <Link href={`/dashboard/user/teams/${team.id}`} className="block h-full">
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <CardHeader className="pb-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant="outline" className="font-bold uppercase tracking-widest text-[10px]">
                                                {team.sport}
                                            </Badge>
                                            <Badge className={`${team.role === "Captain" ? "bg-yellow-500/10 text-yellow-600" : "bg-blue-500/10 text-blue-600"} border-none uppercase font-bold text-[10px]`}>
                                                {team.role}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                                            <Shield className="h-6 w-6 text-primary" />
                                            {team.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="flex -space-x-2">
                                                {team.members.map((member) => (
                                                    <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.image}`} />
                                                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                ))}
                                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center border-2 border-background text-[10px] font-bold">
                                                    +
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground font-medium">
                                                {team.members.length} Players
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 text-center bg-background/50 rounded-xl p-3">
                                            <div>
                                                <div className="text-lg font-black text-primary">{team.stats.wins}</div>
                                                <div className="text-[10px] font-bold uppercase text-muted-foreground">Wins</div>
                                            </div>
                                            <div>
                                                <div className="text-lg font-black text-muted-foreground">{team.stats.losses}</div>
                                                <div className="text-[10px] font-bold uppercase text-muted-foreground">Losses</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline" className="w-full font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            Manage Roster
                                        </Button>
                                    </CardFooter>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
