export interface Achievement {
  text: string
}

export interface ExperienceEntry {
  role: string
  company: string
  companyUrl?: string
  type: 'Full-time' | 'Internship' | 'Contract' | 'Freelance'
  period: string
  current?: boolean
  location: string
  projectName?: string
  projectSubtitle?: string
  projectPeriod?: string
  description?: string
  achievements?: Achievement[]
  skills?: string[]
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'Everest Engineering',
    companyUrl: 'https://www.everest.engineering/',
    type: 'Full-time',
    period: 'oct 2024 – Present',
    current: true,
    location: 'Bengaluru, India',
    projectName: 'Liively - Phase 4',
    projectSubtitle: 'Responsive Web App',
    projectPeriod: 'June 2025 - March 2026',
    description:
      'Liively is a production-grade food delivery platform built for hotels and event services, currently operating in Australia and Dubai. It streamlines ordering, delivery, and vendor management to provide a seamless dining experience for events and hospitality.',
    achievements: [
      {
        text: 'Contributed to both frontend and backend development by implementing and enhancing core platform features, including designing and developing the end-to-end Menu Discounts flow with flexible discount configuration and seamless integration with the ordering system.',
      },
      {
        text: 'Worked on refund handling logic, ensuring accurate processing and improved reliability of refund operations.',
      },
      {
        text: 'Implemented database migrations, optimized API performance, and built scalable solutions on AWS.',
      },
      {
        text: 'Integrated AWS Password Policy requirements in the UI to display password rules to users during password reset.',
      },
      {
        text: 'Introduced a theme configuration system that enables customizable UI branding for different users, improving flexibility, usability, and overall user experience.',
      },
      {
        text: 'Developed end-to-end features such as bulk item creation and updating multiple items simultaneously to improve operational efficiency.',
      },
      {
        text: 'Contributed actively to production deployments and environment management on AWS, ensuring smooth release cycles and stable system performance.',
      },
      {
        text: 'Implemented UI/UX improvements to enhance navigation between different sections, while handling multiple edge cases related to menu and category selection.',
      },
      {
        text: 'Worked on the delivery workflow, including delivery partner assignment and order handling, ensuring a smooth and streamlined process while covering multiple edge cases.',
      },
    ],
    skills: ['NestJS', 'GraphQL', 'React.js', 'Material UI', 'AWS', 'Stripe', 'Jest'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Everest Engineering',
    companyUrl: 'https://www.everest.engineering/',
    type: 'Internship',
    period: 'Feb 2024 – Sept 2024',
    location: 'Hyderabad, India',
    skills: ['React-native', 'React.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'REST API', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'CI/CD'],
  },
]
