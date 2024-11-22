import { NextResponse } from 'next/server'
import { ZodSchema } from 'zod'

interface APIHandlerOptions<T> {
    handler: () => Promise<T>
    schema?: ZodSchema
    cache?: boolean
    revalidate?: number
}

export async function apiHandler<T>({
    handler,
    schema,
    cache = true,
    revalidate = 3600
}: APIHandlerOptions<T>) {
    try {
        // Validate request if schema is provided
        if (schema) {
            const validated = await schema.parse(handler)
            if (!validated) {
                return NextResponse.json(
                    { error: 'Invalid request data' },
                    { status: 400 }
                )
            }
        }

        // Execute handler
        const data = await handler()

        // Return response with optional cache headers
        return NextResponse.json(data, {
            headers: cache ? {
                'Cache-Control': `public, s-maxage=${revalidate}, stale-while-revalidate`,
            } : undefined,
        })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
} 