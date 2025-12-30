"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Save, Camera, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
    return (
        <DashboardLayout role="user">
            <div className="max-w-3xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-2">
                        <Button asChild variant="ghost" size="icon">
                            <Link href="/dashboard/user/profile">
                                <ArrowLeft className="h-4 w-4" />
                            </Link>
                        </Button>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Edit Profile</h2>
                    </div>
                    <p className="text-muted-foreground font-medium pl-12">Update your personal information and athlete settings.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Card className="border-none shadow-lg bg-card/50">
                        <CardHeader>
                            <CardTitle>Public Information</CardTitle>
                            <CardDescription>This will be displayed on your profile.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Avatar Section */}
                            <div className="flex flex-col items-center space-y-4 pb-6 border-b border-border/50">
                                <div className="relative group cursor-pointer">
                                    <Avatar className="h-32 w-32 border-4 border-primary/20">
                                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                                        <AvatarFallback>AJ</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                                <Button variant="outline" size="sm" className="font-bold uppercase tracking-wide">
                                    Change Avatar
                                </Button>
                            </div>

                            {/* Form Fields */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="Alex" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Johnson" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="AlexJ_Sports" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    defaultValue="Passionate about Tennis and Football. Always looking for a challenge!"
                                    className="min-h-[100px]"
                                />
                                <p className="text-[10px] text-muted-foreground text-right">0/150 characters</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="sports">Favorite Sports</Label>
                                <Input id="sports" defaultValue="Tennis, Football, Swimming" placeholder="Separate with commas..." />
                            </div>
                        </CardContent>
                        <CardFooter className="justify-end border-t bg-muted/20 p-6">
                            <Button className="btn-sports rounded-xl font-bold uppercase tracking-widest">
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </DashboardLayout>
    )
}
