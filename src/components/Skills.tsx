import React from 'react'
import { motion } from 'framer-motion'
import { skills, Skill } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">My Skills</h2>
          <div className="w-20 h-1 bg-purple-400/50 mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4 sm:px-0"
        >
          {skills.map((skill: Skill, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#111] rounded-xl p-6 hover:bg-[#1a1a1a] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-16 h-16">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl transform rotate-6 transition-transform group-hover:rotate-12"
                  />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="font-medium text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
