import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { BsArrowDown } from 'react-icons/bs'

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Himanshu Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/himanshukumar30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/himanshukumar30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/himanshukumar30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:himanshukumar3007@gmail.com"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <HiMail />
            </a>
          </div>
          <motion.button
            onClick={scrollToContact}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center mx-auto space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in Touch</span>
            <BsArrowDown />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero