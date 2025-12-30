"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Trophy, MessageSquare, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const notifications = [
    { id: 1, title: "Match Confirmed", desc: "You vs The Titans is set for tomorrow.", icon: Calendar, time: "2m ago", unread: true },
    { id: 2, title: "New Feedback", desc: "Coach Dave replied to your report.", icon: MessageSquare, time: "1h ago", unread: true },
    { id: 3, title: "Tournament Update", desc: "Summer Tennis Open brackets live!", icon: Trophy, time: "3h ago", unread: false },
]

export function NotificationCenter() {
    const [notifications, setNotifications] = useState([
        { id: 1, title: "Match Confirmed", desc: "You vs The Titans is set for tomorrow.", icon: Calendar, time: "2m ago", unread: true },
        { id: 2, title: "New Feedback", desc: "Coach Dave replied to your report.", icon: MessageSquare, time: "1h ago", unread: true },
        { id: 3, title: "Tournament Update", desc: "Summer Tennis Open brackets live!", icon: Trophy, time: "3h ago", unread: false },
    ])
    const [read, setRead] = useState<number[]>([])
    const unreadCount = notifications.filter(n => !read.includes(n.id) && n.unread).length

    const handleMarkAsRead = (id: number) => {
        if (!read.includes(id)) setRead([...read, id])
    }

    const handleClearAll = () => {
        setNotifications([])
        setRead([])
    }

    const handleMarkAllAsRead = () => {
        setRead(notifications.map(n => n.id))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                    <Bell className="h-4 w-4" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background animate-pulse" />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-bold leading-none uppercase tracking-wide">Notifications</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                You have {unreadCount} unread messages
                            </p>
                        </div>
                        {unreadCount > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleMarkAllAsRead}
                                className="h-7 text-[9px] font-black uppercase tracking-widest"
                            >
                                Mark All Read
                            </Button>
                        )}
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-y-auto">
                    {notifications.length === 0 ? (
                        <div className="p-4 text-center text-sm text-muted-foreground">
                            No new notifications
                        </div>
                    ) : (
                        notifications.map((notification) => (
                            <DropdownMenuItem
                                key={notification.id}
                                className="cursor-pointer flex flex-col items-start gap-1 p-3 focus:bg-primary/5"
                                onSelect={() => handleMarkAsRead(notification.id)}
                            >
                                <div className="flex w-full justify-between items-start gap-2">
                                    <div className="flex gap-3">
                                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <notification.icon className="h-4 w-4" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-bold leading-none">{notification.title}</p>
                                                {!read.includes(notification.id) && notification.unread && (
                                                    <Badge className="h-1.5 w-1.5 rounded-full p-0 bg-blue-500 border-none" />
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground line-clamp-2">
                                                {notification.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                        {notification.time}
                                    </span>
                                </div>
                            </DropdownMenuItem>
                        ))
                    )}
                </div>
                {notifications.length > 0 && (
                    <>
                        <DropdownMenuSeparator />
                        <div className="flex gap-2 p-2">
                            <DropdownMenuItem
                                onClick={handleClearAll}
                                className="flex-1 text-center cursor-pointer justify-center text-xs font-bold uppercase tracking-widest text-destructive focus:text-destructive"
                            >
                                Clear All
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex-1 text-center cursor-pointer justify-center text-xs font-bold uppercase tracking-widest text-primary focus:text-primary">
                                View All
                            </DropdownMenuItem>
                        </div>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
