export type Project = {
  title: string
  code: string
  status: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

export type SkillCategory = {
  category: string
  status: string
  items: {
    name: string
    focus: string
    details: string
  }[]
}

export const profile = {
  fullName: 'Aniket Kumar Nishad',
  firstName: 'Aniket',
  lastName: 'Kumar Nishad',
  brand: 'ANIKET // DEV',
  role: 'Aspiring Software Engineer // AI & ML',
  education: 'B.Tech in Computer Science',
  specialization: 'Artificial Intelligence and Machine Learning',
  college: 'Newton School of Technology, Pune, India',
  stage: 'Active // Foundations & Intelligent Systems',
  interest: 'AI and Machine Learning',
  intro:
    'Exploring the intersection of Python and Artificial Intelligence. Currently developing a foundation in ML architectures and data-driven decision making.',
  about: `I am a Computer Science student at the Newton School of Technology, focusing on the core of modern technology: Artificial Intelligence. My journey involves deconstructing complex problems into modular code and exploring how Machine Learning can solve real-world challenges.

Transitioning from core computational fundamentals into intelligent systems, my focus centers on algorithmic problem-solving, data pipelines, and scalable predictive architectures. Through structured inquiry and hands-on implementation, I bridge mathematical rigor with practical engineering.`,
}

export const hudLabels = [
  { key: 'PROFILE_STATUS', value: 'ACTIVE' },
  { key: 'CURRENT_FOCUS', value: 'PYTHON // ML ARCHITECTURES' },
  { key: 'FIELD', value: 'COMPUTER SCIENCE' },
  { key: 'SPECIALIZATION', value: 'AI / ML' },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Current Learning',
    status: 'ACTIVE_PIPELINE',
    items: [
      {
        name: 'Python',
        focus: 'Data Structures, Scripting, ML Libraries',
        details: 'Core syntax, object-oriented design, algorithmic efficiency, and computational automation.',
      },
      {
        name: 'Computational Logic',
        focus: 'Algorithmic Thinking & Problem Solving',
        details: 'Deconstructing problems into verifiable computational steps and scalable logic workflows.',
      },
    ],
  },
  {
    category: 'Research Interests',
    status: 'ACTIVE_RESEARCH',
    items: [
      {
        name: 'Neural Networks & Deep Learning',
        focus: 'Model Architectures & Representations',
        details: 'Multi-layer perceptrons, backpropagation mechanics, activation functions, and gradient descent.',
      },
      {
        name: 'Natural Language Processing',
        focus: 'Text Preprocessing & Tokenization',
        details: 'Semantic analysis, vector embeddings, sequence modeling, and transformer paradigms.',
      },
      {
        name: 'Computer Vision',
        focus: 'Image Transformations & Pattern Recognition',
        details: 'Feature extraction, spatial representations, and convolution-based feature mapping.',
      },
    ],
  },
  {
    category: 'Academic Foundations',
    status: 'THEORETICAL_CORE',
    items: [
      {
        name: 'Algorithms & Data Structures',
        focus: 'Search, Sorting & Complexity Analysis',
        details: 'Time/space Big-O bounds, recursion, linear and non-linear memory representations.',
      },
      {
        name: 'Calculus & Linear Algebra for ML',
        focus: 'Matrix Transformations & Optimization',
        details: 'Partial derivatives, gradients, vector spaces, eigenvalues, and objective function optimization.',
      },
      {
        name: 'Discrete Mathematics',
        focus: 'Logic, Graph Theory & Combinatorics',
        details: 'Set theory, predicate logic, graph traversals, and formal proof verification.',
      },
    ],
  },
]

export const exploring = [
  { label: 'Python fundamentals', detail: 'Syntax, data structures, modular package architecture, and scripting.' },
  { label: 'Programming logic', detail: 'Deconstructing real-world systems into testable computational routines.' },
  { label: 'Calculus & Linear Algebra', detail: 'Gradients, vector spaces, and mathematical optimization fundamentals for ML.' },
  { label: 'Neural Network Architectures', detail: 'Forward propagation, loss formulations, and backpropagation mechanics.' },
  { label: 'Data Preprocessing Pipelines', detail: 'Normalization, tokenization, feature scaling, and automated data wrangling.' },
]

export const projects: Project[] = [
  {
    title: 'Academic Exploration of ML Models',
    code: 'INITIATIVE // ML-01',
    status: 'RESEARCH INITIATIVE',
    description:
      'Systematic inquiry into foundational machine learning paradigms. Analyzing parameter tuning, gradient convergence behavior, and predictive performance boundaries across structured datasets.',
    technologies: ['Python', 'NumPy', 'Scikit-Learn', 'Statistical Modeling'],
    github: 'https://github.com/nishadaniket174',
  },
  {
    title: 'Python Data Processing Pipeline',
    code: 'INITIATIVE // DATA-02',
    status: 'ACADEMIC PROJECT',
    description:
      'Engineered automated data ingestion and preprocessing workflows. Handles schema normalization, anomaly detection, vector transformation, and clean dataset preparation for modeling.',
    technologies: ['Python', 'Pandas', 'Data Cleaning', 'Automation'],
    github: 'https://github.com/nishadaniket174',
  },
  {
    title: 'Foundational AI Logic Tests',
    code: 'INITIATIVE // LOGIC-03',
    status: 'RESEARCH EXPLORATION',
    description:
      'Algorithmic benchmarking suite testing heuristic search algorithms, decision tree logic, and deterministic evaluation models against synthetic constraint environments.',
    technologies: ['Python', 'Search Algorithms', 'Discrete Math', 'Benchmarking'],
    github: 'https://github.com/nishadaniket174',
  },
]

export const contact: Record<
  'github' | 'linkedin' | 'email',
  { label: string; href: string; pendingLabel: string }
> = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/nishadaniket174',
    pendingLabel: 'Profile link pending',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aniket-nishad-592010423/',
    pendingLabel: 'Profile link pending',
  },
  email: {
    label: 'Email',
    href: '', // PLACEHOLDER: add mailto:you@example.com
    pendingLabel: 'Address pending',
  },
}

export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
] as const
