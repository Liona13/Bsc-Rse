import { apiHandler } from '@/lib/api/handler'
import { searchPosts } from '@/lib/blog'
import { searchParamsSchema } from '@/lib/validations/blog'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''

    return apiHandler({
        schema: searchParamsSchema,
        handler: async () => {
            const posts = await searchPosts(query)
            return posts
        },
        cache: true,
        revalidate: 300 // Cache for 5 minutes
    })
} 