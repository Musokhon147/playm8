"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CalendarPlus, MapPin, Users, Calendar } from "lucide-react"

const events = [
    { id: 1, title: "Summer Tennis Open", date: "July 12-15", location: "Center Court", participants: 32, status: "Open" },
    { id: 2, title: "City Football League", date: "Aug 01 - Nov 30", location: "Main Stadium", participants: 120, status: "Planned" },
    { id: 3, title: "Weekend Badminton", date: "Every Saturday", location: "Indoor Hall", participants: 16, status: "Active" },
    { id: 4, title: "Charity Run 5K", date: "Sept 10", location: "City Park", participants: 500, status: "Draft" },
]

export default function EventsPage() {
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
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Manage Events</h2>
                        <p className="text-muted-foreground font-medium">Create and oversee tournaments and leagues.</p>
                    </div>
                    <Button className="btn-sports rounded-xl font-bold uppercase tracking-tight">
                        <CalendarPlus className="mr-2 h-4 w-4" />
                        Create Event
                    </Button>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {events.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-primary/0 hover:border-l-primary">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <Badge variant="outline" className="text-xs font-bold uppercase tracking-wider">
                                        {event.status}
                                    </Badge>
                                    <MoreActionMenu />
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-primary" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            {event.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-primary" />
                                            {event.participants} Registered
                                        </div>
                                    </div>
                                    <div className="mt-4 h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-2/3 rounded-full" />
                                    </div>
                                    <div className="mt-1 text-[10px] text-right text-muted-foreground font-bold uppercase">66% Capacity</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

function MoreActionMenu() {
    return (
        <Button variant="ghost" size="icon" className="h-8 w-8 -mr-3">
            <span className="sr-only">Open menu</span>
            <div className="flex gap-0.5">
                <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                <div className="h-1 w-1 rounded-full bg-muted-foreground" />
            </div>
        </Button>
    )
}
