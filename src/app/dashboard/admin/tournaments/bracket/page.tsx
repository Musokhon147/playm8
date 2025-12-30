"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

// Types for our bracket structure
type Match = {
    id: string
    p1: string
    p2: string
    s1?: number
    s2?: number
    winner?: 1 | 2
    status: "Upcoming" | "Live" | "Finished"
}

type Round = {
    name: string
    matches: Match[]
}

const tournamentData: Round[] = [
    {
        name: "Quarter Finals",
        matches: [
            { id: "q1", p1: "A. Johnson", p2: "B. Smith", s1: 2, s2: 0, winner: 1, status: "Finished" },
            { id: "q2", p1: "C. Davis", p2: "D. Miller", s1: 1, s2: 2, winner: 2, status: "Finished" },
            { id: "q3", p1: "E. Wilson", p2: "F. Moore", s1: 0, s2: 0, status: "Live" },
            { id: "q4", p1: "G. Taylor", p2: "H. Anderson", s1: 0, s2: 0, status: "Upcoming" },
        ]
    },
    {
        name: "Semi Finals",
        matches: [
            { id: "s1", p1: "A. Johnson", p2: "D. Miller", status: "Upcoming" },
            { id: "s2", p1: "TBD", p2: "TBD", status: "Upcoming" },
        ]
    },
    {
        name: "Finals",
        matches: [
            { id: "f1", p1: "TBD", p2: "TBD", status: "Upcoming" },
        ]
    }
]

export default function BracketPage() {
    return (
        <DashboardLayout role="admin">
            <div className="space-y-8 min-w-[800px] overflow-x-auto pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Summer Tennis Open</h2>
                    <p className="text-muted-foreground font-medium">Live Tournament Bracket View.</p>
                </motion.div>

                <div className="flex justify-between relative gap-8">
                    {tournamentData.map((round, rIdx) => (
                        <div key={rIdx} className="flex-1 flex flex-col justify-around gap-8 relative z-10">
                            <h3 className="text-center font-bold uppercase tracking-widest text-sm text-muted-foreground mb-4">{round.name}</h3>
                            {round.matches.map((match, mIdx) => (
                                <div key={match.id} className="relative flex items-center">
                                    <MatchCard match={match} />
                                    {/* Connector Lines Logic - Simplified for demo */}
                                    {rIdx < tournamentData.length - 1 && (
                                        <div className="absolute -right-8 top-1/2 w-8 h-px bg-border -z-10" />
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Background Trophy */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                        <Trophy className="h-96 w-96" />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

function MatchCard({ match }: { match: Match }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full"
        >
            <Card className={`w-full overflow-hidden transition-all hover:shadow-lg ${match.status === 'Live' ? 'border-primary shadow-primary/20' : ''}`}>
                <div className="flex flex-col text-sm font-medium">
                    {/* Player 1 */}
                    <div className={`p-3 flex justify-between items-center ${match.winner === 1 ? 'bg-primary/10 font-bold' : ''}`}>
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-[10px] w-4">1</span>
                            <span>{match.p1}</span>
                        </div>
                        {match.s1 !== undefined && <span className="font-mono">{match.s1}</span>}
                    </div>

                    <div className="h-px bg-border w-full" />

                    {/* Player 2 */}
                    <div className={`p-3 flex justify-between items-center ${match.winner === 2 ? 'bg-primary/10 font-bold' : ''}`}>
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-[10px] w-4">2</span>
                            <span>{match.p2}</span>
                        </div>
                        {match.s2 !== undefined && <span className="font-mono">{match.s2}</span>}
                    </div>
                </div>
                {match.status === 'Live' && (
                    <div className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest text-center animate-pulse">
                        Live Match
                    </div>
                )}
            </Card>
        </motion.div>
    )
}
