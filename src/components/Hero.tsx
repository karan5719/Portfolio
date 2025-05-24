import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  scrollToSection: (section: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'newcv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Himanshu Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              passionate Frontend Developer and Python Developer
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-lg">
              I create beautiful, functional, and user-centered digital experiences. With a focus on modern web technologies and clean design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('contact')} className="px-6 py-3">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('projects')} className="px-6 py-3">
                View Work
              </Button>
              <Button variant="secondary" onClick={handleDownloadResume} className="px-6 py-3">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl -rotate-6"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl aspect-square">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}