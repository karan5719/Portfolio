export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: "Banking Management System",
    description: "A full-featured desktop banking application built using Python and MySQL. Includes admin and customer dashboards, account operations, loan management, ATM locator, and report generation.",
    image: "public/projects/bank.png",
    tags: ["Python", "Tkinter", "MySQL", "FPDF"],
    github: "https://github.com/karan5719/Banking_System"
  },
  {
    title: "Rule-Based Sanskrit Sandhi Splitting",
    description: "A Python-based tool for splitting Sanskrit compound words (Sandhi) into their constituent parts using predefined grammatical rules. Utilizes text files containing nouns, adjectives, and adverbs, and outputs results in CSV format.",
    image: "public/projects/ruled.png",
    tags: ["Python", "Natural Language Processing", "Sanskrit", "Rule-Based System"],
    github: "https://github.com/karan5719/RULE-based-sanskirt-sandhi-spliiting"
  },
  {
    title: "ML-Based Model for Sandhi Splitting",
    description: "A machine learning-based model developed using Python, Jupyter Notebooks, and TensorFlow/Keras for splitting Sanskrit compound words (Sandhi) into their constituent parts. Utilizes BiLSTM and Seq2Seq architectures trained on a dataset of over 10,000 words.",
    image: "public/projects/mlbased.png",
    tags: ["Python", "TensorFlow", "Keras", "BiLSTM", "Seq2Seq", "Sanskrit NLP"],
    github: "https://github.com/karan5719/ML-BASED-MODEL-FOR-SANDHI-SPLIITING"
  },
  {
    title: "Modern Portfolio Website",
    description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and modern design.",
    image: "public/projects/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio"
  }
]
