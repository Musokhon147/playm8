"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Building2, MoreHorizontal, CheckCircle2, XCircle } from "lucide-react"

const orgs = [
    { id: 1, name: "Elite Sports Club", type: "Tennis", admins: 3, location: "New York", status: "Active" },
    { id: 2, name: "City Football League", type: "Football", admins: 5, location: "London", status: "Active" },
    { id: 3, name: "Downtown Gym", type: "Multi-sport", admins: 2, location: "Chicago", status: "Inactive" },
    { id: 4, name: "Suburban Polo Club", type: "Polo", admins: 1, location: "Hamptons", status: "Pending" },
    { id: 5, name: "Valley Cricket Assoc", type: "Cricket", admins: 4, location: "Mumbai", status: "Active" },
]

export default function OrganizationsPage() {
    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Organizations</h2>
                        <p className="text-muted-foreground font-medium">Manage and monitor all sports organizations on the platform.</p>
                    </div>
                    <Button className="btn-sports rounded-xl font-bold uppercase tracking-tight">
                        <Building2 className="mr-2 h-4 w-4" />
                        Add Organization
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Card className="border-none shadow-md bg-card/50 overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold uppercase tracking-wide">Registered Entities</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent border-primary/10">
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Name</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Type</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs">Location</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs text-center">Admins</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs text-center">Status</TableHead>
                                        <TableHead className="font-bold uppercase tracking-wider text-xs text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {orgs.map((org) => (
                                        <TableRow key={org.id} className="hover:bg-primary/5 transition-colors border-primary/5">
                                            <TableCell className="font-bold">{org.name}</TableCell>
                                            <TableCell className="font-medium text-xs text-muted-foreground">{org.type}</TableCell>
                                            <TableCell>{org.location}</TableCell>
                                            <TableCell className="text-center">{org.admins}</TableCell>
                                            <TableCell className="text-center">
                                                <Badge
                                                    variant={org.status === "Active" ? "default" : org.status === "Inactive" ? "secondary" : "outline"}
                                                    className={`w-20 justify-center uppercase font-bold text-[10px] ${org.status === "Pending" ? "text-yellow-600 border-yellow-500/50" : ""}`}
                                                >
                                                    {org.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </DashboardLayout>
    )
}
