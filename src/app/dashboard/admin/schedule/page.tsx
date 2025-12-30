"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar as CalendarIcon, Clock, Users, Trophy, ChevronLeft, ChevronRight, Plus, MoreVertical, Edit3, Trash2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const timeSlots = Array.from({ length: 14 }).map((_, i) => `${i + 8}:00`)
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const initialMatches = [
    { id: 1, day: "Mon", time: "10:00", sport: "Tennis", status: "booked", teams: "Nadal vs Federer" },
    { id: 2, day: "Wed", time: "18:00", sport: "Football", status: "booked", teams: "Red Devils vs Blues" },
    { id: 3, day: "Fri", time: "20:00", sport: "Basketball", status: "booked", teams: "Lakers vs Celtics" },
    { id: 4, day: "Sat", time: "14:00", sport: "Tennis", status: "pending", teams: "Open Slot" },
]

export default function AdminSchedulePage() {
    const [matches, setMatches] = React.useState(initialMatches)
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingId, setEditingId] = React.useState<number | null>(null)
    const [currentWeek, setCurrentWeek] = React.useState(0)
    const [newSlot, setNewSlot] = React.useState({
        day: "Mon",
        time: "8:00",
        sport: "Football",
        teams: "",
        status: "pending"
    })

    const getWeekDateRange = () => {
        const today = new Date()
        const firstDay = new Date(today)
        firstDay.setDate(today.getDate() - today.getDay() + 1 + (currentWeek * 7))
        const lastDay = new Date(firstDay)
        lastDay.setDate(firstDay.getDate() + 6)

        const formatDate = (date: Date) => {
            return `${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })}`
        }

        return `${formatDate(firstDay)} - ${formatDate(lastDay)}`
    }

    const handleAddSlot = () => {
        if (editingId !== null) {
            // Edit mode
            setMatches(matches.map(m => m.id === editingId ? { ...m, ...newSlot } : m))
            setEditingId(null)
        } else {
            // Create mode
            const newMatch = {
                id: matches.length + 1,
                ...newSlot
            }
            setMatches([...matches, newMatch])
        }
        setIsDialogOpen(false)
        setNewSlot({
            day: "Mon",
            time: "8:00",
            sport: "Football",
            teams: "",
            status: "pending"
        })
    }

    const handleEditSlot = (id: number) => {
        const matchToEdit = matches.find(m => m.id === id)
        if (matchToEdit) {
            setNewSlot({
                day: matchToEdit.day,
                time: matchToEdit.time,
                sport: matchToEdit.sport,
                teams: matchToEdit.teams,
                status: matchToEdit.status
            })
            setEditingId(id)
            setIsDialogOpen(true)
        }
    }

    const handleDeleteSlot = (id: number) => {
        setMatches(matches.filter(m => m.id !== id))
    }

    const handleOpenNewSlot = (day?: string, time?: string) => {
        setEditingId(null)
        setNewSlot({
            day: day || "Mon",
            time: time || "8:00",
            sport: "Football",
            teams: "",
            status: "pending"
        })
        setIsDialogOpen(true)
    }

    return (
        <DashboardLayout role="admin">
            <div className="space-y-8 pb-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black uppercase tracking-widest text-[10px]">
                                Venue Management
                            </Badge>
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter uppercase italic">
                            Weekly <span className="text-primary">Schedule</span>
                        </h1>
                        <div className="flex items-center gap-3 mt-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentWeek(currentWeek - 1)}
                                className="h-8 w-8 rounded-lg"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <p className="text-muted-foreground text-sm font-bold">{getWeekDateRange()}</p>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentWeek(currentWeek + 1)}
                                className="h-8 w-8 rounded-lg"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setCurrentWeek(0)}
                                className="text-xs font-bold uppercase"
                            >
                                Today
                            </Button>
                        </div>
                        <p className="text-muted-foreground text-sm font-medium">Manage time slots, bookings, and court availability.</p>
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => handleOpenNewSlot()} className="rounded-xl font-black uppercase italic tracking-tight shadow-lg shadow-primary/20">
                                <Plus className="mr-2 size-4" /> New Slot
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] border-primary/10">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-black uppercase italic tracking-tight">{editingId !== null ? "Edit Slot" : "Add New Slot"}</DialogTitle>
                                <DialogDescription className="text-sm font-medium">
                                    Create a new time slot for venue booking.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-6 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="day" className="text-xs font-black uppercase tracking-wider">Day</Label>
                                        <Select value={newSlot.day} onValueChange={(v) => setNewSlot({ ...newSlot, day: v })}>
                                            <SelectTrigger id="day" className="rounded-xl border-primary/20">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-primary/10">
                                                {days.map((day) => (
                                                    <SelectItem key={day} value={day} className="font-bold uppercase text-xs">{day}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="time" className="text-xs font-black uppercase tracking-wider">Time</Label>
                                        <Select value={newSlot.time} onValueChange={(v) => setNewSlot({ ...newSlot, time: v })}>
                                            <SelectTrigger id="time" className="rounded-xl border-primary/20">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-primary/10">
                                                {timeSlots.map((time) => (
                                                    <SelectItem key={time} value={time} className="font-bold text-xs">{time}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="sport" className="text-xs font-black uppercase tracking-wider">Sport</Label>
                                    <Select value={newSlot.sport} onValueChange={(v) => setNewSlot({ ...newSlot, sport: v })}>
                                        <SelectTrigger id="sport" className="rounded-xl border-primary/20">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-primary/10">
                                            <SelectItem value="Football" className="font-bold uppercase text-xs">⚽ Football</SelectItem>
                                            <SelectItem value="Basketball" className="font-bold uppercase text-xs">🏀 Basketball</SelectItem>
                                            <SelectItem value="Tennis" className="font-bold uppercase text-xs">🎾 Tennis</SelectItem>
                                            <SelectItem value="Volleyball" className="font-bold uppercase text-xs">🏐 Volleyball</SelectItem>
                                            <SelectItem value="Badminton" className="font-bold uppercase text-xs">🏸 Badminton</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teams" className="text-xs font-black uppercase tracking-wider">Teams / Description</Label>
                                    <Input
                                        id="teams"
                                        placeholder="e.g., Team A vs Team B or Open Slot"
                                        value={newSlot.teams}
                                        onChange={(e) => setNewSlot({ ...newSlot, teams: e.target.value })}
                                        className="rounded-xl border-primary/20 font-bold"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 justify-end">
                                <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded-xl font-bold uppercase tracking-tight">
                                    Cancel
                                </Button>
                                <Button onClick={handleAddSlot} className="rounded-xl font-black uppercase italic tracking-tight">
                                    <Plus className="mr-2 size-4" /> {editingId !== null ? "Save Changes" : "Add Slot"}
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Schedule Grid */}
                <Card className="border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden overflow-x-auto">
                    <div className="min-w-[800px]">
                        {/* Grid Header */}
                        <div className="grid grid-cols-8 border-b border-primary/5">
                            <div className="p-4 border-r border-primary/5 bg-muted/30" />
                            {days.map((day) => (
                                <div key={day} className="p-4 text-center border-r last:border-0 border-primary/5">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{day}</span>
                                </div>
                            ))}
                        </div>

                        {/* Grid Body */}
                        <div className="relative">
                            {timeSlots.map((time) => (
                                <div key={time} className="grid grid-cols-8 border-b border-primary/5 last:border-0 group">
                                    {/* Time Label */}
                                    <div className="p-4 border-r border-primary/5 bg-muted/10 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-muted-foreground italic">{time}</span>
                                    </div>

                                    {/* Day Slots */}
                                    {days.map((day) => {
                                        const match = matches.find(m => m.day === day && m.time === time)
                                        return (
                                            <div key={day} className="relative h-24 border-r last:border-0 border-primary/5 p-1 group/slot">
                                                {match ? (
                                                    <motion.div
                                                        layoutId={`match-${match.id}`}
                                                        initial={{ scale: 0.9, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        className={cn(
                                                            "h-full w-full rounded-lg p-2 text-left flex flex-col justify-between border transition-all cursor-pointer relative overflow-hidden group/card",
                                                            match.status === "booked"
                                                                ? "bg-primary/10 border-primary/20 text-primary"
                                                                : "bg-amber-500/10 border-amber-500/20 text-amber-600"
                                                        )}
                                                    >
                                                        <div className="flex items-start justify-between">
                                                            <div className="text-[9px] font-black uppercase tracking-tighter leading-none">{match.sport}</div>
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger asChild>
                                                                    <Button variant="ghost" size="icon" className="size-5 -mt-1 -mr-1">
                                                                        <MoreVertical className="size-3" />
                                                                    </Button>
                                                                </DropdownMenuTrigger>
                                                                <DropdownMenuContent align="end" className="rounded-xl border-primary/10 font-bold uppercase tracking-tight text-[10px]">
                                                                    <DropdownMenuItem onClick={() => handleEditSlot(match.id)} className="cursor-pointer gap-2">
                                                                        <Edit3 className="size-3" /> Edit
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem onClick={() => handleDeleteSlot(match.id)} className="cursor-pointer gap-2 text-destructive focus:text-destructive">
                                                                        <Trash2 className="size-3" /> Cancel
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        </div>
                                                        <div className="font-black italic text-[10px] leading-tight line-clamp-2 uppercase">
                                                            {match.teams}
                                                        </div>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <CheckCircle2 className="size-3 opacity-50" />
                                                            <span className="text-[8px] font-bold uppercase tracking-widest opacity-50">{match.status}</span>
                                                        </div>

                                                        {/* Hover Overlay */}
                                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                                    </motion.div>
                                                ) : (
                                                    <button onClick={() => handleOpenNewSlot(day, time)} className="h-full w-full rounded-lg border border-dashed border-primary/5 hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center justify-center group/btn">
                                                        <Plus className="size-4 text-primary/20 group-hover/btn:text-primary transition-colors group-hover/btn:scale-125 duration-500" />
                                                    </button>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { label: "Booked Slots", val: "24", icon: CheckCircle2, color: "text-primary" },
                        { label: "Pending", val: "8", icon: Clock, color: "text-amber-500" },
                        { label: "Revenue", val: "$1,240", icon: Trophy, color: "text-emerald-500" },
                        { label: "Occupancy", val: "68%", icon: Users, color: "text-blue-500" },
                    ].map((stat, i) => (
                        <Card key={i} className="border-primary/5 bg-card/30 backdrop-blur-sm shadow-sm overflow-hidden">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className={cn("p-3 rounded-xl bg-primary/5", stat.color)}>
                                    <stat.icon className="size-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                                    <div className="text-xl font-black italic tracking-tighter">{stat.val}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
