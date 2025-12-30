"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Star, Save } from "lucide-react"

const players = [
    { id: 1, name: "Jessica Jones", match: "Boxing Day Match", currentPoints: 1200 },
    { id: 2, name: "Danny Rand", match: "Martial Arts Expo", currentPoints: 950 },
    { id: 3, name: "Matt Murdock", match: "Blind Football", currentPoints: 1500 },
]

export default function PointsPage() {
    return (
        <DashboardLayout role="moderator">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Points Assignment</h2>
                    <p className="text-muted-foreground font-medium">Update player rankings based on recent match performance.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Card className="border-none shadow-md bg-card/50">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold uppercase tracking-wide">Pending Updates</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent border-primary/10">
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Player</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Match Context</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Current Score</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs w-[150px]">Points (+/-)</TableHead>
                                        <TableHead className="text-right font-bold uppercase tracking-wider text-xs">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {players.map((p) => (
                                        <TableRow key={p.id} className="hover:bg-primary/5 transition-colors border-primary/5">
                                            <TableCell className="font-bold">{p.name}</TableCell>
                                            <TableCell className="text-muted-foreground">{p.match}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 font-mono font-bold text-yellow-500">
                                                    <Star className="h-3 w-3 fill-current" />
                                                    {p.currentPoints}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Input type="number" placeholder="0" className="h-8 font-mono" />
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button size="sm" className="h-8 btn-sports font-bold uppercase tracking-wide">
                                                    <Save className="mr-2 h-3 w-3 " />
                                                    Update
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
