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
    image: "/projects/bank.png",
    tags: ["Python", "Tkinter", "MySQL", "FPDF"],
    github: "https://github.com/karan5719/Banking_System"
  },
  {
    title: "Sanskrit Sandhi & POS Tagger",
    description: "Constructed a hybrid NLP pipeline using a BiLSTM-CRF architecture to automate Sanskrit compound word splitting and POS tagging, achieving 72% accuracy. Created custom tokenization and sequence modeling logic to handle complex phonetic and morphological patterns in the Devanagari script.",
    image: "/projects/sanskrit-sandhi.svg",
    tags: ["Python", "PyTorch", "CRF", "scikit-learn", "NumPy", "NLTK", "Gradio"],
    github: "https://github.com/karan5719/sanskrit-sandhi-pos-tagger",
    demo: "https://huggingface.co/spaces/karan5719/Sanskirt_Sandhi_Pos_Tagger"
  },
  {
    title: "Dashboard-NoteVault",
    description: "Planned and developed a full-stack productivity platform using Django, integrating note management, project tracking, and goal planning. Modeled normalized relational schemas with secure user-level data isolation to ensure integrity and access control.",
    image: "/projects/notevault.svg",
    tags: ["Django", "Python", "SQLite3", "HTML5", "CSS3", "JavaScript", "Gunicorn"],
    github: "https://github.com/karan5719/Dashboard-NoteVault"
  },
  {
    title: "Library Management System",
    description: "Developed a production-ready library management system using Flask and MySQL with role-based access control. Automated backend workflows for book reservations, circulation management, and fine computation. Hosted scalable backend services on Railway using Gunicorn.",
    image: "/projects/library-management.svg",
    tags: ["Python", "Flask", "MySQL", "Jinja2", "Gunicorn", "Railway"],
    github: "https://github.com/karan5719/Library_management_system",
    demo: "https://librarymanagementsystem-production-86b1.up.railway.app"
  },
  {
    title: "Rule-Based Sanskrit Sandhi Splitting",
    description: "A Python-based tool for splitting Sanskrit compound words (Sandhi) into their constituent parts using predefined grammatical rules. Utilizes text files containing nouns, adjectives, and adverbs, and outputs results in CSV format.",
    image: "/projects/ruled.png",
    tags: ["Python", "Natural Language Processing", "Sanskrit", "Rule-Based System"],
    github: "https://github.com/karan5719/RULE-based-sanskirt-sandhi-spliiting"
  },
  {
    title: "ML-Based Model for Sandhi Splitting",
    description: "A machine learning-based model developed using Python, Jupyter Notebooks, and TensorFlow/Keras for splitting Sanskrit compound words (Sandhi) into their constituent parts. Utilizes BiLSTM and Seq2Seq architectures trained on a dataset of over 10,000 words.",
    image: "/projects/mlbased.png",
    tags: ["Python", "TensorFlow", "Keras", "BiLSTM", "Seq2Seq", "Sanskrit NLP"],
    github: "https://github.com/karan5719/ML-BASED-MODEL-FOR-SANDHI-SPLIITING"
  },
  {
    title: "Modern Portfolio Website",
    description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, modern design, dark theme, and seamless user experience. Includes sections for projects, skills, and a contact form.",
    image: "/projects/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/karan5719/Portfolio",
    demo: "https://portfoliohimans.netlify.app/"
  }
]
