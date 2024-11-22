import { ReactNode } from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
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