"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const experiences = [
  {
    year: "2022 - Present",
    title: "Senior Frontend Engineer",
    company: "Tech Company Inc.",
    description: "Led frontend architecture and mentored junior developers. Improved performance by 40%.",
    achievements: ["Architecture Design", "Team Leadership", "Performance Optimization"],
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Developed responsive web applications and collaborated with design teams.",
    achievements: ["React Development", "UI Implementation", "Client Collaboration"],
  },
  {
    year: "2018 - 2020",
    title: "Junior Frontend Developer",
    company: "Startup Hub",
    description: "Built user interfaces and learned modern web development practices.",
    achievements: ["Web Development", "Learning & Growth", "Problem Solving"],
  },
  {
    year: "2017 - 2018",
    title: "Web Developer",
    company: "Freelance",
    description: "Developed websites for various clients and built personal projects.",
    achievements: ["Full Stack Development", "Client Management", "Project Delivery"],
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-card/30">
      <SectionHeader
        subtitle="My journey"
        title="Professional Experience"
        description="A timeline of my career growth and professional achievements"
      />

      <motion.div
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={fadeInUp} className="relative">
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
            )}

            <div className="flex gap-6">
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-accent font-semibold text-sm">{exp.company}</p>
                    </div>
                    <span className="text-sm text-primary font-semibold mt-2 md:mt-0">{exp.year}</span>
                  </div>
                  <p className="text-muted mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-2 py-1 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
