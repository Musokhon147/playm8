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

export default function RegisterPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-muted/40 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md"
            >
                <Card className="border-none shadow-lg">
                    <CardHeader className="space-y-1 items-center">
                        <motion.div
                            className="flex aspect-square size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-4"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Trophy className="size-6" />
                        </motion.div>
                        <CardTitle className="text-3xl font-bold tracking-tight">Create Account</CardTitle>
                        <CardDescription>
                            Join the PlayM8Sports community today
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" type="password" required />
                        </div>
                        <Button className="w-full h-11" size="lg">
                            Register
                        </Button>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-primary hover:underline">
                            Login
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}
