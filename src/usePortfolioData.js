
export const portfolioData = {
  hero: {
    name: 'Sakshi Modi',
    role: 'Software Engineer',
    location: 'Jersey City, NJ',
    tagline: 'Software Engineer with 4+ years in Python & Java. Built systems saving $8M+ quarterly.',
    openTo: 'Open to Backend · Full-Stack · Data Engineering roles',
    linkedin: 'https://www.linkedin.com/in/sakshimodi1/',
    github: 'https://github.com/SakshiModi',
    leetcode: 'https://leetcode.com/demystifier/',
    resumeUrl: 'https://drive.google.com/file/d/1hdhiqNWyKkKS0N2aPJP9gNjQyA9Qt778/view?usp=sharing',
  },

  stats: [
  { value: '$8M+', label: 'Quarterly savings driven' },
  { value: '4+',   label: 'Years of experience' },
  { value: '20K+', label: 'SQL queries automated' },
  { value: '67%',  label: 'Faster processing · 15 min → 5 min' },
  { value: '2070', label: 'LeetCode best rating' },
  { value: '3.77', label: 'MS GPA · Univ. at Buffalo' },
],

  skills: [
    { icon: '🐍', title: 'Languages',         tags: 'Python,Java,C,C++,SQL / PL·SQL,Prompt Engineering,VBA Script',                   highlights: 'Python,Java,SQL / PL·SQL' },
    { icon: '☁️', title: 'Cloud & Databases', tags: 'AWS Lambda,AWS S3,Amazon RDS,Amazon EventBridge,Amazon IAM,PostgreSQL,MySQL,Oracle SQL', highlights: 'AWS Lambda,AWS S3,Amazon RDS' },
    { icon: '🚀', title: 'Frameworks',        tags: 'Flask,Django,REST APIs,JBoss EAP,IBM WebSphere,Bootstrap,jQuery',                highlights: 'Flask,Django,REST APIs' },
    { icon: '🤖', title: 'AI & ML',           tags: 'LLM Integration,GPT · Claude,Neural Networks,Keras,TensorFlow,Logistic Regression,SVM,YOLO,Deep Learning', highlights: 'LLM Integration,GPT · Claude,Keras,TensorFlow' },
    { icon: '🛠', title: 'DevOps & Tools',    tags: 'Docker,Git,GitHub,BitBucket,Jenkins,Jira,PyCharm,Eclipse,Jupyter Notebook,Visual Studio', highlights: 'Docker,Git,GitHub,Jenkins' },
    { icon: '📊', title: 'Analytics & Web',   tags: 'Tableau,Microsoft Power BI,HTML5,CSS3,JavaScript,Bootstrap',                    highlights: 'Tableau,Microsoft Power BI' },
    { icon: '⚛️', title: 'Frontend',          tags: 'React,Vite,HTML5,CSS3,JavaScript,Bootstrap',                                   highlights: 'React,Vite' },
  ],

  skills: [
    { icon: '💻', title: 'Languages',         tags: 'Python,Java,C++,SQL,PL/SQL,VBA Script',                   highlights: 'Python,Java,SQL,PL/SQL' },
    { icon: '☁️', title: 'Cloud & Databases', tags: 'AWS Lambda,Amazon S3,Amazon RDS,Amazon EventBridge,AWS IAM,PostgreSQL,MySQL,Oracle SQL Developer', highlights: 'AWS Lambda,Amazon S3,Oracle SQL Developer' },
    { icon: '🚀', title: 'Backend & Middleware',        tags: 'Flask,Django,REST APIs,JBoss EAP,IBM WebSphere,Bootstrap,jQuery',                highlights: 'Flask,REST APIs' },
    { icon: '🤖', title: 'AI & ML',           tags: 'LLM Integration,GPT,Claude,Prompt Engineering,Deep Learning,Keras,TensorFlow', highlights: 'LLM Integration,GPT,Claude,Prompt Engineering' },
    { icon: '🛠', title: 'DevOps & Tools',    tags: 'Docker,Git,GitHub,BitBucket,Jenkins,Jira,Agile,PyCharm,Eclipse,Jupyter Notebook,Visual Studio', highlights: 'Docker,Git,Jenkins,Agile' },
    { icon: '📊', title: 'Analytics & Web',   tags: 'Tableau,Power BI,HTML5,CSS3,JavaScript,Bootstrap,React,Vite',                    highlights: 'Tableau,Power BI' },
  ],

  experience: [
    {
      date: '02/2023 – Present',
      company: 'Vignesh Tech Solutions (Client: Deloitte)',
      title: 'Software Developer',
      bullets: [
        'Architected a flexible <strong>rule-based engine</strong> detecting benefit calculation discrepancies — saving <strong>$8M in a single quarter</strong> with real-time rule modification capability.',
        'Optimized backend registration services in Java, cutting processing time <strong>from 15 min → 5 min (67% reduction)</strong>.',
        'Built a centralized <strong>multi-source data analysis platform</strong> leveraging GPT-based LLMs to automate discrepancy detection and reduce manual comparison time.',
        'Engineered a <strong>cross-system verification protocol</strong> via REST APIs eliminating duplicate benefits distribution.',
        'Automated SQL query generation from Excel files, <strong>saving 50+ hours per release</strong> and eliminating manual QA work.',
        'Resolved <strong>200+ production defects</strong> and delivered 25 change requests; governed weekly smoke/integration test cycles.',
      ],
      tags: 'Java,SQL,PL/SQL,REST APIs,LLMs,Git,Jenkins,Postman,Visio',
    },
    {
      date: '06/2022 – 12/2022',
      company: 'Vignesh Tech Solutions (Client: Deloitte)',
      title: 'Software Analyst Intern',
      bullets: [
        'Improved <strong>duplicate record detection accuracy by 93%</strong>, strengthening platform data integrity.',
        'Handled <strong>25+ defects and enhancements</strong> in an Agile environment through Git version control and JBoss.',
        'Supervised <strong>SQL query implementation</strong> for object-oriented backend processing, reducing execution time.',
      ],
      tags: 'Java,SQL,HTML,CSS,JavaScript,JBoss,Git,Agile',
    },
    {
      date: '10/2020 – 07/2021',
      company: 'Tata Consultancy Services',
      title: 'Systems Engineer',
      bullets: [
        'Devised a real-time process flow dashboard achieving <strong>99% precision</strong> in complex workflow tracking.',
        'Automated flow diagram creation with scripts, <strong>reclaiming 40+ hours/month</strong> of manual effort.',
        'Mentored new engineers via knowledge transfer sessions; received the <strong>On the Spot Award</strong> from the client.',
      ],
      tags: 'Python,Flask,SQL,Tableau,HTML,CSS,Bootstrap,JavaScript,VBA Script',
    },
    {
      date: '01/2020 – 05/2020',
      company: 'IBM ICE',
      title: 'Data Scientist Intern',
      bullets: [
        'Led development of <strong>object detection systems using the YOLO algorithm</strong>, fine-tuned for enhanced recognition accuracy.',
        'Built ML models (logistic regression, linear regression, neural networks) from scratch without built-in libraries.',
      ],
      tags: 'Python,TensorFlow,Machine Learning,Deep Learning',
    },
  ],

  projects: [
    {
      name:   'Rule-Based Benefit Calculation Engine',
      desc:   'Flexible, real-time rule engine detecting discrepancies in benefit calculations across enterprise datasets. Non-technical stakeholders can modify rules without code deployments.',
      impact: '💰 Saved $8M+ in a single quarter',
      tags:   'Java,PL/SQL,Oracle SQL Developer,REST APIs',
      github: '',
    },
    {
      name:   'AI-Powered Multi-Source Data Platform',
      desc:   'Centralized analysis hub integrating multiple data sources with GPT-based LLMs for rapid feasibility testing and automated discrepancy detection at enterprise scale.',
      impact: '🤖 Eliminated hours of manual comparison per cycle',
      tags:   'Java,SQL,LLMs,GPT',
      github: '',
    },
    {
      name:   'Automated SQL Query Generator',
      desc:   'Automation system generating 20,000+ validated SQL queries per software release, accelerating QA cycles and reducing human error in production deployments.',
      impact: '⚡ 20K+ queries automated · 50+ hrs saved per release',
      tags:   'Python,SQL,Excel',
      github: '',
    },
    {
      name:   'In-house Pub-Sub Distributed System',
      desc:   'Publisher-subscriber Flask system using RESTful APIs managing 3 broker nodes, 5 publishers, and 10 subscribers. Optimized with data replication and rendezvous routing.',
      impact: '📡 Efficient distributed messaging at scale',
      tags:   'Python,Flask,MySQL,Docker,REST APIs,Postman',
      github: 'https://github.com/SakshiModi/FetchAPINews_Distributed_Rendezvous_Routing_Implementation',
    },
    {
      name:   'Sign Language Interpreter',
      desc:   'Real-time translator converting hand gestures to text using ANN and Digital Image Processing. Integrated a fully gesture-driven calculator.',
      impact: '🤟 77% recognition accuracy · gesture-based calculator',
      tags:   'Python,TensorFlow,Keras,Deep Learning,Image Processing',
      github: '',
    },
    {
      name:   'Image Caption Generation — Model Analysis',
      desc:   'Benchmarked RNN and LSTM model variants on multiple image datasets using BLEU scoring. LSTM with visual attention outperformed all baselines.',
      impact: '🖼 Published benchmark — LSTM + attention best performer',
      tags:   'Python,Keras,Deep Learning,Image Processing',
      github: 'https://github.com/SakshiModi/Image-Captioning-Project',
    },
  ],

  education: [
    {
      degree: 'MS, Computer Science',
      school: 'University at Buffalo — State University of New York',
      year:   '08/2021 – 02/2023 · Buffalo, NY',
      gpa:    'GPA: 3.77 / 4.00',
      detail: 'Operating Systems · Machine Learning · Algorithms Analysis & Design · Distributed Systems · Deep Learning · Pattern Recognition · Modern Networking',
    },
    {
      degree: 'B.Tech, Computer Science & Engineering',
      school: 'Medicaps University',
      year:   '08/2016 – 06/2020 · Indore, India',
      gpa:    'CGPA: 8.65 / 10.00 (equiv. ~3.7 / 4.0)',
      detail: 'Specialization: Artificial Intelligence',
    },
  ],

  certifications: [
    { icon: '☁️', name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: 'Valid 2024 – 2027' },
  ],

  achievements: [
    { icon: '⚔️', title: 'LeetCode Knight Badge',       desc: 'Best contest rating of 2070 · Global rank within top 20K · 75+ contests participated' },
    { icon: '🏆', title: 'Google Kick Start 2022',      desc: 'Global ranking within top 500 worldwide' },
    { icon: '🏆', title: 'Google Code Jam to I/O 2022', desc: "Global ranking within top 600 (Women's division)" },
    { icon: '🌟', title: 'On the Spot Award — TCS',     desc: 'Client appreciation for high-impact, time-saving automation at Tata Consultancy Services' },
    { icon: '📐', title: 'Award in Mathematics',        desc: 'Highest marks in ICSE Class X Board Examination' },
  ],
}

export function usePortfolioData() {
  return { data: portfolioData }
}
