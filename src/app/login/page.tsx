"use client"

import Link from "next/link"
import { Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export default function LoginPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-muted/40 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="border-none shadow-lg">
                    <CardHeader className="space-y-1 items-center">
                        <motion.div
                            className="flex aspect-square size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-4"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Trophy className="size-6" />
                        </motion.div>
                        <CardTitle className="text-3xl font-bold tracking-tight">Welcome Back</CardTitle>
                        <CardDescription>
                            Enter your credentials to access the platform
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-medium text-primary hover:underline hover:underline-offset-4"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button className="w-full h-11" size="lg">
                            Login
                        </Button>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Or continue as</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-10 transition-transform active:scale-95" asChild>
                                <Link href="/dashboard/superadmin">SuperAdmin</Link>
                            </Button>
                            <Button variant="outline" className="h-10 transition-transform active:scale-95" asChild>
                                <Link href="/dashboard/user">User</Link>
                            </Button>
                            <Button variant="outline" className="h-10 transition-transform active:scale-95" asChild>
                                <Link href="/dashboard/admin">Admin</Link>
                            </Button>
                            <Button variant="outline" className="h-10 transition-transform active:scale-95" asChild>
                                <Link href="/dashboard/moderator">Moderator</Link>
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="font-medium text-primary hover:underline">
                            Register
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}
