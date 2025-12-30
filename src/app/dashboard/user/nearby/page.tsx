"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Search, Filter, Crosshair, Users, Trophy, Star, Activity, Plus, Navigation, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { DashboardLayout } from "@/components/layout/DashboardLayout"

const locations = [
    { id: 1, x: 35, y: 45, type: "venue", name: "Elite Arena", activity: "High", sport: "Football", distance: 1.2 },
    { id: 2, x: 65, y: 30, type: "lobby", name: "3v3 Basketball", activity: "Joining", sport: "Basketball", distance: 3.5 },
    { id: 3, x: 50, y: 70, type: "player", name: "Alex J.", activity: "Online", sport: "Tennis", distance: 2.1 },
    { id: 4, x: 20, y: 25, type: "venue", name: "Padel Club", activity: "Medium", sport: "Padel", distance: 4.8 },
    { id: 5, x: 80, y: 60, type: "lobby", name: "Evening FC", activity: "Full", sport: "Football", distance: 1.9 },
    { id: 6, x: 45, y: 35, type: "player", name: "Sarah M.", activity: "Online", sport: "Basketball", distance: 6.2 },
    { id: 7, x: 70, y: 50, type: "venue", name: "Tennis Court", activity: "Medium", sport: "Tennis", distance: 8.5 },
]

export default function NearbyMapPage() {
    const [selected, setSelected] = React.useState<typeof locations[0] | null>(null)
    const [sportFilter, setSportFilter] = React.useState("all")
    const [radiusFilter, setRadiusFilter] = React.useState([10])

    const filteredLocations = locations.filter(loc => {
        const matchesSport = sportFilter === "all" || loc.sport === sportFilter
        const matchesRadius = loc.distance <= radiusFilter[0]
        return matchesSport && matchesRadius
    })

    return (
        <DashboardLayout role="user">
            <div className="h-[calc(100vh-140px)] flex flex-col gap-6">
                {/* Header / Search */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black tracking-tighter uppercase italic">
                            PlayM8s <span className="text-primary">Nearby</span>
                        </h1>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <Activity className="size-3 text-emerald-500 animate-pulse" />
                            Live: {filteredLocations.length} Results within {radiusFilter[0]}km
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm p-1 rounded-2xl border border-primary/10 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input
                                placeholder="Find a court or player..."
                                className="bg-transparent border-none h-10 pl-10 focus-visible:ring-0 font-bold uppercase tracking-tight text-xs"
                            />
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button size="icon" variant="ghost" className="rounded-xl">
                                    <Filter className="size-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 rounded-2xl border-primary/10 p-6">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-wider">Sport</label>
                                        <Select value={sportFilter} onValueChange={setSportFilter}>
                                            <SelectTrigger className="rounded-xl border-primary/20">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-primary/10">
                                                <SelectItem value="all" className="font-bold uppercase text-xs">All Sports</SelectItem>
                                                <SelectItem value="Football" className="font-bold uppercase text-xs">⚽ Football</SelectItem>
                                                <SelectItem value="Basketball" className="font-bold uppercase text-xs">🏀 Basketball</SelectItem>
                                                <SelectItem value="Tennis" className="font-bold uppercase text-xs">🎾 Tennis</SelectItem>
                                                <SelectItem value="Padel" className="font-bold uppercase text-xs">🏸 Padel</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-black uppercase tracking-wider">Radius</label>
                                            <Badge variant="outline" className="font-black">{radiusFilter[0]}km</Badge>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                {[1, 5, 10, 25, 50].map((km) => (
                                                    <Button
                                                        key={km}
                                                        size="sm"
                                                        variant={radiusFilter[0] === km ? "default" : "outline"}
                                                        onClick={() => setRadiusFilter([km])}
                                                        className="flex-1 rounded-lg text-xs font-bold"
                                                    >
                                                        {km}km
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button
                            onClick={() => alert("Expanding to full map view...")}
                            className="rounded-xl h-10 px-6 font-black uppercase italic tracking-tight bg-primary shadow-lg shadow-primary/20"
                        >
                            Map Hub
                        </Button>
                    </div>
                </div>

                <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
                    {/* Map Area */}
                    <div className="flex-1 relative rounded-3xl bg-accent/5 border border-primary/10 overflow-hidden group shadow-inner">
                        {/* Mock Map Grid/Radar */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
                        </div>

                        {/* Radar Scanning Line */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(var(--primary-rgb),0.1)_10deg,transparent_11deg)] pointer-events-none origin-center"
                        />

                        {/* Map Pins */}
                        <div className="absolute inset-0">
                            {filteredLocations.map((loc) => (
                                <motion.button
                                    key={loc.id}
                                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.2, zIndex: 50 }}
                                    onClick={() => setSelected(loc)}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 group/pin"
                                >
                                    <div className="relative">
                                        <div className={cn(
                                            "size-10 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all border-4 border-background",
                                            loc.type === "venue" && "bg-primary shadow-primary/40",
                                            loc.type === "lobby" && "bg-emerald-500 shadow-emerald-500/40",
                                            loc.type === "player" && "bg-amber-500 shadow-amber-500/40"
                                        )}>
                                            {loc.type === "venue" && <MapPin className="size-5" />}
                                            {loc.type === "lobby" && <Users className="size-5" />}
                                            {loc.type === "player" && <Star className="size-5" />}
                                        </div>

                                        {/* Pulse Effect */}
                                        <motion.div
                                            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className={cn(
                                                "absolute inset-0 rounded-2xl -z-10",
                                                loc.type === "venue" && "bg-primary",
                                                loc.type === "lobby" && "bg-emerald-500",
                                                loc.type === "player" && "bg-amber-500"
                                            )}
                                        />

                                        {/* Label (Visible on Hover) */}
                                        <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-primary/10 shadow-lg opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none scale-90 group-hover/pin:scale-100">
                                            <div className="text-[10px] font-black uppercase tracking-tight">{loc.name}</div>
                                            <div className="text-[8px] font-bold text-muted-foreground">{loc.sport}</div>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Controls Overlay */}
                        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                            <Button size="icon" className="size-12 rounded-2xl bg-card border border-primary/10 shadow-xl hover:bg-primary hover:text-white transition-all text-primary">
                                <Crosshair className="size-6" />
                            </Button>
                            <Button size="icon" className="size-12 rounded-2xl bg-card border border-primary/10 shadow-xl hover:bg-primary hover:text-white transition-all text-primary">
                                <Navigation className="size-6" />
                            </Button>
                        </div>

                        {/* Info Card (If selected) */}
                        <AnimatePresence>
                            {selected && (
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80"
                                >
                                    <Card className="border-primary/20 bg-card/90 backdrop-blur-xl shadow-2xl p-6 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 bg-primary h-full" />
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <Badge className="bg-primary/10 text-primary mb-2 text-[8px] font-black uppercase tracking-widest">{selected.type}</Badge>
                                                    <h3 className="text-xl font-black uppercase italic tracking-tight">{selected.name}</h3>
                                                    <p className="text-xs font-bold text-muted-foreground italic flex items-center gap-1">
                                                        <Zap className="size-3 text-primary" /> {selected.sport}
                                                    </p>
                                                </div>
                                                <Button size="icon" variant="ghost" onClick={() => setSelected(null)} className="size-8 rounded-lg">✕</Button>
                                            </div>
                                            <div className="flex items-center gap-4 py-3 border-y border-primary/5">
                                                <div className="text-center flex-1">
                                                    <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Status</div>
                                                    <div className="text-xs font-bold text-emerald-500 uppercase italic">{selected.activity}</div>
                                                </div>
                                                <div className="text-center flex-1 border-l border-primary/5">
                                                    <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Distance</div>
                                                    <div className="text-xs font-bold uppercase italic">1.2 km</div>
                                                </div>
                                            </div>
                                            <Button className="w-full rounded-xl font-black uppercase italic tracking-tight h-10 group/btn">
                                                Connect <Plus className="ml-2 size-4 group-hover/btn:rotate-90 transition-transform" />
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sidebar Feed */}
                    <div className="w-full md:w-80 flex flex-col gap-4">
                        <Card className="flex-1 bg-card/30 backdrop-blur-sm border-primary/10 flex flex-col overflow-hidden">
                            <div className="p-4 border-b border-primary/5 flex items-center justify-between">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground italic">Live Feed</h2>
                                <Sparkles className="size-3 text-primary animate-pulse" />
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {[
                                    { user: "Player_Zero", action: "joined a lobby", time: "2m ago", icon: Users },
                                    { user: "City Arena", action: "new slots opened", time: "5m ago", icon: MapPin },
                                    { user: "Team Titan", action: "won the tournament", time: "12m ago", icon: Trophy },
                                    { user: "Sarah M.", action: "looking for a M8", time: "15m ago", icon: Star },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-accent/5 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10 group cursor-pointer"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                            <item.icon className="size-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[10px] font-black uppercase italic leading-none truncate">{item.user}</div>
                                            <div className="text-[9px] font-medium text-muted-foreground mt-1">{item.action}</div>
                                            <div className="text-[8px] font-bold text-primary/50 mt-1 uppercase tracking-widest">{item.time}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="p-4 bg-primary/5 border-t border-primary/5">
                                <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-widest hover:text-primary">View All Activity</Button>
                            </div>
                        </Card>

                        <Card className="bg-gradient-to-br from-primary/20 to-card border-none overflow-hidden relative group cursor-pointer p-6">
                            <div className="relative z-10 space-y-2">
                                <div className="text-xs font-black uppercase italic tracking-tight">Expand Search?</div>
                                <p className="text-[10px] font-medium text-muted-foreground leading-relaxed italic">Your current radius is <span className="text-primary font-black">5km</span>. Pro members can search up to 50km.</p>
                                <Button size="sm" className="bg-white text-black hover:bg-black hover:text-white rounded-lg text-[9px] font-black uppercase tracking-widest transition-all">Go Pro</Button>
                            </div>
                            <Activity className="absolute bottom-[-10px] right-[-10px] size-20 text-primary/10 group-hover:scale-125 transition-transform group-hover:rotate-12" />
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
