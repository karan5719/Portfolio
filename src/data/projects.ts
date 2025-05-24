export interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: "Modern Portfolio Website",
    description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and modern design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Banking Management System",
    description: "A full-featured desktop banking application built using Python and MySQL. Includes admin and customer dashboards, account operations, loan management, ATM locator, and report generation.",
    tags: ["Python", "Tkinter", "MySQL", "FPDF"],
    githubUrl: "https://github.com/karan5719/Banking_System"
  },
  {
    title: "Rule-Based Sanskrit Sandhi Splitting",
    description: "A Python-based tool for splitting Sanskrit compound words (Sandhi) into their constituent parts using predefined grammatical rules. Utilizes text files containing nouns, adjectives, and adverbs, and outputs results in CSV format.",
    tags: ["Python", "Natural Language Processing", "Sanskrit", "Rule-Based System"],
    githubUrl: "https://github.com/karan5719/RULE-based-sanskirt-sandhi-spliiting"
  },
  {
    title: "ML-Based Model for Sandhi Splitting",
    description: "A machine learning-based model developed using Python, Jupyter Notebooks, and TensorFlow/Keras for splitting Sanskrit compound words (Sandhi) into their constituent parts. Utilizes BiLSTM and Seq2Seq architectures trained on a dataset of over 10,000 words.",
    tags: ["Python", "TensorFlow", "Keras", "BiLSTM", "Seq2Seq", "Sanskrit NLP"],
    githubUrl: "https://github.com/karan5719/ML-BASED-MODEL-FOR-SANDHI-SPLIITING"
  }
  
  
]
