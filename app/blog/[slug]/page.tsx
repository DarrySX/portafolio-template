"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

// Sample blog post data - in a real app, this would come from a database or MDX files
const blogPosts: Record<string, any> = {
  "building-scalable-react-applications": {
    title: "Building Scalable React Applications",
    author: "Your Name",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Architecture", "Performance"],
    image: "/blog-react-architecture.jpg",
    content: `
# Building Scalable React Applications

When building React applications that need to scale, there are several key principles to follow to ensure your codebase remains maintainable and performant.

## Component Architecture

The foundation of a scalable React application is a well-organized component structure. Consider breaking your application into:

- **Presentational Components**: Pure components that only handle rendering
- **Container Components**: Components that manage state and logic
- **Utility Components**: Reusable helper components

## State Management

As your application grows, managing state becomes increasingly complex. Consider using:

- **Context API**: For simple, global state
- **Redux**: For complex state management
- **Zustand**: For lightweight state management

## Performance Optimization

Key strategies for performance:

1. Code splitting with dynamic imports
2. Memoization with React.memo and useMemo
3. Lazy loading of components
4. Image optimization

## Best Practices

- Keep components small and focused
- Use TypeScript for type safety
- Write tests for critical functionality
- Document your component API
- Use ESLint and Prettier for code quality

By following these principles, you can build React applications that scale effectively with your team and user base.
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <main className="pt-20 min-h-screen">
        <SectionWrapper>
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-primary hover:underline">
              Back to blog
            </Link>
          </div>
        </SectionWrapper>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen">
      <SectionWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Post Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted">{post.readTime}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted mb-8 pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Post Content */}
          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="text-lg text-muted leading-relaxed whitespace-pre-wrap">{post.content}</div>
          </div>

          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border/50">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              View more articles
              <ArrowLeft size={20} className="rotate-180" />
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  )
}
