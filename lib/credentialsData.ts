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
        link: "/certificates/Bachelor-of-Human-Kinetics.jpg",
      },
      {
        title: "Human Kinetics (Associate Degree of Exercise Science)",
        issuer: "Capilano University",
        description: "Sept 2015 – Apr 2018",
        link: "/certificates/Diploma-Exercise-Science.jpg",
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
        link: "/certificates/BCAK.pdf",
      },
      {
        title: "Integrated Manual Therapy (IMT) Certification",
        issuer: "Brookbush Institute",
        bullets: [
          "Evidence‑based musculoskeletal assessment",
          "Joint mobilization, soft‑tissue techniques",
          "Movement analysis and manual interventions",
        ],
        validThrough: "July 2027",
        link: "/certificates/integrated-manual-therapist-certificate.pdf",
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
        link: "/certificates/human-movement-specialist-certificate.pdf",
      },
      {
        title: "Certified Personal Trainer (CPT)",
        issuer: "Brookbush Institute",
        bullets: [
          "Evidence‑based assessment and program design",
          "Individualized training plans; injury prevention",
        ],
        validThrough: "Jul 2027",
        link: "/certificates/certified-personal-trainer-certificate(brookbush).pdf",
      },
      {
        title: "CSEP Certified Personal Trainer (CSEP‑CPT)",
        issuer: "Canadian Society for Exercise Physiology",
        bullets: [
          "National certification for assessment and prescription",
          "Qualified to administer CSEP‑PATH®",
        ],
        link: "/certificates/CSEP-CPT.pdf",
      },
    ],
  },
  {
    id: "tech",
    name: "Technology, AI & Data Science",
    intro: "This section highlights unique technical skills and applied coursework.",
    items: [
      {
        title: "Applied Software Engineering Fundamentals",
        issuer: "IBM | Coursera",
        bullets: [
          "Software development lifecycle (SDLC)",
          "Python app development and deployment",
          "Git and GitHub for version control",
          "Bash and Shell scripts",
        ],
        link: "https://coursera.org/share/4eea4e88f96ba991d56c4f9f1d21bb99",
      },
      {
        title: "Modern Web Development with TypeScript",
        issuer: "Edureka | Coursera",
        description: "Completed Dec 2025",
        bullets: [
          "TypeScript fundamentals, compiler options, and advanced typing",
          "Applied OOP principles in TypeScript for scalable application design",
          "Built strongly typed React frontends with UI component libraries",
          "Developed secure Node.js + MongoDB backends with TypeScript",
        ],
        link: "https://www.coursera.org/share/06276c6e44e52be09d46eafb36f45b86",
      },
      {
        title: "Learn Tailwind CSS",
        issuer: "Scrimba | Coursera",
        description: "Completed Dec 2025",
        bullets: [
          "Applied Tailwind CSS utility classes for efficient, consistent styling",
          "Designed responsive layouts across multiple device sizes",
          "Built modular typography systems for clean, readable interfaces",
        ],
        link: "https://coursera.org/share/e6f093e1c2507c0b4cd2d137309807b8",
      },
      {
        title: "AI Developer Professional Certificate",
        issuer: "IBM | Coursera",
        bullets: [
          "Built full‑stack apps with Python, Flask, JS/HTML/CSS",
          "Applied generative AI + prompt engineering for chatbots",
          "Covered SDLC and core AI concepts",
        ],
        link: "https://coursera.org/share/da5a798ac863e1a300734eab74d7fb23",
      },
      {
        title: "Certificate in Computer Science",
        issuer: "Codecademy",
        bullets: [
          "Python, data structures, algorithms, discrete math",
          "Databases (SQL/Postgres), computer architecture",
          "Git/GitHub, software engineering fundamentals",
        ],
        link: "/certificates/Computer-Science-Certificate-Codecademy.pdf",
      },
      {
        title: "Key Technologies for Business",
        issuer: "IBM | Coursera",
        bullets: [
          "Cloud, Data & AI fundamentals",
          "Business value/ROI framing and real‑world use cases",
        ],
        link: "https://coursera.org/share/65ff64b46dddcded8c15f23f2c83e390",
      },
      {
        title: "Generative AI for Software Development",
        issuer: "IBM | Coursera",
        bullets: [
          "Identified real-world generative AI uses and describe popular generative AI models and tools for text, code, image, audio, and video",
          "Explained generative AI prompt engineering concepts, examples, and common tools and learn techniques needed to create effective, impactful prompts",
          "Learned about tools and techniques to generate code snippets, scripts, test cases, and applications using generative AI models",
          "Developed innovative software engineering solutions using AI-powered tools and LLMs  ",
        ],
        link: "https://coursera.org/share/cb66b7600648233d21d3305c1d255f80",
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
        title: "Generative AI Leader",
        issuer: "Google Cloud | Coursera",
        bullets: [
          "AI strategy and leadership fundamentals",
          "Ethics, governance, and organizational adoption",
        ],
        link: "https://coursera.org/share/0add86dad9fda59d8e9d7c351c0fb528",
      },
      {
        title: "AI Foundations for Business Specialization",
        issuer: "IBM |Coursera",
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
        link: "/certificates/Python3-Certificate-Codecademy.pdf",
      },
      {
        title: "Learn JavaScript",
        issuer: "Codecademy",
        bullets: ["Variables, functions, arrays/objects, DOM"],
        link: "/certificates/Javascript-Certificate-Codecademy.pdf",
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
        title: "CSEP-CEP Certification Preparation: Clinical Assessment",
        issuer: "CSEP",
        bullets: [
          "Principles of assessment in clinical exercise physiology",
          "Assessment protocols used in exercise physiology",
        ],
        link: "https://onlinelearning.csep.ca/certificates/ujug41rh3d",
      },
      {
        title: "Advanced Learning Module: Disability and Exercise",
        issuer: "CSEP",
        bullets: [
          "Exercise prescription for individuals with disability",
          "Communication when working with clients",
          "How to set up a safe and inclusive exercise environment",
        ],
        link: "https://onlinelearning.csep.ca/certificates/j8ukekhriq",
      },
      {
        title: "Advanced Learning Module: Exercise Prescription for Older Adults",
        issuer: "CSEP",
        bullets: [
          "Age‑associated physiology",
          "Fitness/functional assessment in older adults",
          "Evidence‑based, tailored programming",
        ],
        link: "/certificates/CSEP-Exercise-Prescription-for-Older-Adults.pdf",
      },
      {
        title: "Bone Metastases and Exercise Hub PD Course",
        issuer: "UBC",
        bullets: [
          "Medical management & exercise physiology",
          "Evidence‑based prescription for cancer care",
        ],
        link: "/certificates/bone-metastases-and-exercise-hub-professional-development-course-noah-muller.pdf",
      },
      {
        title: "CSEP‑CPT Scope of Practice Update – Working with All Ages",
        issuer: "CSEP",
        bullets: ["Updated scope; best practices across the lifespan"],
        link: "/certificates/CSEP-CPT-scope-update-working-with-all-ages.pdf",
      },
      {
        title: "Pain BC – Pain Foundations (Basic & Advanced)",
        issuer: "Pain BC",
        bullets: [
          "Current pain science; biopsychosocial model",
          "Person‑centered, trauma‑informed practices",
        ],
        link: "/certificates/pain-foundations.pdf",
      },
      {
        title: "Pain BC – Moving Through Pain",
        issuer: "Pain BC",
        bullets: [
          "Movement/relaxation techniques for chronic pain",
          "Biopsychosocial framework; self‑management",
        ],
        link: "/certificates/moving-through-pain.pdf",
      },
      {
        title: "Blood Flow Restriction (BFR) – Practitioner Certificate",
        issuer: "OMT Training",
        bullets: [
          "Mechanisms and safe application",
          "Protocols for hypertrophy, aerobic training, rehab",
        ],
        link: "/certificates/certificate-bfr-cpd-course-practitioners-certification-622cac8fcf0de644fd709b98.pdf",
      },
      {
        title: "Hypervolt Movement Enhancement Course",
        issuer: "Hyperice",
        bullets: [
          "ROM improvement; stiffness reduction",
          "Soft‑tissue health via percussion therapy",
        ],
        link: "/certificates/hypervolt-movement-enhancement-course.pdf",
      },
      {
        title: "Certificate of Excellence in Blood Pressure Testing for Clinical Practice",
        issuer: "OMT Training",
        bullets: [
          "Accurate BP measurement and device use",
          "Result interpretation for clinical accuracy",
        ],
        link: "/certificates/certificate-blood-pressure-testing-for-clinical-practice-certificate-of-excellence-602849471538b62fa55d5554.pdf",
      },
      {
        title: "Health Promotion Foundations",
        issuer: "Public Health Ontario",
        bullets: ["Program planning; community engagement", "Evidence‑informed population health"],
      },
      {
        title: "Holistic Weight Management",
        issuer: "NASM / Coursera",
        bullets: [
          "Nutrition fundamentals for sustainable weight management",
          "Behavior change strategies and practical coaching tools",
        ],
        link: "https://coursera.org/share/90b9e59e399edd74ece22a7dba546fac",
      },
      {
        title: "Nutrition Mastery for Fitness and Wellness",
        issuer: "NASM / Coursera",
        bullets: [
          "Macronutrients, micronutrients, and practical meal design",
          "Applying nutrition principles to training and recovery",
        ],
        link: "https://coursera.org/share/52db08854a352b0dc177022f32451e5d",
      },
      {
        title: "Science of Diet and Exercise",
        issuer: "NASM / Coursera",
        bullets: [
          "Metabolism, energy balance, and body composition",
          "Evidence‑based exercise programming aligned with nutrition",
        ],
        link: "https://coursera.org/share/613b4e94f5b7c18add109ab4eb66e4e1",
      },
    ],
  },
  {
    id: "marketing",
    name: "Digital Marketing & Strategy",
    intro: "Expertise in leveraging AI and traditional frameworks for digital growth.",
    items: [
      {
        title: "Digital Marketing Certified",
        issuer: "HubSpot Academy",
        bullets: [
          "Digital Marketing Fundamentals",
          "Content Marketing & SEO",
          "Ads & Social Media",
          "Consumer Behavior & Ethical Strategies",
        ],
        validThrough: "Jan 2027",
        link: "https://app-na3.hubspot.com/academy/achievements/bvc07dbz/en/1/noah-muller/digital-marketing",
      },
      {
        title: "Generative AI for Digital Marketing",
        issuer: "IBM | Coursera",
        bullets: [
          "Prompting for content (articles, posts, ad copy)",
          "Optimize ads, SEO, and email with gen‑AI",
        ],
        link: "https://coursera.org/share/4ab011c394ac217b24d6ed5bc1b391cd",
      },
      {
        title: "Generative AI for Growth Marketing",
        issuer: "IBM | Coursera",
        bullets: [
          "Applied Gen‑AI across the full marketing funnel with automation",
          "Designed a strategic AI‑powered campaign with segmentation & tracking",
        ],
        link: "https://coursera.org/share/c7dfa3a3af2ddb2158687b7ebb6edcfa",
      },
      {
        title: "Canva Essentials",
        issuer: "Canva",
        bullets: [
          "Design fundamentals and tools",
          "Visual storytelling and branding",
        ],
        link: "https://www.canva.com/design-school/certification-award/1315c37c-cf7f-4186-8263-45a88ba78d11",
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
        link: "/certificates/Emergency-First-Aid-Noah-Muller.pdf",
      },
      {
        title: "WHMIS",
        issuer: "eSafetyFirst",
        description: "Workplace hazardous materials safety; labels and SDS understanding.",
        validThrough: "Jan 2026",
        link: "/certificates/WHMIS-CERT2.pdf",
      },
      {
        title: "Skidsteer Operator Certificate",
        issuer: "—",
        description: "Safe operation and maintenance of skid steer heavy equipment.",
      },
      {
        title: "Introduction to OSHA: Safety Standards and Compliance",
        issuer: "Instructor Network | Coursera",
        bullets: [
          "Demonstrate the importance of OSHA.",
          "Analyze the Standards of OSHA.",
          "Execute the responsibilities and rights that OSHA advocates.",
          "Implement the whistleblower Protection under OSHA.",
        ],
        link: "https://coursera.org/share/e64ed811568688c2a4e57fa846a34ef6",
      },
      {
        title: "Procore Field Worker Certification",
        issuer: "Procore",
        description: "Training on the use of Procore software",
        link: "http://verify.skilljar.com/c/x2fbtodfyb2d",
      },
      {
        title: "Supervising for Safety",
        issuer: "WorksafeBC",
        bullets: [
          "Safety management systms.",
          "Musculoskeletal injury reduction.",
          "Workplace evaluations.",
          "Incident analysis.",
        ],
        link: "/certificates/worksafebc-supervising-for-safety.pdf",
      },
      {
        title: "Health, Safety, and Environmental (HSE) Engineering",
        issuer: "Khalifa University",
        bullets: [
          "Design and implement integrated HSE management systems aligned with OSHA, EPA, and ISO standards.",
          "Conduct advanced hazard identification, risk assessments, and root-cause analyses for industrial safety.",
          "Develop and apply ISO 14001–based environmental management systems and sustainability strategies.",
        ],
        link: "https://coursera.org/share/edcda7c66eb6e98170db15bc766cdec4",
      },
      {
        title: "Construction Project Management",
        issuer: "Columbia University | Coursera",
        bullets: [
          "The fundamentals of construction management from construction industry, the role of project manager, contract types, and project delivery methods.",
          "how to deliver a lean project and maintain sustainability",
          "explored technology trends and project planning",
        ],
        link: "https://www.coursera.org/account/accomplishments/verify/A3VVFFFDLH7G?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      },
      {
        title: "Occupational Health and Safety Program Fundamentals – All Modules",
        issuer: "go2HR",
        bullets: [
          "Foundational modules for developing and maintaining an effective OHS program.",
          "OHS roles and responsibilities, hazard identification, and risk control.",
        ],
        link: "https://certifications.rapidlms.com/certifications/4004239",
      },
    ],
  },
];
