export interface Skill {
  name: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'C' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React.js' },
      { name: 'React Native' },
      { name: 'TypeScript' },
      { name: 'Material UI' },
      { name: 'HTML5 & CSS' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'NestJS' },
      { name: 'Node.js' },
      { name: 'Express.js' }
    ]
  },
  {
    id: 'apis',
    title: 'APIs',
    skills: [
      { name: 'GraphQL' },
      { name: 'REST APIs' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'Redis' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Ecosystem',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'Jest' },
      { name: 'Stripe' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Generative AI' },
      { name: 'Large Language models' },
      { name: 'RAG' },
      { name: 'OpenAI' },
      { name: 'Langchain ' },
      { name: 'AWS Bedrock' },
      { name: 'AWS Sagemaker' },
      { name: 'MCP' }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    skills: [
      { name: 'Vercel' },
      { name: 'Render' }
    ]
  }
]
