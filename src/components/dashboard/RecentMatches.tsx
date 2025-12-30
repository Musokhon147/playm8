"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const matches = [
    { id: 1, opponent: "The Titans", date: "Yesterday", result: "Win", score: "3 - 1", type: "Football" },
    { id: 2, opponent: "Sarah C.", date: "2 days ago", result: "Loss", score: "6 - 4, 6 - 3", type: "Tennis" },
    { id: 3, opponent: "City Gym", date: "Last Week", result: "Draw", score: "2 - 2", type: "Futsal" },
]

export function RecentMatches() {
    return (
        <Card className="border-none shadow-md bg-card/50">
            <CardHeader>
                <CardTitle className="text-lg font-black uppercase tracking-wider italic flex items-center justify-between">
                    Recent Activity
                    <span className="text-xs font-bold not-italic text-muted-foreground bg-primary/10 px-2 py-1 rounded-lg">Last 3 Games</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {matches.map((match, idx) => (
                    <motion.div
                        key={match.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-colors group cursor-default"
                    >
                        <div className="flex flex-col">
                            <span className="font-bold text-sm group-hover:text-primary transition-colors">{match.opponent}</span>
                            <span className="text-xs text-muted-foreground">{match.type} • {match.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-black italic text-sm text-muted-foreground opacity-50">{match.score}</span>
                            <Badge
                                variant={match.result === "Win" ? "default" : match.result === "Loss" ? "destructive" : "secondary"}
                                className="uppercase tracking-widest font-bold text-[10px] w-16 justify-center"
                            >
                                {match.result}
                            </Badge>
                        </div>
                    </motion.div>
                ))}
            </CardContent>
        </Card>
    )
}
