import { Variants } from "framer-motion"

export const transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
}

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1],
    },
  },
}

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1],
    },
  },
}

export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" } 
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1, ease: "easeInOut" } 
  },
}

export const pressOnTap: Variants = {
  tap: { scale: 0.95 },
}

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
}

// Micro-interaction specifics
export const buttonGlow: Variants = {
  initial: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
}

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1], // Custom layout-friendly cubic-bezier
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
}
