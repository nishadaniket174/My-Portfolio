export type Project = {
  id: string
  title: string
  code: string
  status: string
  category: 'Python' | 'System & Artificial Intelligence' | 'Projects'
  description: string
  technologies: string[]
  github?: string
  demo?: string
  // Managed WIP / archive status simulation
  archiveStatus?: {
    code: string
    notice: string
    syncProgress: string
  }
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
  role: 'Software Engineering Undergrad // AI & ML',
  education: 'B.Tech in Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  college: 'Newton School of Technology, Pune, India',
  academicYear: 'Year 01 // Undergraduate',
  stage: 'Active // Foundations to Intelligent Systems',
  interest: 'Autonomous Agents, Deep Learning & Scalable Systems',
  intro:
    'Undergrad at Newton School of Technology obsessed with deconstructing complex problems into high-performance Python, neural architectures, and intelligent scalable systems.',
  about: `I am a Computer Science undergraduate at Newton School of Technology specializing in Artificial Intelligence and Machine Learning. Bridging the gap between raw algorithmic fundamentals and production-grade intelligent systems, my focus is locked on engineering solutions that scale cleanly.

From mastering low-level computational logic and Python data pipelines to exploring deep neural nets, NLP transformers, and computer vision models, I approach development with intense learning velocity. I don't just study modern AI paradigms—I benchmark them, dissect their mathematical foundations (linear algebra, multivariate calculus, optimization), and convert theoretical math into reliable, high-impact software.`,
}

export const hudLabels = [
  { key: 'PROFILE_STATUS', value: 'ACTIVE // YEAR_01' },
  { key: 'CURRENT_FOCUS', value: 'PYTHON // NEURAL_ARCH' },
  { key: 'INSTITUTION', value: 'NEWTON SCHOOL OF TECH' },
  { key: 'SPECIALIZATION', value: 'AI / ML // SYSTEMS' },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Current Learning',
    status: 'ACTIVE_PIPELINE',
    items: [
      {
        name: 'Python Systems & OOP',
        focus: 'Data Structures, Scripting & Concurrency',
        details: 'Memory layouts, algorithmic efficiency, clean OOP patterns, and computational automation.',
      },
      {
        name: 'Computational Logic & Optimization',
        focus: 'Algorithmic Thinking & Problem Solving',
        details: 'Deconstructing real-world constraints into modular, testable, Big-O optimized logic paths.',
      },
      {
        name: 'Scientific Computing Stack',
        focus: 'NumPy, Pandas & Vectorized Ops',
        details: 'High-throughput tensor manipulations, matrix broadcasts, data wrangling, and pipeline telemetry.',
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
        details: 'Forward/backward propagation mechanics, adaptive gradient optimization (Adam, SGD), and loss landscape analysis.',
      },
      {
        name: 'Natural Language Processing',
        focus: 'Transformers, Embeddings & Tokenization',
        details: 'Attention mechanisms, sequence-to-sequence modeling, semantic vector search, and token embedding geometry.',
      },
      {
        name: 'Computer Vision',
        focus: 'Spatial Representations & Convolutions',
        details: 'Feature extraction filters, convolutional layers, spatial invariance, and automated image transformation pipelines.',
      },
    ],
  },
  {
    category: 'Academic Foundations',
    status: 'THEORETICAL_CORE',
    items: [
      {
        name: 'Algorithms & Data Structures',
        focus: 'Trees, Graphs, Sorting & Dynamic Programming',
        details: 'Formal time/space complexity analysis, recursive tree traversals, and optimal graph search (Dijkstra, A*).',
      },
      {
        name: 'Calculus & Linear Algebra for ML',
        focus: 'Matrix Decompositions & Vector Calculus',
        details: 'Gradients, Jacobians, Hessians, eigenvalues, and objective function optimization on Riemannian surfaces.',
      },
      {
        name: 'Discrete Mathematics & Probability',
        focus: 'Formal Logic, Graph Theory & Bayesian Inference',
        details: 'Predicate calculus, combinatorics, proof techniques, Bayes theorem, and stochastic distributions.',
      },
    ],
  },
]

export const exploring = [
  { label: 'Python Systems & Data Structures', detail: 'Syntax, memory profiles, modular package architecture, and scripting.' },
  { label: 'Computational Logic & Graph Algorithms', detail: 'Deconstructing complex networks into verifiable computational routines.' },
  { label: 'Linear Algebra & Multivariate Calculus', detail: 'Gradients, vector spaces, and loss optimization math for machine learning.' },
  { label: 'Neural Network Architectures & Backprop', detail: 'Weight updates, activation dynamics, and computational graph backprop.' },
  { label: 'Data Preprocessing & Ingestion Pipelines', detail: 'Normalization, tokenization, anomaly filtering, and automated wrangling.' },
]

export const projects: Project[] = [
  {
    id: 'ml-01',
    title: 'Academic Exploration of ML Models',
    code: 'INITIATIVE // ML-01',
    status: 'RESEARCH INITIATIVE',
    category: 'System & Artificial Intelligence',
    description:
      'Systematic inquiry into foundational machine learning paradigms. Analyzing parameter tuning, gradient convergence behavior, and predictive performance boundaries across structured datasets.',
    technologies: ['Python', 'NumPy', 'Scikit-Learn', 'Statistical Modeling'],
    github: 'https://github.com/nishadaniket174',
    archiveStatus: {
      code: 'SYS_STREAM // ML-01',
      notice: 'UPDATING MODEL WEIGHTS & BENCHMARK SUITE. TELEMETRY SYNCHRONIZATION IN PROGRESS.',
      syncProgress: 'STAGE 2/3 // VECTOR FIELD REFINEMENT',
    },
  },
  {
    id: 'data-02',
    title: 'Python Data Processing Pipeline',
    code: 'INITIATIVE // DATA-02',
    status: 'ACADEMIC PROJECT',
    category: 'Python',
    description:
      'Engineered automated data ingestion and preprocessing workflows. Handles schema normalization, anomaly detection, vector transformation, and clean dataset preparation for modeling.',
    technologies: ['Python', 'Pandas', 'Data Cleaning', 'Automation'],
    github: 'https://github.com/nishadaniket174',
    archiveStatus: {
      code: 'SYS_STREAM // DATA-02',
      notice: 'OPTIMIZING ETL PARALLEL PROCESSING AND PIPELINE ANOMALY FILTERS.',
      syncProgress: 'STAGE 1/3 // PIPELINE RE-INDEXING',
    },
  },
  {
    id: 'logic-03',
    title: 'Foundational AI Logic Tests',
    code: 'INITIATIVE // LOGIC-03',
    status: 'RESEARCH EXPLORATION',
    category: 'Projects',
    description:
      'Algorithmic benchmarking suite testing heuristic search algorithms, decision tree logic, and deterministic evaluation models against synthetic constraint environments.',
    technologies: ['Python', 'Search Algorithms', 'Discrete Math', 'Benchmarking'],
    github: 'https://github.com/nishadaniket174',
    archiveStatus: {
      code: 'SYS_STREAM // LOGIC-03',
      notice: 'HEURISTIC TREE RESTRUCTURING & CONSTRAINT EVALUATION ENGINE COMPILATION.',
      syncProgress: 'STAGE 3/3 // BENCHMARK VERIFICATION',
    },
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
