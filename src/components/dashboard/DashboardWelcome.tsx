"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CalendarPlus, Users, Search } from "lucide-react"

export function DashboardWelcome() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-8"
        >
            <div className="space-y-1">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                    Welcome back, <span className="text-primary">Alex</span>
                </h2>
                <p className="text-muted-foreground font-medium">
                    Ready to dominate the arena today?
                </p>
            </div>
            <div className="flex gap-3">
                <Button className="btn-sports rounded-xl font-bold uppercase tracking-tight shadow-lg shadow-primary/20">
                    <CalendarPlus className="mr-2 h-4 w-4" />
                    Book Match
                </Button>
                <Button variant="outline" className="rounded-xl font-bold uppercase tracking-tight border-primary/20 hover:bg-primary/5 hover:border-primary/50">
                    <Search className="mr-2 h-4 w-4" />
                    Find Players
                </Button>
            </div>
        </motion.div>
    )
}
