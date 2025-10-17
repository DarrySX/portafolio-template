"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { CardHover } from "@/components/ui/card-hover"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
    excerpt:
      "Learn best practices for structuring large React applications with proper component architecture and state management.",
    content:
      "# Building Scalable React Applications\n\nWhen building React applications that need to scale, there are several key principles to follow...",
    author: "Your Name",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Architecture", "Performance"],
    image: "/blog-react-architecture.jpg",
  },
  {
    id: 2,
    title: "Next.js 15: What's New and Exciting",
    slug: "nextjs-15-whats-new",
    excerpt:
      "Explore the latest features and improvements in Next.js 15, including enhanced performance and new developer tools.",
    content: "# Next.js 15: What's New and Exciting\n\nNext.js 15 brings significant improvements to the framework...",
    author: "Your Name",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Next.js",
    tags: ["Next.js", "Web Development", "JavaScript"],
    image: "/blog-nextjs-features.jpg",
  },
  {
    id: 3,
    title: "TypeScript Tips and Tricks",
    slug: "typescript-tips-and-tricks",
    excerpt: "Master advanced TypeScript patterns and techniques to write more robust and maintainable code.",
    content: "# TypeScript Tips and Tricks\n\nTypeScript is a powerful tool for building scalable applications...",
    author: "Your Name",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    image: "/blog-typescript-advanced.jpg",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Each",
    slug: "css-grid-vs-flexbox",
    excerpt:
      "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
    content: "# CSS Grid vs Flexbox: When to Use Each\n\nBoth CSS Grid and Flexbox are powerful layout tools...",
    author: "Your Name",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Web Design"],
    image: "/blog-css-layouts.jpg",
  },
  {
    id: 5,
    title: "Web Performance Optimization Strategies",
    slug: "web-performance-optimization",
    excerpt:
      "Discover practical strategies to optimize your web applications for better performance and user experience.",
    content: "# Web Performance Optimization Strategies\n\nPerformance is crucial for user experience...",
    author: "Your Name",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Development"],
    image: "/blog-performance-metrics.jpg",
  },
  {
    id: 6,
    title: "Getting Started with Tailwind CSS",
    slug: "getting-started-tailwind",
    excerpt: "A beginner-friendly guide to getting started with Tailwind CSS and building beautiful UIs quickly.",
    content: "# Getting Started with Tailwind CSS\n\nTailwind CSS is a utility-first CSS framework...",
    author: "Your Name",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "UI Design"],
    image: "/blog-tailwind-intro.jpg",
  },
]

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = activeCategory === "All" || post.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <main className="pt-20">
      <SectionWrapper className="bg-gradient-to-b from-card/50 to-background">
        <SectionHeader
          subtitle="Insights & Knowledge"
          title="Blog"
          description="Articles about web development, React, TypeScript, and modern web technologies"
        />

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card/50 text-foreground placeholder-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-card border border-border text-muted hover:border-primary/50 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Blog Posts Grid */}
      <SectionWrapper>
        {filteredPosts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Link href={`/blog/${post.slug}`}>
                  <CardHover className="group h-full flex flex-col overflow-hidden cursor-pointer">
                    {/* Post Image */}
                    <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Post Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted">{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted text-sm mb-4 flex-1 line-clamp-2">{post.excerpt}</p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </CardHover>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-muted text-lg">No articles found matching your search.</p>
          </motion.div>
        )}
      </SectionWrapper>
    </main>
  )
}
