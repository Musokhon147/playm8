"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StatCardProps {
    title: string
    value: string | number
    description: string
    icon: ReactNode
}

export function StatCard({ title, value, description, icon }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ margin: "-50px" }}
        >
            <Card className="overflow-hidden border-none shadow-md bg-card/50 hover:bg-primary/5 transition-all group duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">{title}</CardTitle>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        {icon}
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-black italic tracking-tighter">{value}</div>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
