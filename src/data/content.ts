export const personal = {
  name: 'Tajwid Ahmad',
  location: 'Ranchi, Jharkhand',
  phone: '+91-9304591426',
  email: 'tajwidahmad@gmail.com',
  role: 'Full Stack Developer | Backend-Aware Engineer | Problem Solver',
  heroHeadline: 'Building Solutions, Not Just Code',
  heroSubheading:
    'I approach problems like a developer, not just a coder - understanding context, users, and impact before writing a single line.',
  heroTyping: [
    'Systems Thinker',
    'Full Stack Problem Solver',
    'Context-Driven Developer',
  ] as const,
  overview:
    'I build end-to-end products with a problem-first mindset: understand context, define constraints, design intentionally, and ship solutions that stay useful in the real world.',
  social: {
    github: 'https://github.com/tajwidahmad',
    linkedin: 'https://www.linkedin.com/in/tajwidahmad/',
    leetcode: 'https://leetcode.com/u/tajwidahmadleetcode/',
    geeksforgeeks: 'https://auth.geeksforgeeks.org/user/tajwidahmad/',
  },
} as const

export const education = {
  school: 'C. V. Raman Global University',
  degree: 'B.Tech in Computer Science and Engineering',
  cgpa: '8.91',
  years: '2024 - 2028',
}

export const skillGroups = [
  {
    title: 'Problem Solving & DSA',
    items: ['Java (DSA)', 'Data Structures', 'Algorithms', 'Complexity Analysis', 'Debugging'],
  },
  {
    title: 'Frontend Engineering',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Backend Understanding',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'MongoDB', 'SQL', 'C Programming', 'Python'],
  },
  {
    title: 'Data & AI Thinking',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Jupyter', 'Render'],
  },
] as const

export const processSteps = [
  {
    title: 'Problem Understanding',
    body: 'Define the real problem, user pain points, and expected impact before touching implementation.',
  },
  {
    title: 'Context & Scenario Analysis',
    body: 'Identify user type, runtime environment, constraints, and operational realities.',
  },
  {
    title: 'Breaking Down the Problem',
    body: 'Split complexity into manageable parts, dependencies, risks, and edge conditions.',
  },
  {
    title: 'Designing the Solution',
    body: 'Plan architecture, UI/UX decisions, and data flow with scalability and maintainability in mind.',
  },
  {
    title: 'Prototyping (MVP Thinking)',
    body: 'Ship the smallest valuable version quickly to validate assumptions and direction.',
  },
  {
    title: 'Iterative Development',
    body: 'Improve incrementally through refactoring, clearer abstractions, and tighter feedback loops.',
  },
  {
    title: 'Testing & Edge Cases',
    body: 'Test success and failure paths, including unexpected inputs and reliability scenarios.',
  },
  {
    title: 'Optimization & Performance',
    body: 'Reduce complexity, improve responsiveness, and keep systems efficient under growth.',
  },
  {
    title: 'Deployment & Real-World Thinking',
    body: 'Ensure usable production behavior, observability, and practical user outcomes.',
  },
] as const

export const differentials = [
  'I think before I code',
  'I focus on problem context, not just output',
  'I design solutions, not just features',
  'I build with scalability in mind',
  'I continuously improve and refine',
] as const

export const developerTraits = [
  'Thinks before coding',
  'Breaks problems into systems',
  'Focuses on user impact',
  'Writes clean, scalable code',
  'Learns continuously',
] as const

export const projects = [
  {
    title: 'SehatSathi',
    subtitle: 'Healthcare Web Application',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/tajwidahmad/SehatSathi',
    live: '',
    caseStudy: {
      problem:
        'Users struggle to access structured and reliable healthcare guidance quickly through a simple web interface.',
      approach:
        'Built an accessible product flow with role-based access and clean information architecture for patient journeys.',
      keyDecisions: [
        'Used MERN for a unified JavaScript stack',
        'Prioritized straightforward UX for high clarity',
      ],
      challenges: ['Authentication flow reliability', 'Healthcare data structuring'],
      solution:
        'Delivered a secure full-stack platform with auth, dashboards, and responsive healthcare data workflows.',
      impact:
        'Improved accessibility of healthcare information through clearer flows and faster access paths.',
    },
  },
  {
    title: 'Smart India Scheme Finder',
    subtitle: 'Government Scheme Discovery',
    tech: ['React', 'JavaScript', 'Vite'],
    github: 'https://github.com/tajwidahmad/Smart-India-Schemes-Finder',
    live: '',
    caseStudy: {
      problem:
        'Citizens face difficulty discovering schemes relevant to their demographic and financial profile.',
      approach:
        'Designed a filter-first discovery experience with modular UI blocks and scalable state structure.',
      keyDecisions: [
        'Used dynamic rendering for flexible eligibility output',
        'Kept architecture backend-ready from day one',
      ],
      challenges: ['Modeling multiple eligibility dimensions', 'Keeping UI simple despite filter complexity'],
      solution:
        'Implemented a responsive smart filtering flow for age, income, category, and state with clean interactions.',
      impact:
        'Reduced friction in scheme discovery and made eligibility exploration significantly more practical.',
    },
  },
  {
    title: 'AIHub',
    subtitle: 'AI Assistance Platform',
    tech: ['AI Integration', 'Web App Architecture'],
    github: 'https://github.com/tajwidahmad/AI-Hub-MERN-based-project-',
    live: '',
    caseStudy: {
      problem:
        'Users need quick assistance and productivity support without navigating fragmented tools.',
      approach:
        'Built a conversational, automation-oriented UX focused on actionable outputs and extensible flows.',
      keyDecisions: [
        'Designed for modular AI feature integration',
        'Balanced user guidance with fast interaction loops',
      ],
      challenges: ['Maintaining response clarity', 'Designing extensible assistant workflows'],
      solution:
        'Developed a chatbot-like interface aligned to practical automation and task support.',
      impact:
        'Improved user productivity by reducing repetitive effort and decision friction.',
    },
  },
  {
    title: 'Data Analysis Projects',
    subtitle: 'Data Cleaning & Insights',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/tajwidahmad',
    live: '',
    caseStudy: {
      problem:
        'Raw datasets are noisy and difficult to convert into meaningful, decision-ready insights.',
      approach:
        'Applied a repeatable cleaning-to-visualization workflow with explicit assumptions and clear output narratives.',
      keyDecisions: [
        'Used Pandas-first pipelines for maintainable preprocessing',
        'Selected visualizations based on business question relevance',
      ],
      challenges: ['Handling inconsistent real-world data', 'Balancing depth with explainability'],
      solution:
        'Built analysis pipelines that clean, visualize, and extract interpretable insights from practical datasets.',
      impact:
        'Enabled clearer understanding of trends and data-driven decision support.',
    },
  },
] as const

export const achievements = [
  'Led team in Smart India Hackathon (SIH)',
  'Cleared internal college round',
  'Semifinalist at Rewind & Recode Odisha',
  'Built agricultural supply chain solution',
] as const

export const certifications = [
  'Web Design & Development - NSDC',
  'Scrum in Practice - Infosys',
  'Software Developer - NASSCOM',
  'Unlocking AI - Microsoft',
  'Prompt Engineering - Simplilearn',
  'Generative AI - Simplilearn',
] as const
