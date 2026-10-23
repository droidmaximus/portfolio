export const SITE_TITLE = "Avinash";
export const SITE_DESCRIPTION =
  "Portfolio of Avinash Bhojanapalli, a machine learning engineer based in Sunnyvale, CA. Production ML systems, projects, and publications.".trim();

/** Default Open Graph / Twitter card image (absolute path under `public/`). */
export const SITE_OG_IMAGE = "/screenshot.png";

/** Public path to the PDF resume (spaces OK in anchors). */
export const RESUME_PDF_PATH = "/Avinash Bhojanapalli.pdf";

/** Same file, encoded for `<iframe src>` and other embeds. */
export const RESUME_PDF_SRC = encodeURI(RESUME_PDF_PATH);

/** Shown in the hero and footer. Change if you prefer a handle or full name. */
export const KNOWN_TECH = [
  "Python",
  "C++",
  "Go",
  "Rust",
  "SQL",
  "Bash",
  "RESTful APIs",
  "Microservices",
  "FastAPI",
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
  "Hugging Face",
  "LangChain",
  "ONNX",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "ChromaDB",
  "Apache Kafka",
  "Neo4j",
  "SQLite",
];

export const ABOUT_ME =
  "Machine learning engineer based in Sunnyvale, CA. I build production systems for live decisioning, retrieval, and research: a 72-hour crew-risk model and SQL chat agent at dCortex, self-supervised learning pipelines at Bonsai Lab, and MLOps for multi-agent systems. M.S. in Data Science from Rochester Institute of Technology.".trim();

/** Used for the GitHub nav link. */
export const GITHUB_USERNAME = "droidmaximus";

/** Public X/Twitter handle for the homepage timeline. */
export const TWITTER_HANDLE = "maximustweetr";

export const QUOTE = "Machine Learning Engineer";

export const LOCATION = "Sunnyvale, CA";

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
  { label: "Resume", href: RESUME_PDF_PATH },
];

export const FEATURED_PROJECTS: Array<{
  name: string;
  description: string;
  stack: string;
  href: string;
  highlights: string[];
}> = [
  {
    name: "Crosstem",
    description:
      "High-performance multilingual NLP stemming library with a Rust core and a Python API.",
    stack: "Rust · Python · PyO3 · PyPI",
    href: "//pypi.org/project/crosstem/",
    highlights: [
      "Rust-accelerated stemming core (PyO3) with a Python API, 2.7–2.9× faster than the Python fallback and 15× higher throughput than Porter on benchmark workloads.",
      "Graph-based morphological pipeline (BFS and productivity-threshold scoring) that limits overstemming and maps across part-of-speech boundaries.",
      "Shipped on PyPI with parity-tested Rust and Python backends, production packaging, and docs for install, API use, and performance checks.",
    ],
  },
  {
    name: "Ledgerline",
    description:
      "Event-driven, vectorless RAG engine for long financial filings.",
    stack: "Go · Python · Kafka · Redis",
    href: "//github.com/droidmaximus/ledgerline",
    highlights: [
      "Replaced chunk-based retrieval with hierarchical tree navigation so context holds across 200+ page financial filings.",
      "Go (Fiber) API gateway with WebSocket streaming, Redis-cached document trees, and query latency under 3 seconds.",
      "Kafka handoff between services and an LLM-as-a-judge layer on PostgreSQL to score responses and catch hallucinations.",
    ],
  },
  {
    name: "Topological Arbitrage Engine",
    description:
      "Market-neutral quant strategy that isolates idiosyncratic alpha with graph diffusion.",
    stack: "Python · Pandas · SciPy · Flask",
    href: "//github.com/droidmaximus/topological-arbitrage",
    highlights: [
      "Statistical arbitrage engine that applies graph Laplacian diffusion to CAPM residuals across a dynamic 80-stock universe.",
      "Walk-forward validation on out-of-sample 2025–2026 data: 42.5% annualized return and a 1.99 Sharpe ratio, with the signal holding through volatile regimes.",
      "Live paper-trading loop with daily execution, equal-weight sizing, and a local dashboard for portfolio telemetry.",
    ],
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
    role: "Founding Machine Learning Engineer",
    company: "dCortex",
    employmentType: "Full-time",
    period: "May 2026 – Sep 2026",
    highlights: [
      "Cut last-minute coverage scrambles ~40% by building a live 72-hour risk model that scores 8,000+ crew-duty pairs per window in under 100ms.",
      "Cut override diagnosis ~70%, from a full-slate review to seconds, by building counterfactual analysis across 400+ live decisions.",
      "Built a chat agent that writes and runs SQL so controllers can fetch crew identity, reserve status, and legality details in plain language, cutting lookup time ~80%.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Bonsai Lab, RIT",
    employmentType: "Research",
    period: "Aug 2025 – Apr 2026",
    highlights: [
      "Cut experiment iteration time by 60% with a modular PyTorch self-supervised learning pipeline for rapid representation comparisons.",
      "Optimized data loading with pre-fetching and caching, raising GPU utilization and shortening training time.",
      "Added automated experiment tracking and artifact versioning so distributed runs stay reproducible and metrics are reported the same way across the team.",
    ],
  },
  {
    role: "MLOps Engineer Intern",
    company: "Incribo",
    employmentType: "Internship",
    period: "Jan 2024 – Jul 2024",
    highlights: [
      "Designed and deployed a fault-tolerant microservices architecture for multi-agent AI systems on Kubernetes and Docker, using RabbitMQ for asynchronous messaging.",
      "Cut GPU memory use by 15% and improved inference latency by serving LLMs with gradient checkpointing and dynamic batching.",
      "Built a Go CLI to automate container orchestration and deployment so dev and production environments stay consistent.",
      "Integrated synthetic data generation with CPPN-NEAT neuroevolution, raising generation rates by 15% for training and validation.",
    ],
  },
];

export const EDUCATION: Array<{
  school: string;
  degree: string;
  detail?: string;
  period: string;
  location: string;
}> = [
  {
    school: "Rochester Institute of Technology",
    degree: "M.S. Data Science",
    detail: "GPA 3.9/4.0",
    period: "Aug 2024 – Apr 2026",
    location: "Rochester, NY",
  },
  {
    school: "IIIT Sri City",
    degree: "B.Tech Computer Science and Engineering",
    period: "Dec 2020 – May 2024",
    location: "India",
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
      "A CALIPSO Observation Based 3-Dimensional Tropospheric Aerosol Classification Model Over Delhi",
    venue: "IGARSS",
    year: 2023,
    href: "https://doi.org/10.1109/IGARSS52108.2023.10282609",
  },
  {
    title:
      "Evolving RNNs for Stock Forecasting: A Low Parameter Efficient Alternative to Transformers",
    venue: "EvoApplications",
    year: 2025,
    href: "https://doi.org/10.1007/978-3-031-90065-5_3",
  },
];

export const NAV_LINKS: Array<{
  title: string;
  href?: string;
  download?: boolean;
  /** Opens in-header preview modal instead of navigating away. */
  resumePreview?: boolean;
}> = [
  { title: "Github", href: "//github.com/" + GITHUB_USERNAME },
  {
    title: "Scholar",
    href: "//scholar.google.com/citations?user=54hzlgUAAAAJ",
  },
  { title: "Resume", href: RESUME_PDF_PATH, resumePreview: true },
];
