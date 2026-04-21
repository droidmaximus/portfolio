export const SITE_TITLE = "Avinash";
export const SITE_DESCRIPTION =
  "Portfolio of Avinash Bhojanapalli — data science, deep learning research, projects, publications, and writing.".trim();

/** Shown in the hero and footer. Change if you prefer a handle or full name. */
export const KNOWN_TECH = [
  "Python",
  "C++",
  "Go",
  "Rust",
  "SQL",
  "Bash",
  "FastAPI",
  "RESTful APIs",
  "Microservices",
  "Linux",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS SageMaker",
  "AWS Lambda",
  "AWS ECR",
  "GitHub Actions",
  "MLflow",
  "GCP Vertex AI",
  "Grafana",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "ChromaDB",
  "Apache Kafka",
  "Neo4j",
  "SQLite",
  "Hugging Face",
  "LangChain",
  "ONNX",
  "TypeScript",
  "JavaScript",
  "Astro",
  "React",
  "Fiber (Go)",
  "Flask",
  "RabbitMQ",
  "WebSockets",
  "Tailwind CSS",
  "HTML",
  "CSS",
];

export const ABOUT_ME =
  "Data Scientist and Deep Learning researcher focused on turning difficult datasets into practical systems. I work across time series, quantitative modeling, document intelligence, and ML tooling, with an emphasis on reproducible experiments and production-ready results.".trim();

/** Used for the GitHub nav link. */
export const GITHUB_USERNAME = "droidmaximus";

export const QUOTE = "Data Scientist · Deep Learning Researcher";

export const PROFILE_LINKS: Array<{ label: string; href: string }> = [
  { label: "GitHub", href: "//github.com/droidmaximus/" },
  {
    label: "Google Scholar",
    href: "//scholar.google.com/citations?user=54hzlgUAAAAJ&hl=en",
  },
  {
    label: "LinkedIn",
    href: "//www.linkedin.com/in/avinash-bhojanapalli/",
  },
  { label: "Resume", href: "/Avinash Bhojanapalli.pdf" },
];

export const FEATURED_PROJECTS: Array<{
  name: string;
  description: string;
  stack: string;
  href: string;
}> = [
  {
    name: "crosstem",
    description:
      "Python package for cross-sectional and time-series market workflows.",
    stack: "Python · PyPI",
    href: "//pypi.org/project/crosstem/",
  },
  {
    name: "ledgerline",
    description: "Vectorless RAG demo stack focused on financial PDFs.",
    stack: "TypeScript · RAG",
    href: "//github.com/droidmaximus/ledgerline",
  },
  {
    name: "topological-arbitrage",
    description:
      "Adaptive market-neutral statistical arbitrage using graph diffusion and regime detection.",
    stack: "Python · Quant Research",
    href: "//github.com/droidmaximus/topological-arbitrage",
  },
  {
    name: "zoomllm",
    description:
      "LLM-focused experimentation repository for applied model workflows.",
    stack: "Python · LLMs",
    href: "//github.com/droidmaximus/zoomllm",
  },
  {
    name: "asciimation",
    description:
      "ASCII animation experiments and rendering utilities in Python.",
    stack: "Python · Visualization",
    href: "//github.com/droidmaximus/asciimation",
  },
  {
    name: "tax_filing",
    description:
      "Automation-oriented project for tax filing and structured data processing.",
    stack: "Python · Automation",
    href: "//github.com/droidmaximus/tax_filing",
  },
];

export const CAREER_EXPERIENCE: Array<{
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location?: string;
  highlights: string[];
  skills?: string;
}> = [
  {
    role: "Machine Learning Engineer",
    company: "Bonsai Lab RIT",
    employmentType: "Research",
    period: "Aug 2025 - Apr 2026",
    highlights: [
      "Architected a modular Self-Supervised Learning (SSL) pipeline in PyTorch, enabling faster representation testing and reducing experiment iteration time by 60%.",
      "Optimized data loading with pre-fetching and caching, increasing GPU utilization and reducing training time.",
      "Implemented automated experiment tracking and artifact versioning to ensure reproducibility across distributed training and standardize team-wide metric reporting.",
    ],
    skills: "PyTorch, Self-Supervised Learning, Experiment Tracking",
  },
  {
    role: "Graduate Researcher",
    company: "Rochester Institute of Technology",
    employmentType: "Part-time",
    period: "Oct 2025 - Dec 2025",
    location: "Rochester, New York, United States · On-site",
    highlights: [
      "Conducted in-depth research on ontologies for deepfake detection under the guidance of Dr. Matthew Wright.",
      "Collaborated with a multidisciplinary team to explore innovative solutions in cybersecurity.",
      "Engaged in critical analysis and evaluation of existing deepfake detection methodologies.",
      "Developed skills in research methodologies, data analysis, and cybersecurity principles.",
    ],
    skills: "Data Analysis",
  },
  {
    role: "Co-Founder",
    company: "ZoAI",
    employmentType: "Self-employed",
    period: "Apr 2024 - Nov 2024",
    highlights: [
      "Co-founded ZoAI and was instrumental in developing an AI-driven call assistant for healthcare clients.",
      "Built and managed a web application and backend system to streamline communication across 20+ clinics.",
      "Collaborated with the team to maintain high service uptime and responsiveness to client needs.",
      "Worked directly with clients to capture requirements and implement feedback-driven service enhancements.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Incribo",
    employmentType: "Full-time",
    period: "Jan 2024 - Jul 2024",
    location: "Bangalore",
    highlights: [
      "Designed and deployed a fault-tolerant microservices architecture for multi-agent AI systems on Kubernetes and Docker with RabbitMQ for asynchronous messaging.",
      "Optimized Large Language Model (LLM) serving with gradient checkpointing and dynamic batching, reducing GPU memory usage by 15% and improving inference latency.",
      "Developed a Go-based CLI to automate container orchestration and deployment workflows, improving consistency across environments.",
      "Integrated synthetic data generation workflows using CPPN-NEAT neuroevolution, scaling generation rates by 15% for stronger training and validation.",
    ],
    skills: "Kubernetes, Docker, RabbitMQ, Go, LLM Serving",
  },
  {
    role: "Data Science/ML TA",
    company: "Scaler",
    employmentType: "Part-time",
    period: "Nov 2022 - Dec 2023",
    location: "Bangalore",
    highlights: [
      "Mentored 200+ students through weekly live sessions, small-group breakouts, and personalized office hours, maintaining a 4.8/5 feedback score.",
      "Designed real-world assessments and automated grading workflows using tools such as scikit-learn and PySpark to improve engagement and outcomes.",
    ],
    skills: "Deep Learning, Data Science, scikit-learn, PySpark",
  },
];

export const PUBLICATIONS: Array<{
  title: string;
  venue: string;
  year: number;
  href: string;
}> = [
  {
    title:
      "A CALIPSO observation based 3-dimensional tropospheric aerosol classification model over Delhi",
    venue: "IGARSS",
    year: 2023,
    href:
      "//scholar.google.com/citations?view_op=view_citation&hl=en&user=54hzlgUAAAAJ&citation_for_view=54hzlgUAAAAJ:u5HHmVD_uO8C",
  },
  {
    title:
      "Evolving RNNs for Stock Forecasting: A Low Parameter Efficient Alternative to Transformers",
    venue: "EvoApplications",
    year: 2025,
    href:
      "//scholar.google.com/citations?view_op=view_citation&hl=en&user=54hzlgUAAAAJ&citation_for_view=54hzlgUAAAAJ:u-x6o8ySG0sC",
  },
];

export const NAV_LINKS: Array<{ title: string; href?: string; download?: boolean }> = [
  { title: "Github", href: "//github.com/" + GITHUB_USERNAME },
  { title: "Scholar", href: "//scholar.google.com/citations?user=54hzlgUAAAAJ" },
  { title: "Resume", href: "/Avinash Bhojanapalli.pdf", download: true },
];
