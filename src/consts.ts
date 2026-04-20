export const SITE_TITLE = "Avinash";
export const SITE_DESCRIPTION =
  "Personal portfolio — projects, writing, and stack. Built with Astro and Tailwind.".trim();

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
