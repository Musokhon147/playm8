"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Trophy, ArrowRight, Search, Calendar, Play, ChevronRight, Star, Quote, ChevronUp, Activity, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/30 scroll-smooth">
      <header
        className={`px-4 lg:px-6 flex items-center border-b border-primary/10 sticky top-0 transition-all duration-500 z-50 ${isScrolled
          ? "h-16 bg-background/80 backdrop-blur-2xl shadow-lg shadow-primary/5"
          : "h-24 bg-background/0"
          }`}
      >
        <Link className="flex items-center justify-center gap-3 group shrink-0" href="/">
          <motion.div
            initial={{ rotate: -20, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.15 }}
            transition={{
              rotate: { duration: 0.5, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 300, damping: 15 }
            }}
            className="p-1.5 sm:p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.div>
          <motion.span
            whileHover={{ scale: 1.05, x: 5 }}
            className="font-black text-xl sm:text-2xl tracking-tighter uppercase italic text-foreground group-hover:text-primary transition-colors cursor-pointer"
          >
            Play<span className="text-primary italic">M8</span>Sports
          </motion.span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <ModeToggle />
          <motion.div
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 px-1" href="/login">
              Login
            </Link>
          </motion.div>
          <div className="hidden sm:block">
            <Button
              className="btn-sports rounded-full px-6 font-bold uppercase tracking-tight shadow-lg shadow-primary/25 hover:shadow-primary/40 text-foreground transition-all border-none"
              size="lg"
              asChild
            >
              <motion.a
                href="/register"
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-primary/10 bg-background/95 backdrop-blur-xl">
              <SheetHeader className="mb-12">
                <SheetTitle className="text-left font-black text-2xl tracking-tighter uppercase italic">
                  Play<span className="text-primary">M8</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-8">
                <Link href="/login" className="text-2xl font-black uppercase tracking-tighter italic hover:text-primary transition-colors">Login</Link>
                <Link href="/register" className="text-2xl font-black uppercase tracking-tighter italic hover:text-primary transition-colors">Register</Link>
                <Link href="#" className="text-2xl font-black uppercase tracking-tighter italic hover:text-primary transition-colors">Features</Link>
                <Link href="#" className="text-2xl font-black uppercase tracking-tighter italic hover:text-primary transition-colors">Community</Link>
                <Link href="#" className="text-2xl font-black uppercase tracking-tighter italic hover:text-primary transition-colors">FAQ</Link>
              </div>
              <div className="mt-auto pt-12">
                <Button className="w-full btn-sports h-16 rounded-2xl text-xl font-black uppercase tracking-tighter italic" asChild>
                  <Link href="/register">Join Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-36 lg:py-56 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div
              className="flex flex-col items-center space-y-10 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="inline-block rounded-full px-4 py-1.5 text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-4 uppercase tracking-[0.3em] animate-pulse">
                  Next Gen Sports Platform
                </div>
                <h1 className="text-4xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl max-w-5xl mx-auto leading-[0.85] uppercase italic text-foreground">
                  DOMINATE THE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-primary/40 inline-block">
                    ARENA
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-80">
                  The ultimate hub for athletes. Book pro venues, track elite stats, and rise through the ranks.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-8 mt-16">
                <Button
                  size="lg"
                  className="btn-sports btn-animate-icon rounded-full px-8 sm:px-14 h-16 sm:h-20 text-lg sm:text-xl font-black uppercase tracking-tight group relative overflow-hidden"
                  asChild
                >
                  <motion.a
                    href="/register"
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                  >
                    <span className="relative z-10 flex items-center">
                      Join the League <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-7 sm:w-7" />
                    </span>
                  </motion.a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-sports rounded-full px-8 sm:px-14 h-16 sm:h-20 text-lg sm:text-xl font-black uppercase tracking-tight border-2 hover:bg-primary/5 hover:border-primary/50"
                  asChild
                >
                  <motion.a
                    href="/login"
                    whileTap={{ scale: 0.95 }}
                  >
                    Platform Access
                  </motion.a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Find. Book. Play. Section with Slide from Right */}
        <section className="w-full py-32 bg-background border-y border-primary/5 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="text-center space-y-6 mb-24"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-100px" }}
            >
              <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter italic leading-none">Find. Book. Play.</h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-medium opacity-70">Experience the simplest way to get back onto the field.</p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-3 gap-16 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
            >
              {[
                { icon: Search, title: "Find", desc: "Find your nearest football pitch with a quick scroll.", color: "bg-blue-500/10 text-blue-500" },
                { icon: Calendar, title: "Book", desc: "Book your next game, with a few clicks.", color: "bg-primary/10 text-primary" },
                { icon: Play, title: "Play", desc: "Play your best game. Have fun. Feel good.", color: "bg-emerald-500/10 text-emerald-500" }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="space-y-8 group relative"
                >
                  <div className={`relative aspect-square max-w-[180px] sm:max-w-[240px] mx-auto flex items-center justify-center rounded-3xl ${step.color} group-hover:scale-105 transition-transform duration-700 shadow-2xl shadow-current/5`}>
                    <step.icon className="w-12 h-12 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:rotate-12" />
                    <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-foreground text-background flex items-center justify-center font-black italic shadow-xl">{idx + 1}</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase italic tracking-tight group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg font-medium opacity-80">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Three Pillars Section with Staggered Entrance */}
        <section className="w-full py-32 bg-accent/5 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.h2
              className="text-4xl sm:text-8xl font-black uppercase tracking-tighter italic text-center mb-16 sm:mb-24 max-w-6xl mx-auto leading-[0.85]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
            >
              Our ethos is built around <span className="text-primary/40">three pillars</span>
            </motion.h2>

            <motion.div
              className="flex w-full h-3 mb-24 rounded-full overflow-hidden bg-muted/40 shadow-inner"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              viewport={{ amount: 0.5 }}
            >
              <div className="w-1/3 h-full bg-blue-300/40" />
              <div className="w-1/3 h-full bg-red-500/80" />
              <div className="w-1/3 h-full bg-blue-800" />
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-3 gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
            >
              {[
                { title: "Accessibility", icon: Globe, desc: "Goals are what we live for. Our biggest goal is that wherever you are, you'll be a click of a button away from playing a football match." },
                { title: "Social Integration", icon: Users, desc: "We believe the beautiful game should go beyond the pitch and help enrich our diverse communities. We are proud to help facilitate the social integration for thousands of people." },
                { title: "Wellbeing", icon: Activity, desc: "To us it's so much more. It's about connecting with people. Boosting self-confidence. A form of escapism. You'll quickly find yourself feeling stronger physically and mentally." }
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="space-y-6 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-background border border-primary/5 shadow-2xl shadow-primary/5 hover:border-primary/20 hover:shadow-primary/10 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <pillar.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter italic">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-medium opacity-80">{pillar.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Community Reviews Section with Slide-In */}
        <section className="w-full py-32 bg-background relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="text-center space-y-6 mb-24"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
            >
              <div className="text-red-500 font-black uppercase tracking-[0.4em] text-sm">Community Voice</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">Trusted by Thousands</h2>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-3 gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
            >
              {[
                { name: "Mac", location: "Manchester", quote: "I love playing football, so being able to pick and choose when to play is the best thing ever. If I could give 10 stars, I would.", avatar: "M" },
                { name: "Zinedine", location: "Birmingham", quote: "Without Footy Addicts, I would've been depressed after moving to a new city and not playing football for a while as well as not having a group to play with.", avatar: "Z" },
                { name: "Gemma", location: "London", quote: "I have actually turned into a bit of a Footy Addict, trying to get 3 or 4 games in per week.", avatar: "G" }
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative p-10 pt-16 rounded-[3.5rem] bg-accent/5 border border-primary/5 flex flex-col justify-between hover:bg-accent/10 transition-colors duration-500 group"
                >
                  <div className="absolute -top-8 left-14 w-16 h-16 bg-red-500 rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-3 group-hover:rotate-6 transition-transform">
                    <Quote className="w-8 h-8 rotate-180 fill-current" />
                  </div>
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-1 text-yellow-500/80">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="italic text-muted-foreground text-xl leading-relaxed font-medium">"{review.quote}"</p>
                  </div>
                  <div className="flex items-center gap-5 mt-auto border-t border-primary/10 pt-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center font-black text-primary text-xl shadow-lg">{review.avatar}</div>
                    <div>
                      <div className="font-black text-lg uppercase tracking-tighter">{review.name}</div>
                      <div className="text-xs text-muted-foreground font-black uppercase tracking-[0.2em]">{review.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-32 bg-background border-t border-primary/5 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <motion.div
                className="space-y-10 lg:sticky lg:top-40"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
              >
                <h2 className="text-4xl sm:text-8xl font-black uppercase tracking-tighter italic leading-[0.85]">
                  Got <span className="text-primary">Questions?</span> <br />
                  We Hear You.
                </h2>
                <p className="text-muted-foreground text-lg sm:text-xl font-medium leading-relaxed max-w-md opacity-70">
                  Everything you need to know about the platform, booking, and community.
                </p>
                <div className="flex flex-col space-y-4">
                  <Link href="#" className="inline-flex items-center text-primary font-black uppercase tracking-widest text-sm group transition-all">
                    Full FAQ Knowledge Base <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Button
                    variant="outline"
                    className="btn-sports rounded-full w-fit px-8 h-14 font-black uppercase tracking-tight border-2"
                    asChild
                  >
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Support
                    </motion.button>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <Accordion type="single" collapsible className="w-full space-y-6">
                  {[
                    { q: "How does PlayM8Sports work?", a: "Find games near you, book your slot instantly, and turn up to play. We handle the pitch booking and team organization." },
                    { q: "How can I join a game?", a: "Simply browse the available matches on your dashboard, select one that fits your schedule, and click 'Book Slot'." },
                    { q: "Can anybody create a new game?", a: "Yes! If you're a registered user, you can organize your own public or private matches and invite others to join." },
                    { q: "What's the 'Scout' program?", a: "The Scout program allows experienced players to earn rewards by hosting matches and verifying the skill levels of new players." }
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border rounded-[2.5rem] px-8 bg-accent/5 overflow-hidden transition-all hover:bg-accent/10 border-primary/5 hover:border-primary/20 group">
                      <AccordionTrigger className="text-2xl font-black uppercase tracking-tighter italic py-8 hover:no-underline group-data-[state=open]:text-primary transition-colors text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-medium text-xl pb-10 leading-relaxed opacity-80">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 w-full border-t border-primary/10 bg-background/50 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-black text-3xl tracking-tighter uppercase italic">
              Play<span className="text-primary">M8</span>Sports
            </span>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-xs max-w-[250px]">© 2025 PlayM8Sports Elite. UI Concept.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-12 pb-16 md:pb-0">
            <Link className="text-sm font-black uppercase tracking-[0.3em] hover:text-primary transition-colors" href="#">Legal</Link>
            <Link className="text-sm font-black uppercase tracking-[0.3em] hover:text-primary transition-colors" href="#">Privacy</Link>
            <Link className="text-sm font-black uppercase tracking-[0.3em] hover:text-primary transition-colors" href="#">Contact</Link>
          </nav>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[60]"
          >
            <Button
              size="icon"
              onClick={scrollToTop}
              className="w-16 h-16 rounded-full shadow-2xl shadow-primary/40 transition-transform"
            >
              <ChevronUp className="w-8 h-8" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
