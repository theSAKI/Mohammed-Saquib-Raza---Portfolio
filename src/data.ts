import { Project, TimelineEvent, SkillCategory, Certification } from './types';

export const personalInfo = {
  name: 'Mohammed Saquib Raza',
  title: 'Software Engineer',
  subtitle: 'Full-Stack Developer | Python Developer',
  email: 'saquibraza5683@gmail.com',
  phone: '+91-8512090995',
  location: 'Bangalore, India',
  github: 'https://github.com/theSAKI',
  linkedin: 'https://www.linkedin.com/in/mohammed-saquib-raza/?skipRedirect=true',
  bio: 'Computer Science and Engineering graduate specializing in full-stack web development, Android applications, and AI-powered systems. Expert at turning data structures into neat, high-performance visual dashboards and interactive layouts.',
  fullBio: 'Computer Science and Engineering graduate specializing in full-stack web development, Android applications, and AI-powered systems. Proficient in Python, Next.js, Kotlin, Firebase, and PostgreSQL, with hands-on experience in REST API development, machine learning, and intelligent automation. Committed to building scalable, efficient solutions that translate technical expertise into real-world impact.'
};

export const stats = [
  { label: 'Completed Projects', value: 12, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Academic CGPA', value: 7.2, suffix: ' /10' },
  { label: 'Code Commits', value: 650, suffix: '+' }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'exp-1',
    period: 'Feb 2026 – May 2026',
    title: 'Android App Development Intern',
    subtitle: 'MindMatrixEd',
    type: 'experience',
    location: 'Remote, India',
    description: [
      'Developed Android application features using Kotlin and Jetpack Compose, implementing modern mobile development practices and responsive user interfaces.',
      'Integrated Firebase, Google AI Studio, and Generative AI capabilities to enhance application functionality and support intelligent user interactions.',
      'Contributed to UI/UX design, feature development, testing, debugging, and iterative enhancements throughout the Android application development lifecycle.'
    ]
  },
  {
    id: 'edu-1',
    period: '2022 – 2026',
    title: 'B.E. Computer Science Engineering',
    subtitle: 'HKBK College of Engineering',
    type: 'education',
    location: 'Bangalore, India',
    description: [
      'Pursued deep specialization in Software Engineering, Algorithms, and Databases.',
      'Achieved CGPA: 7.2 / 10.0',
      'Developed several key projects in Python, SQL, and Web stacks, collaborating with dynamic student project groups.'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 92, iconName: 'Terminal' },
      { name: 'JavaScript', level: 88, iconName: 'Code' },
      { name: 'SQL', level: 85, iconName: 'Database' },
      { name: 'Kotlin', level: 82, iconName: 'Smartphone' },
      { name: 'C', level: 75, iconName: 'Cpu' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', level: 90, iconName: 'Layers' },
      { name: 'Next.js', level: 88, iconName: 'Compass' },
      { name: 'Flask', level: 80, iconName: 'Zap' },
      { name: 'Scikit-learn', level: 78, iconName: 'Workflow' },
      { name: 'Pandas', level: 85, iconName: 'BarChart' },
      { name: 'NumPy', level: 82, iconName: 'Grid' },
      { name: 'Matplotlib', level: 76, iconName: 'LineChart' }
    ]
  },
  {
    title: 'Web & Backend',
    skills: [
      { name: 'REST APIs', level: 90, iconName: 'Server' },
      { name: 'JWT Authentication', level: 88, iconName: 'ShieldAlert' },
      { name: 'Tailwind CSS', level: 93, iconName: 'Palette' },
      { name: 'HTML', level: 95, iconName: 'FileHtml' },
      { name: 'CSS', level: 90, iconName: 'Brush' },
      { name: 'Jetpack Compose', level: 80, iconName: 'Smartphone' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 87, iconName: 'Database' },
      { name: 'MySQL', level: 85, iconName: 'Database' },
      { name: 'SQLite', level: 82, iconName: 'Database' },
      { name: 'Firebase', level: 84, iconName: 'Flame' },
      { name: 'Qdrant', level: 80, iconName: 'Hash' }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 90, iconName: 'GitBranch' },
      { name: 'GitHub', level: 92, iconName: 'Github' },
      { name: 'VS Code', level: 95, iconName: 'Monitor' },
      { name: 'Android Studio', level: 82, iconName: 'Smartphone' },
      { name: 'Jupyter Notebook', level: 80, iconName: 'BookOpen' },
      { name: 'Streamlit', level: 78, iconName: 'Tv' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'twist',
    title: 'TWIST Social Media Platform',
    description: 'A premium full-stack social media platform supporting secure authentication and real-time content interactions.',
    longDescription: 'TWIST is a modern social networking platform equipped with customizable profile setups, rich media feeds, interactive posting controls, and real-time client-to-server updates. It incorporates robust cybersecurity configurations and structured schemas to prevent standard web injection hazards.',
    tech: ['Next.js', 'Clerk', 'PostgreSQL', 'Tailwind CSS', 'JWT', 'Supabase'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/faris-sait/Twist123',
    liveUrl: 'https://twist123.vercel.app/',
    stats: [
      { label: 'Response Time', value: '< 120ms' },
      { label: 'Security Class', value: 'RLS & JWT' },
      { label: 'DB Architecture', value: 'Relational' }
    ],
    highlights: [
      'Built a full-stack social media platform using Next.js 14, Clerk, and Supabase PostgreSQL with real-time sync.',
      'Engineered REST APIs, user profile management, and dynamic post feeds to enable seamless user engagement.',
      'Implemented JWT-based authorization, Row Level Security (RLS) policies, and Git/GitHub version control workflows.'
    ]
  },
  {
    id: 'interview-ai',
    title: 'Interview AI Platform',
    description: 'An AI-driven simulated interview platform conducting real-time technical and HR mock sessions with detailed candidate analysis.',
    longDescription: 'Interview AI is a modern mock session simulator utilizing intelligent generative models to deliver live round-specific questions, evaluate verbal candidates dynamically, and generate granular scores based on response precision and technical coherence.',
    tech: ['Next.js', 'React', 'Gemini AI', 'Tailwind CSS', 'Web Audio API', 'TypeScript'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/theSAKI/InterviewAI',
    liveUrl: 'https://interview-ai-three-pied.vercel.app/',
    stats: [
      { label: 'Evaluation Speed', value: 'Real-time' },
      { label: 'Platform SDK', value: 'Next.js 14 / Vercel' },
      { label: 'Audio Engine', value: 'Web Audio API' }
    ],
    highlights: [
      'Engineered an immersive real-time technical and HR simulated interview generator yielding dynamic contextual follow-ups.',
      'Integrated live feedback score indicators using structured LLM evaluations to detail precision, delivery speed, and soft-skill indexes.',
      'Leveraged advanced prompt-chaining framework strategies for precise industry-aligned assessment pipelines.'
    ]
  },
  {
    id: 'resume-ats',
    title: 'Resume ATS Score Analyzer',
    description: 'An AI-powered smart document pipeline parsing resumes against job descriptions to compute compatibility ratings and improvement vectors.',
    longDescription: 'This analytical machine learning utility imports and processes candidate CV files (PDF/docx), extracts semantic properties, computes compatibility rating alignment against target job specs, and exports constructive, structured formatting and layout suggestions.',
    tech: ['Python', 'Streamlit', 'PyPDF2', 'Gemini AI', 'LangChain', 'NLP'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/theSAKI/Resume-ATS-score-analyzer',
    liveUrl: 'https://resume-ats-score-analyzer-kavf7qlkp.vercel.app/',
    stats: [
      { label: 'Framework', value: 'Streamlit' },
      { label: 'Parser Engine', value: 'PyPDF2' },
      { label: 'Similarity System', value: 'Vector-spaced NLP' }
    ],
    highlights: [
      'Developed a document-parsing AI scanner running on Streamlit that performs OCR and parses textual structures from raw PDF files.',
      'Formulated custom keyword frequency algorithms, entity recognition filters, and thematic token match indicators.',
      'Designed actionable layout reports identifying missing industry keywords and optimal formatting corrections for applicant tracking databases.'
    ]
  },
  {
    id: 'reddit',
    title: 'Reddit User Persona Generator',
    description: 'AI-powered behavioral profiling system transforming raw Reddit posts and comments into detailed psychological personas.',
    longDescription: 'Reddit User Persona Generator retrieves and synthesizes custom user histories to output structural traits, cognitive profiles, writing style indices, and specific conversation patterns. Highly useful for recruiter screening or customer market research.',
    tech: ['Python', 'Gemini AI', 'PRAW', 'Generative API', 'NLP'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/theSAKI/REDDIT-persona-generator',
    stats: [
      { label: 'Model', value: 'Gemini 1.5 Pro' },
      { label: 'Execution', value: 'Streamlit Client' },
      { label: 'Analysis Speed', value: 'Sub-3s' }
    ],
    highlights: [
      'Built an AI-powered persona generation system using Python, PRAW, and Gemini AI to transform activity into structured insights.',
      'Orchestrated data extraction pipelines, prompt engineering constructs, and LLM-driven analytics to identify personality traits.',
      'Integrated detailed behavior profiles and cognitive map representations.'
    ]
  },
  {
    id: 'defi',
    title: 'Aave V2 DeFi Credit Scoring Model',
    description: 'An advanced pipeline for scoring decentralised finance wallets based on asset management and risk profiles.',
    longDescription: 'By analyzing millions of complex transactions across liquidity pools, this machine learning pipeline performs feature engineering, checks for outlier behavior via Isolation Forest, and assigns risk-weighted collateral/credit scores using Random Forest classifiers.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/theSAKI/AAVE-credit-scorer',
    stats: [
      { label: 'Algorithm', value: 'Isolation Forest' },
      { label: 'Dataset Size', value: '100k+ Wallets' },
      { label: 'Model F1-Score', value: '94.6%' }
    ],
    highlights: [
      'Built a DeFi credit scoring pipeline using Python, Pandas, and NumPy to transform raw Aave transaction data.',
      'Implemented feature engineering and custom risk weight definitions to index on-chain liquidity parameters.',
      'Utilized Isolation Forest and Random Forest algorithms to evaluate wallet activity patterns and assign risk scores.'
    ]
  },
  {
    id: 'video-search',
    title: 'Video Frame Search API',
    description: 'FastAPI-based vector-indexing framework for video content querying using deep visual embeddings.',
    longDescription: 'Video Frame Search enables instant cross-referencing and lookup of visually similar structures across hours of footage. It processes input feeds, samples key frames, extracts image vector indices, and records them in high-speed, scalable memory stores.',
    tech: ['FastAPI', 'OpenCV', 'Qdrant', 'FFmpeg', 'Python', 'Vector Search'],
    category: 'Backend',
    githubUrl: 'https://github.com/theSAKI/Video-Frame-search-API',
    stats: [
      { label: 'Similarity index', value: 'HNSW metric' },
      { label: 'Processing time', value: '25fps parallel' },
      { label: 'Vector Dimension', value: '512 (Embeds)' }
    ],
    highlights: [
      'Developed a FastAPI-based video frame retrieval system using OpenCV, FFmpeg, and Qdrant Vector Database.',
      'Orchestrated embedding generation, Qdrant Vector Database integration, and HNSW-based similarity searches.',
      'Enabled high-concurrency visual search with sub-second retrieval times across bulk indexed videos.'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'Web Scraping with Python',
    issuer: 'Great Learning',
    date: '2025',
    link: 'https://mygreatlearning.com'
  }
];
