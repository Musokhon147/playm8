"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { NotificationCenter } from "@/components/dashboard/NotificationCenter"

interface HeaderProps {
    roleName: string
}

export function Header({ roleName }: HeaderProps) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-background sticky top-0 z-10">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <h1 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {roleName} Dashboard
                </h1>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <NotificationCenter />
            </div>
        </header>
    )
}
