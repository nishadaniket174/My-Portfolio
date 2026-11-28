export type TechStackItem = {
  name: string
  role: string
  purpose: string
}

export type TechnicalOverview = {
  problemStatement: string
  targetAudience: string
  solutionSummary: string
  architecture: {
    layers: {
      name: string
      details: string
    }[]
    workflow: string
  }
  techStackDetails: TechStackItem[]
  individualContribution: {
    summary: string
    keyTasks: string[]
    aiToolsUsed: string
  }
  documentation?: {
    label: string
    url: string
  }[]
  currentStage: string
  plannedFeatures?: string[]
}

export type Project = {
  id: string
  title: string
  code: string
  status: string
  category: 'Python' | 'Systems & Applications'
  description: string
  technologies: string[]
  github?: string
  demo?: string
  featured?: boolean
  technicalOverview?: TechnicalOverview
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
    id: 'weekwise',
    title: 'Weekwise',
    code: 'SYSTEM // WW-01',
    status: 'PRODUCTION DEPLOYMENT',
    category: 'Systems & Applications',
    featured: true,
    description:
      'Adaptive student study-planning and execution platform that converts volatile academic workloads into resilient, realistic schedules through a closed-loop execution and recovery lifecycle.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'State Management'],
    github: 'https://github.com/nishadaniket174/Calendar',
    demo: 'https://calendar-kappa-five-87.vercel.app/',
    technicalOverview: {
      problemStatement:
        'Students consistently struggle to translate syllabi, project milestones, and assignment deadlines into realistic study schedules. Traditional calendar applications treat tasks as static time-blocks: when an unforeseen delay or academic fatigue disrupts an afternoon, the static plan collapses. Students end up with accumulated backlog, guilt, and no clear recovery path.',
      targetAudience:
        'College undergraduates, self-directed learners, and students managing dense coursework who experience plan failure and schedule abandonment.',
      solutionSummary:
        'Weekwise introduces a closed-loop study workflow: PLAN → SCHEDULE → EXECUTE → RECOVER → REFLECT. Instead of treating study sessions as rigid calendar appointments, Weekwise calculates workload density against available time, supports real-time execution tracking, and provides adaptive schedule recovery when disruptions occur.',
      architecture: {
        layers: [
          {
            name: 'Client Presentation Layer',
            details:
              'Engineered with React and TypeScript, delivering a high-clarity timetable interface, responsive workload meters, and distraction-free session timers.',
          },
          {
            name: 'Application & Scheduling Logic',
            details:
              'Modular scheduling engine calculating duration bounds, buffer windows, task priority weightings, and recovery rebalancing when planned blocks are missed.',
          },
          {
            name: 'State & Persistence Layer',
            details:
              'Structured client-side state with schema-validated local storage persistence, ensuring uninterrupted offline usability during study sessions.',
          },
          {
            name: 'Adaptive Recovery Pipeline',
            details:
              'Dynamic calculation comparing completed effort against scheduled targets, enabling students to reschedule slipped tasks without manual calendar restructuring.',
          },
        ],
        workflow:
          '1. Plan: Log coursework requirements and estimated durations. 2. Schedule: Allocate tasks into realistic time slots with automatic buffers. 3. Execute: Run focused study timers and log real output. 4. Recover: Trigger rescheduling algorithms when sessions slip. 5. Reflect: Review weekly completion velocity.',
      },
      techStackDetails: [
        {
          name: 'React 18+',
          role: 'UI Component Framework',
          purpose: 'Declarative component-driven UI for calendar views, active study timers, and modular modal workflows.',
        },
        {
          name: 'TypeScript',
          role: 'Type Safety & Data Integrity',
          purpose: 'Enforces strict typing across study session models, timetable intervals, and recovery algorithms.',
        },
        {
          name: 'Vite',
          role: 'Build & Bundling Engine',
          purpose: 'Fast HMR during development and optimized tree-shaken static production bundles.',
        },
        {
          name: 'Tailwind CSS',
          role: 'Utility-First Styling',
          purpose: 'Responsive layout composition, accessible contrast, and low runtime overhead.',
        },
      ],
      individualContribution: {
        summary:
          'Conceived the end-to-end concept, defined the core scheduling state machine, engineered the user experience with AI-assisted coding tools, and performed manual end-to-end regression testing on live deployment.',
        keyTasks: [
          'Designed the PLAN → SCHEDULE → EXECUTE → RECOVER → REFLECT architecture to solve the study-plan abandonment problem.',
          'Specified technical requirements, data structures, and edge cases for schedule adjustments.',
          'Prompted, reviewed, and iteratively debugged React components and timetable rendering using AI agents.',
          'Configured responsive styling and verified UI consistency across mobile and desktop browser viewports.',
          'Performed manual validation testing of session tracking and local storage persistence.',
        ],
        aiToolsUsed:
          'AI-assisted coding environments (LLM prompt engineering, automated code generation, and iterative debugging loops with human oversight and verification).',
      },
      currentStage:
        'Fully functional client application deployed on Vercel with active timetable scheduling, session timers, and local persistence. Source code publicly available on GitHub.',
      plannedFeatures: [
        'Cloud synchronization across mobile and desktop devices.',
        'AI-driven study velocity estimates based on past completion rates.',
        'LMS (Canvas/Moodle) assignment deadline import.',
      ],
      documentation: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/nishadaniket174/Calendar',
        },
        {
          label: 'Live Application',
          url: 'https://calendar-kappa-five-87.vercel.app/',
        },
      ],
    },
  },
  {
    id: 'minigit',
    title: 'minigit',
    code: 'SYSTEM // MG-02',
    status: 'OPEN SOURCE / CORE ENGINE',
    category: 'Python',
    featured: true,
    description:
      'A complete Git implementation rebuilt from scratch in Python with zero external dependencies: SHA-1 content addressing, object store, tree formatting, commit graphs, and staging index compatibility with official Git.',
    technologies: ['Python 3.10+', 'Content Addressing', 'SHA-1 Hashing', 'Object Database', 'CLI'],
    github: 'https://github.com/nishadaniket174/minigit',
    technicalOverview: {
      problemStatement:
        'Version control is the bedrock of modern software engineering, yet most developers treat Git as a black box—memorizing commands without understanding how content hashing, tree hierarchies, index staging, or commit acyclic directed graphs (DAGs) function under the hood. Academic courses rarely inspect the raw byte layout of Git objects, leaving a significant gap in systems and storage fundamentals.',
      targetAudience:
        'Software engineers, computer science students, and systems programmers who want an inspectable, dependency-free implementation of Git internals.',
      solutionSummary:
        'minigit rebuilds core Git from scratch in pure Python with standard library only. It writes real, standard-compliant Git objects (blobs, trees, commits) with zlib compression and SHA-1 hashing, enabling official Git commands (`git log`, `git status`) to inspect and manipulate repositories created by minigit.',
      architecture: {
        layers: [
          {
            name: 'CLI Command Dispatcher',
            details:
              'Modular command interfaces implementing `init`, `hash-object`, `cat-file`, `write-tree`, `commit-tree`, `add`, `commit`, and `log`.',
          },
          {
            name: 'Content-Addressed Object Store',
            details:
              'Low-level object serialization for blobs, trees, and commits. Computes 40-character SHA-1 hashes and writes compressed zlib objects to `.minigit/objects/`.',
          },
          {
            name: 'Index & Staging Area Pipeline',
            details:
              'Binary index reader and writer maintaining working-tree file tracking, SHA-1 checksum verification, file mode metadata, and staging state.',
          },
          {
            name: 'Reference & Branch Manager',
            details:
              'Manages symbolic refs (`HEAD`), branch pointers (`refs/heads/`), and parent commit ancestry graphs.',
          },
        ],
        workflow:
          '1. Init: Scaffold `.minigit` object repository. 2. Stage: Read files, create blob objects, and serialize index entries. 3. Tree: Recursively pack staged paths into tree objects. 4. Commit: Generate commit object referencing root tree SHA-1 and parent pointer. 5. Interop: Verify with official git CLI commands.',
      },
      techStackDetails: [
        {
          name: 'Python 3.10+',
          role: 'Core Systems Language',
          purpose: 'Provides standard library binary I/O, byte manipulation, and clean modular architecture without external packages.',
        },
        {
          name: 'hashlib (SHA-1)',
          role: 'Cryptographic Content Addressing',
          purpose: 'Calculates deterministic 160-bit object hashes across headers and binary payloads.',
        },
        {
          name: 'zlib',
          role: 'Deflate Compression',
          purpose: 'Compresses and decompresses loose Git objects matching official Git filesystem formatting.',
        },
        {
          name: 'struct',
          role: 'Binary Data Packing',
          purpose: 'Serializes and parses raw binary index headers, timestamps, and stat cache records.',
        },
      ],
      individualContribution: {
        summary:
          'Explored and implemented Git internals, authored comprehensive test suites verifying byte-level compatibility with official Git, structured repository documentation, and published open-source project repository.',
        keyTasks: [
          'Implemented SHA-1 object storage and loose object file layout matching `.git/objects/` formatting.',
          'Engineered tree object recursive serializer parsing directory structures into sorted binary tree records.',
          'Built command-line interface for fundamental version control workflows (init, add, commit, log).',
          'Authored unit tests verifying that standard `git log` and `git checkout` can read repositories written by minigit.',
          'Published open-source repository on GitHub with technical documentation and quick-start guides.',
        ],
        aiToolsUsed:
          'AI-assisted development environments for binary format edge-case debugging, test scenario generation, and README structuring.',
      },
      currentStage:
        'Functional systems-level version control engine with public GitHub repository and automated test suites.',
      plannedFeatures: [
        'Delta compression and packfile (`.pack` / `.idx`) generation.',
        'Smart HTTP remote transport protocol (`fetch` and `push` over network).',
        'Three-way merge engine with conflict markers.',
      ],
      documentation: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/nishadaniket174/minigit',
        },
      ],
    },
  },
]

export const contact: Record<
  'github' | 'linkedin' | 'email',
  { label: string; href: string; value?: string; pendingLabel: string }
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
    href: '',
    value: 'nishadaniket2026@gmail.com',
    pendingLabel: 'Address pending',
  },
}

export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contributions', label: 'CONTRIBUTIONS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
] as const
