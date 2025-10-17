"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { CardHover } from "@/components/ui/card-hover"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    icon: "⚙️",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Vercel", "GitHub Actions", "AWS"],
    icon: "🛠️",
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Leadership", "Communication", "Mentoring", "Agile"],
    icon: "💡",
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        subtitle="What I can do"
        title="Skills & Expertise"
        description="A comprehensive set of technical and soft skills developed over years of professional experience"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={fadeInUp}>
            <CardHover className="h-full flex flex-col">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-3 flex-1">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                    <span className="text-muted text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardHover>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 pt-12 border-t border-border/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { skill: "React & TypeScript", level: 95 },
            { skill: "Next.js & Full Stack", level: 90 },
            { skill: "UI/UX Design Systems", level: 85 },
            { skill: "Performance Optimization", level: 88 },
          ].map((item) => (
            <div key={item.skill}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{item.skill}</span>
                <span className="text-primary font-bold">{item.level}%</span>
              </div>
              <div className="w-full bg-card rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
