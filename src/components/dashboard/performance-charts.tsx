"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// --- Radar Chart ---
const skillData = [
    { name: "Speed", value: 85 },
    { name: "Stamina", value: 75 },
    { name: "Teamwork", value: 95 },
    { name: "Offense", value: 80 },
    { name: "Defense", value: 70 },
    { name: "Technique", value: 90 },
]

export function SkillRadar() {
    const size = 300
    const center = size / 2
    const radius = size * 0.4
    const angleStep = (Math.PI * 2) / skillData.length

    const points = skillData.map((d, i) => {
        const val = (d.value / 100) * radius
        const x = center + val * Math.cos(i * angleStep - Math.PI / 2)
        const y = center + val * Math.sin(i * angleStep - Math.PI / 2)
        return `${x},${y}`
    }).join(" ")

    const labels = skillData.map((d, i) => {
        const x = center + (radius + 25) * Math.cos(i * angleStep - Math.PI / 2)
        const y = center + (radius + 20) * Math.sin(i * angleStep - Math.PI / 2)
        return { x, y, name: d.name }
    })

    return (
        <div className="relative flex items-center justify-center p-4">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
                {/* Background Polygons */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((r) => (
                    <polygon
                        key={r}
                        points={skillData.map((_, i) => {
                            const x = center + (radius * r) * Math.cos(i * angleStep - Math.PI / 2)
                            const y = center + (radius * r) * Math.sin(i * angleStep - Math.PI / 2)
                            return `${x},${y}`
                        }).join(" ")}
                        className="fill-none stroke-primary/10 stroke-1"
                    />
                ))}
                {/* Lines */}
                {skillData.map((_, i) => (
                    <line
                        key={i}
                        x1={center}
                        y1={center}
                        x2={center + radius * Math.cos(i * angleStep - Math.PI / 2)}
                        y2={center + radius * Math.sin(i * angleStep - Math.PI / 2)}
                        className="stroke-primary/10 stroke-1"
                    />
                ))}
                {/* Skill Area */}
                <motion.polygon
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    points={points}
                    className="fill-primary/20 stroke-primary stroke-2"
                />
                {/* Labels */}
                {labels.map((l, i) => (
                    <text
                        key={i}
                        x={l.x}
                        y={l.y}
                        textAnchor="middle"
                        className="text-[10px] font-black uppercase tracking-widest fill-muted-foreground italic"
                    >
                        {l.name}
                    </text>
                ))}
            </svg>
        </div>
    )
}

// --- Activity Heatmap ---
export function ActivityMap() {
    // Fake data for 12 weeks
    const weeks = 15
    const days = 7
    const activity = Array.from({ length: weeks * days }).map(() => Math.floor(Math.random() * 5))

    return (
        <div className="space-y-4">
            <div className="flex gap-1.5 overflow-x-auto pb-2">
                {Array.from({ length: weeks }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-1.5">
                        {Array.from({ length: days }).map((_, d) => {
                            const level = activity[w * days + d]
                            return (
                                <motion.div
                                    key={d}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: (w * 0.05) }}
                                    className={cn(
                                        "size-3 rounded-[3px] transition-colors",
                                        level === 0 && "bg-accent/5",
                                        level === 1 && "bg-primary/20",
                                        level === 2 && "bg-primary/40",
                                        level === 3 && "bg-primary/70",
                                        level >= 4 && "bg-primary"
                                    )}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                <span>Less</span>
                <div className="size-2 rounded-full bg-accent/20" />
                <div className="size-2 rounded-full bg-primary/40" />
                <div className="size-2 rounded-full bg-primary/70" />
                <div className="size-2 rounded-full bg-primary" />
                <span>More</span>
            </div>
        </div>
    )
}
