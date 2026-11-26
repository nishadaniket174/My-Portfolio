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

export type ProofOfWorkItem = {
  id: string
  title: string
  badge: string
  description: string
  github: string
  liveDemo: string
  technologies: string[]
}

export type OpenSourceContribution = {
  id: string
  title: string
  task: string
  prUrl: string
  prNumber: number
  issueUrl: string
  issueNumber: number
  modifications: string
  rationale: string
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

export const proofOfWork: ProofOfWorkItem[] = [
  {
    id: 'llm-playground',
    title: 'LLM Playground',
    badge: 'INTERACTIVE_APPLICATION',
    description:
      'A provider-agnostic AI chat playground that lets users connect their own API keys and experiment with cloud AI models. It includes multi-provider support, streaming chat, system prompts, model settings, and model discovery.',
    github: 'https://github.com/nishadaniket174/LLM-Playground',
    liveDemo: 'https://llm-playground-zeta.vercel.app/',
    technologies: ['Multi-Provider AI', 'Streaming Chat', 'Model Discovery', 'API Integration'],
  },
  {
    id: 'token-explorer',
    title: 'Token Explorer',
    badge: 'EDUCATIONAL_VISUALIZER',
    description:
      'An interactive educational visualization of an LLM pipeline, exploring tokenization, embeddings, attention patterns, and next-token generation through visual demonstrations.',
    github: 'https://github.com/nishadaniket174/Token-explorer',
    liveDemo: 'https://tokenexplorer-mu.vercel.app/',
    technologies: ['LLM Pipeline', 'Tokenization', 'Attention Maps', 'Interactive Demo'],
  },
]

export const repositoryInfo = {
  name: 'S-AI-Projects / TheAlgorithms-JavaScript',
  url: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript',
  description:
    'Submitted pull requests to the open-source algorithm repository, focusing on regression testing, mathematical validation, and edge-case handling.',
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 'contrib-01',
    title: 'Coin Change',
    task: 'R50-T031',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/69',
    prNumber: 69,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/31',
    issueNumber: 31,
    modifications:
      'Added regression tests covering valid combinations, boundary conditions, impossible amounts, repeated denominations, and input preservation.',
    rationale:
      'Protect dynamic programming behavior against regressions and improve confidence in edge-case handling.',
  },
  {
    id: 'contrib-02',
    title: 'DecimalIsolate',
    task: 'R50-T032',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/70',
    prNumber: 70,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/32',
    issueNumber: 32,
    modifications:
      'Corrected decimal-matching regex behavior and added tests for fractions, integers, negative values, and exponent notation.',
    rationale:
      'Improve extraction reliability and make input boundaries explicit.',
  },
  {
    id: 'contrib-03',
    title: 'ExponentialFunction',
    task: 'R50-T033',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/71',
    prNumber: 71,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/33',
    issueNumber: 33,
    modifications:
      'Added 22 reference and validation tests, invalid-input checks, and Taylor-series documentation.',
    rationale:
      'Independently validate mathematical behavior and clarify the implementation.',
  },
  {
    id: 'contrib-04',
    title: 'OctToDecimal',
    task: 'R50-T034',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/72',
    prNumber: 72,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/34',
    issueNumber: 34,
    modifications:
      'Added expected-value tests, repeatability checks, input non-mutation checks, and documentation of invariants.',
    rationale:
      'Ensure consistent conversion behavior without unintended side effects.',
  },
  {
    id: 'contrib-05',
    title: 'Circle',
    task: 'R50-T035',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/73',
    prNumber: 73,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/35',
    issueNumber: 35,
    modifications:
      'Added tests for repeatability, input isolation, zero values, and ordinary geometric cases, with supporting documentation.',
    rationale:
      'Improve confidence in deterministic geometry calculations and independent instances.',
  },
  {
    id: 'contrib-06',
    title: 'Coordinate / Euclidean Distance',
    task: 'R50-T036',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/74',
    prNumber: 74,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/36',
    issueNumber: 36,
    modifications:
      'Refactored coordinate differences using dx and dy, and used Math.hypot for distance calculation. Added regression tests and documentation.',
    rationale:
      'Improve readability and maintainability while preserving mathematical behavior and the existing interface.',
  },
  {
    id: 'contrib-07',
    title: 'generateCombinations',
    task: 'R50-T037',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/75',
    prNumber: 75,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/37',
    issueNumber: 37,
    modifications:
      'Added a worked example for n=3, k=2, a recursive backtracking trace, and boundary tests.',
    rationale:
      'Make recursive state transitions easier to understand and verify.',
  },
  {
    id: 'contrib-08',
    title: 'OuncesToKilograms',
    task: 'R50-T038',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/76',
    prNumber: 76,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/38',
    issueNumber: 38,
    modifications:
      'Added tests for valid values, zero, missing values, non-numeric inputs, NaN, failure handling, state preservation, and recovery. Added JSDoc documentation.',
    rationale:
      'Define and test the function\'s success and failure behavior.',
  },
  {
    id: 'contrib-09',
    title: 'Liouville Function',
    task: 'R50-T039',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/77',
    prNumber: 77,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/39',
    issueNumber: 39,
    modifications:
      'Added complexity analysis, empirical benchmarks, and tests for small, ordinary, large composite, and prime inputs.',
    rationale:
      'Connect theoretical complexity with practical performance and correctness.',
  },
  {
    id: 'contrib-10',
    title: 'CoPrimeCheck',
    task: 'R50-T040',
    prUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/pull/78',
    prNumber: 78,
    issueUrl: 'https://github.com/S-AI-Projects/TheAlgorithms-JavaScript/issues/40',
    issueNumber: 40,
    modifications:
      'Added examples, shared-divisor cases, symmetry and repeatability checks, input-preservation tests, and a deliberate mutation test with documentation.',
    rationale:
      'Verify the coprimality condition gcd(a, b) = 1 and ensure tests can detect incorrect behavior.',
  },
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
