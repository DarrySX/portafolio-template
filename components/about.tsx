"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { CardHover } from "@/components/ui/card-hover"
import { fadeInLeft, fadeInRight } from "@/lib/animations"

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-card/30">
      <SectionHeader
        subtitle="Get to know me"
        title="About Me"
        description="Passionate developer with a focus on creating exceptional digital experiences"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10" />
            <img src="/professional-developer-portrait.jpg" alt="Professional portrait" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-muted leading-relaxed">
            I'm a passionate developer with 8+ years of experience building scalable web applications. My journey
            started with a curiosity about how things work on the web, and it has evolved into a deep expertise in
            modern frontend technologies.
          </p>

          <p className="text-lg text-muted leading-relaxed">
            I specialize in creating performant, accessible, and beautiful user interfaces using React, TypeScript, and
            modern CSS. I'm committed to writing clean, maintainable code and staying updated with the latest industry
            trends.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <CardHover>
              <p className="text-3xl font-bold gradient-text mb-1">8+</p>
              <p className="text-sm text-muted">Years Experience</p>
            </CardHover>
            <CardHover>
              <p className="text-3xl font-bold gradient-text mb-1">50+</p>
              <p className="text-sm text-muted">Projects Completed</p>
            </CardHover>
          </div>

          <div className="pt-4 space-y-3">
            <p className="text-sm font-semibold text-primary">Core Values</p>
            <div className="flex flex-wrap gap-2">
              {["Quality", "Innovation", "Collaboration", "Growth"].map((value) => (
                <span
                  key={value}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
