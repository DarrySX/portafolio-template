"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { CardHover } from "@/components/ui/card-hover"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    image: "/ecommerce-dashboard.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    image: "/analytics-dashboard.png",
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    category: "Frontend",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Modern social platform with real-time messaging and user interactions.",
    image: "/social-media-app.jpg",
    tags: ["React", "Firebase", "WebSocket", "Material-UI"],
    category: "Full Stack",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "Collaborative task management application with real-time updates.",
    image: "/task-management-board.png",
    tags: ["Next.js", "Supabase", "Framer Motion", "Tailwind"],
    category: "Frontend",
    demo: "#",
    github: "#",
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "AI-powered content generation tool with multiple templates and customization.",
    image: "/ai-content-generator.jpg",
    tags: ["React", "OpenAI", "TypeScript", "Tailwind"],
    category: "AI/ML",
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Design System",
    description: "Comprehensive design system with reusable components and documentation.",
    image: "/design-system-abstract.png",
    tags: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
    category: "Frontend",
    demo: "#",
    github: "#",
  },
]

const categories = ["All", "Frontend", "Full Stack", "AI/ML"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <SectionWrapper id="projects" className="bg-card/30">
      <SectionHeader
        subtitle="My work"
        title="Featured Projects"
        description="A selection of projects showcasing my expertise in modern web development"
      />

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
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

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <CardHover className="group h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted text-sm mb-4 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-semibold border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <motion.a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded font-semibold text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded font-semibold text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </CardHover>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-muted text-lg">No projects found in this category.</p>
        </motion.div>
      )}
    </SectionWrapper>
  )
}
