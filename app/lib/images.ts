import { StaticImageData } from 'next/image'

export const testimonialImages = {
    sarah: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0D8ABC&color=fff&size=200',
    michael: 'https://ui-avatars.com/api/?name=Michael+Chen&background=0D8ABC&color=fff&size=200',
    emily: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=0D8ABC&color=fff&size=200'
}

export const defaultImages = {
    avatar: 'https://ui-avatars.com/api/?name=Default+User&background=0D8ABC&color=fff&size=200',
    testimonial: 'https://ui-avatars.com/api/?name=Anonymous&background=0D8ABC&color=fff&size=200'
}

export function getTestimonialImage(name: string): string {
    return testimonialImages[name.toLowerCase() as keyof typeof testimonialImages] || defaultImages.testimonial
} 