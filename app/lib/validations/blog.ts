import { z } from 'zod'

export const postSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(500),
    content: z.string().min(1),
    slug: z.string().min(1),
    date: z.string().datetime(),
    author: z.object({
        name: z.string(),
        avatar: z.string().url().optional(),
        role: z.string().optional(),
    }),
    tags: z.array(z.string()),
    image: z.string().url().optional(),
    featured: z.boolean().optional(),
})

export const searchParamsSchema = z.object({
    query: z.string().min(1).max(100),
    tags: z.array(z.string()).optional(),
    page: z.number().min(1).optional(),
    limit: z.number().min(1).max(50).optional(),
})

export type Post = z.infer<typeof postSchema>
export type SearchParams = z.infer<typeof searchParamsSchema> 