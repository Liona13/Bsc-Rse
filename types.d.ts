import { ReactNode } from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: any;
            span: any;
            p: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            button: any;
            img: any;
            canvas: any;
            html: any;
            body: any;
            main: any;
        }
    }
}

// Add ScrollAnimation type
interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

// Add ErrorInfo type
interface ErrorInfo {
    componentStack: string;
}

// Add motion types
declare module 'framer-motion' {
    export interface MotionProps {
        initial?: any;
        animate?: any;
        exit?: any;
        transition?: any;
        whileHover?: any;
        whileTap?: any;
        whileInView?: any;
        viewport?: any;
    }
} 