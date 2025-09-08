export type Credential = {
  title: string;
  issuer?: string;
  description?: string;
  bullets?: string[]; // prefer over long description for scannability
  link?: string | null;
  validThrough?: string | null; // e.g., "Nov 2026"
};

export type CredentialCategory = {
  id: string;
  name: string;
  intro?: string;
  items: Credential[];
};

// Order matters for page display. Education first per request.
export const credentialCategories: CredentialCategory[] = [
  {
    id: "education",
    name: "Education",
    intro: "Academic degrees and formal education.",
    items: [
      {
        title: "Kinesiology (Bachelor's)",
        issuer: "University of British Columbia",
        description: "Sept 2019 – Apr 2021 • GPA 3.95",
      },
      {
        title: "Human Kinetics (Associate Degree of Exercise Science)",
        issuer: "Capilano University",
        description: "Sept 2015 – Apr 2018",
      },
      {
        title: "Web Design and Development (Certificate)",
        issuer: "Vancouver Arts College",
        description: "Sept 2010 – Apr 2011",
      },
    ],
  },
  {
    id: "clinical",
    name: "Clinical & Kinesiology Credentials",
    intro: "Establishing core professional authority in practice.",
    items: [
      {
        title: "Registered Kinesiologist",
        issuer: "British Columbia Association of Kinesiologists (BCAK)",
        description:
          "Professional registration recognizing competency to practice in BC; adheres to scope of practice, code of ethics, and CE requirements.",
      },
      {
        title: "Integrated Manual Therapy (IMT) Certification",
        issuer: "Brookbush Institute",
        bullets: [
          "Evidence‑based musculoskeletal assessment",
          "Joint mobilization, soft‑tissue techniques",
          "Movement analysis and manual interventions",
        ],
        link: "https://brookbushinstitute.com/",
      },
      {
        title: "Human Movement Specialist (HMS)",
        issuer: "Brookbush Institute",
        bullets: [
          "Advanced movement assessment",
          "Postural/movement impairment analysis",
          "Corrective exercise design",
        ],
        validThrough: "Jun 2027",
      },
      {
        title: "Certified Personal Trainer (CPT)",
        issuer: "Brookbush Institute",
        bullets: [
          "Evidence‑based assessment and program design",
          "Individualized training plans; injury prevention",
        ],
        validThrough: "Jul 2027",
      },
      {
        title: "CSEP Certified Personal Trainer (CSEP‑CPT)",
        issuer: "Canadian Society for Exercise Physiology",
        bullets: [
          "National certification for assessment and prescription",
          "Qualified to administer CSEP‑PATH®",
        ],
      },
    ],
  },
  {
    id: "tech",
    name: "Technology, AI & Data Science",
    intro: "This section highlights unique technical skills and applied coursework.",
    items: [
      {
        title: "IBM AI Developer Professional Certificate",
        issuer: "IBM / Coursera",
        bullets: [
          "Built full‑stack apps with Python, Flask, JS/HTML/CSS",
          "Applied generative AI + prompt engineering for chatbots",
          "Covered SDLC and core AI concepts",
        ],
        link: "https://www.coursera.org/professional-certificates/ibm-ai-developer",
      },
      {
        title: "Certificate in Computer Science",
        issuer: "Codecademy",
        bullets: [
          "Python, data structures, algorithms, discrete math",
          "Databases (SQL/Postgres), computer architecture",
          "Git/GitHub, software engineering fundamentals",
        ],
        link: "https://www.codecademy.com/learn/paths/computer-science",
      },
      {
        title: "IBM Key Technologies for Business",
        issuer: "Coursera",
        bullets: [
          "Cloud, Data & AI fundamentals",
          "Business value/ROI framing and real‑world use cases",
        ],
      },
      {
        title: "IBM Generative AI for Digital Marketing",
        issuer: "Coursera",
        bullets: [
          "Prompting for content (articles, posts, ad copy)",
          "Optimize ads, SEO, and email with gen‑AI",
        ],
      },
      {
        title: "Google AI Essentials",
        issuer: "Coursera",
        bullets: [
          "Prompt engineering and responsible AI",
          "Use gen‑AI to accelerate daily workflows",
        ],
        link: "https://coursera.org/share/42c9964ba2ed7f0cf3b59cf05bbca76b",
      },
      {
        title: "Google Prompting Essentials Specialization",
        issuer: "Coursera",
        bullets: ["5‑step prompting framework", "Role‑play agents for targeted feedback"],
        link: "https://coursera.org/share/44519615a08bc16b07578d3823aff3a5",
      },
      {
        title: "IBM AI Foundations for Business Specialization",
        issuer: "Coursera",
        bullets: [
          "Applied AI/Data concepts for business",
          "AI Ladder: data → deploy/operationalize",
        ],
        link: "https://coursera.org/share/bc2e25b39797ea16aa06750fec9f1435",
      },
      {
        title: "Learn Python 3",
        issuer: "Codecademy",
        bullets: ["Python syntax, types, control flow, functions"],
      },
      {
        title: "Learn JavaScript",
        issuer: "Codecademy",
        bullets: ["Variables, functions, arrays/objects, DOM"],
      },
    ],
  },
  {
    id: "advanced",
    name: "Continuing Education & Specializations",
    intro:
      "A selection of focused courses and modules undertaken to deepen my expertise in specific areas of practice.",
    items: [
      {
        title: "Advanced Learning Module: Exercise Prescription for Older Adults",
        issuer: "CSEP",
        bullets: [
          "Age‑associated physiology",
          "Fitness/functional assessment in older adults",
          "Evidence‑based, tailored programming",
        ],
        link: "https://csep.ca/",
      },
      {
        title: "Bone Metastases and Exercise Hub PD Course",
        issuer: "UBC",
        bullets: [
          "Medical management & exercise physiology",
          "Evidence‑based prescription for cancer care",
        ],
      },
      {
        title: "CSEP‑CPT Scope of Practice Update – Working with All Ages",
        issuer: "CSEP",
        bullets: ["Updated scope; best practices across the lifespan"],
      },
      {
        title: "Pain BC – Pain Foundations (Basic & Advanced)",
        issuer: "Pain BC",
        bullets: [
          "Current pain science; biopsychosocial model",
          "Person‑centered, trauma‑informed practices",
        ],
      },
      {
        title: "Pain BC – Moving Through Pain",
        issuer: "Pain BC",
        bullets: [
          "Movement/relaxation techniques for chronic pain",
          "Biopsychosocial framework; self‑management",
        ],
      },
      {
        title: "Blood Flow Restriction (BFR) – Practitioner Certificate",
        issuer: "—",
        bullets: [
          "Mechanisms and safe application",
          "Protocols for hypertrophy, aerobic training, rehab",
        ],
      },
      {
        title: "Hypervolt Movement Enhancement Course",
        issuer: "Hyperice",
        bullets: [
          "ROM improvement; stiffness reduction",
          "Soft‑tissue health via percussion therapy",
        ],
      },
      {
        title: "Certificate of Excellence in Blood Pressure Testing for Clinical Practice",
        issuer: "—",
        bullets: [
          "Accurate BP measurement and device use",
          "Result interpretation for clinical accuracy",
        ],
      },
      {
        title: "Health Promotion Foundations",
        issuer: "Public Health Ontario",
        bullets: ["Program planning; community engagement", "Evidence‑informed population health"],
      },
    ],
  },
  {
    id: "foundational",
    name: "Foundational & Safety Certifications",
    intro: "Essential qualifications and safety training.",
    items: [
      {
        title: "First Aid & CPR Level C",
        issuer: "St. John Ambulance",
        description: "Comprehensive first aid and CPR.",
        validThrough: "Nov 2026",
        link: "https://www.sja.ca/",
      },
      {
        title: "WHMIS",
        issuer: "—",
        description: "Workplace hazardous materials safety; labels and SDS understanding.",
        validThrough: "Jan 2026",
      },
      {
        title: "Skidsteer Operator Certificate",
        issuer: "—",
        description: "Safe operation and maintenance of skid steer heavy equipment.",
      },
    ],
  },
];
