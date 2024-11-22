'use client'

import { BlogPost } from '@/types/blog'
import Link from 'next/link'

interface RelatedPostsProps {
  currentPostSlug: string
  currentPostTags: string[]
  posts: BlogPost[]
}

export function RelatedPosts({ currentPostSlug, currentPostTags, posts }: RelatedPostsProps) {
  const relatedPosts = posts
    .filter((post: BlogPost) => post.slug !== currentPostSlug)
    .filter((post: BlogPost) => post.tags.some((tag: string) => currentPostTags.includes(tag)))
    .slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-6">Related Posts</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post: BlogPost, index: number) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block"
          >
            {/* Post card content */}
            <div className="p-4 rounded-lg glassmorphic hover:scale-[1.02] transition-all">
              <h4 className="font-bold mb-2">{post.title}</h4>
              <p className="text-sm text-white/70">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 