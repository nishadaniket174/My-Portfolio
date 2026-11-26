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
    'First-year CSE student at Newton School of Technology, exploring software development, problem-solving, and the fundamentals of AI and machine learning through projects and open-source contributions.',
  about: `I am a first-year B.Tech student in Computer Science and Engineering (Artificial Intelligence and Machine Learning) at Newton School of Technology, Pune, pursuing my degree from Ajeenkya D. Y. Patil University. My primary technical focus is software development, problem-solving, and exploring Artificial Intelligence, Large Language Models, and Generative AI, particularly in the areas of AI agents and automation. I aim to strengthen my engineering skills through practical projects and open-source contributions while exploring emerging technologies. My professional objective is to secure software engineering internships at product-based technology companies and work towards becoming a Software Development Engineer.`,
}

export const hudLabels = [
  { key: 'PROFILE_STATUS', value: 'ACTIVE // YEAR_01' },
  { key: 'CURRENT_FOCUS', value: 'PYTHON // NEURAL_ARCH' },
  { key: 'INSTITUTION', value: 'NEWTON SCHOOL OF TECH' },
  { key: 'SPECIALIZATION', value: 'AI / ML // SYSTEMS' },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Version Control & Open Source',
    status: 'DEMONSTRATED_PRACTICE',
    items: [
      {
        name: 'Git & GitHub Workflows',
        focus: 'Branching, Pull Requests & Code Review',
        details: 'Hands-on repository management, feature branching, clean commit conventions, and open-source contributions from S&AI coursework.',
      },
      {
        name: 'Collaborative Development',
        focus: 'Issue Tracking & Project Documentation',
        details: 'Structuring project roadmaps, tracking task progress, and documenting architecture and decisions for peer review.',
      },
      {
        name: 'Repository Hygiene',
        focus: 'Ignoring Private Artifacts & Isolation',
        details: 'Managing .gitignore rules, untracked local workspaces, and maintaining clean git histories without committing secret or local configs.',
      },
    ],
  },
  {
    category: 'AI-Assisted Development',
    status: 'ACTIVE_WORKFLOW',
    items: [
      {
        name: 'Prompt Engineering & Directing',
        focus: 'Context Specification & Instruction Design',
        details: 'Drafting structured requirements, system prompts, and scoped constraints to guide AI agents effectively.',
      },
      {
        name: 'Agent Review & Refinement',
        focus: 'Code Evaluation & Verification Loops',
        details: 'Reviewing AI-generated code for correctness, eliminating hallucinations, and iteratively testing outputs against design goals.',
      },
      {
        name: 'AI Tooling & Automation',
        focus: 'Copilots, Agentic Workflows & CLI Tools',
        details: 'Utilizing modern AI coding assistants and automation workflows to accelerate iterative development and debugging.',
      },
    ],
  },
  {
    category: 'Programming & Foundations',
    status: 'ACADEMIC_CORE',
    items: [
      {
        name: 'Python Fundamentals',
        focus: 'Core Syntax, Scripts & OOP Concepts',
        details: 'Writing modular procedural and object-oriented scripts, handling file I/O, and implementing structured logic.',
      },
      {
        name: 'Problem-Solving & Logic',
        focus: 'Algorithmic Thinking & Mathematics',
        details: 'First-year foundations in discrete mathematics, computational logic, and deconstructing problem statements into steps.',
      },
      {
        name: 'Web Fundamentals',
        focus: 'HTML, CSS & Component Basics',
        details: 'Navigating component-based web layouts, basic frontend styling, and inspecting web application code.',
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
