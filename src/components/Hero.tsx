import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  scrollToSection: (section: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Himanshu_Kumar_Resume.pdf'
    link.download = 'Himanshu_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="section-container pt-28 md:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-10 lg:max-w-[50%] mt-0">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl text-purple-400 font-medium">Hi, my name is</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 leading-tight">
                Himanshu Kumar.
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-400 leading-tight">
                I build things for the web.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed"
            >
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products using modern web technologies
              and clean design principles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 py-3 text-base sm:text-lg font-medium"
              >
                Check out my work
                <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="group relative px-6 py-3 text-base sm:text-lg font-medium"
              >
                Resume
                <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="h-[1px] w-32 bg-gray-800" />
              <div className="flex gap-6">
                <a
                  href="mailto:himanshukumar3007@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/himanshukumar30"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/himanshukumar30"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="h-[1px] w-32 bg-gray-800" />
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:max-w-[60%] w-full flex items-start lg:justify-end justify-center lg:pl-8"
          >
            <div className="relative group w-full max-w-[700px] lg:translate-x-[35%]">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Floating Animation Container */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Image Container */}
                <div className="relative z-10 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-1">
                  <img
                    src="/images/hero.jpg"
                    alt="Developer Illustration"
                    className="w-full h-auto rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}