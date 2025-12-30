"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Wallet, Apple, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PaymentSheetProps {
    children: React.ReactNode
    venueName: string
    price: string
}

export function PaymentSheet({ children, venueName, price }: PaymentSheetProps) {
    const [isProcessing, setIsProcessing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [open, setOpen] = useState(false)

    const handlePayment = () => {
        setIsProcessing(true)
        setTimeout(() => {
            setIsProcessing(false)
            setIsSuccess(true)
            setTimeout(() => {
                setOpen(false)
                setIsSuccess(false)
            }, 2000)
        }, 1500)
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <AnimatePresence mode="wait">
                    {!isSuccess ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <SheetHeader className="mb-6">
                                <SheetTitle className="text-2xl font-black uppercase tracking-tighter">Checkout</SheetTitle>
                                <SheetDescription>
                                    Completing reservation for <span className="font-bold text-primary">{venueName}</span>
                                </SheetDescription>
                            </SheetHeader>

                            <div className="flex-1 space-y-6">
                                {/* Order Summary */}
                                <div className="rounded-xl border bg-muted/30 p-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Rate</span>
                                        <span className="font-mono">{price}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Duration</span>
                                        <span className="font-mono">1 hr</span>
                                    </div>
                                    <div className="h-px bg-border" />
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>{price}</span>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div className="space-y-4">
                                    <Label className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Payment Method</Label>
                                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                                        <div>
                                            <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                            <Label
                                                htmlFor="card"
                                                className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                                            >
                                                <CreditCard className="mb-2 h-6 w-6" />
                                                Card
                                            </Label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                                            <Label
                                                htmlFor="apple"
                                                className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                                            >
                                                <Apple className="mb-2 h-6 w-6" />
                                                Pay
                                            </Label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value="wallet" id="wallet" className="peer sr-only" />
                                            <Label
                                                htmlFor="wallet"
                                                className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                                            >
                                                <Wallet className="mb-2 h-6 w-6" />
                                                Cash
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {/* Card Details */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Cardholder Name</Label>
                                        <Input id="name" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="number">Card Number</Label>
                                        <Input id="number" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="expiry">Expiry</Label>
                                            <Input id="expiry" placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cvc">CVC</Label>
                                            <Input id="cvc" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SheetFooter className="mt-8">
                                <Button
                                    className="w-full h-12 text-lg font-bold uppercase tracking-widest btn-sports rounded-xl"
                                    onClick={handlePayment}
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? "Processing..." : "Pay & Book"}
                                </Button>
                            </SheetFooter>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center space-y-4"
                        >
                            <div className="h-20 w-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                                <CheckCircle2 className="h-10 w-10" />
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight">Booking Confirmed!</h2>
                            <p className="text-muted-foreground">Your court is reserved. Get ready to play.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </SheetContent>
        </Sheet>
    )
}
