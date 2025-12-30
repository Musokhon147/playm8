"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Users, Calendar, ArrowRight, ArrowLeft, Check, Search, PlusCircle, Sparkles, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const sports = [
    { id: "football", name: "Football", icon: "⚽", color: "bg-emerald-500" },
    { id: "basketball", name: "Basketball", icon: "🏀", color: "bg-orange-500" },
    { id: "tennis", name: "Tennis", icon: "🎾", color: "bg-yellow-500" },
    { id: "padel", name: "Padel", icon: "🏸", color: "bg-blue-500" },
    { id: "volleyball", name: "Volleyball", icon: "🏐", color: "bg-amber-500" },
]

const skillLevels = [
    { id: "beginner", name: "Beginner", description: "Just for fun, learning the basics" },
    { id: "intermediate", name: "Intermediate", description: "Know the rules, competitive spirit" },
    { id: "advanced", name: "Advanced", description: "Experienced players, high intensity" },
]

import { DashboardLayout } from "@/components/layout/DashboardLayout"

export default function MatchmakingPage() {
    const [step, setStep] = React.useState(1)
    const [formData, setFormData] = React.useState({
        sport: "",
        type: "create", // create | search
        skill: "intermediate",
        playersNeeded: "2",
        time: "today_evening",
        location: "Anywhere",
    })

    const nextStep = () => setStep((s) => Math.min(s + 1, 4))
    const prevStep = () => setStep((s) => Math.max(s - 1, 1))

    return (
        <DashboardLayout role="user">
            <div className="max-w-4xl mx-auto space-y-8 pb-12">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black uppercase tracking-widest text-[10px]">
                            Smart Matching
                        </Badge>
                    </div>
                    <h1 className="text-4xl font-black tracking-tighter uppercase italic">
                        Find Your <span className="text-primary">M8</span>
                    </h1>
                    <p className="text-muted-foreground text-sm font-medium">Use our wizard to find the perfect match or create your own lobby.</p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-2 px-2">
                    {[1, 2, 3, 4].map((i) => (
                        <React.Fragment key={i}>
                            <div className={cn(
                                "size-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500",
                                step >= i ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground"
                            )}>
                                {step > i ? <Check className="size-4" /> : i}
                            </div>
                            {i < 4 && (
                                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                        initial={false}
                                        animate={{ width: step > i ? "100%" : "0%" }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Wizard Steps */}
                <Card className="relative overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm min-h-[400px] flex flex-col p-8">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6 flex-1"
                            >
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-black uppercase italic">Pick Your Sport</h2>
                                    <p className="text-muted-foreground text-sm">Select the game you want to play today.</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                    {sports.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => {
                                                setFormData({ ...formData, sport: s.id })
                                                nextStep()
                                            }}
                                            className={cn(
                                                "group flex flex-col items-center gap-4 p-6 rounded-2xl border-2 transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95",
                                                formData.sport === s.id
                                                    ? "border-primary bg-primary/5 text-primary"
                                                    : "border-transparent bg-accent/10"
                                            )}
                                        >
                                            <span className="text-4xl group-hover:scale-125 transition-transform">{s.icon}</span>
                                            <span className="font-bold uppercase tracking-tight text-xs">{s.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6 flex-1"
                            >
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-black uppercase italic">I want to...</h2>
                                    <p className="text-muted-foreground text-sm">Do you want to join someone else or lead a new game?</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => {
                                            setFormData({ ...formData, type: "search" })
                                            nextStep()
                                        }}
                                        className={cn(
                                            "flex flex-col items-start gap-4 p-8 rounded-3xl border-2 transition-all p-8 text-left group",
                                            formData.type === "search" ? "border-primary bg-primary/5 shadow-xl shadow-primary/5" : "border-transparent bg-accent/10 hover:border-primary/20"
                                        )}
                                    >
                                        <div className="p-4 rounded-2xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                                            <Search className="size-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold uppercase italic tracking-tight">Join a Lobby</h3>
                                            <p className="text-muted-foreground text-sm mt-1">Browse existing games looking for players like you.</p>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setFormData({ ...formData, type: "create" })
                                            nextStep()
                                        }}
                                        className={cn(
                                            "flex flex-col items-start gap-4 p-8 rounded-3xl border-2 transition-all p-8 text-left group",
                                            formData.type === "create" ? "border-primary bg-primary/5 shadow-xl shadow-primary/5" : "border-transparent bg-accent/10 hover:border-primary/20"
                                        )}
                                    >
                                        <div className="p-4 rounded-2xl bg-emerald-500/20 text-emerald-500 group-hover:scale-110 transition-transform">
                                            <PlusCircle className="size-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold uppercase italic tracking-tight">Create a Game</h3>
                                            <p className="text-muted-foreground text-sm mt-1">Start a new lobby and invite others to join your session.</p>
                                        </div>
                                    </button>
                                </div>
                                <Button variant="ghost" onClick={prevStep} className="font-bold uppercase tracking-tight text-xs">
                                    <ArrowLeft className="mr-2 size-4" /> Go Back
                                </Button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 flex-1"
                            >
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-black uppercase italic">The Details</h2>
                                    <p className="text-muted-foreground text-sm">Fine-tune your matching preferences.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Desired Skill Level</label>
                                        <div className="space-y-2">
                                            {skillLevels.map((level) => (
                                                <button
                                                    key={level.id}
                                                    onClick={() => setFormData({ ...formData, skill: level.id })}
                                                    className={cn(
                                                        "w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left group",
                                                        formData.skill === level.id
                                                            ? "border-primary bg-primary/5"
                                                            : "border-transparent hover:border-primary/10"
                                                    )}
                                                >
                                                    <div>
                                                        <div className="font-bold uppercase text-sm tracking-tight">{level.name}</div>
                                                        <div className="text-[10px] text-muted-foreground">{level.description}</div>
                                                    </div>
                                                    {formData.skill === level.id && <div className="size-2 rounded-full bg-primary" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Players Needed</label>
                                            <div className="flex gap-2">
                                                {["1", "2", "3", "4+"].map((n) => (
                                                    <Button
                                                        key={n}
                                                        type="button"
                                                        variant={formData.playersNeeded === n ? "default" : "outline"}
                                                        onClick={() => setFormData({ ...formData, playersNeeded: n })}
                                                        className="flex-1 rounded-xl h-12 font-bold"
                                                    >
                                                        {n}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Preferred Time</label>
                                            <Select value={formData.time} onValueChange={(v) => setFormData({ ...formData, time: v })}>
                                                <SelectTrigger className="rounded-xl h-12 border-primary/20 font-bold uppercase tracking-tight text-xs">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-primary/10 font-bold uppercase tracking-tight text-xs">
                                                    <SelectItem value="today_morning">Morning (06:00 - 12:00)</SelectItem>
                                                    <SelectItem value="today_afternoon">Afternoon (12:00 - 17:00)</SelectItem>
                                                    <SelectItem value="today_evening">Evening (17:00 - 22:00)</SelectItem>
                                                    <SelectItem value="flexible">Flexible</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4">
                                    <Button variant="ghost" onClick={prevStep} className="font-bold uppercase tracking-tight text-xs">
                                        <ArrowLeft className="mr-2 size-4" /> Back
                                    </Button>
                                    <Button onClick={nextStep} className="rounded-xl px-12 font-bold uppercase italic tracking-tight group">
                                        Continue <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                            >
                                <div className="relative">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                        className="size-24 rounded-full bg-emerald-500 flex items-center justify-center text-white"
                                    >
                                        <Check className="size-12 stroke-[3]" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 rounded-full bg-emerald-500/20"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-3xl font-black uppercase italic tracking-tighter">Setting the Stage!</h2>
                                    <p className="text-muted-foreground max-w-md mx-auto">
                                        We're crunching the coordinates to find your perfect {formData.sport} {formData.type === "create" ? "lobby" : "matches"}.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 w-full max-w-md bg-accent/10 p-4 rounded-3xl border border-primary/10">
                                    <div className="text-center">
                                        <div className="text-[10px] uppercase font-black text-muted-foreground">Sport</div>
                                        <div className="font-bold text-sm uppercase italic text-primary">{formData.sport}</div>
                                    </div>
                                    <div className="text-center border-x border-primary/5">
                                        <div className="text-[10px] uppercase font-black text-muted-foreground">Players</div>
                                        <div className="font-bold text-sm uppercase italic text-primary">{formData.playersNeeded}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[10px] uppercase font-black text-muted-foreground">Skill</div>
                                        <div className="font-bold text-sm uppercase italic text-primary">{formData.skill}</div>
                                    </div>
                                </div>

                                <div className="flex gap-4 w-full max-w-md">
                                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1 rounded-xl font-bold uppercase tracking-tight text-xs h-12">
                                        Start Over
                                    </Button>
                                    <Button className="flex-1 rounded-xl font-bold uppercase italic tracking-tight h-12">
                                        View Lobbies
                                    </Button>
                                </div>

                                <div className="flex items-center gap-2 text-primary">
                                    <Sparkles className="size-4 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Finding matches near you...</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Card>

                {/* Quick Tips */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Fair Play", desc: "Honest skill level leads to better games.", icon: Trophy },
                        { title: "Be Punctual", desc: "Arrive 10m before the match starts.", icon: Clock },
                        { title: "Nearby First", desc: "We prioritize matches within 5km.", icon: MapPin },
                    ].map((tip, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="flex items-start gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10"
                        >
                            <tip.icon className="size-5 text-primary shrink-0" />
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-tight">{tip.title}</h4>
                                <p className="text-[10px] text-muted-foreground leading-relaxed">{tip.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
