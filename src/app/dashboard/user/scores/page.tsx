"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy, TrendingUp, TrendingDown, Minus, Calendar, LayoutGrid, Target, Swords } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TournamentBracket } from "@/components/dashboard/tournament-bracket"

const scores = [
    { id: 1, date: "28 Dec 2025", event: "Winter League", opponent: "The Titans", score: "3 - 1", result: "Win", points: "+15" },
    { id: 2, date: "26 Dec 2025", event: "Friendly Match", opponent: "Sarah C.", score: "4 - 6, 3 - 6", result: "Loss", points: "-8" },
    { id: 3, date: "20 Dec 2025", event: "Club Futsal", opponent: "City Gym", score: "2 - 2", result: "Draw", points: "+2" },
    { id: 4, date: "15 Dec 2025", event: "Tennis Open", opponent: "Mike R.", score: "6 - 0, 6 - 0", result: "Win", points: "+20" },
    { id: 5, date: "10 Dec 2025", event: "Community Cup", opponent: "North Stars", score: "1 - 4", result: "Loss", points: "-12" },
    { id: 6, date: "05 Dec 2025", event: "Practice", opponent: "Coach Dave", score: "N/A", result: "Draw", points: "0" },
]

export default function ScoresPage() {
    return (
        <DashboardLayout role="user">
            <div className="space-y-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black uppercase tracking-widest text-[10px]">
                                Event Center
                            </Badge>
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter italic">Lobby <span className="text-primary">Scores</span></h2>
                        <p className="text-muted-foreground font-medium text-sm">Track your seasonal performance and live tournaments.</p>
                    </div>

                    <div className="flex gap-2">
                        <div className="bg-accent/10 p-2 rounded-xl flex items-center gap-4 px-4 border border-primary/5">
                            <div className="text-center">
                                <div className="text-lg font-black italic tracking-tighter">1,240</div>
                                <div className="text-[8px] font-black uppercase text-muted-foreground">Season Points</div>
                            </div>
                            <div className="h-8 w-px bg-primary/10" />
                            <div className="text-center">
                                <div className="text-lg font-black italic tracking-tighter text-emerald-500">65%</div>
                                <div className="text-[8px] font-black uppercase text-muted-foreground">Win Rate</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <Tabs defaultValue="history" className="w-full">
                    <TabsList className="bg-card/50 border border-primary/5 p-1 rounded-2xl mb-6 h-12">
                        <TabsTrigger value="history" className="rounded-xl px-8 font-black uppercase italic tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-white">
                            <Calendar className="mr-2 size-3" /> Match History
                        </TabsTrigger>
                        <TabsTrigger value="bracket" className="rounded-xl px-8 font-black uppercase italic tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-white">
                            <Swords className="mr-2 size-3" /> Live Brackets
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="history">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="border-primary/5 shadow-xl bg-card/30 backdrop-blur-sm overflow-hidden">
                                <CardHeader className="border-b border-primary/5">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                                            <LayoutGrid className="h-4 w-4 text-primary" />
                                            Recent Activity
                                        </CardTitle>
                                        <Badge variant="outline" className="text-[10px] font-black uppercase">Season 4</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <Table>
                                        <TableHeader className="bg-primary/5">
                                            <TableRow className="hover:bg-transparent border-primary/5">
                                                <TableHead className="font-black uppercase tracking-widest text-[10px] h-12 pl-6">Date</TableHead>
                                                <TableHead className="font-black uppercase tracking-widest text-[10px] h-12">Event</TableHead>
                                                <TableHead className="font-black uppercase tracking-widest text-[10px] h-12">Opponent</TableHead>
                                                <TableHead className="font-black uppercase tracking-widest text-[10px] h-12 text-center">Score</TableHead>
                                                <TableHead className="font-black uppercase tracking-widest text-[10px] h-12 text-center">Result</TableHead>
                                                <TableHead className="font-black uppercase tracking-widest text-[10px] h-12 text-right pr-6">Points</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {scores.map((match, idx) => (
                                                <TableRow key={match.id} className="hover:bg-primary/5 transition-colors border-primary/5 group">
                                                    <TableCell className="font-bold text-[10px] text-muted-foreground py-4 pl-6">{match.date}</TableCell>
                                                    <TableCell className="font-black uppercase italic tracking-tight italic text-sm py-4">{match.event}</TableCell>
                                                    <TableCell className="font-bold text-xs py-4">{match.opponent}</TableCell>
                                                    <TableCell className="text-center font-mono font-black italic text-lg tracking-tighter py-4 text-primary">{match.score}</TableCell>
                                                    <TableCell className="text-center py-4">
                                                        <Badge
                                                            variant={match.result === "Win" ? "default" : match.result === "Loss" ? "destructive" : "secondary"}
                                                            className="w-16 justify-center uppercase font-black italic text-[9px] h-6 rounded-lg"
                                                        >
                                                            {match.result}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-right py-4 pr-6">
                                                        <div className={`flex items-center justify-end gap-1 font-black italic ${match.points.startsWith("+") ? "text-emerald-500" :
                                                            match.points.startsWith("-") ? "text-red-500" : "text-muted-foreground"
                                                            }`}>
                                                            {match.points.startsWith("+") ? <TrendingUp className="h-3 w-3" /> :
                                                                match.points.startsWith("-") ? <TrendingDown className="h-3 w-3" /> :
                                                                    <Minus className="h-3 w-3" />}
                                                            {match.points}
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="bracket">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="border-primary/5 shadow-xl bg-card/30 backdrop-blur-sm overflow-hidden min-h-[600px]">
                                <CardHeader className="border-b border-primary/5">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                                            <Target className="h-4 w-4 text-primary" />
                                            Active Tournament: Winter Classic 2025
                                        </CardTitle>
                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="size-6 rounded-full border-2 border-background bg-accent flex items-center justify-center text-[8px] font-bold">T{i}</div>
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-bold text-muted-foreground">16 Teams Competing</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 overflow-x-auto">
                                    <TournamentBracket />
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
}
