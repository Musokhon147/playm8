"use client"

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PaymentSheet } from "@/components/dashboard/PaymentSheet"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarPlus, MapPin, Users, Wifi, Car, ShowerHead, Search, Filter } from "lucide-react"
import { useState } from "react"

const venues = [
    { id: 1, name: "Center Court", sport: "Tennis", capacity: "2 Players", price: "$20/hr", status: "Available", amenities: ["Wifi", "Parking"], location: { top: "40%", left: "30%" } },
    { id: 2, name: "Main Pitch", sport: "Football", capacity: "14 Players", price: "$120/hr", status: "Booked", amenities: ["Showers", "Parking"], location: { top: "20%", left: "60%" } },
    { id: 3, name: "Indoor Hall A", sport: "Badminton", capacity: "4 Players", price: "$15/hr", status: "Available", amenities: ["Wifi", "Showers"], location: { top: "60%", left: "40%" } },
    { id: 4, name: "Olympic Pool", sport: "Swimming", capacity: "8 Lanes", price: "$10/hr", status: "Available", amenities: ["Showers", "Lockers"], location: { top: "70%", left: "70%" } },
    { id: 5, name: "Clay Court 1", sport: "Tennis", capacity: "2 Players", price: "$25/hr", status: "Maintenance", amenities: ["Parking"], location: { top: "35%", left: "25%" } },
    { id: 6, name: "Futsal Arena", sport: "Futsal", capacity: "10 Players", price: "$80/hr", status: "Available", amenities: ["Wifi", "Showers"], location: { top: "50%", left: "55%" } },
]

export default function BookMatchesPage() {
    const [search, setSearch] = useState("")
    const [sportFilter, setSportFilter] = useState("all")
    const [hoveredVenueId, setHoveredVenueId] = useState<number | null>(null)

    const filteredVenues = venues.filter(venue => {
        const matchesSearch = venue.name.toLowerCase().includes(search.toLowerCase())
        const matchesSport = sportFilter === "all" || venue.sport === sportFilter
        return matchesSearch && matchesSport
    })

    return (
        <DashboardLayout role="user">
            <div className="flex flex-col h-[calc(100vh-100px)] overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="shrink-0 space-y-4 mb-4"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-1">Book a Match</h2>
                            <p className="text-muted-foreground font-medium">Find premium courts near you.</p>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 bg-card/50 p-4 rounded-2xl border">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search venues..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-9 rounded-xl bg-background"
                            />
                        </div>
                        <Select value={sportFilter} onValueChange={setSportFilter}>
                            <SelectTrigger className="w-[180px] rounded-xl bg-background">
                                <SelectValue placeholder="Filter by Sport" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Sports</SelectItem>
                                <SelectItem value="Tennis">Tennis</SelectItem>
                                <SelectItem value="Football">Football</SelectItem>
                                <SelectItem value="Badminton">Badminton</SelectItem>
                                <SelectItem value="Swimming">Swimming</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon" className="rounded-xl">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
                    {/* Venue List */}
                    <ScrollArea className="h-full pr-4">
                        <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-2 pb-6">
                            <AnimatePresence>
                                {filteredVenues.map((venue, idx) => (
                                    <motion.div
                                        key={venue.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                                        onMouseEnter={() => setHoveredVenueId(venue.id)}
                                        onMouseLeave={() => setHoveredVenueId(null)}
                                        className={`transition-all duration-300 ${hoveredVenueId === venue.id ? "scale-[1.02]" : ""}`}
                                    >
                                        <Card className={`overflow-hidden border-none shadow-md bg-card/50 hover:shadow-xl group h-full flex flex-col ${hoveredVenueId === venue.id ? "ring-2 ring-primary" : ""}`}>
                                            <div className="h-32 bg-primary/5 relative flex items-center justify-center p-6 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                                                {/* Background pattern */}
                                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                                                <h3 className="text-3xl font-black text-primary/20 uppercase italic tracking-widest rotate-[-5deg] select-none z-10 transition-transform group-hover:scale-110 duration-500">
                                                    {venue.sport}
                                                </h3>
                                                <Badge
                                                    className={`absolute top-3 right-3 uppercase tracking-wider font-bold z-20 ${venue.status === "Available" ? "bg-green-500/20 text-green-600" :
                                                            venue.status === "Booked" ? "bg-red-500/20 text-red-600" : "bg-yellow-500/20 text-yellow-600"
                                                        }`}
                                                >
                                                    {venue.status}
                                                </Badge>
                                            </div>
                                            <CardHeader>
                                                <CardTitle className="text-lg font-bold uppercase tracking-tight flex items-center justify-between">
                                                    {venue.name}
                                                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                                                        {venue.price}
                                                    </span>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex-1 space-y-3 pb-2">
                                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="h-4 w-4 text-primary" />
                                                        <span>Sports Complex B</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Users className="h-4 w-4 text-primary" />
                                                        <span>{venue.capacity}</span>
                                                    </div>
                                                </div>
                                                {/* Amenities */}
                                                <div className="flex gap-2">
                                                    {venue.amenities.map(amenity => (
                                                        <div key={amenity} className="flex items-center gap-1 text-[10px] uppercase font-bold text-muted-foreground bg-accent/50 px-2 py-1 rounded-full">
                                                            {amenity === "Wifi" && <Wifi className="h-3 w-3" />}
                                                            {amenity === "Parking" && <Car className="h-3 w-3" />}
                                                            {amenity === "Showers" && <ShowerHead className="h-3 w-3" />}
                                                            {amenity}
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="pt-2">
                                                {venue.status === "Available" ? (
                                                    <PaymentSheet venueName={venue.name} price={venue.price}>
                                                        <Button className="w-full btn-sports font-bold uppercase tracking-widest rounded-xl transition-all hover:brightness-110">
                                                            <CalendarPlus className="mr-2 h-4 w-4" />
                                                            Book Now
                                                        </Button>
                                                    </PaymentSheet>
                                                ) : (
                                                    <Button
                                                        disabled
                                                        className="w-full opacity-50 font-bold uppercase tracking-widest rounded-xl"
                                                    >
                                                        {venue.status}
                                                    </Button>
                                                )}
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </ScrollArea>

                    {/* Interactive Map */}
                    <div className="hidden lg:block relative h-full rounded-3xl overflow-hidden bg-accent/20 border border-border/50 shadow-inner group/map">
                        {/* Mock Map Background */}
                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-74.006,40.7128,13,0/800x600?access_token=pk.mock')] opacity-20 bg-center bg-cover grayscale transition-opacity duration-500 group-hover/map:opacity-30" />
                        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

                        {/* Map Pins */}
                        {venues.map((venue) => (
                            <motion.div
                                key={`pin-${venue.id}`}
                                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                                style={{ top: venue.location.top, left: venue.location.left }}
                                animate={{
                                    scale: hoveredVenueId === venue.id ? 1.5 : 1,
                                    zIndex: hoveredVenueId === venue.id ? 50 : 10
                                }}
                                onClick={() => setHoveredVenueId(venue.id)}
                            >
                                <div className={`relative flex items-center justify-center h-8 w-8 rounded-full shadow-lg border-2 border-white transition-colors duration-300 ${hoveredVenueId === venue.id ? "bg-primary text-primary-foreground box-shadow-glow" :
                                        venue.status === "Available" ? "bg-primary/80" : "bg-muted-foreground"
                                    }`}>
                                    <MapPin className="h-4 w-4 text-white" />
                                </div>
                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredVenueId === venue.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background text-foreground rounded-lg shadow-xl text-xs font-bold uppercase tracking-wide whitespace-nowrap border"
                                        >
                                            {venue.name} <span className="text-primary ml-1">{venue.price}</span>
                                            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-background rotate-45 border-b border-r" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}

                        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-muted-foreground shadow-sm flex items-center gap-2">
                            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Available</div>
                            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Booked</div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
