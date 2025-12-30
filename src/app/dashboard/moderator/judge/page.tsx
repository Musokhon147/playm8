"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Gavel, Check, X } from "lucide-react"

const pendingJudgments = [
    { id: 1, player: "Mike Ross", match: "Tennis Final", reason: "Disputed Line Call", time: "10 mins ago" },
    { id: 2, player: "Harvey Specter", match: "Corporate League", reason: "Unsportsmanlike Conduct", time: "1 hour ago" },
    { id: 3, player: "Louis Litt", match: "Mud Bath Marathon", reason: "Late Arrival", time: "2 hours ago" },
]

export default function JudgePage() {
    return (
        <DashboardLayout role="moderator">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">The Courtroom</h2>
                    <p className="text-muted-foreground font-medium">Adjudicate disputes and review player conduct.</p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pendingJudgments.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card className="border-t-4 border-t-yellow-500 bg-card/50 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between text-lg font-bold uppercase">
                                        <span>Case #{item.id}</span>
                                        <Gavel className="h-5 w-5 text-yellow-500" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="text-sm">
                                        <span className="font-bold text-muted-foreground uppercase tracking-wide">Player:</span>
                                        <span className="ml-2 font-bold">{item.player}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-bold text-muted-foreground uppercase tracking-wide">Event:</span>
                                        <span className="ml-2">{item.match}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-bold text-muted-foreground uppercase tracking-wide">Issue:</span>
                                        <span className="ml-2 text-destructive font-medium">{item.reason}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2 italic">Reported {item.time}</p>
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <Button variant="outline" className="flex-1 w-full border-green-500/20 hover:bg-green-500/10 hover:text-green-600 font-bold uppercase tracking-tight">
                                        <Check className="mr-2 h-4 w-4" /> Clear
                                    </Button>
                                    <Button variant="outline" className="flex-1 w-full border-red-500/20 hover:bg-red-500/10 hover:text-red-600 font-bold uppercase tracking-tight">
                                        <X className="mr-2 h-4 w-4" /> Penalize
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
