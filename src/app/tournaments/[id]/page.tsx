"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy, Calendar, MapPin, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react" // Ensure React import

// Reuse Types (In a real app, these would be shared)
type Match = {
    id: string
    p1: string
    p2: string
    s1?: number
    s2?: number
    winner?: 1 | 2
    status: "Upcoming" | "Live" | "Finished"
    time: string
}

type Round = {
    name: string
    matches: Match[]
}

const tournamentData: Round[] = [
    {
        name: "Quarter Finals",
        matches: [
            { id: "q1", p1: "A. Johnson", p2: "B. Smith", s1: 6, s2: 4, winner: 1, status: "Finished", time: "10:00 AM" },
            { id: "q2", p1: "C. Davis", p2: "D. Miller", s1: 3, s2: 6, winner: 2, status: "Finished", time: "11:00 AM" },
            { id: "q3", p1: "E. Wilson", p2: "F. Moore", s1: 5, s2: 5, status: "Live", time: "12:00 PM" },
            { id: "q4", p1: "G. Taylor", p2: "H. Anderson", s1: 0, s2: 0, status: "Upcoming", time: "1:00 PM" },
        ]
    },
    {
        name: "Semi Finals",
        matches: [
            { id: "s1", p1: "A. Johnson", p2: "D. Miller", status: "Upcoming", time: "3:00 PM" },
            { id: "s2", p1: "TBD", p2: "TBD", status: "Upcoming", time: "4:00 PM" },
        ]
    },
    {
        name: "Finals",
        matches: [
            { id: "f1", p1: "TBD", p2: "TBD", status: "Upcoming", time: "6:00 PM" },
        ]
    }
]

export default function PublicTournamentPage({ params }: { params: { id: string } }) {
    // In a real app, we'd fetch data based on params.id
    // Need to unwrap params in Next.js 15+, but for now treating as sync or utilizing use() hook pattern if needed. 
    // Simplified for this demo.

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Public Header */}
            <header className="border-b bg-card/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-bold uppercase tracking-wider text-sm">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-1">
                        <Trophy className="h-5 w-5 text-primary" />
                        <span className="font-black text-xl tracking-tighter uppercase italic">
                            Play<span className="text-primary italic">M8</span> Turnney
                        </span>
                    </div>
                    <Button size="sm" variant="outline" className="font-bold uppercase tracking-widest gap-2">
                        <Share2 className="h-4 w-4" /> Share
                    </Button>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 space-y-8">
                {/* Tournament Info Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4 py-8"
                >
                    <Badge variant="secondary" className="mb-2 font-bold uppercase tracking-widest text-primary">Official Tournament</Badge>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Summer Tennis Open 2025
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-muted-foreground font-medium">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Dec 30 - Jan 2</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>City Sports Complex, NY</span>
                        </div>
                    </div>
                </motion.div>

                {/* Bracket Visualization */}
                <div className="overflow-x-auto pb-12">
                    <div className="min-w-[900px] flex justify-between relative gap-8 px-4">
                        {tournamentData.map((round, rIdx) => (
                            <div key={rIdx} className="flex-1 flex flex-col justify-around gap-8 relative z-10">
                                <h3 className="text-center font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4 bg-background/50 py-1 rounded-full border">
                                    {round.name}
                                </h3>
                                {round.matches.map((match) => (
                                    <div key={match.id} className="relative flex items-center">
                                        <MatchCard match={match} />
                                        {/* Connectors */}
                                        {rIdx < tournamentData.length - 1 && (
                                            <div className="absolute -right-8 top-1/2 w-8 h-px bg-border -z-10" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Sponsors Footer */}
            <footer className="border-t bg-muted/10 py-12">
                <div className="container mx-auto px-4 text-center space-y-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Sponsored By</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos */}
                        <div className="text-2xl font-black italic">NIKE</div>
                        <div className="text-2xl font-black italic">GATORADE</div>
                        <div className="text-2xl font-black italic">WILSON</div>
                        <div className="text-2xl font-black italic">REDBULL</div>
                    </div>
                    <div className="pt-8 text-xs text-muted-foreground">
                        © 2025 PlayM8Sports. All rights reserved. Live results powered by PlayM8 Engine.
                    </div>
                </div>
            </footer>
        </div>
    )
}

function MatchCard({ match }: { match: Match }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full"
        >
            <Card className={`w-full overflow-hidden transition-all hover:shadow-xl hover:scale-105 border-muted-foreground/20 ${match.status === 'Live' ? 'ring-2 ring-primary shadow-primary/20 bg-primary/5' : 'bg-card'}`}>
                <div className="flex flex-col text-sm font-medium">
                    {/* Player 1 */}
                    <div className={`p-3 flex justify-between items-center ${match.winner === 1 ? 'bg-foreground/5 font-bold' : ''}`}>
                        <div className="flex items-center gap-3">
                            {/* Mock Avatar Colors */}
                            <div className={`h-6 w-6 rounded-full ${match.winner === 1 ? 'bg-primary' : 'bg-muted'} flex items-center justify-center text-[10px] text-white font-bold`}>
                                {match.p1.charAt(0)}
                            </div>
                            <span>{match.p1}</span>
                        </div>
                        {match.s1 !== undefined && <span className="font-mono bg-background px-1.5 rounded">{match.s1}</span>}
                    </div>

                    <div className="h-px bg-border w-full" />

                    {/* Player 2 */}
                    <div className={`p-3 flex justify-between items-center ${match.winner === 2 ? 'bg-foreground/5 font-bold' : ''}`}>
                        <div className="flex items-center gap-3">
                            <div className={`h-6 w-6 rounded-full ${match.winner === 2 ? 'bg-primary' : 'bg-muted'} flex items-center justify-center text-[10px] text-white font-bold`}>
                                {match.p2.charAt(0)}
                            </div>
                            <span>{match.p2}</span>
                        </div>
                        {match.s2 !== undefined && <span className="font-mono bg-background px-1.5 rounded">{match.s2}</span>}
                    </div>
                </div>

                {/* Footer Status */}
                <div className="px-3 py-1.5 bg-muted/50 text-[10px] font-bold uppercase tracking-widest flex justify-between items-center text-muted-foreground">
                    <span>{match.time}</span>
                    {match.status === 'Live' && (
                        <span className="text-red-500 animate-pulse flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Live
                        </span>
                    )}
                </div>
            </Card>
        </motion.div>
    )
}
