import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-12 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -rotate-6"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
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
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">Who I Am</h3>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="font-bold text-gray-800">Himanshu Kumar</span>, a passionate 
                <span className="font-bold text-gray-800"> third-year B.Tech student</span> at 
                <span className="font-bold text-gray-800"> IIIT Kalyani, West Bengal</span>, 
                specializing in <span className="font-bold text-gray-800">Computer Science and Engineering</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                As an <span className="font-bold text-gray-800">aspiring engineer</span>, I'm driven by a deep passion for 
                <span className="font-bold text-gray-800"> problem-solving</span> and building 
                <span className="font-bold text-gray-800"> impactful tech solutions</span>. My favorite programming language is 
                <span className="font-bold text-gray-800"> Python</span>, and I love exploring its applications in:
              </p>
              
              <ul className="list-none space-y-2 mb-6">
                <li className="font-medium text-gray-700">• Machine Learning</li>
                <li className="font-medium text-gray-700">• Natural Language Processing</li>
                <li className="font-medium text-gray-700">• Software Development</li>
              </ul>

              <p className="text-lg leading-relaxed">
                In web development, I specialize in <span className="font-bold text-gray-800">React</span>, 
                <span className="font-bold text-gray-800"> TypeScript</span>, and modern 
                <span className="font-bold text-gray-800"> CSS frameworks</span>. I'm committed to writing 
                <span className="font-bold text-gray-800"> clean, maintainable code</span> and creating 
                <span className="font-bold text-gray-800"> intuitive user interfaces</span>.
              </p>
              
              <p className="text-lg leading-relaxed italic">
                I'm constantly learning, growing, and pushing boundaries to turn innovative ideas into real-world solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full">
                <span className="text-purple-600 font-semibold">Python</span>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-3 rounded-full">
                <span className="text-blue-600 font-semibold">Machine Learning</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-teal-100 px-6 py-3 rounded-full">
                <span className="text-green-600 font-semibold">React+TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}