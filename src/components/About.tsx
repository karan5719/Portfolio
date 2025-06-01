import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-purple-400/50 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-12 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
          >
            <div className="absolute inset-0 bg-purple-400/20 rounded-full -rotate-6"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
              <img 
                src="/images/myself.jpeg" 
                alt="Himanshu Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center px-4"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8">Who I Am</h3>
            <div className="space-y-6 text-gray-400">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="font-bold text-purple-400">Himanshu Kumar</span>, a passionate 
                <span className="font-bold text-purple-400"> third-year B.Tech student</span> at 
                <span className="font-bold text-purple-400"> IIIT Kalyani, West Bengal</span>, 
                specializing in <span className="font-bold text-purple-400">Computer Science and Engineering</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                As an <span className="font-bold text-purple-400">aspiring engineer</span>, I'm driven by a deep passion for 
                <span className="font-bold text-purple-400"> problem-solving</span> and building 
                <span className="font-bold text-purple-400"> impactful tech solutions</span>. My favorite programming language is 
                <span className="font-bold text-purple-400"> Python</span>, and I love exploring its applications in:
              </p>
              
              <ul className="list-none space-y-2 mb-6">
                <li className="font-medium text-gray-300">• Machine Learning</li>
                <li className="font-medium text-gray-300">• Natural Language Processing</li>
                <li className="font-medium text-gray-300">• Software Development</li>
              </ul>

              <p className="text-lg leading-relaxed">
                In web development, I specialize in <span className="font-bold text-purple-400">React</span>, 
                <span className="font-bold text-purple-400"> TypeScript</span>, and modern 
                <span className="font-bold text-purple-400"> CSS frameworks</span>. I'm committed to writing 
                <span className="font-bold text-purple-400"> clean, maintainable code</span> and creating 
                <span className="font-bold text-purple-400"> intuitive user interfaces</span>.
              </p>
              
              <p className="text-lg leading-relaxed italic">
                I'm constantly learning, growing, and pushing boundaries to turn innovative ideas into real-world solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}