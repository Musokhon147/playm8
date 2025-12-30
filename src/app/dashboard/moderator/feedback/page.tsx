"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageSquare, ThumbsUp, Trash2 } from "lucide-react"

const feedbackItems = [
    { id: 1, user: "Alice M.", type: "Feature Request", content: "Can we have a dark mode toggle on mobile?", date: "2 days ago", status: "New" },
    { id: 2, user: "Bob D.", type: "Bug Report", content: "Scoreboard didn't update during the final set.", date: "1 week ago", status: "Reviewing" },
    { id: 3, user: "Charlie", type: "Complaint", content: "The court surface was slippery at Center Court.", date: "3 days ago", status: "Resolved" },
]

export default function FeedbackManagementPage() {
    return (
        <DashboardLayout role="moderator">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Feedback Loop</h2>
                    <p className="text-muted-foreground font-medium">Review and act on user submissions.</p>
                </motion.div>

                <div className="space-y-4">
                    {feedbackItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card className="hover:bg-primary/5 transition-colors group">
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div className="flex gap-4">
                                            <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <MessageSquare className="h-5 w-5" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold">{item.user}</span>
                                                    <span className="text-xs text-muted-foreground">• {item.date}</span>
                                                </div>
                                                <Badge variant="outline" className="uppercase font-bold tracking-wider text-[10px] mb-1">
                                                    {item.type}
                                                </Badge>
                                                <p className="text-sm font-medium leading-relaxed max-w-2xl">{item.content}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 self-end md:self-start">
                                            <Button variant="ghost" size="sm" className="h-8 text-xs font-bold uppercase tracking-wide hover:bg-green-500/10 hover:text-green-600">
                                                <ThumbsUp className="mr-2 h-3 w-3" /> Acknowledge
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 text-xs font-bold uppercase tracking-wide hover:bg-red-500/10 hover:text-red-600">
                                                <Trash2 className="mr-2 h-3 w-3" /> Dismiss
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
