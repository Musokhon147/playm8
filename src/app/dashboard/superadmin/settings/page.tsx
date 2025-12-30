"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { motion } from "framer-motion"
import { Save } from "lucide-react"

export default function SettingsPage() {
    return (
        <DashboardLayout role="superadmin">
            <div className="max-w-4xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Platform Settings</h2>
                    <p className="text-muted-foreground font-medium">Configure global platform parameters and defaults.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Card className="border-none shadow-lg bg-card/50">
                        <CardHeader>
                            <CardTitle>General Configuration</CardTitle>
                            <CardDescription>Manage global settings for PlayM8Sports interactions.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Platform Name</Label>
                                    <Input defaultValue="PlayM8Sports" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Support Email</Label>
                                    <Input defaultValue="support@playm8.com" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Security & Access</h3>
                                <div className="flex items-center justify-between p-4 rounded-xl border bg-background/50">
                                    <div className="space-y-0.5">
                                        <div className="font-bold">Public Registration</div>
                                        <div className="text-sm text-muted-foreground">Allow new organizations to register directly.</div>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-xl border bg-background/50">
                                    <div className="space-y-0.5">
                                        <div className="font-bold">Maintenance Mode</div>
                                        <div className="text-sm text-muted-foreground">Disable platform access for non-admins.</div>
                                    </div>
                                    <Switch />
                                </div>
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
