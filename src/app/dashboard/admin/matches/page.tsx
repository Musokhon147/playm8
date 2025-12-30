"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Trophy, FileEdit } from "lucide-react"

const matches = [
    { id: "M-101", event: "Tennis Open", player1: "John Doe", player2: "Mike Smith", court: "Court 1", time: "10:00 AM", status: "Live" },
    { id: "M-102", event: "Tennis Open", player1: "Sarah Connor", player2: "Jane Doe", court: "Court 2", time: "11:30 AM", status: "Scheduled" },
    { id: "M-201", event: "Football League", player1: "Red Team", player2: "Blue Team", court: "Main Pitch", time: "02:00 PM", status: "Scheduled" },
    { id: "M-305", event: "Badminton Cup", player1: "Ali K.", player2: "Sim S.", court: "Hall B", time: "09:00 AM", status: "Finished" },
]

export default function MatchesPage() {
    return (
        <DashboardLayout role="admin">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Match Control</h2>
                        <p className="text-muted-foreground font-medium">Schedule matches and update live scores.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Card className="border-none shadow-md bg-card/50 overflow-hidden">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg font-bold uppercase tracking-wide">
                                <Trophy className="h-5 w-5 text-primary" />
                                Today's Schedule
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent border-primary/10">
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">ID</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Event</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Competitors</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Venue</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Time</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Status</TableHead>
                                        <TableHead className="text-right font-bold uppercase tracking-wider text-xs">Manage</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {matches.map((match) => (
                                        <TableRow key={match.id} className="hover:bg-primary/5 transition-colors border-primary/5">
                                            <TableCell className="font-mono text-xs font-bold text-muted-foreground">{match.id}</TableCell>
                                            <TableCell className="font-bold">{match.event}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2 font-medium">
                                                    <span className="text-primary">{match.player1}</span>
                                                    <span className="text-muted-foreground text-xs">vs</span>
                                                    <span className="text-destructive">{match.player2}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{match.court}</TableCell>
                                            <TableCell className="font-mono">{match.time}</TableCell>
                                            <TableCell>
                                                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${match.status === "Live" ? "bg-red-500/10 text-red-500 animate-pulse" :
                                                        match.status === "Finished" ? "bg-muted text-muted-foreground" :
                                                            "bg-green-500/10 text-green-500"
                                                    }`}>
                                                    {match.status === "Live" && <span className="mr-1 h-1.5 w-1.5 rounded-full bg-red-500" />}
                                                    {match.status}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button size="sm" variant="outline" className="h-7 text-xs font-bold uppercase tracking-wider">
                                                    <FileEdit className="mr-1 h-3 w-3" />
                                                    Score
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </DashboardLayout>
    )
}
