"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Trophy, Users, Star, ArrowRight, Save, Zap, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type MatchNode = {
    id: string
    team1: string
    team2: string
    score1: string
    score2: string
    winner?: 1 | 2
    status: "pending" | "live" | "finished"
}

const initialMatches: MatchNode[] = [
    // Quarter Finals
    { id: "q1", team1: "Red Devils", team2: "Blue Sox", score1: "2", score2: "0", winner: 1, status: "finished" },
    { id: "q2", team1: "City Gym", team2: "North Stars", score1: "1", score2: "3", winner: 2, status: "finished" },
    { id: "q3", team1: "Green Giants", team2: "Wild Cats", score1: "", score2: "", status: "live" },
    { id: "q4", team1: "Solar Flare", team2: "Shadows", score1: "", score2: "", status: "pending" },
    // Semi Finals
    { id: "s1", team1: "Red Devils", team2: "North Stars", score1: "", score2: "", status: "pending" },
    { id: "s2", team1: "TBD", team2: "TBD", score1: "", score2: "", status: "pending" },
    // Finals
    { id: "f1", team1: "TBD", team2: "TBD", score1: "", score2: "", status: "pending" },
]

export function TournamentBracket({ isAdmin = false }: { isAdmin?: boolean }) {
    const [matches, setMatches] = React.useState(initialMatches)

    const updateScore = (id: string, team: 1 | 2, val: string) => {
        setMatches(matches.map(m => {
            if (m.id === id) {
                return team === 1 ? { ...m, score1: val } : { ...m, score2: val }
            }
            return m
        }))
    }

    const advanceWinner = (matchId: string) => {
        const match = matches.find(m => m.id === matchId)
        if (!match || match.status === "finished") return

        // Determine winner based on scores
        const score1 = parseInt(match.score1) || 0
        const score2 = parseInt(match.score2) || 0

        if (score1 === score2) {
            alert("Scores are tied! Please enter different scores.")
            return
        }

        const winner: 1 | 2 = score1 > score2 ? 1 : 2
        const winnerName = winner === 1 ? match.team1 : match.team2

        // Update current match as finished
        const updatedMatches = matches.map(m =>
            m.id === matchId ? { ...m, winner, status: "finished" as const } : m
        )

        // Advance winner to next round
        if (matchId === "q1" || matchId === "q2") {
            // Quarter finals -> Semi final 1
            const s1 = updatedMatches.find(m => m.id === "s1")!
            if (matchId === "q1") {
                s1.team1 = winnerName
            } else {
                s1.team2 = winnerName
            }
        } else if (matchId === "q3" || matchId === "q4") {
            // Quarter finals -> Semi final 2
            const s2 = updatedMatches.find(m => m.id === "s2")!
            if (matchId === "q3") {
                s2.team1 = winnerName
            } else {
                s2.team2 = winnerName
            }
        } else if (matchId === "s1" || matchId === "s2") {
            // Semi finals -> Final
            const f1 = updatedMatches.find(m => m.id === "f1")!
            if (matchId === "s1") {
                f1.team1 = winnerName
            } else {
                f1.team2 = winnerName
            }
        }

        setMatches(updatedMatches)
    }

    const MatchCard = ({ match, className }: { match: MatchNode; className?: string }) => (
        <Card className={cn(
            "w-48 border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden group/match shadow-lg relative",
            match.status === "live" && "ring-2 ring-primary ring-offset-2 ring-offset-background",
            className
        )}>
            {match.status === "live" && (
                <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse" />
            )}
            <CardContent className="p-0">
                <div className="flex flex-col">
                    {[1, 2].map((teamNum) => {
                        const teamName = teamNum === 1 ? match.team1 : match.team2
                        const score = teamNum === 1 ? match.score1 : match.score2
                        const isWinner = match.winner === teamNum

                        return (
                            <div key={teamNum} className={cn(
                                "flex items-center justify-between p-3 border-b border-primary/5 last:border-0 transition-colors",
                                isWinner ? "bg-primary/5" : "bg-transparent",
                                isAdmin && "hover:bg-primary/10"
                            )}>
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className={cn(
                                        "size-2 rounded-full",
                                        isWinner ? "bg-primary" : "bg-muted"
                                    )} />
                                    <span className={cn(
                                        "text-[10px] font-black uppercase truncate italic",
                                        isWinner ? "text-primary" : "text-muted-foreground"
                                    )}>{teamName}</span>
                                </div>
                                {isAdmin ? (
                                    <input
                                        type="text"
                                        value={score}
                                        onChange={(e) => updateScore(match.id, teamNum as 1 | 2, e.target.value)}
                                        className="w-8 h-6 bg-accent/20 rounded border border-transparent focus:border-primary/50 text-center font-black text-[10px] outline-none"
                                        placeholder="-"
                                    />
                                ) : (
                                    <span className="font-black text-sm italic pr-1">{score || "-"}</span>
                                )}
                            </div>
                        )
                    })}
                </div>
            </CardContent>
            {isAdmin && match.status !== "finished" && (
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/match:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <Button onClick={() => advanceWinner(match.id)} size="sm" className="h-7 text-[9px] font-black uppercase tracking-widest rounded-lg scale-90 group-hover/match:scale-100 transition-transform">
                        Advance <Zap className="ml-1 size-3" />
                    </Button>
                </div>
            )}
        </Card>
    )

    return (
        <div className="relative flex items-center justify-start gap-12 p-8 py-12 overflow-x-auto min-h-[600px]">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_70%)]" />
            </div>

            {/* Quarter Finals */}
            <div className="flex flex-col gap-8 relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 mb-2 pl-2">Quarter Finals</h4>
                {matches.slice(0, 4).map((m) => (
                    <div key={m.id} className="relative">
                        <MatchCard match={m} />
                        {/* Connector Logic */}
                        <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-primary/20" />
                    </div>
                ))}
            </div>

            {/* Semi Finals */}
            <div className="flex flex-col gap-32 pt-16 relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 mb-2 pl-2">Semi Finals</h4>
                {matches.slice(4, 6).map((m) => (
                    <div key={m.id} className="relative">
                        <MatchCard match={m} />
                        <div className="absolute top-1/2 -left-12 w-12 h-[2px] bg-primary/20" />
                        <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-primary/20" />
                    </div>
                ))}
            </div>

            {/* Finals */}
            <div className="flex flex-col pt-32 relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 pl-2">The Grand Final</h4>
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-background to-primary/20">
                    <MatchCard match={matches[6]} className="border-none w-56 h-28" />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Trophy className="size-8 text-primary drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Legend / Status */}
            <div className="absolute top-8 right-8 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Match Live</span>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[8px] font-black uppercase h-5">Auto-Advancement Enabled</Badge>
                </div>
            </div>

            {isAdmin && (
                <div className="absolute bottom-8 right-8">
                    <Button className="rounded-xl font-black uppercase italic tracking-tight shadow-xl shadow-primary/20 gap-2">
                        <Save className="size-4" /> Save Tournament State
                    </Button>
                </div>
            )}
        </div>
    )
}
