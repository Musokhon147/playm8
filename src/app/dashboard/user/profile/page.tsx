"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy, Medal, Star, Target, Zap, Share2, Edit, Camera, Activity, BarChart3, CalendarDays, ArrowRight } from "lucide-react"
import { SkillRadar, ActivityMap } from "@/components/dashboard/performance-charts"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
    const [profileData, setProfileData] = useState({
        name: "Alex Johnson",
        location: "London, UK",
        bio: "Professional athlete and sports enthusiast"
    })
    const [isEditOpen, setIsEditOpen] = useState(false)

    const handleSaveProfile = () => {
        setIsEditOpen(false)
        alert("Profile updated successfully!")
    }

    const handleShareProfile = () => {
        navigator.clipboard.writeText(window.location.href)
        alert("Profile link copied to clipboard!")
    }
    return (
        <DashboardLayout role="user">
            <div className="max-w-4xl mx-auto space-y-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black uppercase tracking-widest text-[10px]">
                            Verified Athlete
                        </Badge>
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">Athlete <span className="text-primary">DNA</span></h2>
                    <p className="text-muted-foreground font-medium text-sm">Visualize your performance metrics and activity history.</p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-12">
                    {/* LEFT COLUMN: Identity */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="md:col-span-4"
                    >
                        <Card className="h-full border-primary/10 shadow-xl bg-card/30 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-32 bg-primary/10" />
                            <CardContent className="pt-12 flex flex-col items-center text-center relative z-10 p-6">
                                <div className="relative group cursor-pointer shadow-2xl rounded-full">
                                    <Avatar className="h-32 w-32 border-4 border-background ring-2 ring-primary/20">
                                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                                        <AvatarFallback>AJ</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight italic">Alex Johnson</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Pro Member</span>
                                    <div className="size-1 rounded-full bg-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">London, UK</span>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                                    <Badge variant="secondary" className="font-bold border-primary/10 uppercase tracking-wider text-[9px] bg-primary/5">Tennis</Badge>
                                    <Badge variant="secondary" className="font-bold border-primary/10 uppercase tracking-wider text-[9px] bg-primary/5">Football</Badge>
                                </div>

                                <div className="mt-8 w-full space-y-4 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                            <span>Overall Rating</span>
                                            <span className="text-primary italic">88.5</span>
                                        </div>
                                        <Progress value={88} className="h-1.5" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                            <span>Win rate</span>
                                            <span className="text-emerald-500 italic">72%</span>
                                        </div>
                                        <Progress value={72} className="h-1.5 bg-emerald-500/10 fill-emerald-500" />
                                    </div>
                                </div>

                                <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                                    <DialogTrigger asChild>
                                        <Button className="mt-8 w-full btn-sports font-black uppercase tracking-widest rounded-xl italic h-12 shadow-lg shadow-primary/20">
                                            <Edit className="mr-2 h-4 w-4" /> Edit Profile
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[500px]">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">Edit Profile</DialogTitle>
                                            <DialogDescription>
                                                Update your athlete profile information.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="edit-name" className="font-bold">Name</Label>
                                                <Input
                                                    id="edit-name"
                                                    value={profileData.name}
                                                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="edit-location" className="font-bold">Location</Label>
                                                <Input
                                                    id="edit-location"
                                                    value={profileData.location}
                                                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="edit-bio" className="font-bold">Bio</Label>
                                                <Input
                                                    id="edit-bio"
                                                    value={profileData.bio}
                                                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit" onClick={handleSaveProfile} className="w-full btn-sports font-bold uppercase">
                                                Save Changes
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                <Button
                                    onClick={handleShareProfile}
                                    variant="outline"
                                    className="mt-3 w-full font-black uppercase tracking-widest rounded-xl h-10"
                                >
                                    <Share2 className="mr-2 h-4 w-4" /> Share Profile
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* RIGHT COLUMN: Analytics */}
                    <div className="md:col-span-8 space-y-6">
                        {/* Radar & Trophies */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <Card className="border-primary/5 bg-card/30 backdrop-blur-sm shadow-md overflow-hidden">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                                            <Activity className="h-4 w-4 text-primary" />
                                            Skill Matrix
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-center">
                                        <SkillRadar />
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="space-y-6"
                            >
                                <Card className="border-primary/5 bg-card/30 backdrop-blur-sm shadow-md overflow-hidden h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                                            <Medal className="h-4 w-4 text-emerald-500" />
                                            Trophy Case
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                { name: "MVP", icon: Star, color: "text-yellow-500", bg: "bg-yellow-500/10" },
                                                { name: "Deadeye", icon: Target, color: "text-red-500", bg: "bg-red-500/10" },
                                                { name: "Bolt", icon: Zap, color: "text-blue-500", bg: "bg-blue-500/10" },
                                                { name: "Elite", icon: Trophy, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                                            ].map((badge, idx) => (
                                                <div key={idx} className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 ${badge.bg} border border-white/5 hover:scale-105 transition-all cursor-default p-4 group`}>
                                                    <badge.icon className={`h-8 w-8 ${badge.color} group-hover:scale-110 transition-transform`} />
                                                    <span className="text-[10px] font-black uppercase tracking-tight text-center">{badge.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Activity Heatmap */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Card className="border-primary/10 bg-card/30 backdrop-blur-sm shadow-md overflow-hidden">
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                                        <CalendarDays className="h-4 w-4 text-primary" />
                                        Activity History
                                    </CardTitle>
                                    <div className="flex gap-4">
                                        <div className="text-center">
                                            <div className="text-lg font-black italic tracking-tighter">48</div>
                                            <div className="text-[8px] font-black uppercase text-muted-foreground">Active Days</div>
                                        </div>
                                        <div className="text-center border-l border-primary/10 pl-4">
                                            <div className="text-lg font-black italic tracking-tighter text-primary">+12%</div>
                                            <div className="text-[8px] font-black uppercase text-muted-foreground">vs Last Mo.</div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-2">
                                    <ActivityMap />
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Recent Performance summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Card className="border-primary/10 bg-primary/5 shadow-md overflow-hidden group">
                                <Link href="#" className="p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                            <BarChart3 className="size-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black uppercase italic tracking-tight">Full Analytics Report</h3>
                                            <p className="text-xs text-muted-foreground font-medium">Deep dive into your last 30 matches and season trends.</p>
                                        </div>
                                    </div>
                                    <Button size="icon" variant="ghost" className="rounded-full group-hover:translate-x-1 transition-transform">
                                        <ArrowRight className="size-5" />
                                    </Button>
                                </Link>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
