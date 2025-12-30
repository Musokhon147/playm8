"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Send, Star } from "lucide-react"

export default function FeedbackPage() {
    return (
        <DashboardLayout role="user">
            <div className="max-w-2xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Give Feedback</h2>
                    <p className="text-muted-foreground font-medium">Help us improve the PlayM8 experience or rate a recent match.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <Card className="border-none shadow-lg bg-card/50">
                        <CardHeader>
                            <CardTitle className="uppercase tracking-wide font-bold">Feedback Form</CardTitle>
                            <CardDescription>All feedback is reviewed by our moderation team.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="type">Feedback Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="match">Match / Opponent Rating</SelectItem>
                                        <SelectItem value="venue">Venue Quality</SelectItem>
                                        <SelectItem value="bug">Report a Bug</SelectItem>
                                        <SelectItem value="feature">Feature Request</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject / Match ID</Label>
                                <Input id="subject" placeholder="e.g. Match vs The Titans or Bug in Profile" />
                            </div>

                            <div className="space-y-2">
                                <Label>Rating</Label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Button
                                            key={star}
                                            variant="outline"
                                            size="icon"
                                            className="h-10 w-10 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
                                        >
                                            <Star className="h-5 w-5" />
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Comments</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Please describe your experience in detail..."
                                    className="min-h-[150px]"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full btn-sports font-bold uppercase tracking-widest rounded-xl">
                                <Send className="mr-2 h-4 w-4" />
                                Submit Feedback
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </DashboardLayout>
    )
}
