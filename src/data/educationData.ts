export interface EducationEntry {
  degree: string
  field?: string
  institution: string
  location: string
  period: string
  grade?: string
  highlights?: string[]
  courses?: string[]
  link?: string
}

export const EDUCATION_DATA: EducationEntry[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT)',
    location: 'Basar, Telangana',
    period: '2020 – 2024',
    grade: 'CGPA: 8.9 / 10',
    highlights: [
      "My Computer Science and Engineering degree provided a strong foundation in software development and algorithms. Through academic and personal projects, I enhanced my problem-solving skills, built full-stack applications, and explored the fundamentals of machine learning."
    ],
    courses: [
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Database Management System',
      'Computer Networks',
      'Operating System',
      'Data Analytics',
    ],
    link: 'https://www.rgukt.ac.in/',
  },
  {
    degree: 'Pre-University Course (PUC)',
    field: 'Mathematics, Physics & Computer Science',
    institution: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT)',
    location: 'Basar, Telangana',
    period: '2018 – 2020',
    grade: 'CGPA: 9.8 / 10',
    link: 'https://www.rgukt.ac.in/',
  },
  {
    degree: 'Secondary School of Education',
    institution: 'Telangana State Model School',
    location: 'Rajanna Sirclla, Telangana',
    period: '2013 – 2018',
    grade: 'GPA: 9.8 / 10',
  },
]
