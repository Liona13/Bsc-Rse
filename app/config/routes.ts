export const routes = {
    home: '/',
    about: '#about',
    experience: '#experience',
    projects: '#projects',
    contact: '#contact',
} as const

export const protectedRoutes = [] as const

export const publicRoutes = [
    routes.home,
] as const

export type Route = typeof routes[keyof typeof routes] 