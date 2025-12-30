"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { motion } from "framer-motion"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-primary/10 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/20 transition-colors">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-2xl border-primary/10 bg-background/80 backdrop-blur-xl">
                <DropdownMenuItem onClick={() => setTheme("light")} className="font-bold uppercase tracking-tight focus:bg-primary/10 focus:text-primary rounded-xl cursor-pointer">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="font-bold uppercase tracking-tight focus:bg-primary/10 focus:text-primary rounded-xl cursor-pointer">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="font-bold uppercase tracking-tight focus:bg-primary/10 focus:text-primary rounded-xl cursor-pointer">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
