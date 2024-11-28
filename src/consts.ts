// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'PuneethKumar C K';
export const SITE_DESCRIPTION = 'Senior Cloud Native Developer with 13+ years of experience in software design, development, and integration';

export const CONTACT = {
  location: 'Paris, France',
  email: 'punith.564@gmail.com',
  linkedin: 'https://www.linkedin.com/in/puneethkumarck/'
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/puneethkumarck/',
  github: 'https://github.com/Puneethkumarck',
  medium: 'https://medium.com/@punithkumarck'
} as const;

export const CORE_COMPETENCIES = [
  'Building Greenfield and Monolith to Microservice',
  'Microservices Architecture',
  'Domain-Driven Design (DDD)',
  'Hexagonal Architecture',
  'Event-Driven Systems',
  'Cloud-Native Development',
  'Compliance & Risk Management',
  'Blockchain & Cryptocurrency Systems',
  'Fintech Payment Processing, Insurance and Banking and Retail System',
  'Distributed Systems Design',
  'DevOps & CI/CD',
  'System Observability & Monitoring'
] as const;

export const TECHNICAL_EXPERTISE = {
  languages: {
    title: 'Languages & Frameworks',
    skills: ['Java 21/Kotlin/Groovy', 'Spring Boot', 'Spring Cloud']
  },
  architecture: {
    title: 'Software Architecture',
    skills: ['Domain-Driven Design (DDD)', 'Hexagonal Architecture', 'Microservices']
  },
  patterns: {
    title: 'Design Patterns',
    skills: ['Outbox Pattern', 'Event Driven','Database Per Service','Event Sourcing']
  },
  databases: {
    title: 'Databases',
    skills: ['MySQL', 'Elasticsearch', 'Snowflake', 'AWS S3']
  },
  messaging: {
    title: 'Message Brokers',
    skills: ['Apache Kafka', 'AWS SQS', 'AWS SNS','RabbitMq']
  },
  workflow: {
    title: 'Workflow Engines',
    skills: ['Temporal', 'Camunda']
  },
  cloud: {
    title: 'Cloud Platforms',
    skills: ['AWS (S3, SQS, SNS, ECS, other services)', 'Azure' , 'Openshift']
  },
  devops: {
    title: 'DevOps',
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'GitHub Actions', 'Gitlab Pipeline', 'Azure Pipeline']
  },
  testing: {
    title: 'Testing',
    skills: ['JUnit 5', 'Wiremock', 'TestContainers', 'ArchUnit', 'AWS LocalStack']
  },
  observability: {
    title: 'Observability',
    skills: ['Prometheus', 'Grafana', 'ELK']
  },
  versionControl: {
    title: 'Version Control',
    skills: ['Git']
  },
  build: {
    title: 'Build & Dependency Management',
    skills: ['Gradle','Maven','Renovate']
  },
  compliance: {
    title: 'Compliance Tools',
    skills: ['Chainalysis', 'ComplyAdvantage', 'LSEG World-Check']
  },
  security: {
    title: 'Security Protocols',
    skills: ['OAuth2', 'OpenID Connect']
  },
  api: {
    title: 'API Design',
    skills: ['OpenAPI', 'REST', 'GraphQL']
  },
  crypto: {
    title: 'Cryptography',
    skills: ['PKI', 'ECDSA', 'EdDSA', 'SHA-3(Hashing)', 'HMAC', 'AWS nitro enclave']
  },
  blockchain: {
    title: 'Blockchain',
    skills: ['Solana', 'Ethereum', 'Ripple (XRP)', 'QuickNode']
  }
} as const;

export const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'BVNK',
    period: 'NOV 2022 to Present',
    location: 'Paris, France',
    highlights: [
      'Led end-to-end feature development for a premier cryptocurrency payment platform, enhancing transaction security and stability',
      'Engineered robust approval workflows for both fiat and cryptocurrency transactions, reinforcing platform trustworthiness',
      'Developed advanced search capabilities and reporting features, elevating platform analytics and user experience'
    ]
  },
  {
    role: 'Senior Cloud Native Developer (Chapter Lead)',
    company: 'ING Bank NV (DARE)',
    period: 'SEP 2018 to SEP 2022',
    location: 'Paris, France',
    highlights: [
      'Led the development of an innovative Greenfield Bancassurance Platform with a focus on Microservice Architecture and Cloud Integration',
      'Managed the full-cycle design, development, and deployment of a scalable Bancassurance platform across multiple countries and products',
      'Conceptualized and executed core microservices for quoting, claims processing, document management, and notifications, enhancing platform functionality'
    ]
  },
  {
    role: 'Senior Backend Developer',
    company: 'Bank of America',
    period: 'JAN 2015 to JAN 2017',
    location: 'Seattle, USA',
    highlights: [
      'Expertly designed and developed Omnichannel Integration, enhancing cross-channel connectivity',
      'Implemented OAuth2 Protocol, fortifying system security and user authentication processes',
      'Successfully integrated the application with diverse middleware solutions, optimizing system interoperability',
      'Architected and executed Omnichannel Authentication and Authorization services, elevating user access control',
      'Led the migration of mainframe authentication data to Oracle Java Application, modernizing the online banking customer authentication system'
    ]
  },
   {
    role: 'Associate Engineer',
    company: 'Llyods Bank & BestBuy',
    period: 'MAR 2011 to DEC 2014',
    location: 'Bangalore',
    highlights: [
      'Spearheaded meticulous management of order specifics and promotional discounts, achieving high levels of accuracy and customer satisfaction',
      'Successfully executed full-cycle feature deployment for account closure application, enhancing the efficiency of the customer offboarding experience',
      'Diligently administered the Account Sales Application to ensure seamless sales operations'
    ]
  }
] as const;
