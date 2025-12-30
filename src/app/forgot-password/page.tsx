"use client"

import Link from "next/link"
import { Trophy, ArrowLeft } from "lucide-react"
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

export default function ForgotPasswordPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-muted/40 px-4">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="border-none shadow-lg">
                    <CardHeader className="space-y-1 items-center">
                        <motion.div
                            className="flex aspect-square size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-4"
                            animate={{ rotateY: [0, 180, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <Trophy className="size-6" />
                        </motion.div>
                        <CardTitle className="text-3xl font-bold tracking-tight">Reset Password</CardTitle>
                        <CardDescription>
                            Enter your email to receive a reset link
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@example.com" required />
                        </div>
                        <Button className="w-full h-11" size="lg">
                            Send Reset Link
                        </Button>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground">
                        <Link href="/login" className="flex items-center font-medium text-primary hover:underline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Login
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}
